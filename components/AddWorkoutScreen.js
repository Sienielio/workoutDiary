import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Button, Chip, DefaultTheme, Provider, SegmentedButtons, Text, TextInput } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import style from '../style/style';

const MyTheme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: 'darkgreen',
    onSurfaceVariant: 'darkgreen',
  }
};

const buttons = [
  { icon: 'run-fast', label: 'Run', value: 0 },
  { icon: 'ski', label: 'Ski', value: 1 },
  { icon: 'swim', label: 'Swim', value: 2 },
];

const AddWorkoutScreen = () => {
  const [selection, setSelection] = useState(buttons[0].value);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleAddWorkout = () => {
    const numericDistance = parseFloat(distance);
    const numericDuration = parseFloat(duration);

    if (isNaN(numericDistance) || isNaN(numericDuration) || numericDistance < 0 || numericDuration < 0) {
      Alert.alert('Invalid Input', 'Distance and Duration must be non-negative numeric values');
      return;
    }

    // Here you can save the workout to your context or perform any other action
    console.log('Workout added:', {
      sportType: buttons[selection].label,
      distance: numericDistance,
      duration: numericDuration,
      date: selectedDate
    });
  };

  return (
    <Provider theme={MyTheme}>
      <View style={style.container}>
        <Text variant='headlineLarge' style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Add workout
        </Text>
        <SegmentedButtons value={selection} onValueChange={setSelection} buttons={buttons} />
        <TextInput label='Distance (km)' mode='outlined' value={distance} onChangeText={setDistance} keyboardType="numeric" />
        <TextInput label='Duration (min)' mode='outlined' value={duration} onChangeText={setDuration} keyboardType="numeric" />
        <Chip icon="calendar" onPress={showDatePicker} style={{ marginTop: 10 }}>
          {formatDate(selectedDate)}
        </Chip>
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
        <Button onPress={handleAddWorkout} style={{ marginTop: 10 }} mode='outlined'>
          Add workout
        </Button>
      </View>
    </Provider>
  );
}

export default AddWorkoutScreen;
