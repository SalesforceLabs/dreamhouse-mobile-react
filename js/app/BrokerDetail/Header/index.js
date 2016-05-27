import React from 'react-native';
const {
    Text,
    View,
    Image,
    TouchableOpacity
} = React;

import SLDS from 'design-system-react-native';

import styles from './styles';

import F from 'react.force.data';

module.exports = React.createClass({

  contextTypes: {
    sobj: React.PropTypes.object
  },

  getDefaultProps(){
    return {
    };
  },

  render(){
    const imgConfig = F.utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
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