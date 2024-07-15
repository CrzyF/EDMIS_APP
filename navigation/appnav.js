import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import PoliceWebsite from '../screens/PoliceWebsite';
import AmbulanceWebsite from '../screens/AmbulanceWebsite';
import NadmoWebsite from '../screens/NadmoWebsite';
import FireServiceWebsite from '../screens/FireServiceWebsite';
import LiveStream from '../screens/LiveStream';
import EvidenceSubmission from '../screens/EvidenceSubmission';
import Call from '../screens/Call';
import AddContact from '../screens/AddContact';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Register from '../screens/Register';
import Webapps from '../screens/Webapps';

const Stack = createStackNavigator();

function appnav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='ResetPassword' component={ResetPassword} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='HomePage' component={HomePage} />
                <Stack.Screen name='Webapps' component={Webapps} />
                <Stack.Screen name='PoliceWebsite' component={PoliceWebsite} />
                <Stack.Screen name='AmbulanceWebsite' component={AmbulanceWebsite} />
                <Stack.Screen name='NadmoWebsite' component={NadmoWebsite} />
                <Stack.Screen name='FireServiceWebsite' component={FireServiceWebsite} />
                <Stack.Screen name='LiveStream' component={LiveStream} />
                <Stack.Screen name='EvidenceSubmission' component={EvidenceSubmission} />
                <Stack.Screen name='AddContact' component={AddContact} />
                <Stack.Screen name='Call' component={Call} />
        </Stack.Navigator>
    );
}

export default appnav;