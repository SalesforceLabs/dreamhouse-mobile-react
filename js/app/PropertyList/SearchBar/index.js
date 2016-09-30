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
 
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Theme from 'react.force.base.theme';
import styles from './styles';

module.exports = React.createClass({

  getInitialState () {
    return {
      searchTerm: ''
    };
  },

  _handleSearch(searchTerm) {
    if(this.props.onSearch){
      this.props.onSearch(searchTerm);
    }
  },

  _handleChange(value) {
    this.setState({searchTerm:value});
    if(value && value.length){
      setTimeout((value)=>{
        if(value && value === this.state.searchTerm){
          return this._handleSearch(value);
        }
      },500,value);
    }
    else{
      this._handleSearch('');
    }
  },

  _handleClear() {
    this.setState({searchTerm:''});
    if(this.props.onClose){
      this.props.onClose();
    }
  },

  _handleFocus() {
    this.refs.input.focus();
  },

  render () {
    return (
      <View style={styles.container}>
      <View style={styles.searchContainer}>

        <TextInput
          ref='input'
          autoFocus={true}
          autoCorrect={false}
          onChangeText={this._handleChange}
          placeholder="Search... "
          style={styles.searchBarInput}
          value={this.state.searchTerm}
        />
        <TouchableOpacity onPress={this._handleClear} style={styles.iconWrapper}>
          <Theme.Icons.Utility 
          key='close'
            name="close" 
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      </View>
    );
  }

});