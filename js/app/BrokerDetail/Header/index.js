var React = require('react-native');
var {
    Text,
    View,
    Image,
    TouchableOpacity
} = React;

import SLDS from 'design-system-react-native';

import styles from './styles';

const getImageURL = (image_html)=>{
  if(!image_html) return;
  const splits = image_html.split(' ');
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
  return url;
};

module.exports = React.createClass({

  getDefaultProps(){
    return {
      sobj:{attributes:{}}
    };
  },

  render(){
    const imgURL = getImageURL(this.props.sobj['Picture_IMG__c']);
    const title = this.props.sobj['Title__c'];
    return (
        <View style={styles.container}>
          <View style={styles.bg}/>
            <View style={styles.imageRow}>
              <Image 
                style={styles.image}
                source={{uri: imgURL }}
              />
            </View>
            <Text style={styles.name}>{this.props.sobj.attributes.compactTitle}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
  }
});