import React from 'react';
import { View } from 'react-native';
import {RelevantItems} from 'react.force.datacontainer';
import List from './List';
import styles from './styles';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <RelevantItems type={'Broker__c'}>
          <List navigator={this.props.navigator} />
        </RelevantItems>
      </View>
    );
  },
});
