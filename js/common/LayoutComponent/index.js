'use strict';

import React, {
  Text,
  View
} from 'react-native';

import SLDS from 'design-system-react-native';

import Component from './Component';

import Reference from './Reference';

import LayoutImage from './LayoutImage';


import styles from './styles';


module.exports = React.createClass ({
  getDefaultProps(){
    return {
      sobj:{},
      layoutItem:{}
    };
  },
  getComponents(){
    return this.props.layoutItem.components.map((component)=>{
      return <Component sobj={this.props.sobj} layoutItem={component} />;
    });
  },
  getValue() {
    const val = this.props.sobj[this.props.layoutItem.value];
    if(val){
      return val;
    }
    return '-';
  },
  getBody() {

    if(this.props.layoutItem && this.props.layoutItem.components){
      return this.getComponents();
    }
    if(this.props.layoutItem && this.props.layoutItem.details && this.props.layoutItem.details.calculatedFormula && this.props.layoutItem.details.calculatedFormula.indexOf('IMAGE') === 0){
      return <LayoutImage 
          sobj={this.props.sobj} 
          layoutItem={this.props.layoutItem} 
          onLayoutTap={this.props.onLayoutTap}
          onSobjRequest={this.props.onSobjRequest}/>;
    }
    if(this.props.layoutItem && this.props.layoutItem.details && this.props.layoutItem.details.type === 'reference'){
      return (
        <Reference 
          sobj={this.props.sobj} 
          layoutItem={this.props.layoutItem} 
          onLayoutTap={this.props.onLayoutTap}
          onSobjRequest={this.props.onSobjRequest}/>
      );
    }
    return <SLDS.InputReadonly.ValueText>{this.getValue()}</SLDS.InputReadonly.ValueText>;
  },
  render() {
    return (
      <View>
        {this.getBody()}
      </View>
    )
  }
});
