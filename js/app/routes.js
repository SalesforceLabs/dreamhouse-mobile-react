import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import FavoriteList from './FavoriteList';
import BrokerList from './BrokerList';
import BrokerDetail from './BrokerDetail';

module.exports = {
  initial:{
    name:'propertyList',
    comp: PropertyList,
    label: 'Properties',
    icon:'home'
  },
  propertyList:{
    name:'propertyList',
    comp: PropertyList,
    label: 'Properties',
    icon:'home'
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
    icon:'favorite'
  },
  brokerList:{
    name:'brokerList',
    comp: BrokerList,
    label: 'Brokers',
    icon: 'groups'
  },
  brokerDetail:{
    name:'brokerDetail',
    comp: BrokerDetail,
    label: 'Broker'
  }
};

module.exports.menu = ['propertyList','brokerList','favoriteList'];