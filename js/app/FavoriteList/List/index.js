/*
 Copyright (c) 2016, salesforce.com, inc. All rights reserved.
 
 Redistribution and use of this software in source and binary forms, with or without modification,
 are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this list of conditions
 and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of
 conditions and the following disclaimer in the documentation and/or other materials provided
 with the distribution.
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to
 endorse or promote products derived from this software without specific prior written
 permission of salesforce.com, inc.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
 WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

import React from 'react';

import {
    Text,
    View,
    ListView,
    SwipeableListView,
    RecyclerViewBackedScrollView,
    RefreshControl,
    TouchableOpacity,
    Alert
} from 'react-native';

import { SobjContainer } from 'react.force.datacontainer';

import PropertyListItem from '../../PropertyList/ListItem';

import normalizeDataSource from './normalizeDataSource';

import doUnfavorite from './doUnfavorite';

import styles from './styles';

module.exports = React.createClass({

  contextTypes: {
    dataSource: React.PropTypes.object,
    refreshData:React.PropTypes.func,
    listRefreshing:React.PropTypes.bool
  },

  getInitialState() {
    return {
      deletedIds:{},
      dataSource: SwipeableListView.getNewDataSource()
    };
  },

  _onRefresh() {
    if(this.context.refreshData){
      this.context.refreshData();
    }
  },

  _renderRow (sobj) {
    if(this.state.deletedIds[sobj.Id]){
      return <View />;
    }
    return (
      <SobjContainer key={sobj.Id} type='Property__c' id={sobj.Property__c}  style={styles.row} >
        <PropertyListItem route={this.props.route} navigator={this.props.navigator} />
      </SobjContainer>
    );
  },

  _updateDataSource(){
    const listDataSource = this.context.dataSource;
    const ds = normalizeDataSource(listDataSource,this.state.deletedIds);
    this.setState({dataSource : this.state.dataSource.cloneWithRowsAndSections(...ds)});
  },

  _renderQuickActions (rowData, sectionID, rowID) {
    return (<View style={styles.actionsContainer}>
      <TouchableOpacity onPress={() => {
        this.state.deletedIds[rowData.Id] = true;
        this._updateDataSource();
        doUnfavorite(rowData.Id);
      }}>
        <Text style={{padding:10,color:'white'}}>Unfavorive</Text>
      </TouchableOpacity>
    </View>);
  },

  render () {
    return (
      <SwipeableListView
        dataSource={this.state.dataSource}
        maxSwipeDistance={100}
        renderQuickActions={this._renderQuickActions}
        enableEmptySections={true}
        refreshControl={
          <RefreshControl
            refreshing={this.context.listRefreshing}
            onRefresh={this._onRefresh}
          />
        }
        renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        renderRow={this._renderRow} />
    );
  },

  componentDidUpdate(prevProps, prevState, prevContext) {
    if(prevContext.listRefreshing !== this.context.listRefreshing){
      this._updateDataSource();
    }
  }

});