import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import BrokerList from './BrokerList';
import BrokerDetail from './BrokerDetail';

module.exports = {
  initial:{
    name:'propertyList',
    comp: PropertyList,
    label: 'Properties'
  },
  propertyList:{
    name:'propertyList',
    comp: PropertyList,
    label: 'Properties'
  },
  propertyDetail:{
    name:'propertyDetail',
    comp: PropertyDetail,
    label: 'Property'
  },
  brokerList:{
    name:'brokerList',
    comp: BrokerList,
    label: 'Brokers'
  },
  brokerDetail:{
    name:'brokerDetail',
    comp: BrokerDetail,
    label: 'Broker'
  }
};

module.exports.menu = ['propertyList','brokerList'];