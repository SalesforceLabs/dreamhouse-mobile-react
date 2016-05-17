module.exports = (sobj, compactTitleFieldNames) => {
  return compactTitleFieldNames.map((fieldName)=>{
    return sobj[fieldName];
  }).join(' ');
};