'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    ScrollView,
    Linking
} = React;

import F from '../../common/react.force';

import CompactLayout from '../../common/CompactLayout';
import DetailLayout from '../../common/DetailLayout';

import SLDS from 'design-system-react-native';

import styles from './styles';

import Header from './Header';

module.exports = React.createClass({    
  handleLayoutTap(layoutTapEvent){

    if(layoutTapEvent.eventType === 'phone'){
      const url = 'tel:'+layoutTapEvent.value;
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          alert('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    }
    else if(layoutTapEvent.eventType === 'email'){
      const url = 'mailto:'+layoutTapEvent.value;
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          alert('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    }

  },
  render() {
   const sobj = this.props.route.sobj;
    return (
      <View style={styles.container}>
      <ScrollView>
        <F.SobjContainer id={sobj.Id} type={sobj.attributes.type}>
          <Header />
          <CompactLayout onLayoutTap={this.handleLayoutTap} />
        </F.SobjContainer>
      </ScrollView>
      </View>
    );
  },
});