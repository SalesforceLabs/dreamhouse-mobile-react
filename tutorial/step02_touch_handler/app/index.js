import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

module.exports = React.createClass({
  _handlePress(){
    alert('Pressed!');
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._handlePress}>
          <Text style={styles.text}>Let's start coding!!</Text>
        </TouchableOpacity>
      </View>
    );
  },
});
