import React from 'react';
import { Navigator } from 'react-native';
import BrokerList from './BrokerList';
import BrokerDetail from './BrokerDetail';

module.exports = React.createClass({

  _renderScene(route,navigator){
    if(route && route.name && route.name === 'BrokerDetail'){
      return <BrokerDetail navigator={navigator} route={route} />;
    }
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
