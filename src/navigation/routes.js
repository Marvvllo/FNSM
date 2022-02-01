import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Add from '../screens/add';
import Edit from '../screens/edit';
import MainApp from '../screens/mainApp';
import Splash from '../screens/splash';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="mainApp" component={MainApp} />
      <Stack.Screen name="add" component={Add} />
      <Stack.Screen name="edit" component={Edit} />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
