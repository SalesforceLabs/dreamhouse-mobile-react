import React from 'react';
import { Image } from 'react-native';
import Theme from 'react.force.base.theme';
import {utils} from 'react.force.datacontainer';
import styles from './styles';

module.exports = React.createClass({
  contextTypes:{
    sobj: React.PropTypes.object
  },
  render() {
    const imgConfig = utils.parseImageHTML(this.context.sobj['Picture_IMG__c']);
    const title = this.context.sobj.Name;
    const detail = this.context.sobj['Title__c']?this.context.sobj['Title__c']:' ';
    return (
      <Theme.Tiles.List 
        title={title} 
        detail={detail}
        image={
          <Image 
            style={styles.image}
            source={{uri: imgConfig.url }}
          />} 
      />
    );
  },
});
