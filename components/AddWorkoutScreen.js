import React, { useState, useContext } from 'react';
import { View, Alert, Modal } from 'react-native';
import { Button, Chip, Provider, SegmentedButtons, Text, TextInput } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import style from '../style/style';
import { WorkoutContext } from './context';
import { Calendar } from 'react-native-calendars';

const AddWorkoutScreen = () => {
  const { setWorkouts } = useContext(WorkoutContext);
  const buttons = [
    { icon: 'run-fast', label: 'Run', value: 0 },
    { icon: 'ski', label: 'Ski', value: 1 },
    { icon: 'swim', label: 'Swim', value: 2 },
  ];

  const [selection, setSelection] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [buttonColor, setButtonColor] = useState('outlined')
  const [visible, setVisible] = useState(false);

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

    if (selection >= 0 && selection < buttons.length) {
      const newWorkout = {
        sportType: buttons[selection].label,
        distance: numericDistance,
        duration: numericDuration,
        date: selectedDate,
        icon: buttons[selection].icon,
      };

      console.log("Sport Type:", newWorkout.sportType);
      console.log("Distance:", newWorkout.distance, "km");
      console.log("Duration:", newWorkout.duration, "min");
      console.log("Date:", newWorkout.date);

      setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);

      setButtonColor('contained');

      Alert.alert('Exercise Added', 'Your exercise has been successfully added!');
    } else {
      console.error('Invalid selection:', selection);
    }
  };

  function dateSelected(day) {
    console.log("Selected date:", day.dateString);
    setVisible(false);
    setSelectedDate(new Date(day.dateString));
  }

  return (
    <Provider theme={style.theme}>
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
        <Button onPress={handleAddWorkout} style={{ marginTop: 10 }} mode={buttonColor}>
          Add workout
        </Button>
        <Modal visible={visible} transparent={true}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Calendar onDayPress={dateSelected} />
            <Button title="Close modal" onPress={() => setVisible(false)}></Button>
          </View>
        </Modal>
      </View>
    </Provider>
  );
}

export default AddWorkoutScreen;
