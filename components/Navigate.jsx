import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import News from './News'
import Vacancy from '../pages/Vacancy'
import Profile from '../pages/Profile'
import Messages from '../pages/Messages'
import AboutUs from '../pages/AboutUs'
import ServiceAdd from '../pages/ServiceAdd'
import Header from './Header'
import HomeButtonSVG from './svg/HomeButtonSVG'
import ServiceAddButtonSVG from './svg/ServiceAddButtonSVG'
import MessagesButtonSVG from './svg/MessagesButtonSVG'
import ProfileButtonSVG from './svg/ProfileButtonSVG'
import DownMenu from './DownMenu'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function Navigate() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: ({ navigation }) => {
            return <Header navigation={navigation} />
          },
          tabBarStyle: { display: 'none' },
          // tabBarLabelStyle: { display: 'none' },
          // tabBarVisible: false,
          // tabBarIcon: ({ focused, color, size }) => {
          //   switch (route.name) {
          //     case 'news':
          //       return focused ? (
          //         <HomeButtonSVG active={true} />
          //       ) : (
          //         <HomeButtonSVG active={false} />
          //       )
          //     case 'serviceAdd':
          //       return focused ? (
          //         <ServiceAddButtonSVG active={true} />
          //       ) : (
          //         <ServiceAddButtonSVG active={false} />
          //       )
          //     case 'messages':
          //       return focused ? (
          //         <MessagesButtonSVG active={true} />
          //       ) : (
          //         <MessagesButtonSVG active={false} />
          //       )
          //     case 'profile':
          //       return focused ? (
          //         <ProfileButtonSVG active={true} />
          //       ) : (
          //         <ProfileButtonSVG active={false} />
          //       )
          //   }
          // },
        })}
      >
        <Tab.Screen name="news" component={News} />
        <Tab.Screen name="serviceAdd" component={ServiceAdd} />
        <Tab.Screen name="messages" component={Messages} />
        <Tab.Screen name="profile" component={Profile} />

        <Tab.Screen name="vacancy" component={Vacancy} />
        <Tab.Screen name="aboutUs" component={AboutUs} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
