function count_same_elements(collection) {
  let a=collection;
  let i=0;
  let obja=[];
  while(i<a.length) {
    let same=[];
    let obj={};
    if (a[i].length > 1){
      let sss=a[i].toString()
      obj.key=sss.charAt(0).toString();
      obj.count=parseInt(sss.charAt(a[i].length-1));
      obja.push(obj);
      ++i;
    } else {
      obj.key=a[i].toString();
    same=a.filter(elem => elem == a[i])
    i+=same.length;
    obj.count=same.length;
    obja.push(obj);
    }
  }
  return obja;
}

module.exports = count_same_elements;
