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
  View,
  Text,
  TextInput,
  ListView,
  LayoutAnimation
} from 'react-native';

import { ListContainer, SearchQueryList } from 'react.force.datacontainer';

import List from './List';

import SearchBar from './SearchBar';

import styles from './styles';

module.exports = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    };
  },

  _handleSearch (searchTerm) {
    this.setState({searchTerm:searchTerm});
  },

  _handleSearchClose () {
    this.setState({
      searchTerm:''
    });
    if(this.props.onSearchClose){
      this.props.onSearchClose();
    }
  },

  _renderList () {
    if(this.state.searchTerm && this.state.searchTerm.length>3){
      return (
        <SearchQueryList
          type='Property__c'
          searchTerm={this.state.searchTerm}
          style={{flex:1}}>
          <List navigator={this.props.navigator} route={this.props.route} />
        </SearchQueryList>
      );
    }
    return (
      <ListContainer
        type='Property__c'
        style={styles.container}>
        <List navigator={this.props.navigator} route={this.props.route} />
      </ListContainer>
    );
  },

  _renderSearchBar () {
    if(this.props.isSearchOpen){
      return <SearchBar onSearch={this._handleSearch} onClose={this._handleSearchClose}/>
    }
  },

  componentWillReceiveProps (nextProps) {
    if(nextProps.isSearchOpen !== this.props.isSearchOpen){
      if(nextProps.isSearchOpen){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      }
      else{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      }
    }
  },

  render () {
    return (
      <View style={styles.container}>
        { this._renderSearchBar() }
        { this._renderList() }
      </View>
    );
  }
});
