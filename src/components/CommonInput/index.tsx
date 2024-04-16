import React from 'react';
import {Text, TextInput, View} from 'react-native';
import style from './style';
import colors from '../../common/styles/colors';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeHolder: string;
  inputPlaceHolder: string;
};

const CommonInput = ({
  value,
  onChangeText,
  placeHolder,
  inputPlaceHolder,
}: Props) => {
  return (
    <View style={style.textInputContainerStyle}>
      <Text style={style.placeHolderTextStyle}>{placeHolder}</Text>
      <TextInput
        placeholderTextColor={colors.gray10}
        placeholder={inputPlaceHolder}
        value={value}
        onChangeText={onChangeText}
        style={[style.inputStyle]}
      />
    </View>
  );
};

export default CommonInput;
