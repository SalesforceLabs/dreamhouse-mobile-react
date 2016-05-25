'use strict';

import React from 'react-native';

const {
    ListView
} = React;


import {SobjContainer} from '../../../common/DataContainer';

import BrokerListItem from '../ListItem';


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
        <SobjContainer key={sobj.Id} type={sobj.attributes.type} id={sobj.Id} sobj={sobj}>
          <BrokerListItem route={this.props.route} navigator={this.props.navigator} />
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