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
import SighUp from '../pages/SignUp'
import EditProfile from '../pages/EditProfile'
import Services from '../pages/Services'
import ServiceInfo from '../pages/ServiceInfo'

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
        {/* Main pages (down menu) */}
        <Tab.Screen name="news" component={News} />
        <Tab.Screen name="services" component={Services} />
        <Tab.Screen name="messages" component={Messages} />
        <Tab.Screen name="profile" component={Profile} />

        {/* Pages from header (top menu) */}
        <Tab.Screen name="vacancy" component={Vacancy} />
        <Tab.Screen name="aboutUs" component={AboutUs} />

        {/* Profile pages */}
        <Tab.Screen name="notSignIn" component={NotSighIn} />
        <Tab.Screen name="signIn" component={SighIn} />
        <Tab.Screen name="signUp" component={SighUp} />
        <Tab.Screen name="editProfile" component={EditProfile} />

        {/* Services pages */}
        <Tab.Screen name="serviceInfo" component={ServiceInfo} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
