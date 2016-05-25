'use strict';

import React, {
  Text,
  View,
  TouchableOpacity
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
          eventType:this.props.layoutItem.details.type,
          value:this.props.sobj[this.props.layoutItem.details.name]
        }
      );
    }
  },
  render() {
    return (
      <TouchableOpacity 
        onPress={this.handlePress}>
        <View>
          <SLDS.InputReadonly.ValueText 
            style={{
              paddingLeft:22,
              color:'#0070d2'
            }}>
            {this.context.sobj.attributes.compactTitle?this.context.sobj.attributes.compactTitle:' '}
          </SLDS.InputReadonly.ValueText>
          <View 
            style={{
              position:'absolute',
              top:12,
              left:0,
              height:20,
              width:20,
            }}>
            <SLDS.Icons.Utility 
              name='link' 
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
