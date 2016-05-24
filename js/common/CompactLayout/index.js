'use strict';

import React, {
  Text,
  View
} from 'react-native';

import SLDS from 'design-system-react-native';

import FieldItem from './FieldItem';

module.exports = React.createClass ({
  contextTypes: {
    sobj: React.PropTypes.object,
    compactLayout: React.PropTypes.object,
    defaultLayout: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      hideFields:[],
      onSobjRequest:null,
    };
  },
  getFieldItems(){
    if(this.context.compactLayout && this.context.compactLayout.fieldItems && this.context.compactLayout.fieldItems.length){
      return this.context.compactLayout.fieldItems.map((layoutItem,index)=>{
        if(index){
          return (
            <FieldItem 
            sobj={this.context.sobj} 
            layoutItem={layoutItem} 
            onLayoutTap={this.props.onLayoutTap}
            onSobjRequest={this.props.onSobjRequest} 
            hideFields={this.props.hideFields} />
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
