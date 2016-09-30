'use strict'

import React from 'react';
import mockery from 'mockery';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import {sobjData, credsData} from '../../../../testLib/mockData';

describe('<ActionBar/>', () => {
  let ActionBar,
      netQueryCalled = false;

  // mock react.force module
  before(()=>{
    global.__DEV__ = true;

    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: false
    });

    const forceStub = {
      oauth: {
        getAuthCredentials :function(success, fail){
          success(credsData);
        }
      },
      net: {
        query: function(soql, callback, error) {
          netQueryCalled = true;
          callback({"records":[],"done":true,"totalSize":0});
        },
        create: function(objtype, fields, callback, error) {
          callback({"id":"a01000000000000000","success":true,"errors":[]});
        }
      }
    }

    mockery.registerMock('react.force', forceStub);

    ActionBar = require('../index');
    netQueryCalled = false;
  })

  after(()=>{
    mockery.disable();
  })

  it('should send fav query when fav icon is pressed', () => {
    let navigator = [],
        routes = {
        },
        context = {
          sobj : sobjData
        };

    const wrapper = shallow(<ActionBar navigator={navigator} routes={routes}/>, {context});

    const favIcon = wrapper.findWhere(node => node.prop('label') === 'Favorite');
    favIcon.simulate('press');
    wrapper.update();

    expect(netQueryCalled).to.equal(true);
  });

  it('should push map viewer when map icon is pressed', ()=>{
    let navigator = [],
        routes = {
        },
        context = {
          sobj : sobjData
        };

    const wrapper = shallow(<ActionBar navigator={navigator} routes={routes}/>, {context});

    const mapIcon = wrapper.findWhere(node => node.prop('label') === 'Map');
    mapIcon.simulate('press');
    wrapper.update();

    expect(navigator.length).to.equal(1);
    expect(navigator[0].name).to.equal('mapViewer');
  })
});
