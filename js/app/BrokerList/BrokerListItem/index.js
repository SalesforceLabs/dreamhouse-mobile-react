'use strict';

import React from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio,
    TouchableOpacity
} = React;


import SLDS from 'design-system-react-native';

import styles from './styles';

import F from '../../../common/react.force';


module.exports = React.createClass({
    
    handlePress() {
      if(this.props.navigator){
        this.props.navigator.push({
          name:'brokerDetail',
          sobj: this.props.sobj
        });
      }
    },

    render () {
      const imgConfig = F.utils.parseImageHTML(this.props.sobj['Picture_IMG__c']);
      const title = this.props.sobj['Title__c'];
      return (
        <View>
          <TouchableOpacity onPress={this.handlePress}>
                <View style={styles.row}>
                <Image 
                  style={styles.image}
                  source={{uri: imgConfig.url }}
                />
                <View>
                  <Text numberOfLines={1}>
                   {this.props.sobj.Name}
                  </Text>
                </View>
                  <Text numberOfLines={1}>
                   {title}
                  </Text>
                </View>
                <View style={styles.cellBorder} />
        </TouchableOpacity>
        </View>
      );
    }
});