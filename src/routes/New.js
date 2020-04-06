import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

const Stack = createStackNavigator();

export default function New() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTransparent: true,
        gestureEnabled: false,
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}>
      <Stack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Selecione o prestador',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Icon name="chevron-left" size={40} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        options={{
          title: 'Selecione o horário',
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
        name="SelectDateTime"
        component={SelectDateTime}
        title="Selecione o horário"
      />
      <Stack.Screen
        options={{
          title: 'Confirmar Agendamento',
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
        name="Confirm"
        component={Confirm}
      />
    </Stack.Navigator>
  );
}
