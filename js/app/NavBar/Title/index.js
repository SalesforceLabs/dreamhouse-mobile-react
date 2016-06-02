import React from 'react-native';

import SLDS from 'react.force.base.theme';

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