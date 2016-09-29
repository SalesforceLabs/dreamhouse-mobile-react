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
    ScrollView,
    MapView
} from 'react-native';

import {SobjContainer,ScrollRefresh} from 'react.force.datacontainer';

import Header from './Header';

import Geocoder from 'react-native-geocoder';

import styles from './styles';

const normalizeUrl = (url) => {
  if(url.indexOf('http')!==0){
    return 'http://'+url;
  }
  return url;
};

module.exports = React.createClass({    

  getInitialState: function() {
    return {
      status: 'No Page Loaded',
      loading: true,
      position: {lat:0,lng:0},
      formattedAddress:''
    };
  },

  componentDidMount() {
    console.log(this.props.route);

    Geocoder.geocodeAddress(this.props.route.address).then(res => {
      if(res && res.length){
        const loc = res[0];
        if(loc && loc.position){
          this.setState({
            position:loc.position,
            formattedAddress:loc.formattedAddress
          });
        }
      }
    })
    .catch(err => console.log(err))
    
  },

  render() {
    const sobj = this.props.route.sobj;
    const region = {
      latitude: this.state.position.lat,
      longitude: this.state.position.lng,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    };
    const annotations = [{
      latitude: this.state.position.lat,
      longitude: this.state.position.lng,
      title: sobj.Name,
      subtitle: this.state.formattedAddress,
      animateDrop: true,
    }];
    if(!sobj || !sobj.attributes){
      return <View style={styles.container}></View>;
    }
    return (
      <View style={styles.container}>
        <SobjContainer id={sobj.Id} type={sobj.attributes.type}>
          <Header navigator={this.props.navigator} route={this.props.route} />
        </SobjContainer>
        <MapView
          style={{flex:1}}
          region={region}
          annotations={annotations}
          zoomEnabled={true}
          pitchEnabled={true}
          showsCompass={true}
        />
      </View>
    );
  },
});