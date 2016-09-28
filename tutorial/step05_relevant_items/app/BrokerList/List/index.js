import React from 'react';
import { ListView, View, Text } from 'react-native';
import { Sobj } from 'react.force.datacontainer';
import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    dataSource: React.PropTypes.object
  },
  _renderRow(sobj){
    return (
      <View style={styles.row}>
        <Text style={styles.text}>
          {sobj.Id}
        </Text>
      </View>
    );
  },
  render() {
    return (
      <ListView
        dataSource={this.context.dataSource}
        enableEmptySections={true}
        renderRow={this._renderRow}
      />
    );
  }
});
