var React = require('react-native');
var {
    Text,
    View,
    TouchableOpacity
} = React;


import styles from './styles';

import query from '../query';

let queryCounter = 0;

const notify = (ids,sobjs) => {
  queryCounter++;
  if(subscribers && subscribers.length){
    subscribers.forEach((subscriber)=>{
      subscriber.forceUpdate();
    });
  }
};

query.addListener(notify);

const subscribers = [];

const subscribe = (comp)=>{
  subscribers.push(comp)
};

const unsubscribe = (comp) => {
  const i = subscribers.indexOf(comp);
  if(i != -1) {
    subscribers.splice(i, 1);
  }
};

module.exports = React.createClass({

  getDefaultProps(){
    return {
      label:''
    };
  },
  componentDidMount(){
    subscribe(this);
  },
  componentWillUnmount(){
    unsubscribe(this);
  },
  render(){
    return (
        <View style={styles.container}><Text>QC: {queryCounter}</Text></View>
    );
  }
});