import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ShareButtonProps {
  size: number;
  onPress: () => void;
}

export const ShareButton = ({size, onPress}: ShareButtonProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        position: 'absolute',
        top: insets.top + 16,
        left: 16,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#222121',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={onPress}>
        <Text>Share</Text>
      </Pressable>
    </View>
  );
};
