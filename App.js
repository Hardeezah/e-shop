import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderSuccessfulScreen from './screens/OrderSuccessfulScreen';
import { FontAwesome } from '@expo/vector-icons';
import ProductsScreen from './screens/ProductScreens';

// Create a context to manage the checkout list
export const CheckoutContext = createContext();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Products') {
            iconName = 'list';
          } else if (route.name === 'Checkout') {
            iconName = 'shopping-cart';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Checkout" component={CheckoutScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [checkoutItems, setCheckoutItems] = useState([]);

  return (
    <CheckoutContext.Provider value={{ checkoutItems, setCheckoutItems }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="OrderSuccessful" component={OrderSuccessfulScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CheckoutContext.Provider>
  );
}
