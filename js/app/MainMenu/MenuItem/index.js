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
          <TouchableOpacity onPress={this.handlePress}>
          <SLDS.Tiles.List 
            title={this.props.menuItem.label} 
            image={<SLDS.Icons.Utility name={this.props.menuItem.icon} style={styles.image} />}
            />
          </TouchableOpacity>
      );
    }
});