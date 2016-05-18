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


module.exports = React.createClass({

  getInitialState() {
    return {
      isOpen:false,
      navigator:null
    };
  },

  handleMenuPress(route) {
    this.setState({isOpen:false});
    this.state.navigator.replace(route);
  },

  router(route, navigator) {
    this.state.navigator = navigator;
    const r = routes[route.name];
    if(r && r.comp){
      return <r.comp route={route} navigator={navigator} />;
    }
    return <initialRoute.comp route={route} navigator={navigator} />;
  },

  render() {
    return (
      <SideMenu 
        isOpen={this.state.isOpen}
        menu={<MainMenu onMenuPress={this.handleMenuPress} />}>
        <Navigator
            style={styles.container}
            configureScene={() => Navigator.SceneConfigs.PushFromRight}
            initialRoute={initialRoute}
            renderScene={this.router}
            navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} />}
        />
      </SideMenu>
    );
  }
});


