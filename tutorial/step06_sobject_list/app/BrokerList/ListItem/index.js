import React from 'react';
import { ListView, View, Text } from 'react-native';
import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    sobj: React.PropTypes.object
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.context.sobj.Name}
        </Text>
      </View>
    );
  }
});
