import trim from 'lodash.trim';
import forceClient from './react.force.net.js';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const fields = [];
      if(opts.defaultLayout && opts.defaultLayout.detailLayoutSections && opts.defaultLayout.detailLayoutSections.length){
//        console.log('opts.defaultLayout: ',opts.defaultLayout);
        opts.defaultLayout.detailLayoutSections.forEach((layoutSection)=>{
          layoutSection.layoutRows.forEach((layoutRow)=>{
            if(layoutRow && layoutRow.layoutItems && layoutRow.layoutItems.length){
              layoutRow.layoutItems.forEach((layoutItem)=>{
                if(layoutItem && layoutItem.layoutComponents && layoutItem.layoutComponents.length){
                  layoutItem.layoutComponents.forEach((layoutComponent)=>{
                    if(layoutComponent.value && trim(layoutComponent.value,'_-\n\t').length){
                      fields.push(layoutComponent.value);
                    }
                  });
                }
              });
            }
          });
        });
        opts.defaultLayoutFieldNames = fields;
        resolve(opts);
      }
      else{
        reject('defaultLayout object not found');
      }
    }
  );
};