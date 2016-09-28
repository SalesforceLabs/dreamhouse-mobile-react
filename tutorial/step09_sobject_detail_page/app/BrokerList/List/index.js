import React from 'react';
import { ListView } from 'react-native';
import { Sobj } from 'react.force.datacontainer';
import ListItem from '../ListItem';
import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    dataSource: React.PropTypes.object
  },
  renderRow(sobj){
    return (
      <Sobj id={sobj.Id} type={sobj.attributes.type}>
        <ListItem navigator={this.props.navigator} />
      </Sobj>
    );
  },
  render() {
    return (
      <ListView
        dataSource={this.context.dataSource}
        enableEmptySections={true}
        renderRow={this.renderRow}
      />
    );
  },
});
