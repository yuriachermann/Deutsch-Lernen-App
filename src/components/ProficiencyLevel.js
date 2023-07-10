import React from 'react';
import { ScrollView, View } from 'react-native';
import Button from './Button';

const lessons = ['Lesson 1', 'Lesson 2', 'Lesson 3', 'level4', 'level5'];  // Sample lessons

export default function ProficiencyLevel({ level }) {
  return (
    <View>
      <ScrollView horizontal>
        {lessons.map(lesson => (
          <View key={lesson} style={{ width: 200, height: 200, margin: 10 }} >
          <Button key={lesson} lesson={lesson} level={level} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
