'use strict';

import React  from 'react';
import {
    AppRegistry,
    SnapshotViewIOS,
    ListView
} from 'react-native';

import routes from '../app/routes';
import { propertyListData } from './mockData';

console.disableYellowBox = true;

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const componentsToTest = [
  {
    name: 'PropertyList',
    component: routes.welcome.comp,
    props: {
      navigator: {},
      routes: routes
    }
  }
];

componentsToTest.forEach((componentData, index) => {
  let Snapshotter = React.createClass({
    render() {
      return (
        React.createElement(SnapshotViewIOS, null,
          React.createElement(componentData.component, componentData.props, null)
        )
      );
    }
  })

  AppRegistry.registerComponent(componentData.name, ()=> Snapshotter);
})
