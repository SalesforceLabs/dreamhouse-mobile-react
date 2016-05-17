import getUsers from './getUsers';
import getDefaultLayout from './getDefaultLayout';
import getCompactLayout from './getCompactLayout';
import getCompactLayoutFieldNames from './getCompactLayoutFieldNames';
import query from './query';
import getByTypeAndId from './getByTypeAndId';

import SobjContainer from './SobjContainer';

module.exports = {
  getByTypeAndId:getByTypeAndId,
  getUsers:getUsers,
  getDefaultLayout:getDefaultLayout,
  getCompactLayout:getCompactLayout,
  getCompactLayoutFieldNames:getCompactLayoutFieldNames,
  query:query,
  SobjContainer:SobjContainer
};