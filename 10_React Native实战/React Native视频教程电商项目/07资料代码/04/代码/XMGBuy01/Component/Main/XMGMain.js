/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// npm install

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // 判断当前运行的系统
    Navigator
} from 'react-native';


/**-----导入外部的组件类------**/
import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/XMGMore');


var Main = React.createClass({

    // 初始化函数(变量是可以改变的,充当状态机的角色)
    getInitialState(){
       return{
           selectedTab:'home' // 默认是第一个
       }
    },


    render() {
        return (
            <TabNavigator>
                {/*--首页--*/}
                <TabNavigator.Item
                  title="首页"
                  renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}/>} // 图标
                  renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                  onPress={()=>{this.setState({selectedTab:'home'})}}
                  selected={this.state.selectedTab === 'home'}
                >
                    <Navigator
                        initialRoute={{name:'首页',component:Home}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--商家--*/}
                <TabNavigator.Item
                    title="商家"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'shop'})}}
                    selected={this.state.selectedTab === 'shop'}
                >
                    <Navigator
                        initialRoute={{name:'商家',component:Shop}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--我的--*/}
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'mine'})}}
                    selected={this.state.selectedTab === 'mine'}
                >
                    <Navigator
                        initialRoute={{name:'我的',component:Mine}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--更多--*/}
                <TabNavigator.Item
                    title="更多"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'more'})}}
                    selected={this.state.selectedTab === 'more'}
                >
                    <Navigator
                        initialRoute={{name:'更多',component:More}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
});


const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    }
});

// 输出组件类
module.exports = Main;
