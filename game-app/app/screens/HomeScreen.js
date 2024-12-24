import {Text, StyleSheet, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import userImage from '@/assets/images/user-profile.jpg'

import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto'

import Carousel from 'react-native-reanimated-carousel';
import { Feather } from '@expo/vector-icons';
import BannerSlider from "../../components/BannerSlider";

import {windowWidth} from "../utils/Dimensions";
import CustomSwitch from "../../components/CustomSwitch";
import {useState} from "react";
import ListItem from "../../components/ListItem";

import { instance } from "../context/AuthContext";
import {sliderData} from "../../model/data";

export default function HomeScreen({navigation}) {
    const [gamesTab, setGamesTab] = useState(1);
    const [freeGames, setFreeGames] = useState([]);
    const [paidGames, setPaidGames] = useState([]);
    const [doOnce, setDoOnce] = useState(true);
    if (doOnce) {
        instance.get('/game/getGames?isFree=true')
            .then(response => {
                const result = response.data;
                console.log(result);
                const { games } = result;
                setPaidGames(games);
            });

        instance.get('/game/getGames?isFree=false')
            .then(response => {
                const result = response.data;
                const { games } = result;
                setFreeGames(games);
            });

        setDoOnce(false);
    }

    const [loadedFont] = useFonts({Roboto_500Medium});
    if (!loadedFont)
    {
        return null;
    }

    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item} />;
    };

    const onSelectSwitch = value => {
        setGamesTab(value);
    };

    return (
        <SafeAreaView style={styles.safeAreaViewStyle}>
            <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.textViewStyle}>
                    <Text style={styles.nameTextStyle}>Hello Shawn Warnock</Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={userImage}
                            style={styles.imageStyles}
                            imageStyle={{borderRadius: 25}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBoxViewStyle}>
                    <Feather
                        name="search"
                        size={20}
                        color="#C6C6C6"
                        style={{marginRight: 5}}
                    />
                    <TextInput placeholder="Search" />
                </View>
                <View style={styles.seeAllViewStyle}>
                    <Text style={styles.upcomingGamesTextStyle}>
                        Upcoming Games
                    </Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.seeAllStyle}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Carousel
                        ref={c => {
                            this._carousel = c;
                        }}
                        data={sliderData}
                        renderItem={renderBanner}
                        width={windowWidth - 40}
                        vertical={false}
                        height={200}
                    />
                </View>
                <View style={styles.customSwitchViewStyle}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="Free to Play"
                        option2="Paid Games"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {gamesTab === 1 &&
                    freeGames.map(item => (
                        <ListItem key={item._id} data={item} onPress={() => navigation.navigate('GameDetails', {title: item.title, id: item.id})}/>
                    ))
                }
                {gamesTab === 2 &&
                    paidGames.map(item => (
                        <ListItem key={item._id} data={item} onPress={() => navigation.navigate('GameDetails', {title: item.title, id: item.id})}/>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 35,
        height: 35
    },
    safeAreaViewStyle: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    scrollViewStyle: {
        padding: 20,
        marginBottom: 20
    },
    nameTextStyle: {
        fontSize: 18,
        fontFamily: 'Roboto_500Medium'

    },
    searchBoxViewStyle: {
        flexDirection: 'row',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    seeAllStyle: {
        color: '#0aada8',
    },
    upcomingGamesStyle: {
        fontSize: 16,
        fontFamily: 'Roboto_500Medium'
    },
    seeAllViewStyle: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    upcomingGamesTextStyle: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium'
    },
    customSwitchViewStyle: {
        marginVertical: 20
    }
})
