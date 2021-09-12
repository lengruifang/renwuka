function create_updated_collection(collection_a, object_b) {
  let j=0
  let newarry=[]
  while (j<collection_a.length) {
    let obj = {}
    if (collection_a[j].length>1){
      obj.key=collection_a[j][0]
      obj.count=collection_a[j][collection_a[j].length-1]
      newarry.push(obj)
      ++j
    } else {
      let countnum = collection_a.filter(elem => elem == collection_a[j]);
      obj.key = collection_a[j]
      obj.count = countnum.length
      newarry.push(obj);
      j += countnum.length
    }
  }
  let i=0
  while (i<newarry.length){
    if (object_b.value.includes(newarry[i].key)){
      newarry[i].count-=Math.floor(newarry[i].count/3)
    }
    ++i;
  }
  return newarry
}

module.exports = create_updated_collection;
