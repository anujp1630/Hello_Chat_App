import { StyleSheet, Text, View ,Modal,ActivityIndicator} from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './Screen'
import { colors } from './Config/Constants'

const Loader = ({visible}) => {
  return (
    <Modal visible={visible} transparent>
        <View style={styles.ModalView}>

            <View style={styles.mainview}>

                   < ActivityIndicator size={'large'}/>

            </View>



        </View>



    </Modal>
   
  )
}

export default Loader

const styles = StyleSheet.create({
    ModalView:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.3)",
        justifyContent:"center",
        alignItems:"center"

    },
    mainview:{

        height:SCREEN_HEIGHT*0.06,
        width:SCREEN_WIDTH*0.12,
        borderRadius:100,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:colors.background_theme1,
        

    }
})