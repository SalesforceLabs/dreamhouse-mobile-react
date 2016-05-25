'use strict';

import React from 'react-native';

const {
    ScrollView,
    Text,
    View,
    Image,
} = React;


import SLDS from 'design-system-react-native';

import styles from './styles';

import routes from '../routes';

import MenuItem from './MenuItem';

import Header from './Header';

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
        <Header />
        <ScrollView>
          { this.getMenuItems() }
        </ScrollView>
          <Logout label='Logout' onPress={this.handleLogout} />

      </View>
    );
  }
});