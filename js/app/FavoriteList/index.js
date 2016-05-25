'use strict';

import React from 'react-native';

import {ListContainer} from '../../common/DataContainer';

import List from './List';


module.exports = React.createClass({
    
    render () {
      return (
        <ListContainer type='Favorite__c' fields={['Property__c']}>
          <List navigator={this.props.navigator} route={this.props.route} />
        </ListContainer>
      );
    }

});