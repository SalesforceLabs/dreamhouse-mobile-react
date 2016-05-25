'use strict';

import React from 'react-native';

const {
    ListView
} = React;

import {ListContainer} from '../../common/DataContainer';

import List from './List';

import styles from './styles';

module.exports = React.createClass({

  render () {
    return (
      <ListContainer type='Property__c' fields={['Title__c']} style={styles.container}>
        <List navigator={this.props.navigator} route={this.props.route} />
      </ListContainer>
    );
  }

});