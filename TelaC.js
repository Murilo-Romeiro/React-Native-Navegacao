import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import TelaA from './TelaA';
import TelaB from './TelaB';
import TelaC from './TelaC';

const Tab = createMaterialBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TelaA"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#000' }}
    >
      <Tab.Screen
        name="TelaA"
        component={TelaA}
        options={{
          tabBarLabel: 'Tela A',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TelaB"
        component={TelaB}
        options={{
          tabBarLabel: 'Tela B',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TelaC"
        component={TelaC}
        options={{
          tabBarLabel: 'Tela C',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
