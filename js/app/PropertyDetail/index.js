'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    ScrollView
} = React;

import CompactLayout from '../../common/CompactLayout';
import DetailLayout from '../../common/DetailLayout';

import {SobjContainer} from '../../common/DataContainer';

import SLDS from 'design-system-react-native';

import styles from './styles';

import Header from './Header';

module.exports = React.createClass({    

  getDefaultProps(){
    return {
    };
  },
  handleLayoutTap(layoutTapEvent){
    if(layoutTapEvent && layoutTapEvent.refSobj && layoutTapEvent.refSobj.attributes){
      if(layoutTapEvent.eventType === 'reference'){
        const type = layoutTapEvent.refSobj.attributes.type;
        if(type === 'Broker__c'){
          this.props.navigator.push({
            name:'brokerDetail',
            sobj: layoutTapEvent.refSobj
          });
        }
      }
    }
  },
  render() {
    const sobj = this.props.route.sobj;
    return (
      <View style={styles.container}>
        <ScrollView>
          <SobjContainer id={sobj.Id} type={sobj.attributes.type}>
            <Header />
            <CompactLayout onLayoutTap={this.handleLayoutTap}/>
          </SobjContainer>
        </ScrollView>
      </View>
    );
  },
});