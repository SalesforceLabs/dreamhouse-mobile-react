import {forceClient} from 'react.force';

const query = 'SELECT Id, Name FROM Account LIMIT 10';

module.exports = () => {
  return new Promise(
    (resolve, reject) => {
      forceClient.query(query, 
        (response) => {
          if(response && response.records)
          resolve(response.records);
        }
      );
    }
  );
};