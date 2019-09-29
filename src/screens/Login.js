import React, { Component } from "react";
import { View, Text, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import KeyboardAvoid from 'react-native-keyboard-aware-view';
import Tinput from 'react-native-paper';

function Login() {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "pink"
      }}
    >
      {/* First Portion */}
      <View
        style={{
        //   backgroundColor: "lightgreen",
          height: hp(60),
          width: wp(100),
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* Image Section */}
        <View
          style={{
            width: wp(70),
            height: hp(25),
            // backgroundColor: "grey",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* Image */}
          <View
            style={{
              width: wp(30),
              height: wp(30),
              backgroundColor: "white",
              marginBottom: hp(3)
            }}
          >
            <Image
             style={{
                 width: wp(30),
                 height: wp(30),
             }}
              source={require("./logo.png")}
            />
          </View>
          {/* Text */}
          <Text
            style={{
              fontFamily: "circular-black",
              fontSize: hp(4)
            }}
          >
            OUTLIERS
          </Text>
        </View>
      </View>
        {/* Second Portion */}
        <View style={{
            // backgroundColor: 'yellow',
            width: wp(100),
            height: hp(40),
            // justifyContent: "center",
            alignItems: "center",
        }}>
            {/* Username */}
            <View style={{
                width: wp(75),
                height: hp(7),
                backgroundColor: '#F5F4F2',
                borderRadius: 7,
                justifyContent: "center",
                paddingHorizontal: wp(3)
            }}>
                <TextInput
          style={{height: 40}}
          placeholder="Username"
        //   onChangeText={(text) => this.setState({text})}
        //   value={this.state.text}
        />
            </View>
            
            {/* Password */}
            <View style={{
                width: wp(75),
                height: hp(7),
                backgroundColor: '#F5F4F2',
                borderRadius: 7,
                justifyContent: "center",
                marginTop: hp(2),
                marginBottom: hp(2),
                paddingHorizontal: wp(3)
            }}>
                <TextInput
          style={{height: 40}}
          placeholder="Password"
        //   onChangeText={(text) => this.setState({text})}
        //   value={this.state.text}
        />
            </View>

            {/* Button */}
            <View style={{
                width: wp(75),
                height: hp(7),
                backgroundColor: '#30363B',
                marginTop: hp(2),
                marginBottom: hp(2),
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={{
                    fontFamily: 'circular-black',
                    fontSize: hp(3),
                    color: 'white',
                }}>
                    Login
                </Text>
                
            </View>
        </View>
    </View>
  );
}

export default Login;
