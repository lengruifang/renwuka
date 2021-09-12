function create_updated_collection(collection_a, object_b) {
  let i=0
  let newarry=collection_a;
  while (i<collection_a.length){
    if (object_b.value.includes(collection_a[i].key)){
      newarry[i].count-=Math.floor(newarry[i].count/3)
    }
    ++i;
  }
  return newarry
}

module.exports = create_updated_collection;
