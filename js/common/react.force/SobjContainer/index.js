'use strict';

import React, {
  Text,
  View
} from 'react-native';

import getByTypeAndId from '../getByTypeAndId';

import Loader from './Loader';
import query from '../query';

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

const notify = (ids,sobjs) => {
  if(subscribers && subscribers.length){
    subscribers.forEach((subscriber)=>{
      if(subscriber && subscriber.props && subscriber.props.id){
        const index = ids.indexOf(subscriber.props.id);
        if(index>-1){
          const sobj = sobjs[index];
          subscriber.setState({
            sobj:sobj
          });
        }
      }
    });
  }
};

query.addListener(notify);

module.exports = React.createClass ({
  getDefaultProps(){
    return {
      type:null,
      id:null,
      refreshDate:new Date()
    };
  },
  getInitialState(){
    return {
      sobj:{},
      compactLayout:{},
      loading:false
    };
  },
  componentDidMount(){
    this.getInfo();
    subscribe(this);
  },
  componentWillUnmount(){
    unsubscribe(this);
  },
  handleDataLoad(){
    if(this.props.onData){
      this.props.onData({
        sobj:this.state.sobj,
        compactLayout:this.state.compactLayout
      });
    }
  },
  getInfo() {
    this.setState({loading:true});
    if(!this.props.type || !this.props.id){
      return;
    }
    const that = this;
    getByTypeAndId(this.props.type,this.props.id,true)
    .then((opts)=>{
      that.setState({
//        sobj:opts.sobj,
//        compactTitle: opts.sobj.attributes.compactTitle,
        compactLayout:opts.compactLayout,
        defaultLayout:opts.defaultLayout,
        loading:false
      });
      this.handleDataLoad();
    });
  },
  render() {
    if(!this.state.sobj || !this.state.sobj.attributes){
      return <Loader />;
    }
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
        sobj:this.state.sobj,
        compactLayout:this.state.compactLayout,
        defaultLayout:this.state.defaultLayout
     })
    );
    return (
      <View>
        {childrenWithProps}
      </View>
    )
  },
  componentWillReceiveProps(newProps){
    if(this.props.refreshDate !== newProps.refreshDate){
      this.getInfo();
    }
  },
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.type !== nextProps.type){
      return true;
    }
    if(this.props.type !== nextProps.type){
      return true;
    }
    if(this.state.sobj !== nextProps.sobj){
      return true;
    }
    if(this.state.loading !== nextProps.loading){
      return true;
    }
    return false;
  }
});
