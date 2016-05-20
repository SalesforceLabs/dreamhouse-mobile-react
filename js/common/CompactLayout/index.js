'use strict';

import React, {
  Text,
  View
} from 'react-native';

import SLDS from 'design-system-react-native';

import FieldItem from './FieldItem';

module.exports = React.createClass ({
  getDefaultProps(){
    return {
      sobj:{attributes:{}},
      compactLayout:{},
      onSobjRequest:null
    };
  },
  getFieldItems(){
    if(this.props.compactLayout && this.props.compactLayout.fieldItems && this.props.compactLayout.fieldItems.length){
      return this.props.compactLayout.fieldItems.map((layoutItem,index)=>{
        if(index){
          return (
            <FieldItem 
            sobj={this.props.sobj} 
            layoutItem={layoutItem} 
            onLayoutTap={this.props.onLayoutTap}
            onSobjRequest={this.props.onSobjRequest} />
          );
        }
      });
    }
  },
  render() {
    return (
      <View>
        {this.getFieldItems()}
      </View>
    )
  }
});
