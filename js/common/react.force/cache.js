import query from './query';

//let CACHE = {};

const notify = (ids,sobjs) => {
  sobjs.forEach((sobj)=>{
    set(sobj);
  });
};

query.addListener(notify);

let cache = {};

const get = (id)=>{
  return cache[id];
};

const set = (sobj)=>{
  cache[sobj.Id] = sobj;
};

module.exports = {
  get:get,
  set:set
};