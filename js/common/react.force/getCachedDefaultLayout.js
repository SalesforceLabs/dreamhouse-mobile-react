import { AsyncStorage } from 'react-native';

import cacheDefault from './cacheDefault';



module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const item = cacheDefault.get(opts.type)
      opts.cachedDefaultLayout = item;
      resolve(opts);
/*
      const id = 'DefaultLayout_'+opts.type;
      AsyncStorage.getItem(id, (err, item)=>{
        opts.cachedDefaultLayout = JSON.parse(item);
        resolve(opts);
      });
*/
    }
  );
};