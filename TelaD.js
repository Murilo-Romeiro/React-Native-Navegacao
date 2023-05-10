import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
function TelaA() {
    return (
      <View>
        <Text>Tela A</Text>
      </View>
    );
  }
  
  function TelaB() {
    return (
      <View>
        <Text>Tela B</Text>
      </View>
    );
  }
  
  function TelaC() {
    return (
      <View>
        <Text>Tela C</Text>
      </View>
    );
  }
  const Tab = createMaterialTopTabNavigator();

  function TopTabsNavigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="TelaA"
            component={TelaA}
            options={{
              title: 'Tela A',
              tabBarIcon: ({ color, size }) => (
                <Icon name="icon-name" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="TelaB"
            component={TelaB}
            options={{
              title: 'Tela B',
              tabBarIcon: ({ color, size }) => (
                <Icon name="icon-name" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="TelaC"
            component={TelaC}
            options={{
              title: 'Tela C',
              tabBarIcon: ({ color, size }) => (
                <Icon name="icon-name" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default TopTabsNavigator;