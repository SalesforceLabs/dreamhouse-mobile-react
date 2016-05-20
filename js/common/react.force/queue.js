let Queue = {};
import TimerMixin from 'react-timer-mixin';
import keys from 'lodash.keys';
import query from './query';

import batchRunByType from './batchRunByType';

const get = (type) => {
  const result = Queue[type];
  Queue[type] = [];
  return result;
};

const add = (type, id) => {
  console.log('!!! ADD !!!: ',type,id);
  if(!type || !id){
    return;
  }
  if(!Queue[type]){
    Queue[type] = [];
  }
  if(Queue[type].indexOf(id)<0){
    Queue[type].push(id);
  }
  setTimeout(()=>{
    console.log('TRIGGER QUERY !!!');
    if(Queue[type] && Queue[type].length){
      const ids = get(type);
      batchRunByType(type,ids);
    }
  },300);
};

module.exports = {
  add:add,
  get:get
};