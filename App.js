import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ===== Components ===== //
import MainContainer from './components/main/MainContainer';
import Home from './pages/Home';
import About from './pages/About';
// ====================== //

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <MainContainer>
    </MainContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'HomeTitle', headerShown: false }} />
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: 'AboutTitle', headerShown: false }} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);

export default App;