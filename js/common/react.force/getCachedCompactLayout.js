import { AsyncStorage } from 'react-native';

import cacheCompact from './cacheCompact';



module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {

      const item = cacheCompact.get(opts.type)
      opts.cachedCompactLayout = item;
      resolve(opts);
/*
      const id = 'CompactLayout_'+opts.type;
      AsyncStorage.getItem(id, (err, item)=>{
        opts.cachedCompactLayout = JSON.parse(item);
        resolve(opts);
      });
*/
    }
  );
};