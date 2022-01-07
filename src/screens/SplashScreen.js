/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';

const Splash = ({navigation}) => {
  // SplashScreen.show

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  });
  return (
    <View style={{flex: 1}}>
      <Image
        style={{height: '100%', width: '100%'}}
        source={require('../assets/images/splashscreen.jpg')}
      />
    </View>
  );
};

export default Splash;
