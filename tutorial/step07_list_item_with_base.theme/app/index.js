import React from 'react';
import { Navigator } from 'react-native';
import BrokerList from './BrokerList';

module.exports = React.createClass({
  _renderScene(route,navigator){
    return <BrokerList navigator={navigator} route={route} />;
  },
  render() {
    return (
      <Navigator
        initialRoute={{name:'BrokerList'}}
        renderScene={this._renderScene}
      />
    );
  }
});
