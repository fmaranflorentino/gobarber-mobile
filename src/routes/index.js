import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '~/pages/SignIn';
import {SignUp} from '~/pages/SignUp';
import App from './App';

const Stack = createStackNavigator();

export default function Routes() {
  const {signed} = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {signed === true ? (
          <Stack.Screen name="App" component={App} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
