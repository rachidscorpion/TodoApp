import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import TaskScreen from './src/screens/TaskScreen';
import EditTask from './src/screens/EditTask';
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'TodoApp',
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{
            title: 'Create Task',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="Edit"
          component={EditTask}
          options={{
            title: 'Edit',
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTitleStyle: {color: 'white'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// eslint-disable-next-line no-undef
styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
  },
});
