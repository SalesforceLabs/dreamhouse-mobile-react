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
      layoutItem:{},
      hideFields:[]
    };
  },
  getLayoutComponents(){
    const comps = [];
    if(this.props.layoutItem.layoutComponents){
      this.props.layoutItem.layoutComponents.map((layoutComponent)=>{
        if(layoutComponent && layoutComponent.value && this.props.hideFields.indexOf(layoutComponent.value)<0){
          comps.push (
            <LayoutComponent 
              sobj={this.props.sobj} 
              layoutItem={layoutComponent} 
              onLayoutTap={this.props.onLayoutTap}
              onSobjRequest={this.props.onSobjRequest}/>
          );          
        }
      });
    }
    return comps;
  },
  render() {
    const comps = this.getLayoutComponents();
    if(!comps.length){
      return;
    }
    return (
      <SLDS.InputReadonly label={this.props.layoutItem.label}>
        { comps }
      </SLDS.InputReadonly>
    )
  }
});
