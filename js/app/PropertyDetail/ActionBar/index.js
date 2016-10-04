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
import {
    View,
    Text,
    Image,
    Alert
} from 'react-native';

import Theme from 'react.force.base.theme';

import styles from './styles';

import { net,oauth } from 'react.force';

import ActionIcon from './ActionIcon';

module.exports = React.createClass({

  contextTypes: {
    sobj: React.PropTypes.object
  },

  getDefaultProps(){
    return {
    };
  },

  _handleFavorite(){
    if(this.props.favoriteId){
      this._doUnfavorite();
    }
    else{
      this._doFavorite();
    }
  },

  _getAddress(){
    return this.context.sobj['Address__c']+', '+this.context.sobj['City__c']+' '+this.context.sobj['State__c'];
  },

  _handleMap(){
    if(this.props.navigator){
      const address = this._getAddress();
      this.props.navigator.push({
        name:'mapViewer',
        sobj:this.context.sobj,
        address:address
      });
    }
  },

  _doFavorite(){
    oauth.getAuthCredentials(creds=>{
      const soql = "Select Id from Favorite__c Where User__c = '"+creds.userId+"' AND Property__c = '"+this.context.sobj.Id+"' LIMIT 1";
      net.query(
      soql,
      (response)=>{
        if(response && response.records && response.records.length){
          Alert.alert('Favorite','Property is already favorite');
        }
        else{
          Alert.alert('Favorite','Property added to your favorites');
          net.create(
            'Favorite__c',
            {'User__c':creds.userId,'Property__c':this.context.sobj.Id},
            (response)=>{
            },
            (err)=>{
              Alert.alert('Error','Unable to set favorite');
            }
          );
        }
      },
      (err)=>{
        console.log('ERROR: ',err);
      });
    });
  },

  _doUnfavorite(){
    oauth.getAuthCredentials(creds=>{
      net.del(
        'Favorite__c',
        this.props.favoriteId,
        (response)=>{
          Alert.alert('Favorite','Property removed to your favorites');
        },
        (err)=>{
          Alert.alert('Error','Unable to set unfavorite');
        }
      );
    });
  },

  render(){
    return (
      <View style={styles.container}>
        {this.props.favoriteId?null:<ActionIcon label='Favorite' iconName='favorite' onPress={this._handleFavorite} />}
        <ActionIcon label='Map' iconName='location' onPress={this._handleMap}/>
      </View>
    );
  }
});
