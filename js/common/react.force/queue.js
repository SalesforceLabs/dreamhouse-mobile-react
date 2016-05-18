let Queue = {};
import TimerMixin from 'react-timer-mixin';

module.exports = {
  add(type, id){
    console.log('!!! ADD !!!: ',type,id);
    if(!Queue[type]){
      Queue[type] = [];
    }
    Queue[type].push(id);
    setTimeout(()=>{
      console.log('TRIGGER QUERY !!!');
    },300);
  },
  get(type){
    const result = Queue[type];
    Queue[type] = [];
    return result;
  }
};