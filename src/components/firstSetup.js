import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const FirstSetup = ({nvg}) => {
        return(
        <View style={styles.body}>
             <View>
                 <Text style={styles.text}>
                     Looks like there are no tasks created, Tap on the create button to create one.
                 </Text>
             </View>
            <View style={styles.look}>
                <TouchableOpacity onPress={() => nvg.navigate('Task', {title: 'Create task'})}style={styles.button}>
                  <View style={styles.btnaln}>
                    <Text style={styles.create}>+</Text>
                  </View>
                </TouchableOpacity>
             </View>
        </View>
    )
        }
export default FirstSetup

const styles = StyleSheet.create({
    look: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    text:{
      color: '#484848',
      margin:30,
    },
    button:{
      height:85,
      width:80,
      borderWidth: 3,
      borderRadius: 100,
      borderColor: '#DF790C',
    },
    create:{
      fontSize: 65,
      color:'#DF790C', 
    },
    btnaln:{
      alignItems:'center',
      justifyContent: 'center',
    },
    
    body:{
      flex: 1,
      backgroundColor: '#000000',
  },
}
  )