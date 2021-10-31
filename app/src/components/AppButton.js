/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Color} from '../../res/index';
import LinearGradient from 'react-native-linear-gradient';

export const AppButton = props => {
  return (
    <View style={[{flexDirection: 'row'}, props.style]}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        useAngle={true}
        angle={45}
        colors={['#de2235', '#c5242c', '#a22723']}
        style={[styles.container, props.buttonStyle]}>
        <TouchableOpacity
          onPress={props.onPress}
          style={[styles.container, props.buttonStyle]}>
          <Text
            style={[
              styles.textStyle,
              {color: props.color ?? Color.white},
              props.buttonTextStyle,
            ]}>
            {props.toUpperCase
              ? props.buttonText.toUpperCase()
              : props.buttonText || 'Dummy'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
AppButton.defaultProps = {
  isEnabled: true,
};
AppButton.propTypes = {
  toUpperCase: PropTypes.bool,
  isEnabled: PropTypes.bool.isRequired,
  buttonStyle: PropTypes.object,
  buttonTextStyle: PropTypes.object,
  buttonText: PropTypes.object.isRequired,
  onPress: PropTypes.object.isRequired,
};
const styles = StyleSheet.create({
  container: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'transparent',
  },
  textStyle: {
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: Color.primaryColor,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
