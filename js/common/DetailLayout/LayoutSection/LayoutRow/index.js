'use strict';

import React, {
  Text,
  View
} from 'react-native';

import LayoutItem from './LayoutItem';

module.exports = React.createClass ({

  getBody() {
    if(this.props.layoutItem && this.props.layoutItem.layoutItems  && this.props.layoutItem.layoutItems.length){
      return this.props.layoutItem.layoutItems.map((layoutItem)=>{
        return <LayoutItem sobj={this.props.sobj} layoutItem={layoutItem} />;
      });
    }
  },
  render() {
    return (
      <View>
        {this.getBody()}
      </View>
    )
  }
});
