import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,Image ,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Components/Config/Constants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Components/Screen'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
    const navigation = useNavigation();
    const [Name, SetName] = useState('');
    const [Email, SetEmail] = useState('');
    const [Mobile, SetMobile] = useState('');
    const [Password, SetPassword] = useState('');
    const [ConfirmPasword, SetConfirmPasword] = useState('');

    const Registeruser = () => {
        const userId = uuidv4()
        firestore().collection("users").doc(userId).set({

            Name: Name,
            Email: Email,
            Mobile: Mobile,
            Password: Password,
            ConfirmPasword: ConfirmPasword,
            userId:userId

        })
            .then(res => {
                console.log("USER IS CREATED");
            })
            .catch(error => {
                console.log(error)
            })

    }
    const Validation=()=>{
        let isValid=true;
        if (Name==''){
            isValid=false;
        }
        if (Name==''){
            isValid=false;
        }
        if (Email==''){
            isValid=false;
        }
        if (Mobile==''){
            isValid=false;
        }
        if (Password==''){
            isValid=false;
        }
        if (ConfirmPasword!==Password){
            isValid=false;
        };
        return isValid;
    }

    return (
        < ScrollView style={styles.container}>
             <View style={{alignItems:"center",justifyContent:"center"}}>
                    <Image 
                    style={{height:SCREEN_HEIGHT*0.2,width:SCREEN_WIDTH*0.4}}
                    source={require("../Assets/Images/MAINLOGO.jpg")}/>
            </View>

            <View style={styles.headingcontainer}>
                <Text style={styles.heading}>Signup Form</Text>
            </View>

    
            <View style={styles.myconatiner}>


                <View style={styles.InputConatiner}>
                    <TextInput placeholder='Enter Your Name' style={styles.Input}
                        value={Name}
                        onChangeText={text => SetName(text)}
                    />
                </View>
                <View style={styles.InputConatiner}>
                    <TextInput placeholder='Enter Your Email' style={styles.Input}
                        value={Email}

                        onChangeText={text => SetEmail(text)}
                    />
                </View>
                <View style={styles.InputConatiner}>
                    <TextInput
                        keyboardType='number-pad'
                        placeholder='Enter Your Mobile' style={styles.Input}
                        value={Mobile}

                        onChangeText={text => SetMobile(text)} />
                </View>
                <View style={styles.InputConatiner}>
                    <TextInput placeholder='Enter Password' style={styles.Input}
                        value={Password}

                        onChangeText={text => SetPassword(text)} />
                </View>
                <View style={styles.InputConatiner}>
                    <TextInput placeholder='Enter Confirm Password' style={styles.Input}
                        value={ConfirmPasword}

                        onChangeText={text => SetConfirmPasword(text)}
                    />
                </View>

            </View>

            <View style={styles.btnCONTAINER}>
                <TouchableOpacity
                    onPress={() => {
                        if(Validation()){

                            Registeruser();
                            navigation.navigate("Login")
                        }
                        else
                                {
                                    Alert.alert("Enter Full Detailes")
                                    
                                }
                       
                    }}
                    style={styles.btn}>
                    <Text style={styles.btntext}>Signup</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Login");
                }}
                style={{ alignItems: "center", paddingTop: SCREEN_HEIGHT * 0.025 }}>
                <Text style={{ color: colors.astrobook1, fontWeight: "500", fontSize: SCREEN_HEIGHT * 0.02, textDecorationLine: "underline" }}>Or Login</Text>
            </TouchableOpacity>


        </ScrollView>
    )

}

export default Signup

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background_theme1,
    },
    heading: {
        color: colors.black_color9,
        fontWeight: "700",
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
        paddingHorizontal: SCREEN_WIDTH * 0.025, gap: SCREEN_HEIGHT * 0.02, paddingTop: SCREEN_HEIGHT * 0.03
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


})