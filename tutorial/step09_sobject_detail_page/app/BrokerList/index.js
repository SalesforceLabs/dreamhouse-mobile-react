import React from 'react';
import { RelevantItems } from 'react.force.datacontainer';
import List from './List';
import styles from './styles';

module.exports = React.createClass({
  render() {
    return (
      <RelevantItems type={'Broker__c'} style={styles.container}>
        <List navigator={this.props.navigator} />
      </RelevantItems>
    );
  }
});
