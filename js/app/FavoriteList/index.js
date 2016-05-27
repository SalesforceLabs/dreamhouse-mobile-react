'use strict';

import React from 'react-native';

import {ListContainer} from 'react.force.datacontainer';

import List from './List';

import styles from './styles';

module.exports = React.createClass({
    
    render () {
      return (
        <ListContainer type='Favorite__c' fields={['Property__c']} style={styles.container}>
          <List navigator={this.props.navigator} route={this.props.route} />
        </ListContainer>
      );
    }

});