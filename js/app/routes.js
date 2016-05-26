import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import FavoriteList from './FavoriteList';
import BrokerList from './BrokerList';
import BrokerDetail from './BrokerDetail';

module.exports = {
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
    icon:'check',
    iconCategory:'action'
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
  }
};

module.exports.menu = ['propertyList','brokerList','favoriteList'];