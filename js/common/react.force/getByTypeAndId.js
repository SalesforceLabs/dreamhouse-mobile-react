import getCachedSobj from './getCachedSobj';


import addToQueue from './addToQueue';
import getMetaByType from './getMetaByType';

import queue from './queue';

module.exports = (type, id, noCache) => {
  return getCachedSobj({type:type,id:id, noCache:!!noCache})
    .then(addToQueue)
    .then(getMetaByType);
};