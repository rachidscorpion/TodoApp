import React, {useEffect} from 'react'
import { View, Image, StyleSheet } from 'react-native'


const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const time = setTimeout(()=>{
            navigation.navigate('Home')
        }, 1000
        )
    }, [])
    return (
        <View style={{flex:1}}> 
            <Image style={{height:'100%', width:'100%'}} source={require('../assets/images/splashscreen.jpg')}/>
        </View>
    )
}

export default SplashScreen