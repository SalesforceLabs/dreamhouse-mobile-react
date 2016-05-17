import { AsyncStorage } from 'react-native';




module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const id = 'DefaultLayout_'+opts.type;
      AsyncStorage.getItem(id, (err, item)=>{
        opts.cachedDefaultLayout = JSON.parse(item);
        resolve(opts);
      });
    }
  );
};