'use strict';

import React, {
  Text,
  View
} from 'react-native';

import SLDS from 'design-system-react-native';

import LayoutComponent from '../../LayoutComponent';

import styles from './styles';

module.exports = React.createClass ({
  getDefaultProps(){
    return {
      sobj:{},
      layoutItem:{}
    };
  },
  getLayoutComponents(){
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
        {this.getLayoutComponents()}
      </SLDS.InputReadonly>
    )
  }
});
