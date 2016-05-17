'use strict';

import React, {
  Text,
  Image,
  View
} from 'react-native';

module.exports = React.createClass ({
  render() {
    const picURL = this.props.sobj[this.props.layoutItem.value];
    if(!picURL){
      return <View><Text> - </Text></View>;
    }
    const splits = picURL.split(' ');
    let url = null;
    let width = 50;
    let height = 50;

    splits.forEach((split)=>{
      if(split.toLowerCase().indexOf('src') === 0){
        url = split.substring(split.indexOf('\"')+1,split.lastIndexOf('\"'))
      }
      else if(split.toLowerCase().indexOf('width') === 0){
        width = parseInt(split.substring(split.indexOf('\"')+1,split.lastIndexOf('\"')));
      }
      else if(split.toLowerCase().indexOf('height') === 0){
        height = parseInt(split.substring(split.indexOf('\"')+1,split.lastIndexOf('\"')));
      }
    });

    return (
      <View>
        <Image source={{uri:url}} style={{width:width,height:height}}/>
      </View>
    );
  }
});
