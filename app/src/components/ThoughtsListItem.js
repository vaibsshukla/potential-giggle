/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {AppButton} from './AppButton';
import {Dimen, Color, Assets} from '../../res/index';
import String from '../../res/String';
import LinearGradient from 'react-native-linear-gradient';

export const ThoughtsListItem = ({}) => {
  return (
    <TouchableOpacity
      // onPress={itemOnPress}
      style={{flexDirection: 'row'}}>
      <ImageBackground
        style={styles.imageStyle}
        source={Assets.common.profileImage}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingTop: 5,
            alignItems: 'center',
          }}>
          <View style={styles.dataWrapper}>
            <Image style={styles.image} source={Assets.common.hyperlink} />
            <Text style={styles.textStyle}>#3k</Text>
          </View>
          <View style={styles.dataWrapper}>
            <Image style={styles.image} source={Assets.common.hyperlink} />
            <Text style={styles.textStyle}>#3k</Text>
          </View>
          <View style={styles.dataWrapper}>
            <Image style={styles.image} source={Assets.common.hyperlink} />
            <Text style={styles.textStyle}>#3k</Text>
          </View>
        </View>
      </ImageBackground>
      <LinearGradient
        colors={['#00000000', '#000000']}
        style={[styles.container]}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    height: 80,
    borderRadius: 10,
    flexDirection: 'column-reverse',
    marginLeft: 5.5,
    width: Dimen.phoneWidth / 2 - 12,
  },

  buttonStyle: {
    backgroundColor: Color.primaryColor,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageStyle: {
    width: Dimen.phoneWidth / 2 - 10,
    height: 300,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    height: 15,
    width: 15,
    marginTop: 3,
    marginHorizontal: 5,
    tintColor: 'white',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  dataWrapper: {
    height: 30,
    width: 60,
    backgroundColor: '#403c3c',
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
  },
});
