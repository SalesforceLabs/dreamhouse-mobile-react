'use strict';

import React, {
  Text,
  View
} from 'react-native';

import SLDS from 'design-system-react-native';

import styles from './styles';

module.exports = React.createClass ({
  getDefaultProps(){
    return {
      sobj:{},
      layoutItem:{}
    };
  },
  render() {
    const val = this.props.sobj[this.props.layoutItem.value];
    if(val){
      return <SLDS.InputReadonly.ValueText>{val}</SLDS.InputReadonly.ValueText>;
    }
    return null;
  }
});
