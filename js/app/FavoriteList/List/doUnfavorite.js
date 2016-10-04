import { net } from 'react.force';

module.exports = (favoriteId,callback) => {
  net.del(
    'Favorite__c',
    favoriteId,
    (response)=>{
      if(callback){
        callback(null,response);
      }
    },
    (err)=>{
      if(callback){
        callback(err);
      }
    }
  );
};
