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

  getDefaultProps(){
    return {
      sobj:{attributes:{}}
    };
  },

  render(){
    const imgConfig = F.utils.parseImageHTML(this.props.sobj['Picture_IMG__c']);
    const title = this.props.sobj['Title__c'];
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.image}
              source={{uri: imgConfig.url }}
            />
          </View>
          <SLDS.Text style={styles.name}>{title}</SLDS.Text>
          <SLDS.Text style={styles.title}>{this.props.sobj.attributes.compactTitle}</SLDS.Text>
        </View>
    );
  }
});