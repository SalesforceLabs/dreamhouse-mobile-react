'use strict';

import React from 'react-native';
const {
    ListView,
} = React;
import SLDS from 'design-system-react-native';
import PropertyListItem from '../ListItem';
import {SobjContainer} from '../../../common/DataContainer';

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