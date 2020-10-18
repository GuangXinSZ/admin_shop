   // 删除指定的函数
   function deleteOne (arr, value) {
    let index = arr.indexOf(value)
    if (index >= -1) {
      arr.splice(index, 1)
    }
    return arr
  }
  
  // 删除全部重复的数据
  function deleteAll (arr, value) {
    let i = 0
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1)
      } else {
        ++i
      }
    }

    return arr
  }

  export default {
    deleteOne,
    deleteAll
  }