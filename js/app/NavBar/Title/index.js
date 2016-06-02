import React from 'react-native';

import Theme from 'react.force.base.theme';

import styles from './styles';


module.exports = React.createClass({

  getDefaultProps(){
    return {
      label:''
    };
  },

  render(){
    return (
        <Theme.Text style={styles.text}>
          {this.props.label}
        </Theme.Text>
    );
  }
});