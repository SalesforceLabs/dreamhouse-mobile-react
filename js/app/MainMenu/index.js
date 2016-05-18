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
      alert('PRESS!');
/*
      if(this.props.navigator){
        this.props.navigator.push({
          name:'propertyDetail',
          sobj: this.props.sobj
        });
      }
*/
    },

    render () {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.handlePress}>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            <Text>Item 3</Text>
            <Text>Item 4</Text>
          </TouchableOpacity>
        </View>
      );
    }
});