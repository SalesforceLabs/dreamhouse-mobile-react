import trim from 'lodash.trim';
import forceClient from './react.force.net.js';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const fields = [];
      const compactTitleFieldNames = [];
      if(opts.compactLayout.fieldItems){
        opts.compactLayout.fieldItems.forEach((fieldItem, fieldItemIndex)=>{
          if(fieldItem.layoutComponents && fieldItem.layoutComponents.length){
            fieldItem.layoutComponents.forEach((layoutComponent, index)=>{
              if(layoutComponent.components && layoutComponent.components.length){
                layoutComponent.components.forEach((component)=>{
                  if(component.value && trim(component.value,'_-\n\t').length){
                    fields.push(component.value);
                    if(fieldItemIndex < 1){
                      compactTitleFieldNames.push(component.value);
                    }
                  }
                });
              }
              else{
                if(layoutComponent.value && trim(layoutComponent.value,'_-\n\t').length){
                  fields.push(layoutComponent.value);
                  if(fieldItemIndex < 1){
                    compactTitleFieldNames.push(layoutComponent.value);
                  }
                }
              }
            });
          }
        });
        opts.compactLayoutFieldNames = fields;
        opts.compactTitleFieldNames = compactTitleFieldNames;
        resolve(opts);
      }
      else{
        reject('compactLayout object not found');
      }
    }
  );
};