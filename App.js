/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import{StackNavigator} from 'react-navigation';
import Splash from './Src/Splash';
import Main from'./Src/Main';
import Login from './MainScreen/Login';
import SignUp from './MainScreen/SignUp';
const Navigation=StackNavigator({
    Home:{
      screen:Splash,
    },
    main:{
        screen:Main,
    },

    loginscr:{
        screen:Login
    },
    signupscr:{
        screen:SignUp
    }
})
export default Navigation;