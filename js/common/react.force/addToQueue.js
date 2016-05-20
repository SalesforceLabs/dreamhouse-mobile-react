import queue from './queue';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      console.log('ADD TO QUEUE');
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