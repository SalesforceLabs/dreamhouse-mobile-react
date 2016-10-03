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

import React  from 'react';
import {
    View,
    Navigator,
    StatusBar
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import routes from './routes';
import PropertyList from './PropertyList';
import styles from './styles';
import MainMenu from './MainMenu';
import NavigationBarRouteMapper from './NavBar/mapper';


module.exports = React.createClass({

  getInitialState() {
    return {
      isOpen:false,
      isSearchOpen:false,
      navigator:null
    };
  },

  handleMenuPress(route) {
    this.setState({isOpen:false});
    this.state.navigator.replace(route);
  },

  componentDidMount(){
    StatusBar.setBarStyle('light-content', true);
  },

  router(route, navigator) {
    this.state.navigator = navigator;
    const r = routes[route.name];
    if(r && r.comp){
      return (
        <View style={styles.page}>
          <r.comp route={route} navigator={navigator} isSearchOpen={this.state.isSearchOpen} onSearchClose={this._handleSearchClose} />
        </View>
      );
    }
    return (
      <View style={styles.page}>
        <initialRoute.comp route={route} navigator={navigator} isSearchOpen={this.state.isSearchOpen} onSearchClose={this._handleSearchClose} />
      </View>
    );
  },

  _handleMenuOpen(){
    this.setState({
      isOpen:true
    });
  },

  _handleSearchOpen(){
    this.setState({
      isSearchOpen:true,
      isOpen:false
    });
  },

  _handleSearchClose(){
    this.setState({
      isSearchOpen:false,
      isOpen:false
    });
  },

  render() {
    return (
      <SideMenu 
        isOpen={this.state.isOpen}
        menu={<MainMenu onMenuPress={this.handleMenuPress} />}>
        <Navigator
            style={styles.container}
            configureScene={() => Navigator.SceneConfigs.PushFromRight}
            initialRoute={routes['welcome']}
            renderScene={this.router}
            navigationBar={<Navigator.NavigationBar routeMapper={NavigationBarRouteMapper({onMenuOpen:this._handleMenuOpen, onSearchOpen:this._handleSearchOpen})} style={styles.navbar}/>}
        />
      </SideMenu>
    );
  }
});


