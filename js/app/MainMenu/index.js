'use strict';

import React from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    TouchableOpacity
} = React;


import SLDS from 'design-system-react-native';

import styles from './styles';

import routes from '../routes';

import MenuItem from './MenuItem';

module.exports = React.createClass({
    
  handleMenuItemPress(route) {
    if(this.props.onMenuPress){
      this.props.onMenuPress(route);
    }
  },

  getMenuItems () {
    return routes.menu.map((menuItem)=>{
      const r = routes[menuItem];
      return <MenuItem 
        navigator={this.props.navigator}
        route={this.props.route}
        onPress={this.handleMenuItemPress}
        menuItem={r} />;
    });
  },

  render () {
    return (
      <View style={styles.container}>
        { this.getMenuItems() }
      </View>
    );
  }
});