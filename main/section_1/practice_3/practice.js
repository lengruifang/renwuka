function collect_same_elements(collection_a, object_b) {
  let a=collection_a;
  let b=object_b.value;
  let c=[];
  c=a.filter(elem=>{for(let i=0;i<b.length;i++){
    if (elem===b[i]){return elem}
  }})
  return c;
}

module.exports = collect_same_elements;
