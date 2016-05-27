import {forceClient} from 'react.force';
import union from 'lodash.union';
import remove from 'lodash.remove';
import trim from 'lodash.trim';

import utils from './utils';


let queryCount = 0;

const listeners = [];

const buildQuery = (type, ids, fields) => {
  const where = ids.map((id)=>{
    return 'Id = \''+id+'\'';
  }).join(' OR ');
  return 'SELECT ' +
  fields.join(',') +
  ' FROM '+type +
  ' WHERE '+ where +
  ' LIMIT '+ 200;
};

const broadcast = (records,compactLayout,defaultLayout)=>{
  const ids = records.map((record)=>{
    return record.Id;
  });
  listeners.forEach((listener)=>{
    listener(ids,records,compactLayout,defaultLayout);
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

      const query = buildQuery(opts.type,opts.ids,fields);
      queryCount++;
      forceClient.query(query,
        (response) => {
          if(response.records && response.records.length){
            const records = response.records.map((r)=>{
                r.attributes.compactTitle = utils.getCompactTitle(r, opts.compactTitleFieldNames);
              return r;
            });
            broadcast(records, opts.compactLayout, opts.defaultLayout);
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
module.exports.getQueryCount = () => {
  return queryCount;
};