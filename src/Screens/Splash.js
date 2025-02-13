import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../Components/Config/Constants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Components/Screen'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MyStatusBar from '../Components/MyStatusBar'



const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {

            CheckUserLogin();

        }, 2000)
    }, [])

    const CheckUserLogin=async()=>{
    const id = await AsyncStorage.getItem("userId");
    if(id!==null){
        navigation.navigate("Home");
    }else{
        navigation.navigate("Login")
    }

    }

    return (
        <View style={styles.container}>
             <MyStatusBar backgroundColor={colors.astrobook1} barStyle="light-content" />



            <Image
                style={styles.Imagelogo}
                source={require("../Assets/Images/MAINLOGO.jpg")} />
            

        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background_theme1

    },
    Imagelogo: {
        height: SCREEN_HEIGHT * 0.3,
        width: SCREEN_WIDTH * 0.6
    },
    SplashText: {
        color: "white",
        fontSize: 19,
        fontWeight: "500"
    },
})