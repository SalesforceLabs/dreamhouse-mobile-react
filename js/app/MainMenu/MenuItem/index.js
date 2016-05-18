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


module.exports = React.createClass({
    
    handlePress() {
      if(this.props.onPress){
        this.props.onPress(this.props.menuItem);
      }
    },

    render() {
      return (
        <View>
          <TouchableOpacity onPress={this.handlePress}>
            <Text>{this.props.menuItem.label}</Text>
          </TouchableOpacity>
        </View>
      );
    }
});