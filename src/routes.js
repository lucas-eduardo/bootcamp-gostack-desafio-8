import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationService from './services/navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    >
      <Stack.Navigator
        initialRouteName="RocketShoes"
        screenOptions={{
          header: navigator => <Header {...navigator} />,
          cardStyle: {
            backgroundColor: '#191920',
          },
          headerStyle: { backgroundColor: '#191920' },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="RocketShoes" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
