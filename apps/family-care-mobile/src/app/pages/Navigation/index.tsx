import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FAB } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Screen1 } from '../../components/Screen1';
import { Screen2 } from '../../components/Screen2';
import { Screen3 } from '../../components/Screen3';
import { Screen4 } from '../../components/Screen4';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
    tabBar={(props) => (
      <>
        <FAB
          style={{
            position: 'absolute',
            bottom: 16,
            alignSelf: 'center',
            zIndex: 1          }}
          icon="plus"
        />
        <BottomTabBar {...props} />
      </>
    )}
     >
        <Tab.Screen
          name="Inicio"
          component={Screen1}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Familia"
          component={Screen2}
          options={{
            tabBarLabel: 'Faamilia',
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }}
        />



      
         <Tab.Screen
          name="Servicio"
          component={Screen3}
          options={{
            tabBarLabel: 'Servicio',
            tabBarIcon: ({ color, size }) => (
              <Icon name="briefcase" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Agenda"
          component={Screen4}
          options={{
            tabBarLabel: 'Agenda',
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation
