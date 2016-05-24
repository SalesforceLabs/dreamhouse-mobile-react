import { AsyncStorage } from 'react-native';

import cacheCompact from './cacheCompact';



module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const item = cacheCompact.get(opts.type)
      opts.cachedCompactLayout = item;
      resolve(opts);
    }
  );
};