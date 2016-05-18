var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    Navigator,
    TouchableOpacity
} = React;

module.exports = (config) => ({
  LeftButton: (route, navigator, index, navState) => {
    if(index<1){
      return <View ><TouchableOpacity onPress={() => {
        if(config && config.onMenuOpen){
          config.onMenuOpen();
        }
      }}><Text style={{padding:10}}>Menu</Text></TouchableOpacity></View>;
    }
    return <View ><TouchableOpacity onPress={() => navigator.pop()}><Text style={{padding:10}}>Back</Text></TouchableOpacity></View>;
  },
  RightButton (route, navigator, index, navState) {
    return null;
  },

  Title (route, navigator, index, navState) {
    return (<View ><Text > {route.name} </Text></View>);
  },
});