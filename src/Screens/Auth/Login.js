import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../Components/Config/Constants';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Components/Screen';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../Components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyStatusBar from '../../Components/MyStatusBar';
import * as Animatable from 'react-native-animatable';





const Login = () => {
    const navigation = useNavigation();

    const [Email, SetEmail] = useState('');

    const [Password, SetPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [visible, setVisible] = useState(false);

    const Login = () => {
        setVisible(true)
        if (isLoggingIn) return;

        setIsLoggingIn(true);
        console.log("Logging in...");


        if (Email === '' || Password === '') {
            console.log("Please enter email and password");
            setIsLoggingIn(false);
            return;
        }

        firestore()
            .collection('users')
            .where('Email', '==', Email)
            .get()
            .then(res => {
                setVisible(false)
                if (res.empty) {
                    console.log("No user found with this email");
                    setIsLoggingIn(false);
                    return;
                }

                const userData = res.docs[0].data();


                if (userData.Password !== Password) {
                    console.log("Incorrect password");
                    setIsLoggingIn(false);
                    return;
                }

                console.log("User found:", JSON.stringify(userData));
                GoToNext(userData.Name, userData.Email, userData.userId)


                // navigation.navigate('Home');  

                setIsLoggingIn(false);
            })
            .catch(error => {
                setVisible(false)
                console.log("Error logging in: ", error);
                setIsLoggingIn(false);
            });
    };

    const GoToNext = async (Email, Name, userId) => {

        await AsyncStorage.setItem("Name", Name);
        await AsyncStorage.setItem("Email", Email);
        await AsyncStorage.setItem("userId", userId);
        navigation.navigate("Home")
    };



    return (
        <View style={styles.container}>

            <MyStatusBar backgroundColor={colors.astrobook1} barStyle="light-content" />


            <View style={{ alignItems: "center" }}>

                <Animatable.Image animation={'slideInUp'}
                    style={styles.Imagelogo}
                    source={require("../../Assets/Images/MAINLOGO.jpg")} />
            </View>

            <View style={styles.headingcontainer}>
                <Animatable.Text animation={'slideInUp'} style={styles.heading}>Welcome To Chat App</Animatable.Text>
            </View>


            <Animatable.View  animation={'slideInUp'} style={styles.myconatiner}>


                <View style={styles.InputConatiner}>
                    <TextInput placeholder='Enter Your Email' style={{ color: colors.black_color9 }}
                        value={Email}
                        onChangeText={text => SetEmail(text)}
                    />
                </View>

                <View style={styles.InputConatiner}>
                    <TextInput placeholder='Enter Password' style={styles.Input}
                        value={Password}
                        secureTextEntry={true}
                        onChangeText={text => SetPassword(text)} />
                </View>


            </Animatable.View>

            <Animatable.View 
            animation={'slideInUp'}
            style={styles.btnCONTAINER}>
                <TouchableOpacity
                    onPress={Login}
                    style={styles.btn}
                    disabled={isLoggingIn}
                >
                    <Text style={styles.btntext}>{isLoggingIn ? "Logging in..." : "Login"}</Text>
                </TouchableOpacity>
            </Animatable.View>


            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Signup");
                }}
                style={{ alignItems: "center", paddingTop: SCREEN_HEIGHT * 0.025 }}>
                <Animatable.Text  animation={'slideInUp'} style={{ color: colors.astrobook1, fontWeight: "500", fontSize: SCREEN_HEIGHT * 0.02, textDecorationLine: "underline" }}>Or Sign Up</Animatable.Text>
            </TouchableOpacity>

            <Loader visible={visible} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background_theme1,
        paddingTop: SCREEN_HEIGHT * 0.04
    },
    heading: {
        color: colors.black_color9,
        fontWeight: "500",
        fontSize: SCREEN_HEIGHT * 0.03
    },
    headingcontainer: {
        alignItems: "center",

    },
    InputConatiner: {
        borderWidth: 1,
        borderRadius: 10, paddingHorizontal: SCREEN_WIDTH * 0.025,
    },
    myconatiner: {
        paddingHorizontal: SCREEN_WIDTH * 0.025, gap: SCREEN_HEIGHT * 0.03, paddingTop: SCREEN_HEIGHT * 0.06
    },
    btntext: {
        fontSize: SCREEN_HEIGHT * 0.02,
        fontWeight: "500", color: colors.background_theme1,
        fontSize: SCREEN_HEIGHT * 0.02
    },
    btn: {

        backgroundColor: colors.astrobook1,
        alignItems: "center",
        justifyContent: "center", paddingVertical: SCREEN_HEIGHT * 0.025,
        borderRadius: 100

    },
    btnCONTAINER: {

        paddingHorizontal: SCREEN_WIDTH * 0.1, paddingTop: SCREEN_HEIGHT * 0.1

    },
    Imagelogo: {
        height: SCREEN_HEIGHT * 0.3,
        width: SCREEN_WIDTH * 0.6
    },
})