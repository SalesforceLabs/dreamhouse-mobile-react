'use strict';

import React from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    TouchableOpacity
} = React;


import SLDS from 'react.force.base.theme';

import styles from './styles';


module.exports = React.createClass({
    
    handlePress() {
      if(this.props.onPress){
        this.props.onPress(this.props.menuItem);
      }
    },

    getIconCompClass(iconCategory){
      if(iconCategory.toLowerCase() === 'standard'){
        return SLDS.Icons.Standard;
      }
      if(iconCategory.toLowerCase() === 'custom'){
        return SLDS.Icons.Custom;
      }
      if(iconCategory.toLowerCase() === 'utility'){
        return SLDS.Icons.Utility;
      }
      return SLDS.Icons.Action;
    },

    getImage(){
      const iconName = this.props.menuItem.icon;
      const iconCategory = this.props.menuItem.iconCategory;
      const IconComp = this.getIconCompClass(iconCategory);
      return <IconComp style={{width:40,height:40}} name={iconName} isRound={true} />;
    },

    render() {
      return (
          <TouchableOpacity onPress={this.handlePress}>

          <SLDS.Menus.ActionListItem 
            image={ this.getImage() }
            label={ this.props.menuItem.label} />
          </TouchableOpacity>
      );
    }
});