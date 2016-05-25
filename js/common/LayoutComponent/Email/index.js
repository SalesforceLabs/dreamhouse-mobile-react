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
//    const referenceType = this.props.layoutItem.details.referenceTo[this.props.layoutItem.details.referenceTo.length-1];
    return (
      <TouchableOpacity 
        onPress={this.handlePress}>
        <View>
            <SLDS.InputReadonly.ValueText 
              style={{
                paddingLeft:22,
                color:'#0070d2'
              }}>
              {value}
            </SLDS.InputReadonly.ValueText>
            <View 
              style={{
                position:'absolute',
                top:18,
                left:0,
                height:20,
                width:20,
              }}>
              <SLDS.Icons.Utility 
                name='email' 
                style={{
                  width:16,
                  height:16
                }} />
            </View>

        </View>
      </TouchableOpacity>
    );
  }
});
