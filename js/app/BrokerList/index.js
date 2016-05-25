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

import {forceClient} from '../../common/react.force';

import {SobjContainer,ListContainer} from '../../common/DataContainer';


import SLDS from 'design-system-react-native';

import BrokerListItem from './ListItem';

import styles from './styles';

import List from './List';

module.exports = React.createClass({    
    render () {
      return (
        <ListContainer type='Broker__c' fields={['Name']} style={styles.container}>
          <List navigator={this.props.navigator} route={this.props.route} />
        </ListContainer>
      );
    }

});