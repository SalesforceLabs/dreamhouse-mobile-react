'use strict';

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {RelevantItems} from 'react.force.datacontainer';

import styles from './styles';

import List from './List';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <RelevantItems type={'Broker__c'}>
          <List />
        </RelevantItems>
      </View>
    );
  },
});
