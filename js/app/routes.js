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

import Welcome from './Welcome';
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import FavoriteList from './FavoriteList';
import BrokerList from './BrokerList';
import BrokerDetail from './BrokerDetail';
import MyProfile from './MyProfile';
import Settings from './Settings';
import MapViewer from './MapViewer';
import UnderConstruction from './UnderConstruction';

module.exports = {
  welcome:{
    name:'welcome',
    comp: Welcome,
    label: 'Welcome',
  },
  homeSearchSection:{
    menuType:'sectionHeader',
    label: 'Home Search'
  },
  propertyList:{
    name:'propertyList',
    comp: PropertyList,
    label: 'Properties',
    icon:'custom85',
    iconCategory:'custom'
  },
  propertyDetail:{
    name:'propertyDetail',
    comp: PropertyDetail,
    label: 'Property',
  },
  favoriteList:{
    name:'favoriteList',
    comp: FavoriteList,
    label: 'Favorites',
    icon:'custom11',
    iconCategory:'custom'
  },
  brokerList:{
    name:'brokerList',
    comp: BrokerList,
    label: 'Brokers',
    icon: 'groups',
    iconCategory:'standard'
  },
  brokerDetail:{
    name:'brokerDetail',
    comp: BrokerDetail,
    label: 'Broker'
  },
  mortgageSection:{
    menuType:'sectionHeader',
    label: 'Mortgage'
  },
  preapproval:{
    name:'preapproval',
    comp: UnderConstruction,
    label: 'Get Pre-Approved',
    icon: 'approval',
    iconCategory:'action',
  },
  rates:{
    name:'rates',
    comp: UnderConstruction,
    label: 'Shop Rates',
    icon: 'custom17',
    iconCategory:'custom',
  },
  accountSection:{
    menuType:'sectionHeader',
    label: 'Account'
  },
  profile:{
    name:'profile',
    comp: MyProfile,
    label: 'My Profile',
    icon: 'user',
    iconCategory:'action',
  },
  settings:{
    name:'settings',
    comp: Settings,
    label: 'Settings',
    icon: 'custom',
    iconCategory:'standard',
    menuItemStyle:{marginTop:30}
  },
  mapViewer:{
    name:'mapViewer',
    comp: MapViewer,
    label: 'Map'
  }
};

module.exports.menu = [
  'homeSearchSection',
  'propertyList',
  'brokerList',
  'favoriteList',
  'mortgageSection',
  'preapproval',
  'rates',
  'accountSection',
  'profile',
  'settings'
];
