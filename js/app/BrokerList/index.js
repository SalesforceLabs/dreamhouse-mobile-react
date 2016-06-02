'use strict';

import React from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    TouchableOpacity
} = React;

import {RelevantItems} from 'react.force.datacontainer';


import SLDS from 'react.force.base.theme';

import BrokerListItem from './ListItem';

import styles from './styles';

import List from './List';

module.exports = React.createClass({    
    render () {
/*
      return (
        <ListContainer type='Broker__c' fields={['Name']} style={styles.container}>
          <List navigator={this.props.navigator} route={this.props.route} />
        </ListContainer>
      );
*/
      return (
        <RelevantItems type='Broker__c' style={styles.container}>
          <List navigator={this.props.navigator} route={this.props.route} />
        </RelevantItems>
      );
    }

});