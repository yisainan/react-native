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
  View
} from 'react-native';

class DTextDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} numberOfLines={5}>
            我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    width:375,
    backgroundColor:'red',
    fontSize: 20,
    textAlign: 'justify',
    marginTop: 25,
  }
});

AppRegistry.registerComponent('DTextDemo', () => DTextDemo);
