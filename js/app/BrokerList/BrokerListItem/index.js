'use strict';

import React from 'react-native';

const {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio,
    TouchableOpacity
} = React;


import SLDS from 'design-system-react-native';

import styles from './styles';

import F from '../../../common/react.force';


module.exports = React.createClass({

    contextTypes: {
      sobj: React.PropTypes.object
    },

    handlePress() {
      if(this.props.navigator){
        this.props.navigator.push({
          name:'brokerDetail',
          sobj: this.context.sobj
        });
      }
    },

    shouldComponentUpdate (nextProps,nextState,nextContext) {
      return nextContext.sobj != this.context.sobj;
    },

    render () {
      const imgConfig = F.utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
      const title = this.context.sobj.Name
      const detail = this.context.sobj['Title__c']?this.context.sobj['Title__c']:' ';
      return (
        <TouchableOpacity onPress={this.handlePress}>
          <SLDS.Tiles.List 
            title={title} 
            detail={detail}
            image={<Image 
                  style={styles.image}
                  source={{uri: imgConfig.url }}
                />} />
        </TouchableOpacity>
      );
    }
});