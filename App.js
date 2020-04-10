import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import CreateReportModal from './src/screens/Modals/CreateReportModal';
import Home from './src/screens/Tabs/Home';
import Incidents from './src/screens/Tabs/Incidents';
import Plan from './src/screens/Tabs/Plan';
import { THEME_COLOR } from '@assets/colors';

function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}

const screenOptions = {
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
}

const iconMapping = {
    'Home': 'ios-home',
    'Incidents': 'ios-warning',
    'Plan': 'ios-navigate',
};

const FirstStack = createStackNavigator();

function FirstStackScreen() {
    return (
        <FirstStack.Navigator>
            <FirstStack.Screen name="Home" component={Home} options={screenOptions} />
            <FirstStack.Screen name="Details" options={screenOptions} component={DetailsScreen} />
        </FirstStack.Navigator>
    );
}

const SecondStack = createStackNavigator();

function SecondStackScreen() {
    return (
        <SecondStack.Navigator>
            <SecondStack.Screen
                name="Incidents"
                component={Incidents}
                options={({ navigation }) => ({
                    screenOptions,
                    headerRight: () => (<Button color={THEME_COLOR} onPress={() => { navigation.navigate('Add Incident') }} title="Add" />)
                })}
            />
            <SecondStack.Screen name="Details" component={DetailsScreen} options={screenOptions} />
        </SecondStack.Navigator>
    );
}

const ThirdStack = createStackNavigator();

function ThirdStackScreen() {
    return (
        <ThirdStack.Navigator>
            <ThirdStack.Screen name="Plan" component={Plan} options={screenOptions} />
        </ThirdStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = iconMapping[route.name];
                    return <Ionicons name={iconName} size={26} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: THEME_COLOR,
                inactiveTintColor: 'rgb(142, 142, 147)',
            }}
        >
            <Tab.Screen name="Home" component={FirstStackScreen} />
            <Tab.Screen name="Incidents" component={SecondStackScreen} />
            <Tab.Screen name="Plan" component={ThirdStackScreen} />
        </Tab.Navigator>
    )
}

const RootStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
                <RootStack.Screen
                    name="Add Incident"
                    component={CreateReportModal}
                    options={({ navigation }) => ({
                        gestureEnabled: false,
                        headerLeft: () => (<Button color={THEME_COLOR} onPress={() => { navigation.goBack() }} title="Cancel" />)
                    })}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
