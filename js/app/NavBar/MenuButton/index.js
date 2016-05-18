var React = require('react-native');
var {
    Text,
    View,
    TouchableOpacity
} = React;

import SLDS from 'design-system-react-native';

import styles from './styles';

module.exports = React.createClass({
  handlePress(){
    if(this.props.onPress){
      this.props.onPress();
    }
  },
  render(){
    return (
        <TouchableOpacity onPress={this.handlePress}>
          <SLDS.Icons.Utility 
            name="rows" 
            style={styles.icon} 
            iconColor='#ffffff' />
        </TouchableOpacity>
    );
  }
});