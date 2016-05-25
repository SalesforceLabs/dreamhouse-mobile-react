'use strict';

import React, {
  Text,
  View
} from 'react-native';

import shallowEqual from 'shallowequal';

import {
  query,
  getByTypeAndId
} from '../../react.force';

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

const notify = (ids,sobjs,compactLayout,defaultLayout) => {
  if(subscribers && subscribers.length){
    subscribers.forEach((subscriber)=>{
      if(subscriber && subscriber.props && subscriber.props.id){
        const index = ids.indexOf(subscriber.props.id);
        if(index>-1){
          const sobj = sobjs[index];
          subscriber.setState({
            sobj:sobj,
            loading:false,
            compactLayout:compactLayout,
            defaultLayout:defaultLayout
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
      refreshDate:new Date(),
      update:true
    };
  },
  childContextTypes: {
    sobj: React.PropTypes.object,
    compactLayout: React.PropTypes.object,
    defaultLayout: React.PropTypes.object
  },
  getInitialState(){
    return {
      sobj:this.props.sobj?this.props.sobj:{Name:' ',attributes:{}},
      compactLayout:{},
      defaultLayout:{},
      loading:false
    };
  },
  getChildContext() {
    return {
      sobj: this.state.sobj,
      compactLayout:this.state.compactLayout,
      defaultLayout:this.state.defaultLayout
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
    getByTypeAndId(this.props.type,this.props.id)
    .then((opts)=>{
        if(opts.cachedSobj){
          this.setState({
            sobj:opts.cachedSobj,
            compactTitle: opts.cachedSobj.attributes.compactTitle,
            compactLayout:opts.compactLayout,
            defaultLayout:opts.defaultLayout,
          });
        }
      });
  },

  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  },
  componentWillReceiveProps(newProps){
    if(this.props.refreshDate !== newProps.refreshDate){
      this.getInfo();
    }
  },
  shouldComponentUpdate(nextProps, nextState){
    if(!this.props.update){
//      return false;
    }
    if(this.props.type !== nextProps.type){
      return true;
    }
    if(this.props.type !== nextProps.type){
      return true;
    }
    if(!shallowEqual(this.state.sobj, nextProps.sobj)){
      return true;
    }
    if(this.state.loading !== nextProps.loading){
      return true;
    }
    return false;
  }
});
