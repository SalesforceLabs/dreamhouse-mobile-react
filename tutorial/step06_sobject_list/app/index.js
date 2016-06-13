'use strict';

import React, {
  Text,
  View,
  Navigator,

} from 'react-native';

import styles from './styles';

import BrokerList from './BrokerList';

module.exports = React.createClass({
  renderScene(route,navigator){
    return <BrokerList navigator={navigator} route={route} />;
  },
  render() {
    return (
      <Navigator
        initialRoute={{name:'BrokerList'}}
        renderScene={this.renderScene}
      />
    );
  },
});
