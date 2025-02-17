import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../Components/Config/Constants';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Components/Screen';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import MyStatusBar from '../../Components/MyStatusBar';

let id = '';

const Users = () => {
  const navigation = useNavigation();
  const [Users, SetUsers] = useState([]);


  useEffect(() => {
    getusers();
  }, []);

  const getusers = async () => {
    id = await AsyncStorage.getItem("userId");
    let TempData = [];
    const Email = await AsyncStorage.getItem("Email");
    const trimmedEmail = Email?.trim();

    if (trimmedEmail) {
      console.log("Fetching data for email: ", trimmedEmail);

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

          console.log("Fetched Users: ", TempData); 
          SetUsers(TempData); 
         
        })
        .catch((error) => {
          console.error("Error fetching users: ", error);
       
        });
    } else {
      console.error("Email not found in AsyncStorage");

    }
  };


  useEffect(() => {
    console.log("Users state after update: ", Users);
  }, [Users]);

  const renderItem = ({ item }) => {
    console.log("Rendering item: ", item); 
    return (
      <View style={{ padding: 10 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Chat", { data: item, id: id });
          }}
          style={{
            backgroundColor: colors.astrobook1,
            flexDirection: "row",
            padding: 10,
            marginVertical: 5,
            borderRadius: 10,
            elevation: 5,
          }}>
          <View style={{ height: SCREEN_HEIGHT * 0.08, width: SCREEN_WIDTH * 0.2, justifyContent: "center" }}>
            <Image
              style={{ height: SCREEN_HEIGHT * 0.08, width: SCREEN_WIDTH * 0.16, resizeMode: 'contain' }}
              source={require("../../Assets/Images/AstroBookUser.png")}
            />
          </View>
          <Text style={{ fontWeight: "500", fontSize: SCREEN_HEIGHT * 0.023, color: colors.background_theme1 }}>
            {item.Name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={colors.astrobook1} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headertext}>Welcome to Hello Chat</Text>
      </View>

    
        <>
          {Users.length === 0 ? (
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{ fontSize:SCREEN_HEIGHT*0.025,fontWeight:'400' ,color:colors.black_color9 }}>No users found</Text>
            </View>
          
          ) : (
            <FlatList
              data={Users}
              renderItem={renderItem}
              keyExtractor={(item, index) => item.id || index.toString()}
              contentContainerStyle={{ paddingBottom:SCREEN_HEIGHT*0.2 }}
            />
          )}
        </>
   
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_theme1,
  },
  header: {
    height: SCREEN_HEIGHT * 0.08,
    backgroundColor: colors.astrobook1,
    elevation: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  headertext: {
    fontSize: SCREEN_HEIGHT * 0.03,
    color: colors.background_theme1,
    fontWeight: "500",
  },
});
