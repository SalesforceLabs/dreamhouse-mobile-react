import React from 'react';
import { Navigator } from 'react-native';
import styles from './styles';
import PageA from './PageA';

module.exports = React.createClass({
  _renderScene(route,navigator){
    return <PageA navigator={navigator} route={route} />;
  },
  render() {
    return (
      <Navigator
        initialRoute={{name:'PageA'}}
        renderScene={this._renderScene}
      />
    );
  }
});
