import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenTables from '../screens/ScreenTables';
import ScreenItemList from '../screens/ScreenItemList';
import ScreenItemDetail from '../screens/ScreenItemDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenOrdersList from '../screens/ScreenOrdersList';
import ScreenOrderDetail from '../screens/ScreenOrderDetail';
import ScreenUser from '../screens/ScreenUser';

const ProductStack = createNativeStackNavigator();
function ProductStackScreen() {
  return (
    <ProductStack.Navigator initialRouteName="ScreenTables">
      <ProductStack.Screen
        name="ScreenTables"
        component={ScreenTables}
      />
      <ProductStack.Screen
        name="ScreenItemList"
        component={ScreenItemList}
      />
      <ProductStack.Screen
        name="ScreenItemDetail"
        component={ScreenItemDetail}
      />
    </ProductStack.Navigator>
  );
}

const OrderStack = createNativeStackNavigator();
function OrderStackScreen() {
  return (
    <OrderStack.Navigator initialRouteName="ScreenOrdersList">
      <OrderStack.Screen
        name="ScreenOrdersList"
        component={ScreenOrdersList}
      />
      <OrderStack.Screen
        name="ScreenOrderDetail"
        component={ScreenOrderDetail}
      />
    </OrderStack.Navigator>
  );
}

const UserStack = createNativeStackNavigator();
function UserStackScreen() {
  return (
    <UserStack.Navigator initialRouteName="ScreenOrdersList">
      <UserStack.Screen name="ScreenUser" component={ScreenUser} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="OrderStackScreen"
          component={OrderStackScreen}
        />
        <Tab.Screen
          name="ProductStackScreen"
          component={ProductStackScreen}
        />
        <Tab.Screen
          name="UserStackScreen"
          component={UserStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
