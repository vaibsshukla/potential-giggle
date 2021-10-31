/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import GoogleFit, {Scopes} from 'react-native-google-fit';
import NetworkManager from '../utils/NetworkManager';
import {apis} from '../../res/URL';

class TaskLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Task1')}>
            <Text>Task 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('Task2')}>
            <Text>Task 2</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  dietListItem: {
    height: 40,
    width: '45%',
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 4,
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  dietListItemColor: {
    height: 40,
    width: '45%',
    backgroundColor: '#5fd38b',
    elevation: 2,
    borderRadius: 4,
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  header: {
    marginHorizontal: 10,
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn: {
    height: 40,
    width: '30%',
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default TaskLandingPage;
