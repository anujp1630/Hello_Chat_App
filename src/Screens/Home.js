import { StyleSheet, Text, View ,TouchableOpacity,Image, Settings} from 'react-native'
import React, { useState } from 'react'
import { colors } from '../Components/Config/Constants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Components/Screen'
import Users from './Home/Users'
import MySetting from './Home/MySetting'


const Home = () => {
    const [SelectedTab,SetSelectedTab]=useState(0);
  return (
    <View style={styles.container}>
        {SelectedTab == 0 ? <Users/> : <MySetting/>}
        <View style={styles.bottomtab}>

           <TouchableOpacity
           onPress={()=>{
            SetSelectedTab(0);
           }}
           >
           <Image 
           style={{height:SCREEN_HEIGHT*0.05,width:SCREEN_WIDTH*0.1,tintColor:SelectedTab==0?"white":"gray"}}
           source={require("../Assets/Images/home.png")}/>
           </TouchableOpacity>

           <TouchableOpacity
             onPress={()=>{
                SetSelectedTab(1);
               }}>
           <Image 
           style={{height:SCREEN_HEIGHT*0.05,width:SCREEN_WIDTH*0.1,tintColor:SelectedTab==1?"white":"gray"}}
           source={require("../Assets/Images/SETTINGBOOK.png")}/>
           </TouchableOpacity>

        </View>
  
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:colors.background_theme1,
    },
    bottomtab:{
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT*0.08,
        position:'absolute',
        backgroundColor:colors.astrobook1,
        bottom:0,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:SCREEN_WIDTH*0.15,borderTopLeftRadius:20,borderTopRightRadius:20
    }
})