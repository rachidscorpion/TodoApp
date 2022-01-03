import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native'
import { connect } from 'react-redux';
import { CREATETASK } from '../reducers/actions'


const EditTask = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const creattask = (title, description) => {
        let data = {title, description}
        props.dispatch(CREATETASK(data))
        props.navigation.navigate('Home')
        console.log(props.task)
    }

    openAlert = () => {
        Alert.alert("Task title cannot be empty")
    }

    return(
        <View style={styles.body}>

            <TextInput style={styles.inputtitle} placeholder='Title' placeholderTextColor='#ADACAC' 
            autoCorrect={false} onChangeText={(i) => setTitle(i)}
            /> 

            <View style={styles.inputdescription}>
            <TextInput style={{color:'white',}}placeholder='description(optional)' placeholderTextColor='#ADACAC' 
            autoCorrect={false} multiline={true} onChangeText={(i) => setDescription(i)}
            />
            </View>


            <View style={styles.look}>
                <TouchableOpacity onPress={() => {
                    if (title === '' || title.length === 0){
                        openAlert()
                    }else{
                        creattask(title, description)
                    }
                    }}style={styles.allbutton}>
                    <Text style={styles.text}>Create</Text>
                </TouchableOpacity>
             </View>

        </View>
    )
}
{/* <View style={{borderWidth:2, borderColor:'#34495E', marginLeft:10, marginRight:10, marginTop:3}}></View> */}

const mapStateToProps = (state, props) => {
    return {task: state.data}
}

export default connect(mapStateToProps)(EditTask)

const styles = StyleSheet.create({
    modalview:{

    },
    look: {
      flex:1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end', 
    },
    inputtitle:{
        backgroundColor:'#1A1A1A',
        margin: 20,
        padding: 20,
        borderRadius: 20,
        color:'white',
    },    
    inputdescription:{
        flex:1,
        backgroundColor:'#1A1A1A',
        margin:20,
        marginTop: 10,
        padding: 20,
        height:200,
        borderRadius: 20,
    },
    allbutton:{
      height:50,
      width:120,
      margin:20,
      alignItems:'center',
    },
    text:{
      fontSize: 20,
      color:'skyblue'  
    },
    
    body:{
      flex: 1,
      backgroundColor: '#000000',
  }
}
  )