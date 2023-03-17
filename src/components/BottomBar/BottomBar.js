import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "./HomeScreen/HomeScreen";
import {CartScreen} from "./CartScreen/CartScreen";
import {ImageScreen} from "./ImageScreen/ImageScreen";
import {ProfileScreen} from "./ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 14,
                        fontWeight: "bold",
                    },


                    activeTintColor: "#3ce521",
                    inactiveTintColor: "#000000",
                    pressOpacity: 1,
                    indicatorStyle: {
                        backgroundColor: "black",
                        height: 30,
                        borderRadius: 30,
                        top: 9,
                    },
                    tabStyle: {
                        width: "auto",
                    },
                }}>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{

                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Cart'
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="shopping-cart" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Images'
                    component={ImageScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="images" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     text: {
//         fontSize:20,
//     },
// });

export default BottomBar;
