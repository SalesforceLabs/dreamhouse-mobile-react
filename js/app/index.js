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

module.exports = React.createClass({
    render: function() {
        return (
            <Navigator
                style={styles.container}
                configureScene={() => Navigator.SceneConfigs.PushFromRight}
                initialRoute={initialRoute}
                renderScene={(route, navigator) => {
                  if(route && route.comp){
                    return <route.comp route={route} navigator={navigator} />;
                  }
                  return <initialRoute.comp route={route} navigator={navigator} />;
                }}
            />
        );
    }
});


