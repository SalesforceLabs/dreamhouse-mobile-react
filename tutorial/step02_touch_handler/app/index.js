'use strict';

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  handlePress(){
    alert('Pressed!');
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.text}>Let's start coding!!</Text>
        </TouchableOpacity>
      </View>
    );
  },
});
