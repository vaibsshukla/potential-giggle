import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  LandingScreen,
  Cart,
  Task1,
  Task2,
  TaskLandingPage,
} from '../screens/index';

const Stack = createStackNavigator();

export function MainStackNavigator(props) {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={props.routeName}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="Cart" component={Cart} />

      <Stack.Screen name="Task1" component={Task1} />
      <Stack.Screen name="Task2" component={Task2} />
      <Stack.Screen name="TaskLandingPage" component={TaskLandingPage} />
    </Stack.Navigator>
  );
}
