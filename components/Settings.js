import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { RadioButton } from 'react-native-paper';
/*  import { WorkoutContext } from './context'; */
 import style from '../style/style';

const MyComponent = () => {
  const [units, setUnits] = useState('km');

  const handleUnitChange = (value) => {
    setUnits(value);
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>Units</Text>
      <RadioButton.Item
        label="Kilometers"
        value="km"
        status={units === 'km' ? 'checked' : 'unchecked'}
        onPress={() => handleUnitChange('km')}
      />
      <RadioButton.Item
        label="Miles"
        value="ml"
        status={units === 'ml' ? 'checked' : 'unchecked'}
        onPress={() => handleUnitChange('ml')}
      />
      {/* <WorkoutList workouts={workouts} /> */}
    </View>
  );
};

export default MyComponent;
