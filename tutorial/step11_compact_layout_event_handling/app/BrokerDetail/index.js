import React from 'react';
import { View } from 'react-native';
import { Sobj } from 'react.force.datacontainer';
import { CompactLayout } from 'react.force.layout';
import Header from './Header';
import styles from './styles';

module.exports = React.createClass({
  handleLayoutTap(layoutTapEvent) {
    if(layoutTapEvent.eventType === 'phone'){
      alert('CALL: '+layoutTapEvent.value)
    }
    else if(layoutTapEvent.eventType === 'email'){
      alert('EMAIL: '+layoutTapEvent.value)
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <Sobj type={this.props.route.sobj.attributes.type} id={this.props.route.sobj.Id}>
          <Header />
          <CompactLayout onLayoutTap={this.handleLayoutTap}/>
        </Sobj>
      </View>
    );
  },
});
