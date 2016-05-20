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

import F from '../../../common/react.force';


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

    getDetail () {
      const city = this.props.sobj['City__c'];
      const state = this.props.sobj['State__c'];
      const price = this.props.sobj['Price__c'];
      return city+', '+state+' ● '+'$'+price;
    },

    shouldComponentUpdate(nextProps, nextState){
      if( nextProps.sobj['Thumbnail_IMG__c'] !== this.props.sobj['Thumbnail_IMG__c'] ||
          nextProps.sobj['Picture_IMG__c'] !== this.props.sobj['Picture_IMG__c'] ||
          nextProps.sobj['Name'] !== this.props.sobj['Name'] ||
          nextProps.sobj['City__c'] !== this.props.sobj['City__c'] ||
          nextProps.sobj['State__c'] !== this.props.sobj['State__c'] ||
          nextProps.sobj['Price__c'] !== this.props.sobj['Price__c']
        ){
        return true;
      }
      return false;
    },

    render () {
      const imgConfig = F.utils.parseImageHTML(this.props.sobj['Thumbnail_IMG__c']);
      const title = this.props.sobj['Title__c'];
      const detail = this.getDetail();
      return (
          <TouchableOpacity onPress={this.handlePress}>
          <SLDS.Tiles.List 
            title={title} 
            detail={detail}
            image={
              <Image 
                  style={styles.image}
                  source={{uri: imgConfig.url }} />
              }
            />
          </TouchableOpacity>
      );
    }
});