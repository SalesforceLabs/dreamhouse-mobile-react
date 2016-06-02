import React from 'react-native';
const {
    View,
    Image
} = React;

import Theme from 'react.force.base.theme';

import styles from './styles';

import {utils} from 'react.force.data';

module.exports = React.createClass({

  contextTypes: {
    sobj: React.PropTypes.object
  },

  getDefaultProps(){
    return {
    };
  },

  getImgConfig(){
    return utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
  },

  getName(){
    return this.context.sobj['Title__c'];
  },

  getDesc(){
    return this.context.sobj['Description__c'];
  },

  render(){
    const imgConfig = this.getImgConfig();
    const name = this.getName();
    const desc = this.getDesc();

    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.image}
              source={{uri: imgConfig.url }}
            />
          </View>
          <Theme.Text style={styles.name}>{name}</Theme.Text>
          <Theme.Text style={styles.desc}>{desc}</Theme.Text>
        </View>
    );
  }
});