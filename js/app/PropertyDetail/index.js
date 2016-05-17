'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    NavigatorIOS
} = React;

import forceClient from '../../common/react.force/react.force.net.js';

import SLDS from 'design-system-react-native';

import styles from './styles';

module.exports = React.createClass({    
  render() {
    return (
      <View><Text>Property View</Text></View>
    );
  },
});