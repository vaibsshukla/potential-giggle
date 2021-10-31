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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import GoogleFit, {Scopes} from 'react-native-google-fit';
import NetworkManager from '../utils/NetworkManager';
import {apis} from '../../res/URL';

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dietlst: [],
      allergenslst: [],
      dietSelectedIndex: [],
      allergenSelectedIndex: [],
    };
  }

  componentDidMount() {
    this.fetchAllergens();
    this.fetchDiets();
  }

  fetchAllergens = async () => {
    let res = await NetworkManager.networkManagerInstance.fetchRequest(
      apis.allergens_lst,
      apis.getRequest,
      true,
      {},
    );
    // console.log('ALLERGENS' + JSON.stringify(res.message));
    if (res.message == 'success') {
      this.setState({allergenslst: res.data});
    } else {
      if (__DEV__) {
        console.log('DATA_NOT_FOUND');
      }
    }
  };
  fetchDiets = async () => {
    let res = await NetworkManager.networkManagerInstance.fetchRequest(
      apis.diet_lst,
      apis.getRequest,
      true,
      {},
    );
    console.log('DIETS' + JSON.stringify(res.message));
    if (res.message == 'success') {
      this.setState({dietlst: res.data});
    } else {
      if (__DEV__) {
        console.log('DATA_NOT_FOUND');
      }
    }
  };

  dietOnPress = (item, index) => async () => {
    let tempArr = this.state.dietSelectedIndex;
    let tempAllergenArray = this.state.allergenSelectedIndex;
    if (
      this.state.dietSelectedIndex?.findIndex((obj) => obj === item.id) != -1
    ) {
      tempArr.splice(
        tempArr.findIndex((ele) => ele == item.id),
        1,
      );
      this.setState({
        dietSelectedIndex: tempArr,
      });
    } else {
      tempArr.push(item.id);
      for (const iterator of item.allergens) {
        if (tempAllergenArray.indexOf((item) => item == iterator) == -1) {
          tempAllergenArray.push(iterator);
        }
      }
      this.setState({
        dietSelectedIndex: tempArr,
        allergenSelectedIndex: [
          ...new Set([...this.state.allergenSelectedIndex, ...item.allergens]),
        ],
      });
    }
  };

  allergenOnPress = (item, index) => async () => {
    let getIndex = this.state.allergenSelectedIndex?.findIndex(
      (obj) => obj == item.id,
    );
    let tempSelectedAllergen = this.state.allergenSelectedIndex;

    console.log(getIndex);
    console.log(item.id);

    if (getIndex != -1) {
      tempSelectedAllergen.splice(getIndex, 1);
      this.setState({allergenSelectedIndex: tempSelectedAllergen});
    } else {
      tempSelectedAllergen.push(item.id);
      this.setState({allergenSelectedIndex: tempSelectedAllergen});
    }

    // let tempSelectedAllergen = this.state.allergenSelectedIndex;
    // if (getIndex != -1) {
    //   tempSelectedAllergen.splice(getIndex, 1);
    //   this.setState({allergenSelectedIndex: tempSelectedAllergen});
    // } else {
    //   tempSelectedAllergen.push(item.id);
    // }
  };

  render() {
    console.log(this.state.allergenSelectedIndex);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <Text style={styles.header}>My Diets</Text>
            <FlatList
              data={this.state.dietlst}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{padding: 2}} />}
              renderItem={({item, index}) => {
                return this.state.dietSelectedIndex?.findIndex(
                  (obj) => obj == item.id,
                ) != -1 ? (
                  <TouchableOpacity
                    onPress={this.dietOnPress(item, index)}
                    style={styles.dietListItemColor}>
                    <Text>{item.allergens_name}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={this.dietOnPress(item, index)}
                    style={styles.dietListItem}>
                    <Text>{item.allergens_name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
            <Text style={styles.header}>Allergen</Text>

            <FlatList
              numColumns={2}
              data={this.state.allergenslst}
              ItemSeparatorComponent={() => <View style={{padding: 2}} />}
              renderItem={({item, index}) => {
                return this.state.allergenSelectedIndex?.findIndex(
                  (obj) => obj == item.id,
                ) != -1 ? (
                  <TouchableOpacity
                    onPress={this.allergenOnPress(item, index)}
                    style={styles.dietListItemColor}>
                    <Text>{item.allergens_name}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={this.allergenOnPress(item, index)}
                    style={styles.dietListItem}>
                    <Text>{item.allergens_name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
            <Text style={styles.header}>Review Diet</Text>

            <FlatList
              numColumns={2}
              data={this.state.dietlst}
              ItemSeparatorComponent={() => <View style={{padding: 2}} />}
              renderItem={({item, index}) => {
                return this.state.dietSelectedIndex?.findIndex(
                  (obj) => obj == item.id,
                ) != -1 ? (
                  <TouchableOpacity
                    onPress={this.allergenOnPress(item, index)}
                    style={styles.dietListItemColor}>
                    <Text>{item.allergens_name}</Text>
                  </TouchableOpacity>
                ) : null;
              }}
            />
            <Text style={styles.header}>Review Allergen</Text>

            <FlatList
              numColumns={2}
              data={this.state.allergenslst}
              ItemSeparatorComponent={() => <View style={{padding: 2}} />}
              renderItem={({item, index}) => {
                return this.state.allergenSelectedIndex?.findIndex(
                  (obj) => obj == item.id,
                ) != -1 ? (
                  <TouchableOpacity
                    onPress={this.allergenOnPress(item, index)}
                    style={styles.dietListItemColor}>
                    <Text>{item.allergens_name}</Text>
                  </TouchableOpacity>
                ) : null;
              }}
            />
          </ScrollView>
        </SafeAreaView>
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
});

export default Task2;
