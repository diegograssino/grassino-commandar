import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Image } from 'react-native';
import ScreenTables from '../screens/ScreenTables';
import ScreenItemList from '../screens/ScreenItemList';
import ScreenItemDetail from '../screens/ScreenItemDetail';
import ScreenOrdersList from '../screens/ScreenOrdersList';
import ScreenOrderDetail from '../screens/ScreenOrderDetail';
import ScreenUser from '../screens/ScreenUser';
import { COLORS } from '../constants/colors';
import PlusButton from '../components/PlusButton';

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 27 }}
      // eslint-disable-next-line global-require
      source={require('../assets/logodintico.png')}
    />
  );
}

const ProductStack = createNativeStackNavigator();
function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="ScreenTables"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'FiraSans_700Bold',
        },
        headerTitle: () => <LogoTitle />,
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
  );
}

const OrderStack = createNativeStackNavigator();
function OrderStackScreen() {
  return (
    <OrderStack.Navigator
      initialRouteName="ScreenOrdersList"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'FiraSans_700Bold',
        },
        headerTitle: () => <LogoTitle />,
      }}
    >
      <OrderStack.Screen name="ScreenOrdersList" component={ScreenOrdersList} />
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
    <UserStack.Navigator
      initialRouteName="ScreenOrdersList"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontFamily: 'FiraSans_700Bold',
        },
        headerTitle: () => <LogoTitle />,
      }}
    >
      <UserStack.Screen name="ScreenUser" component={ScreenUser} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.white,
          tabBarStyle: {
            backgroundColor: COLORS.secondary,
            paddingTop: 10,
            marginTop: 20,
            paddingHorizontal: 30,
          },
        }}
      >
        <Tab.Screen
          name="OrderStackScreen"
          component={OrderStackScreen}
          options={{
            title: 'Ordenes',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ProductStackScreen"
          component={ProductStackScreen}
          options={{
            title: '',
            tabBarIcon: ({ focused, size }) => (
              <PlusButton size={size} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="UserStackScreen"
          component={UserStackScreen}
          options={{
            title: 'Configuración',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="gear" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
