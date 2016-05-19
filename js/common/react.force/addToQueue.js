import queue from './queue';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      console.log('ADD TO QUEUE');
      queue.add(opts.type,opts.id);
      resolve(opts);
    }
  );
};