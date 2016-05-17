'use strict';

import React, {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import SLDS from 'design-system-react-native';


module.exports = React.createClass ({
  handlePress(){
    if(this.props.onPress){
      this.props.onPress();
    }
  },
  render() {
    return (
      <TouchableHighlight 
        activeOpacity={1}
        underlayColor="rgb(210, 230, 255)"
        onPress={this.handlePress}>
        <View>
          <SLDS.InputReadonly.ValueText>
            {this.props.sobj.attributes.compactTitle}
          </SLDS.InputReadonly.ValueText>
        </View>
      </TouchableHighlight>
    );
  }
});
