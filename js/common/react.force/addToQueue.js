import queue from './queue';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      queue.add(opts.type,opts.id);
      resolve(opts);
    }
  );
};