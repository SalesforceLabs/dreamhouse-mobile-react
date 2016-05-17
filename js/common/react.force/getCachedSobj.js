import { AsyncStorage } from 'react-native';




module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const id = opts.id;
      AsyncStorage.getItem(id, (err, item)=>{
        opts.cachedSobj = JSON.parse(item);
        resolve(opts);
      });
    }
  );
};