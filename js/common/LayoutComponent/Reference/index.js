'use strict';

import React, {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import SLDS from 'design-system-react-native';

import styles from './styles';

import Link from './Link';

import Empty from './Empty';


import SobjContainer from '../../react.force/SobjContainer';

module.exports = React.createClass ({
  getDefaultProps(){
    return {
      sobj:{},
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

    if(referenceType === 'Group'){
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@: ');
      console.log('this.props.layoutItem.details: ');
      console.log(this.props.layoutItem.details);
    }

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
        />
      </SobjContainer>
    );
  }
});
