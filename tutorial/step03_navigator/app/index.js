'use strict';

import React, {
  Text,
  View,
  Navigator,

} from 'react-native';

import styles from './styles';

import PageA from './PageA';

module.exports = React.createClass({
  renderScene(route,navigator){
    return <PageA navigator={navigator} route={route} />;
  },
  render() {
    return (
      <Navigator
        initialRoute={{name:'PageA'}}
        renderScene={this.renderScene}
      />
    );
  },
});
