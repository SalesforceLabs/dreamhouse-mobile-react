var React = require('react-native');
var {
    Text,
    View,
    TouchableOpacity
} = React;

import MenuButton from './MenuButton';
import BackButton from './BackButton';


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
    return (<View ><Text > {route.name} </Text></View>);
  }
});