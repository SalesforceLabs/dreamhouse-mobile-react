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

import PropertyList from './PropertyList';

import styles from './styles';

module.exports = React.createClass({
    render: function() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{
                    title: 'Mobile SDK Sample App',
                    component: PropertyList,
                }}
                renderScene={(route, navigator) => {
                  return <PropertyList route={route} navigator={navigator} />;
                }}
            />
        );
    }
});


