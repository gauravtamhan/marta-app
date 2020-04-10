import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderStyleInterpolators } from '@react-navigation/stack';

function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function PlanScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Plan screen</Text>
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
            <FirstStack.Screen name="Home" component={HomeScreen} options={screenOptions} />
            <FirstStack.Screen name="Details" options={screenOptions} component={DetailsScreen} />
        </FirstStack.Navigator>
    );
}

const SecondStack = createStackNavigator();

function SecondStackScreen() {
    return (
        <SecondStack.Navigator>
            <SecondStack.Screen name="Incidents" component={SettingsScreen} options={screenOptions} />
            <SecondStack.Screen name="Details" component={DetailsScreen} options={screenOptions} />
        </SecondStack.Navigator>
    );
}

const ThirdStack = createStackNavigator();

function ThirdStackScreen() {
    return (
        <ThirdStack.Navigator>
            <ThirdStack.Screen name="Plan" component={PlanScreen} options={screenOptions} />
        </ThirdStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = iconMapping[route.name];
                        return <Ionicons name={iconName} size={26} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'rgb(0, 187, 229)',
                    inactiveTintColor: 'rgb(142, 142, 147)',
                }}
            >
                <Tab.Screen name="Home" component={FirstStackScreen} />
                <Tab.Screen name="Incidents" component={SecondStackScreen} />
                <Tab.Screen name="Plan" component={ThirdStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app you sexy guy ;)</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
