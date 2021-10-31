/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AppButton} from './AppButton';
import {Dimen, Color} from '../../res/index';
import String from '../../res/String';
import LinearGradient from 'react-native-linear-gradient';

export const CheckoutList = ({
  vertical,
  item,
  containerStyle,
  onPress,
  cartList,
  index,
  onPressInc,
  onPressDec,
}) => {
  //   let addedTocart = {};
  //   if (cartList.length) {
  //     addedTocart = cartList?.find(el => el.key === index);
  //   }
  //   console.log('Data Received LiquorListItem=>>' + JSON.stringify(addedTocart));
  return (
    <View
      disabled
      // onPress={itemOnPress}
      style={[
        {
          width: '100%',
          paddingHorizontal: 20,
          backgroundColor: 'white',
          shadowColor: '#0000000F',
          shadowOffset: {width: 0, height: 3},
          elevation: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70,
        },
        containerStyle,
      ]}>
      <View style={{flexDirection: 'row', flex: 0.6}}>
        <Image
          style={{
            height: 30,
            width: 30,
            alignSelf: 'center',
          }}
          source={item.obj.image}
        />
        <View style={{paddingLeft: 20}}>
          <Text numberOfLines={1} style={[{}]}>
            {item.obj.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              {
                fontSize: 12,
                marginTop: 4,
              },
            ]}>
            {item.obj.category}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 0.2,
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
        <Text style={{marginTop: 5}}>{item.count ?? 0}</Text>
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

      <View
        style={{
          flex: 0.2,
          //   backgroundColor: 'red',
          marginTop: 10,
          justifyContent: 'flex-end',
        }}>
        <Text
          numberOfLines={1}
          style={[
            {
              textAlign: 'right',
              fontSize: 14,
              marginTop: 4,
              fontWeight: '400',
              color: Color.primaryColor,
            },
          ]}>
          $ {item.count * item.obj.price}
        </Text>
      </View>
    </View>
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
