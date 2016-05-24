'use strict';

import React from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    ListView,
    PixelRatio,
    TouchableOpacity
} = React;


import SLDS from 'design-system-react-native';

import styles from './styles';

import routes from '../routes';

import MenuItem from './MenuItem';

import Logout from './Logout';

import oauth from '../../common/react.force/react.force.oauth';

module.exports = React.createClass({
    
  handleMenuItemPress(route) {
    if(this.props.onMenuPress){
      this.props.onMenuPress(route);
    }
  },

  handleLogout(){
    oauth.logout();
  },

  getMenuItems () {
    return routes.menu.map((menuItem,index)=>{
      const r = routes[menuItem];
      return <MenuItem 
        key={'menu_'+index}
        navigator={this.props.navigator}
        route={this.props.route}
        onPress={this.handleMenuItemPress}
        menuItem={r} />;
    });
  },

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Image style={{width:60,heght:60}}
              source={require('image!logo')}
              resizeMode='contain' />

          </View>
            <SLDS.Text style={styles.title}>D R E A M H O U Z Z</SLDS.Text>

        </View>
        <ScrollView>
          { this.getMenuItems() }
        </ScrollView>
          <Logout label='Logout' onPress={this.handleLogout} />

      </View>
    );
  }
});