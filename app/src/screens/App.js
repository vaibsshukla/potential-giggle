/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Keyboard, SafeAreaView, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {MainStackNavigator} from '../navigation/MainStackNavigator';
import ProgressView from '../components/ProgressView';
import NoNetwork from '../components/NoNetwork';
import {Utility, NetworkManager} from '../utils/index';
import {constants as Constant} from '../../res/index';
import {connect} from 'react-redux';

// import LocationEnabler from 'react-native-location-enabler';

console.disableYellowBox = true;
class App extends Component {
  constructor(props) {
    super(props);
    Utility.sharedInstance.HOC = this;
    this.state = {
      isOverlayVisible: true,
      showProgressBar: false,
      initalRoute: '',
      reachability: false,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationContainer ref="navigator">
          {this.state.initalRoute != '' ? (
            <MainStackNavigator routeName={this.state.initalRoute} />
          ) : (
            <ProgressView animate={this.state.showProgressBar} />
          )}
        </NavigationContainer>
        {this.onRetryClicked && this.state.isOverlayVisible && (
          <NoNetwork
            onRetryClicked={() => {
              if (NetworkManager.networkManagerInstance.isInternetConnected) {
                this.setState({isOverlayVisible: false});
                this.onRetryClicked();
              } else {
                Utility.sharedInstance.showToast(
                  Constant.common.noInternetError,
                );
              }
            }}
          />
        )}
        <ProgressView animate={this.state.showProgressBar} />
      </View>
    );
  }

  async componentDidMount() {
    // const {
    //   requestResolutionSettings,
    //   PRIORITIES: {HIGH_ACCURACY},
    // } = LocationEnabler;

    // requestResolutionSettings({
    //   priority: HIGH_ACCURACY, // optional: default BALANCED_POWER_ACCURACY
    //   alwaysShow: true, // optional: default false
    //   needBle: true, // optional: default false
    // });
    Utility.sharedInstance.navigation = this.refs.navigator;
    // this.setDefaultFontFamily({ fontFamily: Platform.OS == 'ios' ? 'Roboto-Regular' : 'Roboto-Regular' })
    // await crashlytics()
    //   .setCrashlyticsCollectionEnabled(!this.state.enabled)
    //   .then(() =>
    //     this.setState({enabled: crashlytics().isCrashlyticsCollectionEnabled}),
    //   );
    // crashlytics().log('App mounted.');
    // crashlytics().recordError(new Error('App basket'));
    // crashlytics().sendUnsentReports();
    // crashlytics().crash();

    this.instantiateReachability();
    this.setState({initalRoute: 'TaskLandingPage'});
  }

  showHideProgressBar = (status) => {
    Keyboard.dismiss();
    this.setState({
      showProgressBar: status,
    });
  };

  showOverlay(parameter = {}) {
    this.onRetryClicked = parameter.onRetryClicked;
    Keyboard.dismiss();
    this.setState({
      isOverlayVisible: true,
    });
  }

  instantiateReachability() {
    const reachabilityCallback = () => null;
    NetworkManager.networkManagerInstance.reachabilityListener(
      reachabilityCallback,
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App

// import React, {Component} from 'react';
// import {View, Keyboard} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {MainStackNavigator} from '../navigation/MainStackNavigator';
// import ProgressView from '../components/ProgressView';
// import {Utility} from '../utils/index';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     Utility.sharedInstance.HOC = this;
//     this.state = {
//       isOverlayVisible: false,
//       showProgressBar: false,
//     };
//   }

//   showHideProgressBar = (status) => {
//     Keyboard.dismiss();
//     this.setState({
//       showProgressBar: status,
//     });
//   };

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <NavigationContainer>
//           <MainStackNavigator routeName={'Task2'} />
//         </NavigationContainer>
//         <ProgressView animate={this.state.showProgressBar} />
//       </View>
//     );
//   }
// }
