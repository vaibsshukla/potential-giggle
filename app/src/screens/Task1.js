/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Touchable,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ThoughtsListItem} from '../components/ThoughtsListItem';
import GoogleFit, {Scopes} from 'react-native-google-fit';
import {Assets} from '../../res';

let data = [
  {
    name: 'Event 1',
    image: Assets.common.profileImage,
    likes: '3.1k',
    share: '400',
    comment: '300',
  },
  {
    name: 'Event 1',
    image: Assets.common.profileImage,
    likes: '3.1k',
    share: '400',
    comment: '300',
  },
  {
    name: 'Event 1',
    image: Assets.common.profileImage,
    likes: '3.1k',
    share: '400',
    comment: '300',
  },
  {
    name: 'Event 1',
    image: Assets.common.profileImage,
    likes: '3.1k',
    share: '400',
    comment: '300',
  },
  {
    name: 'Event 1',
    image: Assets.common.profileImage,
    likes: '3.1k',
    share: '400',
    comment: '300',
  },
  {
    name: 'Event 1',
    image: Assets.common.profileImage,
    likes: '3.1k',
    share: '400',
    comment: '300',
  },
];

const Task1: () => React$Node = () => {
  useEffect(() => {}, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, backgroundColor: 'black'}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 20,
              }}>
              <View style={{flex: 0.3}} />
              <View>
                <Text style={styles.textStyle}>Jacquina Henry</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textStyle}>@Jacquina</Text>
                  <Image
                    source={Assets.common.hyperlink}
                    style={styles.image}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}>
                <Image source={Assets.common.hyperlink} style={styles.image} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginHorizontal: 20}}>
                <Image
                  style={styles.profileImage}
                  source={Assets.common.profileImage}
                />
              </View>
              <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <View style={{marginHorizontal: 20}}>
                  <View>
                    <Text style={styles.textStyle}>200K</Text>
                    <Text style={styles.textStyle}>Thoughts</Text>
                  </View>
                </View>
                <View style={styles.line} />
                <View style={{marginHorizontal: 20}}>
                  <View>
                    <Text style={styles.textStyle}>10K</Text>
                    <Text style={styles.textStyle}>Listeners</Text>
                  </View>
                </View>
                <View style={styles.line} />
                <View style={{marginHorizontal: 20}}>
                  <View>
                    <Text style={styles.textStyle}>20K</Text>
                    <Text style={styles.textStyle}>Listening</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.btn_align}>
              <TouchableOpacity style={styles.editProfile_btn}>
                <Text style={styles.textStyle}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 20,
            }}>
            <Image source={Assets.common.instagram} style={styles.image} />
            <Image source={Assets.common.instagram} style={styles.image} />
            <Image source={Assets.common.hyperlink} style={styles.image} />
          </View>
          <View style={styles.seperator} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 10,
            }}>
            <TouchableOpacity>
              <Image source={Assets.common.hyperlink} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Assets.common.hyperlink} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Assets.common.hyperlink} style={styles.image} />
            </TouchableOpacity>
          </View>
          <View style={styles.seperator} />
          <View
            style={{
              flexDirection: 'row',
              //   justifyContent: 'space-evenly',
              paddingVertical: 10,
            }}>
            <Text style={styles.textStyle_2}>All</Text>
            <Text style={styles.textStyle_2}>Motivation</Text>

            <Text style={styles.textStyle_2}>Lesson Learnt</Text>
          </View>
          <FlatList
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
            numColumns={2}
            data={data}
            renderItem={({}) => <ThoughtsListItem />}
            ItemSeparatorComponent={() => (
              <View style={{height: 10, width: 20}} />
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

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
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    height: 15,
    width: 15,
    marginTop: 3,
    marginHorizontal: 5,
    tintColor: 'white',
  },
  profileImage: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },
  line: {
    marginTop: 5,
    height: 30,
    width: 1,
    backgroundColor: 'white',
  },
  editProfile_btn: {
    height: 30,
    width: 120,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'white',
    justifyContent: 'center',
  },
  btn_align: {
    alignItems: 'center',
  },
  seperator: {
    marginTop: 5,
    height: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  textStyle_2: {
    color: 'white',
    marginHorizontal: 20,
  },
});

export default Task1;
