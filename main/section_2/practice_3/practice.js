function count_same_elements(collection) {
  let a=collection;
  let i=0;
  let obja=[];
  let more=[];
  more=a.filter(elem=>elem.length>1);
  while(i<a.length) {
    let same=[];
    let obj={};
    if (a[i].length > 1){
      let sss=a[i].toString()
      obj.name=sss.charAt(0).toString();
      obj.summary=parseInt(sss.charAt(a[i].length-1));
      ++i;
    }else {
      obj.name = a[i].toString();
      same = a.filter(elem => elem == a[i])
      obj.summary = same.length;
      let n=a[i];
      for (let m = 0; m < more.length; m++) {
        if (n == more[m][0]) {
          if (isNaN(parseInt(more[m].charAt(more[m].length - 1)))){
            let s=0
            let k=[]
            while (s<more[m].length){
              if (isNaN(parseInt(more[m][s]))){
              }else{k.push(more[m][s])}
              ++s;
            }
            obj.summary=obj.summary + parseInt(k[0]+k[1])
            ++i;
            }
           else {
          obj.summary = obj.summary + parseInt(more[m].charAt(more[m].length - 1))
          ++i;
        }
          }
        }
      }
      i+= same.length;
      obja.push(obj);
    }
  return obja;
  }



module.exports = count_same_elements;
