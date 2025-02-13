import { StyleSheet, Text, View, TouchableOpacity, Image ,Linking} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Components/Screen';
import { colors } from '../../Components/Config/Constants';
import MyStatusBar from '../../Components/MyStatusBar';

const MySetting = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, }}>   
    <MyStatusBar backgroundColor={colors.astrobook1} barStyle="light-content" />

      <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.025, paddingTop: SCREEN_HEIGHT * 0.05, gap: SCREEN_HEIGHT * 0.02 }}>
        <TouchableOpacity 
        onPress={() => Linking.openURL('https://telegram.org/privacy?setln=fa').catch(err => console.error('Failed to open URL', err))}
        style={{ elevation: 10, flexDirection: "row", gap: SCREEN_WIDTH * 0.04, alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.02, paddingHorizontal: SCREEN_WIDTH * 0.03, borderRadius: 10, backgroundColor: colors.astrobook1 }}>

          <View style={{ height: SCREEN_HEIGHT * 0.05, width: SCREEN_WIDTH * 0.1, backgroundColor: colors.background_theme1, alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
            <Image
              style={{ height: SCREEN_HEIGHT * 0.04, width: SCREEN_WIDTH * 0.08 }}
              source={require("../../Assets/Images/Horoscope.png")} />
          </View>



          <Text style={{ fontSize: SCREEN_HEIGHT * 0.025, fontWeight: "500", color: colors.background_theme1 }}>
            Privacy Policy
          </Text>

        </TouchableOpacity>

        <TouchableOpacity   
         onPress={() => Linking.openURL('https://telegram.org/support?setln=en').catch(err => console.error('Failed to open URL', err))}
        style={{ elevation: 10, flexDirection: "row", gap: SCREEN_WIDTH * 0.04, alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.02, paddingHorizontal: SCREEN_WIDTH * 0.03, borderRadius: 10, backgroundColor: colors.astrobook1 }}>

          <View style={{ height: SCREEN_HEIGHT * 0.05, width: SCREEN_WIDTH * 0.1, backgroundColor: colors.background_theme1, alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
            <Image
              style={{ height: SCREEN_HEIGHT * 0.04, width: SCREEN_WIDTH * 0.08 }}
              source={require("../../Assets/Images/Virgo.png")} />
          </View>



          <Text style={{ fontSize: SCREEN_HEIGHT * 0.025, fontWeight: "500", color: colors.background_theme1 }}>
            Help and Support
          </Text>

        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => Linking.openURL('https://telegram.org/faq?setln=en').catch(err => console.error('Failed to open URL', err))}
        style={{ elevation: 10, flexDirection: "row", gap: SCREEN_WIDTH * 0.04, alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.02, paddingHorizontal: SCREEN_WIDTH * 0.03, borderRadius: 10, backgroundColor: colors.astrobook1 }}>

          <View style={{ height: SCREEN_HEIGHT * 0.05, width: SCREEN_WIDTH * 0.1, backgroundColor: colors.background_theme1, alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
            <Image
              style={{ height: SCREEN_HEIGHT * 0.03, width: SCREEN_WIDTH * 0.075 }}
              source={require("../../Assets/Images/matching.png")} />
          </View>



          <Text style={{ fontSize: SCREEN_HEIGHT * 0.025, fontWeight: "500", color: colors.background_theme1 }}>
            About Us
          </Text>

        </TouchableOpacity>





      </View>



      <View style={{ paddingHorizontal: SCREEN_WIDTH * 0.2, position: "absolute", bottom: SCREEN_HEIGHT*0.1,left:0 ,right:0}}>

        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate("Login")
        }}
        style={{ elevation: 10, flexDirection: "row", gap:20, alignItems: "center", paddingVertical: SCREEN_HEIGHT * 0.02, paddingHorizontal: SCREEN_WIDTH * 0.03, borderRadius: 100, backgroundColor: colors.astrobook1, justifyContent: "center" }}>

          <View style={{ height: SCREEN_HEIGHT * 0.05, width: SCREEN_WIDTH * 0.1, backgroundColor: colors.background_theme1, alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
            <Image
              style={{ height: SCREEN_HEIGHT * 0.03, width: SCREEN_WIDTH * 0.075 }}
              source={require("../../Assets/Images/Sagittarius.png")} />
          </View>



          <Text style={{ fontSize: SCREEN_HEIGHT * 0.025, fontWeight: "500", color: colors.background_theme1 }}>
            Sign Out
          </Text>

        </TouchableOpacity>

      </View>


    </View>
  )
}

export default MySetting

const styles = StyleSheet.create({})