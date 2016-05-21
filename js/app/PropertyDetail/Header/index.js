var React = require('react-native');
var {
    Text,
    View,
    Image,
    TouchableOpacity
} = React;

import SLDS from 'design-system-react-native';

import styles from './styles';

import F from '../../../common/react.force';

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
    const name = this.context.sobj['Title__c'];
    const desc = this.context.sobj['Description__c'];

    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.image}
              source={{uri: imgConfig.url }}
            />
          </View>
          <SLDS.Text style={styles.name}>{name}</SLDS.Text>
          <SLDS.Text style={styles.desc}>{desc}</SLDS.Text>
        </View>
    );
  }
});