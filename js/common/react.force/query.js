import forceClient from './react.force.net.js';
import union from 'lodash.union';
import remove from 'lodash.remove';
import trim from 'lodash.trim';

import utils from './utils';


const listeners = [];

const buildQuery = (type, id, fields) => {
  return 'SELECT ' +
  fields.join(',') +
  ' FROM '+type +
  ' WHERE '+ 'Id = \''+id+'\'' +
  ' LIMIT '+ 200;
};

const broadcast = (records)=>{
  const ids = records.map((record)=>{
    return record.Id;
  });
  listeners.forEach((listener)=>{
    listener(ids,records);
  });
};



module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      if(!opts.noCache && opts.cachedSobj && opts.cachedSobj.attributes){
        opts.sobj = opts.cachedSobj;
        resolve(opts);
        return;
      }

      const fields = remove(union(opts.compactLayoutFieldNames, opts.defaultLayoutFieldNames, ['Id']), (name)=>{
        return trim(name,', _-\n\t').length>0;
      });

      const query = buildQuery(opts.type,opts.id,fields);
      console.log('>>> query: '+query);
      console.log('::: ALREADY CACHED!!!');

      forceClient.query(query,
//      forceClient.retrieve(opts.type, opts.id, fields.join(','),
        (response) => {
          if(response.records && response.records.length){
            const records = response.records.map((r)=>{
                r.attributes.compactTitle = utils.getCompactTitle(r, opts.compactTitleFieldNames);
              return r;
            });
            opts.sobj = records[0];
            broadcast(records);
          }
          resolve(opts);
        },
        (error)=>{
          reject('Error: query');
        }
      );
    }
  );
};
module.exports.addListener = (listener) => {
  listeners.push(listener);
};