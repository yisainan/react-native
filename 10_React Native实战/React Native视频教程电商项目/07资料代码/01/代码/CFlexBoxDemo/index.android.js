/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**-------------第四个示例程序-----------------------**/

// 引入
var Dimensions = require('Dimensions');

class CFlexBoxDemo3 extends Component {
    render() {
        return (
            <View style={styles3.outViewStyle}>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>
            </View>
        );
    }
};

const styles3 = StyleSheet.create({
    outViewStyle:{
        // 占满屏幕
        flex:1,
        //  主轴方向居中
        justifyContent:'center',
        // 侧轴方向居中
        alignItems: 'center',
        // 背景
        backgroundColor:'red'
    }
});


AppRegistry.registerComponent('CFlexBoxDemo', () => CFlexBoxDemo3);

