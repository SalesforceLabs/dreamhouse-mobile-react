'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    ScrollView,
    Linking
} = React;


import {CompactLayout} from 'react.force.layout';

import SLDS from 'design-system-react-native';

import styles from './styles';

import Header from './Header';

import {SobjContainer} from 'react.force.datacontainer';

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
        <SobjContainer id={sobj.Id} type={sobj.attributes.type}>
          <Header />
          <CompactLayout onLayoutTap={this.handleLayoutTap} />
        </SobjContainer>
      </ScrollView>
      </View>
    );
  },
});