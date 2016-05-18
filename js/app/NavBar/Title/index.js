var React = require('react-native');
var {
    Text,
    View,
    TouchableOpacity
} = React;

import SLDS from 'design-system-react-native';

import styles from './styles';


module.exports = React.createClass({

  getDefaultProps(){
    return {
      label:''
    };
  },

  render(){
    return (
        <SLDS.Text style={styles.text}>
          {this.props.label}
        </SLDS.Text>
    );
  }
});