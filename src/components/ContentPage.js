import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../context/AppContext';
import Button from "./Button";

export default function ContentPage() {
  const { currentLesson } = useContext(AppContext);

  return (
    <View>
      <Text>{`Level: ${currentLesson.level}`}</Text>
      <Text>{`Lesson: ${currentLesson.lesson}`}</Text>
      {/* Placeholder for actual content */}

      <Text>{`Content`}</Text>

      <Button key={currentLesson.lesson} lesson={'Mark as completed'} level={''} />
      <Button key={currentLesson.lesson} lesson={'Next lesson'} level={''} />
      <Button key={currentLesson.lesson} lesson={'Back to menu'} level={''} />
    </View>
  );
}
