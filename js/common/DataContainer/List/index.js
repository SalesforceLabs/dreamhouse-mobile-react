'use strict';

import React, {
  Text,
  View
} from 'react-native';


import {
  query,
  getByTypeAndId
} from '../../react.force';

module.exports = React.createClass ({
  getDefaultProps(){
    return {
      type:null,
      fields:[],
      where:null,
      refreshDate:new Date()
    };
  },
  childContextTypes: {
    sobjs: React.PropTypes.array
  },
  getInitialState(){
    return {
      items:this.props.items?this.props.items:[],
      loading:false
    };
  },
  getChildContext() {
    return {
      items: this.state.items
    };
  },
  componentDidMount(){
    this.getData();
  },
  handleDataLoad(){
    if(this.props.onData){
      this.props.onData({
        items:this.state.items,
      });
    }
  },
  getData() {
    this.setState({loading:true});
    if(!this.props.type){
      return;
    }
/*
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
*/
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
      this.getData();
    }
  },
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.type !== nextProps.type){
      return true;
    }
    if(this.props.type !== nextProps.type){
      return true;
    }
    if(this.state.items !== nextProps.items){
      return true;
    }
    if(this.state.loading !== nextProps.loading){
      return true;
    }
    return false;
  }
});
