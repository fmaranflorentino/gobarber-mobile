import React from 'react';
import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function index() {
  const signed = useSelector((state) => state.auth.signed);

  const tabNavigatorOptions = {
    keyboardHidesTabBar: true,
    activeColor: '#fff',
    inactiveColor: 'rgba(255, 255, 255, 0.6)',
    barStyle: {backgroundColor: '#8d41a8'},
  };

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator {...tabNavigatorOptions}>
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: 'Agendamentos',
              tabBarIcon: ({color}) => (
                <Icon name="event" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: ({color}) => (
                <Icon name="person" color={color} size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={SignIn} />
          <Stack.Screen name="Register" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
