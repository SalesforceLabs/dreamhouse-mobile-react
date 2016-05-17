import utils from './utils';


module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
//      opts.compactTitle = utils.getCompactTitle(opts.sobj, opts.compactTitleFieldNames);
      opts.sobj.attributes.compactTitle = utils.getCompactTitle(opts.sobj, opts.compactTitleFieldNames);
      resolve(opts);
    }
  );
};