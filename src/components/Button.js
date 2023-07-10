import React, { useContext } from 'react';
import { Button as RNButton } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../context/AppContext';

export default function Button({ lesson, level }) {
  const navigation = useNavigation();
  const { setCurrentLesson } = useContext(AppContext);

  const handlePress = () => {
    setCurrentLesson({ lesson, level });
    navigation.navigate('Content');
  };

  return <RNButton title={`${level}: ${lesson}`} onPress={handlePress} color={'gray'}/>;
}
