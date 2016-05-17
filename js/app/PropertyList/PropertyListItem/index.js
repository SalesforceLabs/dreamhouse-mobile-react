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
      if(this.props.navigator){
        this.props.navigator.push({
          name:'propertyDetail',
          sobj: this.props.sobj
        });
      }
    },

    render () {
      return (
        <View>
          <TouchableOpacity onPress={this.handlePress}>
            <View style={styles.row}>
            <SLDS.Icons.Utility name="like" />
              <Text numberOfLines={1}>
               {this.props.sobj.Name}
              </Text>
            </View>
            <View style={styles.cellBorder} />
          </TouchableOpacity>
        </View>
      );
    }
});