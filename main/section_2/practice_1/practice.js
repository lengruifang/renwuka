function count_same_elements(collection) {
  let a=collection;
  let i=0;
  let obja=[];
  while(i<a.length) {
    let same=[];
    let obj={};
    obj.key=a[i].toString();
    same=a.filter(elem => elem == a[i])
    i+=same.length;
    obj.count=same.length;
    obja.push(obj);
  }
  return obja;
  //在这里写入代码
}

module.exports = count_same_elements;
