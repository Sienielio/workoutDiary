import React, { useState } from 'react';
import { BottomNavigation, useTheme } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddWorkoutScreen from './components/AddWorkoutScreen';
import WorkoutList from './components/WorkoutList';
import SettingsScreen from './components/Settings';
import { WorkoutContext } from './components/context';

const Tab = createBottomTabNavigator();

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
    { key: 'workouts', title: 'Workouts', focusedIcon: 'run-fast' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog' },
  ]);

  const scene = BottomNavigation.SceneMap({
    home: HomeScreen,
    workouts: Workouts,
    settings: Settings,
  });

  const [workouts, setWorkouts] = useState([{ selection: "swim", distance: "5", duration: "60", date: "2024-03-09" }]);

  const theme = useTheme();

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <BottomNavigation
            barStyle={{ backgroundColor: '#b2dd7b'}} 
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={scene}
          />
        </NavigationContainer>
      </SafeAreaProvider>
    </WorkoutContext.Provider>
  );
}

function HomeScreen() {
  return (
    <AddWorkoutScreen />
  );
}

function Workouts() {
  return (
    <WorkoutList />
  );
}

function Settings() {
  return (
    <SettingsScreen />
  );
}
