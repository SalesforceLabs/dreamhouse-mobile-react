import {forceClient} from 'react.force';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      if(opts.cachedCompactLayout){
        opts.compactLayout = opts.cachedCompactLayout;
        resolve(opts);
        return;
      }
      if(opts.type === 'Group'){
        console.log('GROUP: OPTS: ',opts);
        resolve(opts);
        return;
      }
      forceClient.compactLayout(opts.type, 
        (response) => {
          opts.compactLayout = response;
          resolve(opts);
        }
      );
    }
  );
};