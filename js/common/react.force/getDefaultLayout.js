import {forceClient} from 'react.force';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      if(opts.cachedDefaultLayout){
        opts.defaultLayout = opts.cachedDefaultLayout;
        resolve(opts);
        return;
      }
      forceClient.defaultLayout(opts.type, 
        (response) => {
          opts.defaultLayout = response;
          resolve(opts);
        }
      );
    }
  );
};