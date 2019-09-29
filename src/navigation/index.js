import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Profile from "../screens/Profile";
import Login from "../screens/Login";

const AppNavigator = createStackNavigator(
  {
    // Login: {
    //   screen: Login
    // },
    Profile: {
      screen: Profile
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
