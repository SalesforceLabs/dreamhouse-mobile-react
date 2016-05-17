'use strict';

import React, {
  Text,
  View
} from 'react-native';

import SLDS from 'design-system-react-native';

import LayoutComponent from '../../../../LayoutComponent';


module.exports = React.createClass ({

  getBody(){
    if(this.props.layoutItem.layoutComponents){
      return this.props.layoutItem.layoutComponents.map((layoutComponent)=>{
        return (
          <LayoutComponent 
            sobj={this.props.sobj} 
            layoutItem={layoutComponent} 
            onLayoutTap={this.props.onLayoutTap}
            onSobjRequest={this.props.onSobjRequest}/>
        );
      });
    }
  },

  render() {
    return (
      <SLDS.InputReadonly label={this.props.layoutItem.label}>
        {this.getBody()}
      </SLDS.InputReadonly>
    )
  }
});
