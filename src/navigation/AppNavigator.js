import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../components/HomePage';
import ContentPage from '../components/ContentPage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Content" component={ContentPage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
