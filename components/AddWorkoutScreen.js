import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, DefaultTheme, MD3LightTheme, Provider, SegmentedButtons, Text, TextInput, Chip } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Import DateTimePickerModal

const MyTheme = {
  ...MD3LightTheme,
  roundness: 5,
  colors: {
    ...MD3LightTheme.colors,
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
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  
  return (
    <Provider theme={MyTheme}>
      <View style={styles.container}>
        <Text
          variant='headlineLarge'
          style={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          Add workout
        </Text>
        <SegmentedButtons
          value={selection}
          onValueChange={setSelection}
          buttons={buttons}
        />
        <TextInput
          label='Distance (km)'
          mode='outlined'
        />
        <TextInput
          label='Duration (min)'
          mode='outlined'
        />
        {/* Calendar Chip */}
        <Chip
          icon="calendar"
          onPress={showDatePicker}
          style={{ marginTop: 10 }}
        >
          {formatDate(selectedDate)}
        </Chip>
        {/* Date Picker */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {/* Submit Button */}
        <Button
        onPress={() => console.log('Button pressed')}
          style={{ marginTop: 10 }}
          mode='outlined'>Add workout</Button>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 16,
  },
});

export default AddWorkoutScreen;
