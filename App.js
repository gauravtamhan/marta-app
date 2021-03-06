import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/create';
import { Ionicons } from '@expo/vector-icons';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import CreateReportModal from './src/screens/Modals/CreateReportModal';
import Home from './src/screens/Tabs/Home';
import Incidents from './src/screens/Tabs/Incidents';
import Emergency from './src/screens/Tabs/Emergency';
import TrainDetails from './src/screens/Tabs/TrainDetails';
import { THEME_COLOR } from '@assets/colors';

const HeaderButton = ({ navigation, close, location, label }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
            <Button color={THEME_COLOR} onPress={() => { close ? navigation.goBack() : navigation.navigate(location) }} title={label} />
        </View>
    )
}

const screenOptions = {
    headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
}

const iconMapping = {
    'Home': 'ios-home',
    'Incidents': 'ios-warning',
    'Emergency': 'ios-help-buoy',
};

const FirstStack = createStackNavigator();

function FirstStackScreen() {
    return (
        <FirstStack.Navigator>
            <FirstStack.Screen name="Home" component={Home} options={screenOptions} />
            <FirstStack.Screen
                name="TrainDetails"
                options={{
                    ...screenOptions,
                    headerBackTitle: 'Back',
                    headerTintColor: THEME_COLOR,
                    headerTitleStyle: { color: '#000'},
                }}
                component={TrainDetails}
            />
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
                    headerRight: () => (<HeaderButton navigation={navigation} location="Add Incident" label="Add" />)
                })}
            />
        </SecondStack.Navigator>
    );
}

const ThirdStack = createStackNavigator();

function ThirdStackScreen() {
    return (
        <ThirdStack.Navigator>
            <ThirdStack.Screen name="Emergency" component={Emergency} options={screenOptions} />
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
            <Tab.Screen name="Emergency" component={ThirdStackScreen} />
        </Tab.Navigator>
    )
}

const RootStack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack.Navigator mode="modal">
                    <RootStack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
                    <RootStack.Screen
                        name="Add Incident"
                        component={CreateReportModal}
                        options={({ navigation }) => ({
                            gestureEnabled: false,
                            headerLeft: () => (<HeaderButton navigation={navigation} close label="Cancel" />)
                        })}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
