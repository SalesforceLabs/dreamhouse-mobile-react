'use strict';

import React, {
  View,
  Linking
} from 'react-native';

import {Sobj,ScrollRefresh} from 'react.force.datacontainer';

import {CompactLayout} from 'react.force.layout';

import Header from './Header';

import styles from './styles';

const doCall = (phone) => {
  const url = 'tel:'+phone;
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      alert('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
};

const doEmail = (email) => {
  const url = 'mailto:'+email;
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      alert('Can\'t handle url: ' + url);
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => console.error('An error occurred', err));
};

module.exports = React.createClass({
  handleLayoutTap(layoutTapEvent) {
    console.log(layoutTapEvent);
    if(layoutTapEvent.eventType === 'phone'){
      doCall(layoutTapEvent.value);
    }
    else if(layoutTapEvent.eventType === 'email'){
      doEmail(layoutTapEvent.value);
    }
  },
  render() {
    return (
      <Sobj type={this.props.route.sobj.attributes.type} id={this.props.route.sobj.Id} style={styles.container}>
        <ScrollRefresh>
          <Header />
          <CompactLayout onLayoutTap={this.handleLayoutTap} />
        </ScrollRefresh>
      </Sobj>
    );
  },
});
