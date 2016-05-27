import trim from 'lodash.trim';
import {forceClient} from 'react.force';

module.exports = (opts) => {
  return new Promise(
    (resolve, reject) => {
      const fields = [];
      const compactTitleFieldNames = [];
      const refs = {};
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
                  if(layoutComponent.details && 
                      layoutComponent.details.type && 
                      layoutComponent.details.type === 'reference' && 
                      layoutComponent.details.referenceTo && 
                      layoutComponent.details.referenceTo.length){
                        const ref = layoutComponent.details.referenceTo[layoutComponent.details.referenceTo.length-1];
                        refs[layoutComponent.details.name] = ref;
                  }

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
        opts.compactLayout.refs = refs;
        resolve(opts);
      }
      else{
        reject('compactLayout object not found');
      }
    }
  );
};