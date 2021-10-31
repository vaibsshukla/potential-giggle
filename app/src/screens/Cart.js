/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import {CheckoutList} from '../components/CheckoutList';
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
import {AppButton} from '../components/AppButton';
import {Utility} from '../utils';

class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      cart: [],
    };
  }

  render() {
    console.log('dummy' + this.props.count);
    return (
      <>
        <SafeAreaView />
        <View style={{flex: 1, marginTop: 5}}>
          <View style={{flex: 0.05, flexDirection: 'row'}}>
            <View style={{flex: 0.2}}>
              <TouchableOpacity
                style={{paddingHorizontal: 20}}
                onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{height: 20, width: 20, tintColor: 'black'}}
                  source={Assets.common.back}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.8, alignItems: 'center', marginTop: 5}}>
              <Text style={{fontSize: 16}}>Cart</Text>
            </View>
            <View style={{flex: 0.2}} />
          </View>
          <View style={{flex: 0.7}}>
            <FlatList
              contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: '#f8f8f8',
              }}
              ListEmptyComponent={this.emptyItem}
              showsVerticalScrollIndicator={false}
              data={this.props.cart}
              renderItem={({item, index}) => {
                return (
                  <CheckoutList
                    onRemovePress={() =>
                      this.removeFromCart(item.obj, item.key)
                    }
                    cartList={this.props.cart}
                    onPress={() => this.addToCart(item.obj, item.key)}
                    onPressInc={() => this.increaseCount(item.obj, item.key)}
                    onPressDec={() => this.decreaseCount(item.obj, item.key)}
                    index={index}
                    item={item}
                  />
                );
              }}
            />
          </View>
          {this.footerComp()}
        </View>
      </>
    );
  }

  footerComp() {
    return (
      <>
        <View style={{flex: 0.15}}>
          <View
            style={{
              borderTopWidth: 1,
              paddingVertical: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Sub Total</Text>
            <Text>${this.subtotal()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Taxes (10%)</Text>
            <Text>${this.calculateTaxes()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 8,
              borderBottomWidth: 1,

              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Discount(2%)</Text>
            <Text> - ${this.calculateDiscount()}</Text>
          </View>
          <View
            style={{
              paddingVertical: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text>Total</Text>
            <Text>${this.calculateTotal()}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <AppButton
              buttonStyle={{width: 150}}
              onPress={() => Utility.sharedInstance.showToast('Checkout Toast')}
              isEnabled={true}
              borderRadius={5}
              buttonText={'Checkout'}
            />
          </View>
        </View>
      </>
    );
  }

  emptyItem() {
    return (
      <View>
        <Text>No Items in Cart</Text>
      </View>
    );
  }

  subtotal() {
    let subtotal = 0;
    for (const iterator of this.props.cart) {
      let price = 0;
      price = iterator.count * iterator.obj.price;
      subtotal = subtotal + price;
    }
    return subtotal;
  }

  calculateTaxes() {
    return this.subtotal() * 0.1;
  }

  calculateDiscount() {
    return this.subtotal() * (2 / 100);
  }

  calculateTotal() {
    return this.subtotal() + this.calculateTaxes() - this.calculateDiscount();
  }

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
const mapStateToProps = state => {
  return {
    cart: state.apiReducer.cart,
    count: state.apiReducer.count,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: cart => dispatch({type: ADD_TO_CART, cart}),
    removeFromCart: cart => dispatch({type: REMOVE_FROM_CART, cart}),
    increaseCounter: cart => dispatch({type: INCREASE_COUNT, cart}),
    decreaseCounter: cart => dispatch({type: DECREASE_COUNT, cart}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

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
    bottom: 10,
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
