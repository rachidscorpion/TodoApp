import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'
import TaskScreen from './src/screens/TaskScreen';
import { StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'TodoApp', headerStyle:{
          backgroundColor:'#000000', 
        }, headerTitleStyle:{color:'white'}}}/>
        <Stack.Screen name="Task" component={TaskScreen} options={{title:'Create Task', headerStyle:{
          backgroundColor:'#000000', 
        }, headerTitleStyle:{color:'white'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;

styles = StyleSheet.create(
  {
    background:{
      backgroundColor: '#000000'
    }
}
)