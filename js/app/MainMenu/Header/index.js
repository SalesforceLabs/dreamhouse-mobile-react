'use strict';

import React from 'react-native';

const {
    View,
    Image,
} = React;

import Theme from 'react.force.base.theme';

import styles from './styles';

module.exports = React.createClass({

  render () {
    return (
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Image style={styles.logo}
            source={require('image!logo')}
            resizeMode='contain' />
        </View>
        <Theme.Text style={styles.title}>D R E A M H O U Z Z</Theme.Text>
      </View>
    );
  }
});