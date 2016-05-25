'use strict';

import React from 'react-native';

const {
    ListView
} = React;

import {ListContainer} from '../../common/DataContainer';

import List from './List';

module.exports = React.createClass({

    render () {
      return (
        <ListContainer type='Property__c' fields={['Title__c']}>
          <List navigator={this.props.navigator} route={this.props.route} />
        </ListContainer>
      );
    }

});