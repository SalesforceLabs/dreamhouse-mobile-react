import queue from './queue';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      if(!opts.cachedSobj || opts.nocache){
        queue.add(opts.type,opts.id);
      }
      else{
        console.log('skipping: already cached');
      }
      resolve(opts);
    }
  );
};