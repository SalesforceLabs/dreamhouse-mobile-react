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

    shouldComponentUpdate (newProps,newStats) {
      if( newProps.sobj['Title__c'] !== this.props.sobj['Title__c'] ||
          newProps.sobj['Picture_IMG__c'] !== this.props.sobj['Picture_IMG__c'] ||
          newProps.sobj['Name'] !== this.props.sobj['Name']){
        return true;
      }
      return false;
    },

    render () {
      const imgConfig = F.utils.parseImageHTML(this.props.sobj['Picture_IMG__c']);
      const title = this.props.sobj['Title__c'];
      return (
        <TouchableOpacity onPress={this.handlePress}>
          <SLDS.Tiles.List 
            title={this.props.sobj.Name} 
            detail={title}
            image={<Image 
                  style={styles.image}
                  source={{uri: imgConfig.url }}
                />} />
        </TouchableOpacity>
      );
    }
});