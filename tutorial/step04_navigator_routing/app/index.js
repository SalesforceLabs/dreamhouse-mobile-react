import React from 'react';
import { Navigator } from 'react-native';
import PageA from './PageA';
import PageB from './PageB';

module.exports = React.createClass({
  renderScene(route,navigator){
    if(route && route.name && route.name === 'PageB'){
      return <PageB navigator={navigator} route={route} />;
    }
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
