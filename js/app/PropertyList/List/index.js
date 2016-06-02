'use strict';

import React from 'react-native';
const {
    ListView,
} = React;
import SLDS from 'react.force.base.theme';
import {SobjContainer} from 'react.force.datacontainer';

import PropertyListItem from '../ListItem';

module.exports = React.createClass({

    contextTypes: {
      dataSource: React.PropTypes.object,
    },
    
    renderRow (sobj) {
      return (
        <SobjContainer key={sobj.Id} type={sobj.attributes.type} id={sobj.Id} sobj={sobj}>
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