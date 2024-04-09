import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import News from './News'
import Vacancy from '../pages/Vacancy'
import Profile from '../pages/Profile'
import Messages from '../pages/Messages'
import AboutUs from '../pages/AboutUs'
import ServiceAdd from '../pages/ServiceAdd'
import Header from './Header'
import NotSighIn from '../pages/NotSignIn'
import SighIn from '../pages/SignIn'

const Tab = createBottomTabNavigator()

export default function Navigate() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          header: ({ navigation }) => {
            return <Header navigation={navigation} />
          },
          tabBarStyle: { display: 'none' },
        })}
      >
        {/* Main pages */}
        <Tab.Screen name="news" component={News} />
        <Tab.Screen name="serviceAdd" component={ServiceAdd} />
        <Tab.Screen name="messages" component={Messages} />
        <Tab.Screen name="profile" component={Profile} />

        {/* Pages from header */}
        <Tab.Screen name="vacancy" component={Vacancy} />
        <Tab.Screen name="aboutUs" component={AboutUs} />

        {/* Other pages */}
        <Tab.Screen name="notSignIn" component={NotSighIn} />
        <Tab.Screen name="signIn" component={SighIn} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
