import React, { Component } from 'react'
import { View, Text, Dimensions, Image } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Profile() {
    return (
        <View style={{
            // backgroundColor: 'pink',
            flex: 1,
        }}>
            {/* Header */}
            <View style={{
                // backgroundColor: 'blue',
                height: hp(6),
                width: wp(100),
                flexDirection: "row"
            }}>
                {/* Cross */}
                <View style={{
                    // backgroundColor: 'red',
                    height: hp(6),
                    width: wp(15),
                }}>
                    <Entypo icon='cross' color='#0000' size={30}/>
                </View>

                {/* Heading  */}
                <View style={{
                    width: wp(85),
                    // backgroundColor: 'green',
                    height: hp(6),
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{
                        fontFamily: 'circular-black',
                        fontSize: hp(2.5),
                    }}>
                        Heading
                    </Text>
                </View>
            </View>
            
        
            {/* Main Image */}
            <View style={{
                width: wp(100),
                height: hp(30),
                backgroundColor: 'yellow'
            }}>
                <Image
                style={{
                    width: wp(100),
                    height: hp(30),
                }}
                source={require('./image.jpeg')} />
            </View>

            {/* View */}
            <View style={{
                flex: 1,
                alignItems: "center",
            }}>
                <View style={{
                    backgroundColor: '#979797',
                    height: hp(15),
                    width: wp(80),
                    marginTop: hp(3),
                    marginBottom: hp(2),
                    borderRadius: 7,
                    padding: wp(3),
                }}>
                    {/* Main Text */}
                    <Text style={{
                        fontFamily: 'circular-black',
                        fontSize: hp(2)
                    }}>
                        This is our main text
                    </Text>
                    <Text style={{
                        fontFamily: 'circular-book',
                        fontSize: hp(1.7)
                    }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'Lorem Ipsum has been the industry'Lorem Ipsum has been the industry'
                    </Text>

                </View>



                {/* Text */}
                <View style={{
                    backgroundColor: '#979797',
                    height: hp(30),
                    width: wp(80),
                    marginTop: hp(3),
                    marginBottom: hp(2),
                    borderRadius: 7,
                    padding: wp(3),
                }}>
                    {/* Main Text */}
                    <Text style={{
                        fontFamily: 'circular-black',
                        fontSize: hp(3)
                    }}>
                        This is our sample text
                    </Text>
                    

                </View>

            </View>
        </View>
    )
}


export default Profile;