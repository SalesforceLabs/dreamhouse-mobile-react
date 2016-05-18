var React = require('react-native');
var {
    Text,
    View,
    TouchableOpacity
} = React;

import MenuButton from './MenuButton';
import BackButton from './BackButton';
import Title from './Title';

import routes from '../routes';

module.exports = (config) => ({
  LeftButton: (route, navigator, index, navState) => {
    if(index<1){
      return <MenuButton onPress={config.onMenuOpen}/>;
    }
    return <BackButton onPress={() => navigator.pop()}/>;
  },
  RightButton (route, navigator, index, navState) {
    return null;
  },
  Title (route, navigator, index, navState) {
    const r = routes[route.name];
    return <Title label={r.label} />;
  }
});