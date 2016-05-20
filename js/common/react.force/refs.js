import union from 'lodash.union';
import remove from 'lodash.remove';
import trim from 'lodash.trim';
import merge from 'lodash.merge';
import keys from 'lodash.keys';

import query from './query';
import queue from './queue';

const notify = (ids,sobjs,compactLayout,defaultLayout,isRef) => {
  if( compactLayout && defaultLayout ){
    const refs = merge(compactLayout.refs, defaultLayout.refs);
    sobjs.forEach((sobj)=>{
      keys(refs).forEach(fieldName => {
        const type = refs[fieldName];
        const id = sobj[fieldName];
//        queue.add(type,id);
      });
    });
  }

};

query.addListener(notify);

module.exports = {

};