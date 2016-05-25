'use strict';

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import SLDS from 'design-system-react-native';

import styles from './styles';


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
          layoutItem:this.props.layoutItem,
          sobj:this.props.parentSobj,
          eventType:this.props.layoutItem.details.type,
          value:this.props.sobj[this.props.layoutItem.details.name]
        }
      );
    }
  },
  render() {
    const value = this.props.sobj[this.props.layoutItem.details.name];
    return (
      <SLDS.InputReadonly.ValueText>
        {value}
      </SLDS.InputReadonly.ValueText>
    );
  }
});
