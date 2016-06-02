'use strict';

import React from 'react-native';

const {
    Image,
    TouchableOpacity
} = React;

import {utils} from 'react.force.data';

import Theme from 'react.force.base.theme';

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

    getTitle () {
      if(this.context.sobj['Title__c']){
        return this.context.sobj['Title__c'];
      }
      return this.context.sobj.Name;
    },

    getImgConfig () {
      if(this.context.sobj['Thumbnail_IMG__c']){
        return utils.parseImageHTML(this.context.sobj['Thumbnail_IMG__c']);
      }
      return {};
    },

    shouldComponentUpdate(nextProps, nextState, nextContext){
      return nextContext.sobj !== this.context.sobj;
    },


    render () {
      const imgConfig = this.getImgConfig();
      const title = this.getTitle();
      const detail = this.getDetail();
      return (
          <TouchableOpacity onPress={this.handlePress}>
          <Theme.Tiles.List 
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