import React, {createContext, useEffect, useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://powerful-badlands-80348-953c56814af8.herokuapp.com/"
});

export const AuthContext = createContext({login: () => {}, logout: () => {}});

const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [email, setEmail] = useState('');

    const login = (credentials) => {
        setIsLoading(true);
        handleLogin(credentials);
        setIsLoading(false);
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    const register = (credentials) => {
        setIsLoading(true);
        handleRegister(credentials);
        setIsLoading(false);
    }

    const handleRegister = (credentials) => {
        instance.post('user/signup', credentials)
            .then((response) => {
                const result = response.data;
                const {message, status, data} = result;
                if (status !== "SUCCESS") {
                    handleMessage(message, status);
                } else {
                    handleMessage('', '');
                    handleLogin({email: credentials.email, password: credentials.password});
                }
            })
            .catch(error => {
                console.log(error.JSON());
            })
    }

    const handleLogin = (credentials) => {

        instance.post('user/signin', credentials)
            .then((response) => {
                const result = response.data;
                const {message, status, data} = result;

                if (status !== "SUCCESS") {
                    handleMessage(message, status);
                } else {
                    handleMessage('', '');
                    AsyncStorage.setItem('userToken', data[0]._id);
                    AsyncStorage.setItem('email', data[0].email);
                    setUserToken(data[0]._id);
                    setEmail(data[0].email);
                }
            })
            .catch(error => {
            console.log(error.JSON());
        })
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        setEmail('');
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('email');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let email = await AsyncStorage.getItem('email');
            setEmail(email);
            setUserToken(userToken);
            setIsLoading(false);
        } catch(e) {
            console.log(`isLoggedIn error ${e}`);
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, message, register, email}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;