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
          <View style={styles.bg}/>
            <View style={styles.imageRow}>
              <Image 
                style={styles.image}
                source={{uri: imgConfig.url }}
              />
            </View>
            <Text style={styles.name}>{this.props.sobj.attributes.compactTitle}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
  }
});