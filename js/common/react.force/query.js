import forceClient from './react.force.net.js';
import union from 'lodash.union';
import remove from 'lodash.remove';
import trim from 'lodash.trim';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      if(!opts.noCache && opts.cachedSobj && opts.cachedSobj.attributes){
        opts.sobj = opts.cachedSobj;
        console.log('::: ALREADY CACHED!!!');
        resolve(opts);
        return;
      }

      const fields = remove(union(opts.compactLayoutFieldNames, opts.defaultLayoutFieldNames), (name)=>{
        return trim(name,', _-\n\t').length>0;
      });


      forceClient.retrieve(opts.type, opts.id, fields.join(','),
        (response) => {
          opts.sobj = response;
          resolve(opts);
        },
        (error)=>{
          reject('Error: query');
        }
      );
    }
  );
};