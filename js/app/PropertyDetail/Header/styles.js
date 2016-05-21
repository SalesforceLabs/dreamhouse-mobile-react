'use strict';

var React = require('react-native');
var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    height:330
  },
  name: {
    textAlign:'left',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    fontSize:18
  },
  desc: {
    textAlign:'left',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingBottom:14,
    paddingLeft:10,
    fontSize:12
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  },
  bg:{
    position:'absolute',
    bottom:0,
    left:10,
    right:10,
    height:120,
    backgroundColor:'#81ca2b'
  }
});