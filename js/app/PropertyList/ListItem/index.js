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
    
    getDefaultProps(){
      return {
      }
    },

    contextTypes: {
      sobj: React.PropTypes.object
    },

    handlePress() {
      if(this.props.navigator){
        this.props.navigator.push({
          name:'propertyDetail',
          sobj: this.context.sobj
        });
      }
    },

    getDetail () {
      if(this.context.sobj['City__c'] && this.context.sobj['State__c'] && this.context.sobj['Price__c']){
        const city = this.context.sobj['City__c'];
        const state = this.context.sobj['State__c'];
        const price = this.context.sobj['Price__c'];
        return city+', '+state+' ● '+'$'+price;
      }
      return ' ';
    },

    shouldComponentUpdate(nextProps, nextState, nextContext){
      return nextContext.sobj !== this.context.sobj;
    },

    render () {
      const imgConfig = this.context.sobj['Thumbnail_IMG__c']?F.utils.parseImageHTML(this.context.sobj['Thumbnail_IMG__c']):'';
      const title = this.context.sobj['Title__c']?this.context.sobj['Title__c']:this.context.sobj.Name;
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