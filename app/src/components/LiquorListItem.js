/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AppButton} from './AppButton';
import {Dimen, Color} from '../../res/index';
import String from '../../res/String';
import LinearGradient from 'react-native-linear-gradient';

export const LiquorListItem = ({
  vertical,
  item,
  containerStyle,
  onPress,
  cartList,
  index,
  onPressInc,
  onPressDec,
}) => {
  let addedTocart = {};
  if (cartList.length) {
    addedTocart = cartList?.find(el => el.key === index);
  }
  return (
    <TouchableOpacity
      disabled
      // onPress={itemOnPress}
      style={[
        {
          width: Dimen.phoneWidth * 0.43,
          paddingVertical: 10,
          marginRight: vertical ? 0 : 16,
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: 'white',
          shadowColor: '#0000000F',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 10,
          shadowRadius: 10,
          elevation: 1,
        },
        containerStyle,
      ]}>
      <Image
        style={{
          height: 60,
          width: 60,
          alignSelf: 'center',
        }}
        source={item.image}
      />
      <Text
        numberOfLines={1}
        style={[
          {
            textAlign: 'center',
            marginHorizontal: 16,
            fontSize: 16,
            marginTop: 16,
            fontWeight: '500',
          },
        ]}>
        {item.name}
      </Text>
      <Text
        numberOfLines={1}
        style={[
          {
            textAlign: 'center',
            marginHorizontal: 16,
            fontSize: 12,
            marginTop: 4,
          },
        ]}>
        {item.category}
      </Text>
      <Text
        numberOfLines={1}
        style={[
          {
            textAlign: 'center',

            marginHorizontal: 16,
            fontSize: 14,
            marginTop: 4,
            fontWeight: '400',
            color: Color.primaryColor,
          },
        ]}>
        $ {item.price}
      </Text>
      <Text
        numberOfLines={1}
        style={[
          {
            textAlign: 'center',
            marginHorizontal: 16,
            marginTop: 4,
          },
        ]}>
        {item.availableInNoOfBars} Bars
      </Text>
      {!addedTocart?.count && (
        <View style={{marginTop: 11, marginHorizontal: 16}}>
          <AppButton
            onPress={onPress}
            isEnabled={true}
            borderRadius={5}
            buttonText={String.AppText.addToCart}
          />
        </View>
      )}
      {addedTocart?.count && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 40,
            marginTop: 11,
          }}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            useAngle={true}
            angle={45}
            colors={['#de2235', '#c5242c', '#a22723']}
            style={[styles.container]}>
            <TouchableOpacity onPress={onPressDec} style={[styles.container]}>
              <Text style={styles.textStyle}>{'-'}</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={{marginTop: 5}}>{addedTocart?.count ?? 0}</Text>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            useAngle={true}
            angle={45}
            colors={['#de2235', '#c5242c', '#a22723']}
            style={[styles.container]}>
            <TouchableOpacity onPress={onPressInc} style={[styles.container]}>
              <Text style={styles.textStyle}>{'+'}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: Color.primaryColor,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
