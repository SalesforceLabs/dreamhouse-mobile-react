import query from './query';

const notify = (ids,sobjs,compactLayout,defaultLayout) => {
  if(sobjs && sobjs.length && compactLayout){
    const sobj = sobjs[0];
    const type = sobj.attributes.type;
    set(type,defaultLayout);
  }
};

query.addListener(notify);

let cache = {};

const get = (type)=>{
  return cache[type];
};

const set = (type, defaultLayout)=>{
  cache[type] = defaultLayout;
};

module.exports = {
  get:get,
  set:set
};