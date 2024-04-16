import {
  Canvas,
  useCanvasRef,
  useImage,
  Image,
} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions, Share, View} from 'react-native';
import {useStickerContext} from './StickerContext';
import {GestureHandler} from './GestureHandler';
import {ModalButton} from './ModalButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ShareButton} from './ShareButton';

const {width, height} = Dimensions.get('window');

const Instagram = () => {
  const ref = useCanvasRef();
  const image = useImage(require('../../../common/assets/oslo2.jpg'));
  const {stickers} = useStickerContext();
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Canvas style={{flex: 1}} ref={ref}>
        <Image
          image={image}
          x={0}
          y={0}
          width={width}
          height={height}
          fit="cover"
        />
        {stickers.map(({size, matrix}, index) => {
          return <GestureHandler key={index} matrix={matrix} size={size} />;
        })}
      </Canvas>
      <ModalButton size={0} onPress={() => {}} />
      <ShareButton
        size={0}
        onPress={() => {
          const img = ref.current!.makeImageSnapshot().encodeToBase64();
          const data = `data:image/png;base64,${img}`;
          Share.share({url: data});
        }}
      />
    </View>
  );
};

export default Instagram;
