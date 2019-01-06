/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput   
} from 'react-native';

class BTextInputDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
         <TextInput
             style={styles.inputStyle}
             // value={'我是默认文字'}
             keyboardType={'number-pad'}
             // 多行显示
             // multiline={true}
             // password={true}
             placeholder={'我是占位文字'}
             clearButtonMode={'always'}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  inputStyle:{
    marginTop:30,
    width:300,
    height:60,
    // 背景
    // backgroundColor:'black',
    // 边框
    borderWidth:1,
    borderColor:'#e8e8e8'
  }
});

AppRegistry.registerComponent('BTextInputDemo', () => BTextInputDemo);
