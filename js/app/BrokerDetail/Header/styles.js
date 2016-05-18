'use strict';

var React = require('react-native');
var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    height:240
  },
  name: {
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color:'white',
    padding:10
  },
  imageRow:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:160,
  },
  titleRow:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:50
  },
  nameRow:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:50
  },
  image:{
    width:140,
    height:140,
    backgroundColor:'white',
    borderRadius:70,
    borderWidth: 4, 
    borderColor: 'white',
  },
  bg:{
    position:'absolute',
    bottom:0,
    left:10,
    right:10,
    height:150,
    backgroundColor:'green'
  }
});