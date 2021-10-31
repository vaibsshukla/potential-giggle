/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {LiquorListItem} from '../components/LiquorListItem';
import LiquorData from '../../res/LiquorData';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ADD_TO_CART,
  COUNT,
  DECREASE_COUNT,
  INCREASE_COUNT,
  REMOVE_FROM_CART,
} from '../redux/Actions';
import {Assets} from '../../res';
import LinearGradient from 'react-native-linear-gradient';
import {Utility} from '../utils';
import ProgressView from '../components/ProgressView';

class LandingScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      cart: [],
      hasScrolled: false,
      itemsRendered: 0,
      paginationData: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    console.log('paginationData' + JSON.stringify(this.state.paginationData));
    return (
      <>
        <SafeAreaView />
        <View style={{flex: 1, marginTop: 5, marginHorizontal: 12}}>
          <View>
            <Text style={{fontSize: 30}}>Brewery Liquor</Text>
          </View>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              backgroundColor: '#f8f8f8',
              // alignItems: 'center',
              // justifyContent: 'center',
              marginHorizontal: 8,
            }}
            extraData={this.state}
            onScroll={this.onScroll}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            data={this.state.paginationData}
            initialNumToRender={8}
            numColumns={2}
            onEndReached={this.getData}
            onEndReachedThreshold={0.1}
            // keyExtractor={}
            renderItem={({item, index}) => {
              return (
                <LiquorListItem
                  onRemovePress={() => this.removeFromCart(item, index)}
                  cartList={this.props.cart}
                  onPress={() => this.addToCart(item, index)}
                  onPressInc={() => this.increaseCount(item, index)}
                  onPressDec={() => this.decreaseCount(item, index)}
                  index={index}
                  item={item}
                />
              );
            }}
          />
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            useAngle={true}
            angle={45}
            colors={['#de2235', '#c5242c', '#a22723']}
            style={[styles.cartContainer]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}
              // style={[styles.cartContainer]}
            >
              <Text
                style={{
                  color: 'white',
                  // position: 'relative',
                  top: 8,
                  left: 12,
                  fontSize: 10,
                }}>
                {this.props.count}
              </Text>

              <Image
                style={{
                  height: 25,
                  width: 25,
                  tintColor: 'white',
                  alignSelf: 'center',
                }}
                source={Assets.common.cart}
              />
            </TouchableOpacity>
          </LinearGradient>
          <View
            style={{
              backgroundColor: '#e6edf0',
              height: 40,
              width: 200,
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: 40,
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <TouchableOpacity>
              <Text style={{marginHorizontal: 20}}>Filter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginHorizontal: 20}}>
              <Text>Sort</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ProgressView animate={this.state.loading} />
      </>
    );
  }

  getData = () => {
    this.setState({loading: true});
    setTimeout(() => {
      let totalItems = LiquorData.length;
      let tempData = [];
      tempData = this.state.paginationData;
      let sliceData = LiquorData.slice(
        this.state.itemsRendered,
        this.state.itemsRendered + 8,
      );
      let result = tempData.concat(sliceData);
      this.setState({
        paginationData: result,
        itemsRendered: this.state.itemsRendered + 8,
        totalItems,
        loading: false,
      });
    }, 500);
  };

  addToCart(item, index) {
    // if Item is not available in cart
    let tempObj = {};
    tempObj.key = index;
    tempObj.count = 1;
    tempObj.obj = item;
    this.props.addToCart(tempObj);
  }
  removeFromCart(item, index) {
    let tempObj = {};
    tempObj.key = index;
    tempObj.count = 0;
    tempObj.obj = item;
    this.props.removeFromCart(tempObj);
  }

  increaseCount(item, index) {
    let tempObj = {};
    tempObj.key = index;
    tempObj.count = 1;
    tempObj.obj = item;
    this.props.increaseCounter(tempObj);
  }
  decreaseCount(item, index) {
    let tempObj = {};
    tempObj.key = index;
    tempObj.count = 1;
    tempObj.obj = item;
    this.props.decreaseCounter(tempObj);
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.apiReducer.cart,
    count: state.apiReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (cart) => dispatch({type: ADD_TO_CART, cart}),
    removeFromCart: (cart) => dispatch({type: REMOVE_FROM_CART, cart}),
    increaseCounter: (cart) => dispatch({type: INCREASE_COUNT, cart}),
    decreaseCounter: (cart) => dispatch({type: DECREASE_COUNT, cart}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
  },
  textStyle: {
    fontSize: 14,
  },
  cartContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 50,
    alignSelf: 'center',
    zIndex: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 25,
    paddingBottom: 10,
    paddingRight: 2,
  },
});
