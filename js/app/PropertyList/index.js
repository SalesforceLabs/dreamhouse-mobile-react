'use strict';

import React from 'react-native';

const {
    ListView
} = React;

import {ListContainer,RelevantItems} from 'react.force.datacontainer';

import List from './List';

import styles from './styles';

module.exports = React.createClass({

  render () {
/*
    return (
      <ListContainer 
        type='Property__c' 
        fields={['Title__c']} 
//        where="City__c='Boston' OR City__c='Cambridge'"
        style={styles.container}>
        <List navigator={this.props.navigator} route={this.props.route} />
      </ListContainer>
    );
*/
    return (
      <RelevantItems type='Property__c' style={styles.container}>
        <List navigator={this.props.navigator} route={this.props.route} />
      </RelevantItems>
    );
  }

});