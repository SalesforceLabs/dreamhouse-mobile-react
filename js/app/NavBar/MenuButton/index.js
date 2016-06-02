import React from 'react-native';
const { TouchableOpacity } = React;

import SLDS from 'react.force.base.theme';

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