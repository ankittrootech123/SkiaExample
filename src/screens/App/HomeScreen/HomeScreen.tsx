import React from 'react';
import {ScrollView, Text} from 'react-native';
import PaintExample from './PaintExample';
import {AnimatedGradient} from './AnimationExample';
import {ElementTracking} from './GestureExample';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 12}}>
      <Text
        style={{fontWeight: '700', alignSelf: 'center', marginVertical: 12}}>
        Painting Examples
      </Text>
      <PaintExample />
      <Text
        style={{fontWeight: '700', alignSelf: 'center', marginVertical: 12}}>
        Animation Examples
      </Text>
      <AnimatedGradient />
      <Text
        style={{fontWeight: '700', alignSelf: 'center', marginVertical: 12}}>
        Gesture Examples
      </Text>
      <ElementTracking />
    </ScrollView>
  );
};

export default HomeScreen;
