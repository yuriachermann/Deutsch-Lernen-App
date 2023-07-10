import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ProficiencyLevel from './ProficiencyLevel';
import {styled, withExpoSnack} from "nativewind";

const StyledScrollView = styled(ScrollView)

const proficiencyLevels = [
  'A1.1',
  'A1.2',
  'A2.1',
  'A2.2',
  'B1.1',
  'B1.2',
  'B2.1',
  'B2.2',
  'C1.1',
  'C1.2',
  'C2.1',
  'C2.2',
];

export default withExpoSnack(function HomePage() {
  return (
    <StyledScrollView className='bg-red-500 text-4xl' >
      {proficiencyLevels.map(level => (
        <View key={level} className='text-4xl'>
          <Text >{level}</Text>
          <ProficiencyLevel level={level} />
        </View>
      ))}
    </StyledScrollView>
  );
})