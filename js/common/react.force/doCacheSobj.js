import { AsyncStorage } from 'react-native';


module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const sobj = opts.sobj;
      if(sobj && sobj.attributes && sobj.attributes.type && sobj.attributes.url){
        const type = sobj.attributes.type;
        const id = sobj.attributes.url.substring(sobj.attributes.url.lastIndexOf('/')+1);
        AsyncStorage.setItem(id, JSON.stringify(sobj), ()=>{
          resolve(opts);
        });
      }
      else{
        reject();
      }
    }
  );
};