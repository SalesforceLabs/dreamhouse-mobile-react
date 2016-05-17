import { AsyncStorage } from 'react-native';


module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const compactLayout = opts.compactLayout;
      if(compactLayout && compactLayout.objectType){
        const type = compactLayout.objectType;
        const id = 'CompactLayout_'+type;
        AsyncStorage.setItem(id, JSON.stringify(compactLayout), ()=>{
          resolve(opts);
        });
      }
      else{
        reject('Wrong compact layout');
      }
    }
  );
};