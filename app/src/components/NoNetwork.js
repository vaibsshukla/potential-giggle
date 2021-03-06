import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Keyboard } from 'react-native';
import { Color, Assets, Strings } from '../../res/index';

export default class NoNetwork extends Component {
    componentDidMount() {
        Keyboard.dismiss()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.noInternetContainer}>
                    <Image source={Assets.common.noInternet} />
                    <Text style={styles.subHeader}>{Strings.noInternet.subHeader}</Text>
                    <Text style={styles.msg}>{Strings.noInternet.msg1}</Text>
                    <Text style={styles.msg}>{Strings.noInternet.msg2}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.props.onRetryClicked}>
                        <Text style={{ color: Color.white }}>{Strings.noInternet.btnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: Color.black,
    },
    noInternetContainer: {
        flex: 0.7,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 40,
        color: Color.white
    },
    msg: {

        fontSize: 14,
        lineHeight: 25,
        color: Color.white
    },
});
