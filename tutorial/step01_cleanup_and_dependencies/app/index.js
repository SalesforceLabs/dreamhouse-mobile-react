'use strict';

import React, {
  Text,
  View,
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Let's start coding!</Text>
      </View>
    );
  },
});
