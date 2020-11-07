import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import ChaptersScreen from '../screens/ChaptersScreen';
import MiscScreen from '../screens/MiscScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChapterDetailScreen from '../screens/ChapterDetailScreen';


import {BottomTabParamList, HomeParamList, ChaptersParamList, MiscParamList, SettingsParamList} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-home" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Chapters"
                component={ChaptersNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-list" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Misc"
                component={MiscNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-briefcase" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="ios-cog" color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerTitle: 'Home'}}
            />
        </HomeStack.Navigator>
    );
}

const ChaptersStack = createStackNavigator<ChaptersParamList>();

function ChaptersNavigator() {
    return (
        <ChaptersStack.Navigator>
            <ChaptersStack.Screen
                name="ChaptersScreen"
                component={ChaptersScreen}
                options={{headerTitle: 'Chapters'}}
            />
            <ChaptersStack.Screen
                name="ChapterDetailScreen"
                component={ChapterDetailScreen}
                options={{headerTitle: 'ChapterDetail'}}
            />
        </ChaptersStack.Navigator>
    );
}
const MiscStack = createStackNavigator<MiscParamList>();

function MiscNavigator() {
    return (
        <MiscStack.Navigator>
            <MiscStack.Screen
                name="MiscScreen"
                component={MiscScreen}
                options={{headerTitle: 'Misc'}}
            />
        </MiscStack.Navigator>
    );
}
const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{headerTitle: 'Settings'}}
            />
        </SettingsStack.Navigator>
    );
}
