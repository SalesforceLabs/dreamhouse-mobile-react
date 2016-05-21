'use strict';

import React, {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import SLDS from 'design-system-react-native';


module.exports = React.createClass ({
  contextTypes: {
    sobj: React.PropTypes.object,
    compactLayout: React.PropTypes.object,
    defaultLayout: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      sobj:{attributes:{compactTitle:' '}}
    };
  },
  handlePress(){
    if(this.props.onLayoutTap){
      this.props.onLayoutTap(
        {
          refSobj:this.context.sobj,
          layoutItem:this.props.layoutItem,
          sobj:this.props.parentSobj,
          eventType:this.props.layoutItem.details.type
        }
      );
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
            {this.context.sobj.attributes.compactTitle?this.context.sobj.attributes.compactTitle:' '}
          </SLDS.InputReadonly.ValueText>
        </View>
      </TouchableHighlight>
    );
  }
});
