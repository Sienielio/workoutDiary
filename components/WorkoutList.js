import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text, Icon, Provider } from 'react-native-paper';
import { WorkoutContext } from './context';
import style from '../style/style';

export default List = () => {
  const { workouts } = useContext(WorkoutContext);

  return (
    <Provider theme={style.theme}>
      <View style={style.cardView}>
        <Card title="card" mode='outlined'>
          <Card.Content>
            <Icon source="run-fast" size={20}></Icon>
            <Text variant="headlineMedium">0 km</Text>
          </Card.Content>
          <Card.Content>
            <Icon source="ski" size={20}></Icon>
            <Text variant="headlineMedium">0 km</Text>
          </Card.Content>
          <Card.Content>
            <Icon source="swim" size={20}></Icon>
            <Text variant="headlineMedium">0 km</Text>
          </Card.Content>
        </Card>
      </View>
      <View>
        <FlatList
          data={workouts}
          renderItem={({ item }) => <Item workout={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Provider>
  );
};

function Item({ workout }) {
  return (
    <View>
      <Card>
        <Card.Content style={style.list}>
          <Icon source={workout.selection} size={40} />
          <Text variant="headlineSmall">Distance: {workout.distance} km</Text>
          <Text variant="headlineSmall">Duration: {workout.duration} min</Text>
          <Text variant="headlineSmall">{workout.date instanceof Date ? workout.date.toLocaleDateString() : 'Invalid Date'}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}