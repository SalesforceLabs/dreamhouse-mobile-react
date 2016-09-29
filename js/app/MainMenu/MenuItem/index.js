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
    Text,
    View,
    ListView,
    PixelRatio,
    TouchableOpacity
} from 'react-native';


import Theme from 'react.force.base.theme';

import styles from './styles';


module.exports = React.createClass({
    
    getDefaultProps(){
      style:{}
    },

    _handlePress() {
      if(this.props.onPress){
        this.props.onPress(this.props.menuItem);
      }
    },

    _getIconCompClass(iconCategory){
      if(iconCategory.toLowerCase() === 'standard'){
        return Theme.Icons.Standard;
      }
      if(iconCategory.toLowerCase() === 'custom'){
        return Theme.Icons.Custom;
      }
      if(iconCategory.toLowerCase() === 'utility'){
        return Theme.Icons.Utility;
      }
      return Theme.Icons.Action;
    },

    _getImage(){
      const iconName = this.props.menuItem.icon;
      const iconCategory = this.props.menuItem.iconCategory;
      const IconComp = this._getIconCompClass(iconCategory);
      return <IconComp style={{width:PixelRatio.get()*10,height:PixelRatio.get()*10}} name={iconName} isRound={true} />;
    },

    render() {
      return (
        <TouchableOpacity onPress={this._handlePress} style={styles.container}>
          <View style={styles.iconContainer}>
            { this._getImage() }
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label} numberOfLines={1} ellipsizeMode='tail' >{this.props.menuItem.label}</Text>
          </View>
        </TouchableOpacity>
      );

    }
});