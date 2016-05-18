import forceClient from './react.force.net.js';
import union from 'lodash.union';
import remove from 'lodash.remove';
import trim from 'lodash.trim';

const buildQuery = (type, id, fields) => {
  return 'SELECT ' +
  fields.join(',') +
  ' FROM '+type +
  ' WHERE '+ 'Id = \''+id+'\'' +
  ' LIMIT '+ 200;
};

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      if(!opts.noCache && opts.cachedSobj && opts.cachedSobj.attributes){
        opts.sobj = opts.cachedSobj;
        resolve(opts);
        return;
      }

      const fields = remove(union(opts.compactLayoutFieldNames, opts.defaultLayoutFieldNames), (name)=>{
        return trim(name,', _-\n\t').length>0;
      });

      const query = buildQuery(opts.type,opts.id,fields);
      console.log('>>> query: '+query);
      console.log('::: ALREADY CACHED!!!');

      forceClient.query(query,
//      forceClient.retrieve(opts.type, opts.id, fields.join(','),
        (response) => {
          if(response.records && response.records.length){
            opts.sobj = response.records[0];
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