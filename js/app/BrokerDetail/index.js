'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    ScrollView
} = React;

import F from '../../common/react.force';

import CompactLayout from '../../common/CompactLayout';
import DetailLayout from '../../common/DetailLayout';

import SLDS from 'design-system-react-native';

import styles from './styles';

module.exports = React.createClass({    
  render() {
   const sobj = this.props.route.sobj;
    return (
      <View style={styles.container}>
      <ScrollView>
        <F.SobjContainer id={sobj.Id} type={sobj.attributes.type}>
          <DetailLayout />
        </F.SobjContainer>
      </ScrollView>
      </View>
    );
  },
});