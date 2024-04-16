import {
  Canvas,
  Circle,
  Fill,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import Animated, {
  SensorType,
  useAnimatedScrollHandler,
  useAnimatedSensor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const GyroscopeExample = () => {
  //   const gravity = useAnimatedSensor(SensorType.ROTATION);

  //   const animatedStyle = useAnimatedStyle(() => {
  //     return {
  //       transform: [
  //         {translateX: withSpring(gravity.sensor.value.x * 50)},
  //         {translateY: withSpring(gravity.sensor.value.y * 50)},
  //       ],
  //     };
  //   });

  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         height: '100%',
  //       }}>
  //       <Animated.Text
  //         style={[
  //           {
  //             borderRadius: 20,
  //             textAlign: 'center',
  //             textAlignVertical: 'center',
  //             fontWeight: '700',
  //             color: '#b58df1',
  //             fontSize: 50,
  //           },
  //           animatedStyle,
  //         ]}>
  //         Gyroscope Example
  //       </Animated.Text>
  //     </View>
  //   );
  const translationY = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });

  //  const scrollHandler = useAnimatedScrollHandler(event => {
  //    translationY.value = event.contentOffset.y;
  //  });

  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translationY.value,
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 20,
            height: 50,
            width: '100%',
            backgroundColor: 'black',
          },
          stylez,
        ]}
      />
      <Animated.ScrollView onScroll={scrollHandler}>
        {Array(100)
          .fill('skjajhd')
          .map(() => (
            <Text
              style={{
                borderRadius: 20,
                height: 50,
                fontWeight: '700',
                color: '#b58df1',
                fontSize: 24,
                textAlign: 'center',
              }}>
              dgadgakjd
            </Text>
          ))}
      </Animated.ScrollView>
    </View>
  );
};

export default GyroscopeExample;
