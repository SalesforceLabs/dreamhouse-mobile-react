'use strict';

import React, {
  View,
  ListView
} from 'react-native';

import {forceClient} from 'react.force';

module.exports = React.createClass ({
  getDefaultProps(){
    return {
      type:null,
      refreshDate:new Date(),
      style:{}
    };
  },
  childContextTypes: {
    dataSource: React.PropTypes.object
  },
  getInitialState(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      loading:false,
      dataSource: ds.cloneWithRows([])
    };
  },
  getChildContext() {
    return {
      dataSource: this.state.dataSource
    };
  },
  componentDidMount(){
    this.getData();
  },
  getDataSource (items) {
    return this.state.dataSource.cloneWithRows(items);
  },
  getData() {
    this.setState({loading:true});
    forceClient.relevantItems([this.props.type],
      (response) => {
        const type = this.props.type;
        if(response && response.length){
          const typeItems = response[0];
          if(typeItems.recordIds && typeItems.recordIds.length){
            const items = typeItems.recordIds.map((recordId)=>{
              return {
                Id:recordId,
                attributes:{
                  type:type
                }
              }
            });
            this.setState({
              dataSource: this.getDataSource(items),
              loading:false
            });
            return;
          }
        }
        this.setState({
          dataSource: this.getDataSource([]),
          loading:false
        });
      });
  },

  render() {
    return (
      <View style={[this.props.style]}>
        {this.props.children}
      </View>
    )
  },
  componentWillReceiveProps(newProps){
    if(this.props.refreshDate !== newProps.refreshDate){
      this.getData();
    }
  },
});
