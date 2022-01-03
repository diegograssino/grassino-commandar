import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenTables from '../screens/ScreenTables'
import ScreenItemList from '../screens/ScreenItemList'
import ScreenItemDetail from '../screens/ScreenItemDetail'
import ScreenOrdersList from '../screens/ScreenOrdersList'
import ScreenOrderDetail from '../screens/ScreenOrderDetail'
import ScreenUser from '../screens/ScreenUser'
import { COLORS } from '../constants/colors'

const ProductStack = createNativeStackNavigator()
const ProductStackScreen = function () {
  return (
    <ProductStack.Navigator
      initialRouteName="ScreenTables"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'Poppins_700Bold',
        },
      }}
    >
      <ProductStack.Screen
        name="ScreenTables"
        component={ScreenTables}
        options={{
          title: 'Mesa',
        }}
      />
      <ProductStack.Screen
        name="ScreenItemList"
        component={ScreenItemList}
        options={{
          title: 'Pedido',
        }}
      />
      <ProductStack.Screen
        name="ScreenItemDetail"
        component={ScreenItemDetail}
        options={{
          title: 'Detalle',
        }}
      />
    </ProductStack.Navigator>
  )
}

const OrderStack = createNativeStackNavigator()
const OrderStackScreen = function () {
  return (
    <OrderStack.Navigator
      initialRouteName="ScreenOrdersList"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'Poppins_700Bold',
        },
      }}
    >
      <OrderStack.Screen name="ScreenOrdersList" component={ScreenOrdersList} />
      <OrderStack.Screen
        name="ScreenOrderDetail"
        component={ScreenOrderDetail}
      />
    </OrderStack.Navigator>
  )
}

const UserStack = createNativeStackNavigator()
const UserStackScreen = function () {
  return (
    <UserStack.Navigator
      initialRouteName="ScreenOrdersList"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'Poppins_700Bold',
        },
      }}
    >
      <UserStack.Screen name="ScreenUser" component={ScreenUser} />
    </UserStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const Navigation = function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="OrderStackScreen" component={OrderStackScreen} />
        <Tab.Screen
          name="ProductStackScreen"
          component={ProductStackScreen}
          options={{ title: '' }}
        />
        <Tab.Screen name="UserStackScreen" component={UserStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
