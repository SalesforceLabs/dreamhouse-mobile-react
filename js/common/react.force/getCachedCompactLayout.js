import { AsyncStorage } from 'react-native';




module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const id = 'CompactLayout_'+opts.type;
      AsyncStorage.getItem(id, (err, item)=>{
        opts.cachedCompactLayout = JSON.parse(item);
        resolve(opts);
      });
    }
  );
};