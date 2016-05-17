import { AsyncStorage } from 'react-native';


module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const defaultLayout = opts.defaultLayout;
      if(defaultLayout && opts.type){
        const type = defaultLayout.objectType;
        const id = 'DefaultLayout_'+type;
        AsyncStorage.setItem(id, JSON.stringify(defaultLayout), ()=>{
          resolve(opts);
        });
      }
      else{
        reject('Wrong default layout');
      }
    }
  );
};