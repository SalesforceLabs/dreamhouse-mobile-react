import React from 'react';
import { Text, View, Image } from 'react-native';
import { Sobj, utils } from 'react.force.datacontainer';
import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    sobj:React.PropTypes.object
  },
  getName() {
    if(this.context.sobj && this.context.sobj.Name){
      return this.context.sobj.Name;
    }
    return ' ';
  },
  render(){
    const imgConfig = utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
    const title = this.context.sobj['Title__c'];
    return (
      <View style={styles.container}>
        <View style={styles.bg}/>
          <View style={styles.imageRow}>
            <Image 
              style={styles.image}
              source={{uri: imgConfig.url }}
            />
          </View>
          <Text style={styles.name}>{this.context.sobj.attributes.compactTitle}</Text>
          <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
});
