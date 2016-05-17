import getDefaultLayout from './getDefaultLayout';
import getDefaultLayoutFieldNames from './getDefaultLayoutFieldNames';
import getCompactLayout from './getCompactLayout';
import getCompactLayoutFieldNames from './getCompactLayoutFieldNames';
import query from './query';
import getCompactLayoutTitle from './getCompactLayoutTitle';
import doCacheSobj from './doCacheSobj';
import getCachedSobj from './getCachedSobj';
import getCachedDefaultLayout from './getCachedDefaultLayout';
import getCachedCompactLayout from './getCachedCompactLayout';
import doCacheDefaultLayout from './doCacheDefaultLayout';
import doCacheCompactLayout from './doCacheCompactLayout';

module.exports = (type, id, noCache) => {
  return getCachedSobj({type:type,id:id, noCache:!!noCache})
    .then(getCachedCompactLayout)
    .then(getCompactLayout)
    .then(doCacheCompactLayout)
    .then(getCompactLayoutFieldNames)

    .then(getCachedDefaultLayout)
    .then(getDefaultLayout)
    .then(doCacheDefaultLayout)
    .then(getDefaultLayoutFieldNames)

    .then(query)
    .then(getCompactLayoutTitle)
    .then(doCacheSobj);
};