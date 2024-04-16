import React from 'react';
import {Text, View} from 'react-native';
import NAVIGATION_SCREEN_NAME from '../../../navigators/NavigationActionType';

const Dashboard = props => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          marginVertical: 12,
          textAlign: 'center',
          color: 'black',
        }}
        onPress={() =>
          props?.navigation.navigate(NAVIGATION_SCREEN_NAME.HOME_SCREEN)
        }>
        Official Example
      </Text>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          marginVertical: 12,
          textAlign: 'center',
          color: 'black',
        }}
        onPress={() =>
          props?.navigation.navigate(NAVIGATION_SCREEN_NAME.INTROSCREEN)
        }>
        Intro Screen Example
      </Text>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          marginVertical: 12,
          textAlign: 'center',
          color: 'black',
        }}
        onPress={() =>
          props?.navigation.navigate(NAVIGATION_SCREEN_NAME.INSTAGRAM)
        }>
        Instagram
      </Text>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          marginVertical: 12,
          textAlign: 'center',
          color: 'black',
        }}
        onPress={() =>
          props?.navigation.navigate(NAVIGATION_SCREEN_NAME.GLASSMORPHISM)
        }>
        Glassmorphism
      </Text>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          marginVertical: 12,
          textAlign: 'center',
          color: 'black',
        }}
        onPress={() =>
          props?.navigation.navigate(NAVIGATION_SCREEN_NAME.GYROSCOPE_SCREEN)
        }>
        Gyroscope Example
      </Text>
    </View>
  );
};

export default Dashboard;
