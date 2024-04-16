import {ImageProps} from 'react-native';

export interface OnboardingData {
  id: number;
  image: ImageProps;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    image: require('../assets/Image1.png'),
    text: 'Page no.',
    backgroundColor: '#fcb7d7',
    textColor: '#ffffff',
  },
  {
    id: 2,
    image: require('../assets/Image2.png'),
    text: 'Page no.',
    backgroundColor: '#ffffff',
    textColor: '#003cc9',
  },
  {
    id: 3,
    image: require('../assets/Image3.png'),
    text: 'Page no.',
    backgroundColor: '#003cc9',
    textColor: '#fcb7d7',
  },
];

export default data;
