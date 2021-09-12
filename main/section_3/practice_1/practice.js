function create_updated_collection(collection_a, object_b) {
  let i=0
  let newarry=collection_a;
  while (i<collection_a.length){
    if (object_b.value.includes(collection_a[i].key)){
      newarry[i].count-=1
    }
    ++i;
  }
  return newarry
  //在这里写入代码
}

module.exports = create_updated_collection;
