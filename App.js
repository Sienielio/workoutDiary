import React, { useState } from 'react';
import { StyleSheet, View, Button, Pressable, StatusBar } from 'react-native';
import { SegmentedButtons, MD3LightTheme, Provider, Text, TextInput, Chip, BottomNavigation } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import style from './style/style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddWorkoutScreen from './components/AddWorkoutScreen';
import WorkoutList from './components/WorkoutList';
import SettingsScreen from './components/Settings';



export default function App() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline'},
    { key: 'workouts', title: 'Workouts', focusedIcon: 'run-fast' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog' },
  ]);

  const scene = BottomNavigation.SceneMap({
    home: HomeScreen,
    workouts: Workouts,
    settings: Settings,
  })

  return (
    <SafeAreaProvider>
      <BottomNavigation style={style.bottomNavigation}
       navigationState={{ index, routes }}
       onIndexChange={setIndex}
        renderScene={scene}
       /> 
    </SafeAreaProvider>
   
  );
}

function HomeScreen() {
  return (
    <AddWorkoutScreen/>
  );
}
function Workouts() {
  return (
    <WorkoutList/>
  );
}
function Settings() {
  return (
    <SettingsScreen/>
  );
}