import cacheDefault from './cacheDefault';


module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const defaultLayout = opts.defaultLayout;
      if(defaultLayout && opts.type){
        const type = defaultLayout.objectType;
        cacheDefault.set(type,defaultLayout);
        resolve(opts);
      }
      else{
        reject('Wrong default layout');
      }
    }
  );
};