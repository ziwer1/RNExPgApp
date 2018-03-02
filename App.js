import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'

import UserList from './Components/UserList.js'
import UserProfile from './Components/UserProfile.js'

RootStack = StackNavigator(
  {
    UserList:{
      screen:UserList,
    },
    UserProfile:{
      screen:UserProfile,
    },
  },
  {
    initialRoute: UserList,
  },

);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
