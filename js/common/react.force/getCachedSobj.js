import { AsyncStorage } from 'react-native';

import cache from './cache';



module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const id = opts.id;
      const item = cache.get(id);
      opts.cachedSobj = item;
      resolve(opts);
/*
      AsyncStorage.getItem(id, (err, item)=>{
        opts.cachedSobj = JSON.parse(item);
        resolve(opts);
      });
*/
    }
  );
};