module.exports = (image_html)=>{
  if(!image_html) return {};
  const splits = image_html.split(' ');
  let url = null;
  let width = 50;
  let height = 50;

  splits.forEach((split)=>{
    if(split.toLowerCase().indexOf('src') === 0){
      url = split.substring(split.indexOf('\"')+1,split.lastIndexOf('\"'))
    }
    else if(split.toLowerCase().indexOf('width') === 0){
      width = parseInt(split.substring(split.indexOf('\"')+1,split.lastIndexOf('\"')));
    }
    else if(split.toLowerCase().indexOf('height') === 0){
      height = parseInt(split.substring(split.indexOf('\"')+1,split.lastIndexOf('\"')));
    }
  });
  return {
    url:url,
    width:width,
    height:height
  };
};