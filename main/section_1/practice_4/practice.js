function collect_same_elements(collection_a, object_b) {
  let a=collection_a;
  let b=object_b.value;
  let c=[];
  let d=[];
  c=a.filter(elem=>{for(let i=0;i<b.length;i++){
    if (elem.key===b[i]){return elem.key}
  }})
  for (let i=0;i<c.length;i++){
    d.push(c[i].key)
  }
  return d;
}

module.exports = collect_same_elements;
