import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton, Provider } from 'react-native-paper';
import style from '../style/style';



const MyComponent = () => {
  const [units, setUnits] = useState('km');

  const handleUnitChange = (value) => {
    setUnits(value);
  };

  return (
    <Provider theme={style.theme}>
      <View style={style.setting}>
        {<Text>Units</Text>}
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
      </View>
    </Provider>
  );
};

export default MyComponent;