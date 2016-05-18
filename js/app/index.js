'use strict';

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

import SideMenu from 'react-native-side-menu';


import routes from './routes';

import PropertyList from './PropertyList';

import styles from './styles';

import MainMenu from './MainMenu';

const initialRoute = routes['initial'];


const router = (route, navigator) => {
  const r = routes[route.name];
  if(r && r.comp){
    return <r.comp route={route} navigator={navigator} />;
  }
  return <initialRoute.comp route={route} navigator={navigator} />;
};


const NavigationBarRouteMapper = {
    LeftButton (route, navigator, index, navState) {
      if(index<1){
        return null;
      }
      return <View ><TouchableOpacity onPress={() => navigator.pop()}><Text style={{padding:10}}>Back</Text></TouchableOpacity></View>;
    },
    
    RightButton (route, navigator, index, navState) {
        return null;
    },

    Title (route, navigator, index, navState) {
        return (<View ><Text > {route.name} </Text></View>);
  },

};

const Menu = React.createClass({
  render: function() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
});


module.exports = React.createClass({
  render() {
    return (
      <SideMenu menu={<MainMenu />}>
        <Navigator
            style={styles.container}
            configureScene={() => Navigator.SceneConfigs.PushFromRight}
            initialRoute={initialRoute}
            renderScene={router}
            navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />}
        />
      </SideMenu>
    );
  }
});


