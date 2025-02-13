import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../Components/Config/Constants'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Components/Screen'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import MyStatusBar from '../../Components/MyStatusBar';


let id = '';

const Users = () => {
  const navigation=useNavigation();

  const [Users,SetUsers]=useState([]);

  useEffect(() => {
    getusers();
  }, [])


const getusers = async () => {
  id = await AsyncStorage.getItem("userId")
  let TempData = [];
  const Email = await AsyncStorage.getItem("Email");


  console.log("Fetched Email from AsyncStorage: ", Email);


  const trimmedEmail = Email?.trim();

  if (trimmedEmail) {
    firestore()
      .collection("users")
      .get()
      .then((res) => {
        res.docs.forEach((item) => {
          const userData = item.data();
          const userEmail = userData.Email?.trim(); 

          
          if (userEmail !== trimmedEmail) {
            TempData.push(userData);
          }
        });

      
        console.log("Filtered Users: ", TempData);

        SetUsers(TempData); 
      })
      .catch((error) => {
        console.error("Error fetching users: ", error);
      });
  }
};

  const renderItem=({item})=>{
    return(
      <View style={{paddingHorizontal:SCREEN_WIDTH*0.02}}>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate("Chat",{data:item,id:id});
          }}
          style={{backgroundColor:colors.astrobook1,flexDirection:"row",alignItems:'center',gap:SCREEN_WIDTH*0.1,marginVertical:SCREEN_HEIGHT*0.02,borderRadius:10,paddingVertical:SCREEN_HEIGHT*0.015,paddingHorizontal:SCREEN_WIDTH*0.025,elevation:10}}>
                 <View  style={{height:SCREEN_HEIGHT*0.08,width:SCREEN_WIDTH*0.2,justifyContent:"center"}}>
                  <Image 
                  style={{height:SCREEN_HEIGHT*0.08,width:SCREEN_WIDTH*0.16,resizeMode:'contain'}}
                  source={require("../../Assets/Images/AstroBookUser.png")}/>
                  </View>
                  <Text style={{fontWeight:"500",fontSize:SCREEN_HEIGHT*0.023,color:colors.background_theme1}}>{item.Name}</Text>
          </TouchableOpacity>
          </View>
    )
  }
  return (
    <View style={styles.container}>
       <MyStatusBar backgroundColor={colors.astrobook1} barStyle="light-content" />
      <View style={styles.header}>

        <Text style={styles.headertext}>Welcome to Hello Chat</Text>

      </View>

      <View>
        <FlatList data={Users} 
        renderItem={renderItem}
        />
      </View>

    </View>
  )
}

export default Users

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_theme1
  },
  header: {
    height: SCREEN_HEIGHT * 0.08,
    backgroundColor: colors.astrobook1,
    elevation: 1,
    alignItems: "center",
    justifyContent: 'center',
    elevation:1
  },
  headertext: {
    fontSize: SCREEN_HEIGHT * 0.03,
    color: colors.background_theme1,
    fontWeight: "500"
  }

})