import { StyleSheet, Text, View ,ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useRoute } from '@react-navigation/native'
import firestore, { query } from '@react-native-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Components/Screen';
import { colors } from '../Components/Config/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Chat = () => {
  const [MessageList, SetMessageList] = useState([])
  const route = useRoute();



 useEffect(() => {
  const RecievedMsg = firestore()
    .collection("Chats")
    .doc(route.params.id + route.params.data.userId)
    .collection("Messages")
    .orderBy("createdAt", "desc");

  const unsubscribe = RecievedMsg.onSnapshot(querysnapshot => {
    const AllMessages = querysnapshot.docs.map(item => {
      return {
        ...item._data,
        createdAt: item._data.createdAt
      };
    });
    SetMessageList(AllMessages);
  });

  return () => unsubscribe(); 
}, []);

  const onSend = useCallback((messages = []) => {
    const msg = messages[0];
    const MyMsg = {
      ...msg, 
      SendTo: route.params.id,
      SendBy: route.params.data.userId,
      createdAt: Date.parse(msg.createdAt)

    }
    SetMessageList(previousMessages =>
      GiftedChat.append(previousMessages, MyMsg),
    )
    firestore()
      .collection("Chats")
      .doc('' + route.params.id + route.params.data.userId)
      .collection("Messages")
      .add(MyMsg);


    firestore()
      .collection("Chats")
      .doc('' + route.params.data.userId + route.params.id)
      .collection("Messages")
      .add(MyMsg);

  }, [])
  return (
    <ImageBackground 
    source={require("../Assets/Images/chat_bg.png")}
    style={{ flex: 1 }}>
      <View style={{paddingVertical:SCREEN_HEIGHT*0.02,backgroundColor:colors.astrobook1,paddingHorizontal:SCREEN_WIDTH*0.04,alignItems:'center'}}>

            <Text style={{color:colors.background_theme1,fontSize:SCREEN_HEIGHT*0.02,fontWeight:"500"}}> Hello Chat User</Text>

      </View>
      <GiftedChat
        messages={MessageList}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
        }}
      />
    </ImageBackground>
  )
}

export default Chat

const styles = StyleSheet.create({})