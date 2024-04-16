import {
  add,
  Canvas,
  Circle,
  Fill,
  LinearGradient,
  mix,
  sub,
  vec,
} from '@shopify/react-native-skia';
import React, {useMemo} from 'react';
import {useWindowDimensions, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useLoop} from './components/Animations';

export const Glassmorphism = () => {
  const {width, height} = useWindowDimensions();
  const c = vec(width / 2, height / 2);
  const r = c.x - 32;
  const rect = useMemo(
    () => ({x: 0, y: c.y, width, height: c.y}),
    [c.y, width],
  );

  const progress = useLoop({duration: 2000});
  const start = useDerivedValue(
    () => sub(c, vec(0, mix(progress.value, r, r / 2))),
    [progress],
  );
  const end = useDerivedValue(
    () => add(c, vec(0, mix(progress.value, r, r / 2))),
    [],
  );
  const radius = useDerivedValue(
    () => mix(progress.value, r, r / 2),
    [progress],
  );

  const x = useSharedValue(100);
  // `useSharedValue` is a hook that allows you to create a mutable
  //  shared value that can be used to drive animations and perform
  //   other animated interactions.
  //   This shared value can be accessed and modified from multiple components and screens, enabling synchronized animations and state across your application.
  const y = useSharedValue(100);

  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    width,
    height,
    transform: [{translateX: x.value}, {translateY: y.value}],
  }));
  // The gesture handler for the ball
  const gesture = Gesture.Pan().onChange(e => {
    console.log(e, width, height);
    x.value += e.x;
    y.value += e.y;
  });

  return (
    <View style={{flex: 1}}>
      <Canvas style={{flex: 1}}>
        <Fill color="black" />
        <Circle c={c} cx={x} cy={y} r={radius}>
          <LinearGradient
            start={start}
            end={end}
            colors={['#FFA500', '#fff']}
          />
        </Circle>
        {/* <BackdropFilter filter={<Blur blur={7} />} clip={rect}>
          <Fill color="rgba(0, 0, 0,0.8)" />
        </BackdropFilter> */}
      </Canvas>
      <GestureDetector gesture={gesture}>
        <Animated.View style={style} />
      </GestureDetector>
    </View>
  );
};
