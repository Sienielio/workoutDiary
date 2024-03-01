
import React, { useContext, useState, useEffect } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="run-fast" />

const WorkoutList = () => {
  const renderItem = ({ item }) => {
    if (selectedSportType && item.sportType !== selectedSportType) {
      return null;
    }
    // Return your JSX for rendering each item
    return (
      <Card>
        <Card.Title title={item.title} subtitle={item.subtitle} left={LeftContent} />
        <Card.Content>
          <Text>{item.content}</Text>
        </Card.Content>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Text>Card content</Text>
      </Card.Content>
    </Card>
  );
};

export default WorkoutList;
