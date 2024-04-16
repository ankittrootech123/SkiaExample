import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Paint,
  vec,
} from '@shopify/react-native-skia';
import {View} from 'react-native';

const PaintExample = () => {
  const width = 150;
  const height = 150;

  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Canvas style={{width, height}}>
        <Circle c={c} r={r} color="red">
          <Paint color="lightblue" />
          <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
          <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
        </Circle>
      </Canvas>
      <Canvas style={{width, height}}>
        <Circle cx={r} cy={r} r={r}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(2 * r, 2 * 50)}
            colors={['red', 'black']}
          />
        </Circle>
      </Canvas>
    </View>
  );
};

export default PaintExample;
