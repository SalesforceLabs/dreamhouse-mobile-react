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
    StyleSheet,
    Text,
    View,
    ListView,
    PixelRatio,
    ScrollView,
    Linking
} from 'react-native';


import { CompactLayout } from 'react.force.layout';

import styles from './styles';

import Header from './Header';

import {SobjContainer,ScrollRefresh} from 'react.force.datacontainer';

module.exports = React.createClass({    
  handleLayoutTap(layoutTapEvent){

    if(layoutTapEvent.eventType === 'phone'){
      const url = 'tel:'+layoutTapEvent.value;
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          alert('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    }
    else if(layoutTapEvent.eventType === 'email'){
      const url = 'mailto:'+layoutTapEvent.value;
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          alert('Can\'t handle url: ' + url);
        } else {
          return Linking.openURL(url);
        }
      }).catch(err => console.error('An error occurred', err));
    }

  },
  render() {
   const sobj = this.props.route.sobj;
    return (
      <SobjContainer id={sobj.Id} type={sobj.attributes.type} style={styles.container}>
        <ScrollRefresh>
          <Header />
          <CompactLayout onLayoutTap={this.handleLayoutTap} />
        </ScrollRefresh>
      </SobjContainer>
    );
  },
});