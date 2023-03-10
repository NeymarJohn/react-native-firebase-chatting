import React from 'react';
import Login from '../Screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './Routes';
import AppIntro from '../Screens/AppIntro';

const Stack = createStackNavigator();

export default props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.LOGIN_SCREEN}>
      <Stack.Screen name={Routes.APP_INTRO} component={AppIntro} />
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={Login} />
    </Stack.Navigator>
  );
};
