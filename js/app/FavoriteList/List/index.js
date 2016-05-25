'use strict';

import React from 'react-native';

const {
    Text,
    View,
    ListView,
    PixelRatio,
    TouchableOpacity
} = React;

import {SobjContainer} from '../../../common/DataContainer';

import SLDS from 'design-system-react-native';

import PropertyListItem from '../../PropertyList/ListItem';


module.exports = React.createClass({

    contextTypes: {
      dataSource: React.PropTypes.object,
    },

    handlePress() {
      if(this.props.navigator){
        this.props.navigator.push({
          name:'propertyDetail',
        });
      }
    },

    renderRow (sobj) {
      return (
        <SobjContainer key={sobj.Id} type='Property__c' id={sobj.Property__c} >
          <PropertyListItem route={this.props.route} navigator={this.props.navigator} />
        </SobjContainer>
      );
    },

    render () {
      return (
          <ListView
            dataSource={this.context.dataSource}
            renderRow={this.renderRow} />
      );
    }

});