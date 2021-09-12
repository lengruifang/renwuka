function collect_same_elements(collection_a, collection_b) {
  let a=collection_a;
  let b=collection_b;
  let c=[];
  c=a.filter(elem=>{for(let i=0;i<b.length;i++){
    if (elem===b[i]){return elem}
  }})
  return c;
  //在这里写入代码
}

module.exports = collect_same_elements;
