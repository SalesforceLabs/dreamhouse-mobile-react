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


import Theme from 'react.force.base.theme';

import styles from './styles';


module.exports = React.createClass({
    
    handlePress() {
      if(this.props.onPress){
        this.props.onPress();
      }
    },

    render() {
      return (
          <TouchableOpacity style={styles.container} onPress={this.handlePress}>
          <Theme.Menus.ActionListItem 
            image={ <Theme.Icons.Utility style={{width:20,height:20,margin:10,}} name='logout' isRound={true} /> }
            label={ this.props.label} />
          </TouchableOpacity>
      );
    }
});