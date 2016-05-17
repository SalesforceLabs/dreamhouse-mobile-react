'use strict';

import React, {
  Text,
  View
} from 'react-native';

import LayoutRow from './LayoutRow';

module.exports = React.createClass ({

  getBody() {
    if(this.props.layoutItem && this.props.layoutItem.layoutRows  && this.props.layoutItem.layoutRows.length){
      return this.props.layoutItem.layoutRows.map((layoutRow)=>{
        return <LayoutRow sobj={this.props.sobj} layoutItem={layoutRow} />;
      });
    }
  },
  render() {
    return (
      <View>
        { this.getBody() }
      </View>
    )
  }
});
