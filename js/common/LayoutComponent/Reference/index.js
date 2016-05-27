'use strict';

import React, {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import SLDS from 'design-system-react-native';
import {SobjContainer} from 'react.force.datacontainer';


import styles from './styles';

import Link from './Link';

import Empty from './Empty';




module.exports = React.createClass ({
  getDefaultProps(){
    return {
      sobj:{attributes:{}},
      layoutItem:{}
    };
  },
  handlePress(){
    if(this.props.onLayoutTap){
      this.props.onLayoutTap(
        {
          sobj:this.props.parentSobj,
          layoutItem:this.props.layoutItem
        }
      );
    }
  },
  render() {
    const referenceId = this.props.sobj[this.props.layoutItem.details.name];
    const referenceType = this.props.layoutItem.details.referenceTo[this.props.layoutItem.details.referenceTo.length-1];

    if(!referenceType || !referenceType){
      return <Empty />
    }
    return (
      <SobjContainer
        type={referenceType}
        id={referenceId}
      >
        <Link 
          onPress={this.handlePress}
          onLayoutTap={this.props.onLayoutTap}
          layoutItem={this.props.layoutItem}
          parentSobj={this.props.sobj}
        />
      </SobjContainer>
    );
  }
});
