import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import style from '../style/style';

// Define the LeftContent component with props to handle icons
const LeftContent = props => <Avatar.Icon {...props} icon={props.icon} />

const WorkoutList = () => {
  const sportTypes = [
    { icon: 'run-fast', kilometers: 25 },
    { icon: 'swim', kilometers: 40 },
    { icon: 'ski', kilometers: 15 }
  ];

  return (
    <View style={style.card}>
      {sportTypes.map((sport, index) => (
        <Card key={index}>
          <Card.Content>
            <LeftContent icon={sport.icon} />
            <Text style={style.text}>{`${sport.kilometers} km`}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

export default WorkoutList;
