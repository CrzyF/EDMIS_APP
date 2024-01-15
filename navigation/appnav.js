import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import PoliceWebsite from '../screens/PoliceWebsite';
import AmbulanceWebsite from '../screens/AmbulanceWebsite';
import NadmoWebsite from '../screens/NadmoWebsite';
import FireServiceWebsite from '../screens/FireServiceWebsite';
import LiveStream from '../screens/LiveStream';

const Stack = createStackNavigator();

function appnav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HomePage'>
                <Stack.Screen name='HomePage' component={HomePage} />
                <Stack.Screen name='PoliceWebsite' component={PoliceWebsite} />
                <Stack.Screen name='AmbulanceWebsite' component={AmbulanceWebsite} />
                <Stack.Screen name='NadmoWebsite' component={NadmoWebsite} />
                <Stack.Screen name='FireServiceWebsite' component={FireServiceWebsite} />
                <Stack.Screen name='LiveStream' component={LiveStream} />
        </Stack.Navigator>
    );
}

export default appnav;