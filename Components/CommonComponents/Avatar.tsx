/* eslint-disable */
import {Text, View, StyleSheet, Image} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import Star from '../../assets/Star.png';
import {colors} from '../../Styles/Colors';

type Props = {
  src: string;
  width: number;
  height: number;
};

const Avatar: React.FC<Props> = ({src, width, height}) => {
  return (
    <View>
    <Image
      style={[avatarStyles.avatar,{width: width, height: height}]}
      source={{uri: src,}}
    />
    </View>
  );
};

const avatarStyles = StyleSheet.create({
  avatar: {
    borderRadius: 4,
  },

});

export default Avatar;
