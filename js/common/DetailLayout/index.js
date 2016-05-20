'use strict';

import React, {
  Text,
  View
} from 'react-native';

import SLDS from 'design-system-react-native';

import LayoutSection from './LayoutSection';

module.exports = React.createClass ({
  getDefaultProps(){
    return {
      sobj:{attributes:{}},
      defaultLayout:{}
    };
  },
  getLayoutSections(){
    if(this.props.defaultLayout && this.props.defaultLayout.detailLayoutSections && this.props.defaultLayout.detailLayoutSections.length){
      return this.props.defaultLayout.detailLayoutSections.map((layoutSection)=>{
        return (
          <LayoutSection 
          sobj={this.props.sobj} 
          layoutItem={layoutSection} 
          onLayoutTap={this.props.onLayoutTap}
          />
        );
      });
    }
  },
  render() {
    return (
      <View>
        {this.getLayoutSections()}
      </View>
    )
  }
});
