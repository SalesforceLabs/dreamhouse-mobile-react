import React from 'react';
import { RelevantItems } from 'react.force.datacontainer';
import styles from './styles';
import List from './List';

module.exports = React.createClass({
  render() {
    return (
      <RelevantItems type={'Broker__c'} style={styles.container}>
        <List />
      </RelevantItems>
    );
  },
});
