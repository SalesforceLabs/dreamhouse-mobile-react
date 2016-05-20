import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import FavoriteList from './FavoriteList';
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
    label: 'Property',
    icon:'home'
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