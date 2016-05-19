import { AsyncStorage } from 'react-native';

import query from './query';

const notify = (ids,sobjs) => {
  sobjs.forEach((sobj)=>{
    set(sobj);
  });
};

query.addListener(notify);

let cache = {};

const get = (id)=>{
  return cache(id);
};

const set = (sobj)=>{
  cache[sobj.Id] = sobj;
  if(sobj && sobj.attributes && sobj.attributes.type && sobj.attributes.url){
    const type = sobj.attributes.type;
    const id = sobj.attributes.url.substring(sobj.attributes.url.lastIndexOf('/')+1);
    AsyncStorage.setItem(id, JSON.stringify(sobj), ()=>{

    });
  }
};

module.exports = {
  get:get,
  set:set
};