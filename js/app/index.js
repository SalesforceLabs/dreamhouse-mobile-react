'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    Navigator
} = React;

import routes from './routes';

import PropertyList from './PropertyList';

import styles from './styles';

const initialRoute = routes['initial'];


const router = (route, navigator) => {
  const r = routes[route.name];
  if(r && r.comp){
    return <r.comp route={route} navigator={navigator} />;
  }
  return <initialRoute.comp route={route} navigator={navigator} />;
};


module.exports = React.createClass({
    render: function() {
        return (
            <Navigator
                style={styles.container}
                configureScene={() => Navigator.SceneConfigs.PushFromRight}
                initialRoute={initialRoute}
                renderScene={router}
            />
        );
    }
});


