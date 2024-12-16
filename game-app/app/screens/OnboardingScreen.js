import {Roboto_700Bold_Italic, useFonts} from "@expo-google-fonts/roboto";
import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import GamingImg from '@/assets/images/gaming.svg';
import {GestureHandlerRootView} from "react-native-gesture-handler";

const OnboardingScreen = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Roboto_700Bold_Italic
    });

    if (!fontsLoaded)
    {
        return null;
    }

    return (
        <GestureHandlerRootView>
            <SafeAreaView style={mainStyles.safeView}>
                <View>
                    <Text style={mainStyles.gameOnText}>GAMEON</Text>
                </View>
                <View style={mainStyles.gamingImageView}>
                    <GamingImg width={300} height={300} style={mainStyles.gamingImage}/>
                </View>
                <TouchableOpacity
                    style={mainStyles.touchable}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={mainStyles.letsBeginText}>Let's Begin</Text>
                    <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
                </TouchableOpacity>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

const mainStyles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    gameOnText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#20315f',
        marginTop: 20
    },
    touchable: {
        backgroundColor: '#AD40AF',
        padding: 20,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    letsBeginText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Roboto_700Bold_Italic',
    },
    gamingImage: {
        transform: [
            {
                rotate: '-15deg'
            }
        ]
    },
    gamingImageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default OnboardingScreen;