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
    TouchableOpacity,
    StatusBar
} = React;

import SideMenu from 'react-native-side-menu';


import routes from './routes';

import PropertyList from './PropertyList';

import styles from './styles';

import MainMenu from './MainMenu';

const initialRoute = routes['initial'];

import NavigationBarRouteMapper from './NavBar/mapper';

import F from '../common/react.force';

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

  componentDidMount(){
    StatusBar.setBarStyle('light-content', true);
  },

  router(route, navigator) {
    this.state.navigator = navigator;
    const r = routes[route.name];
    if(r && r.comp){
      return <View style={styles.page}><r.comp route={route} navigator={navigator} /></View>;
    }
    return <View style={styles.page}><initialRoute.comp route={route} navigator={navigator} /></View>;
  },

  handleMenuOpen(){
    this.setState({isOpen:true});
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
            navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper({onMenuOpen:this.handleMenuOpen})} style={styles.navbar}/>}
        />
        <F.QueryCounter />
      </SideMenu>
    );
  }
});


