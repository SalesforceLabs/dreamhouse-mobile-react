import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

module.exports = React.createClass({
  _handlePress(){
    if(this.props.navigator){
      this.props.navigator.push({name:'PageA'});
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._handlePress}>
          <Text style={styles.text}>Page A</Text>
        </TouchableOpacity>
      </View>
    );
  },
});
