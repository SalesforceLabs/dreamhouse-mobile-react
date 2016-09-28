import React from 'react';
import { Sobj, ScrollRefresh } from 'react.force.datacontainer';
import { CompactLayout } from 'react.force.layout';
import Header from './Header';
import doCall from './doCall';
import doEmail from './doEmail';
import styles from './styles';

module.exports = React.createClass({
  _handleLayoutTap(layoutTapEvent) {
    console.log(layoutTapEvent);
    if(layoutTapEvent.eventType === 'phone'){
      doCall(layoutTapEvent.value);
    }
    else if(layoutTapEvent.eventType === 'email'){
      doEmail(layoutTapEvent.value);
    }
  },
  render() {
    return (
      <Sobj type={this.props.route.sobj.attributes.type} id={this.props.route.sobj.Id} style={styles.container}>
        <ScrollRefresh>
          <Header />
          <CompactLayout onLayoutTap={this._handleLayoutTap} />
        </ScrollRefresh>
      </Sobj>
    );
  }
});
