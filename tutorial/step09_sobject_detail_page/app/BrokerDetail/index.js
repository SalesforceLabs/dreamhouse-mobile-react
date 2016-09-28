import React from 'react';
import { View } from 'react-native';
import {Sobj} from 'react.force.datacontainer';
import Header from './Header';
import styles from './styles';

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Sobj type={this.props.route.sobj.attributes.type} id={this.props.route.sobj.Id}>
          <Header />
        </Sobj>
      </View>
    );
  },
});
