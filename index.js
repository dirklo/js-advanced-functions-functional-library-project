const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      let array = Object.values(collection);
      for (let item of array) {
          cb(item);
      } 
      return collection;
    },

    map: function(collection, cb) {
      let array = Object.values(collection)
      let newArray = [];
      for (let item of array) {
        newArray.push(cb(item)) ;
      }
      return newArray;
    },

    reduce: function(collection, cb, acc) {
      let array = Object.values(collection);
      let i;
      if (!acc) {
        acc = array[0];
        i = 1;
      } else {
        i = 0;
      }
      for (; i < array.length; i++) {
        acc = cb(acc, array[i]);
      }
      return acc;
    },

    find: function(collection, search){
      let array = Object.values(collection);
      for (let item of array) {
        if (search(item)) {
          return item;
          break;
        }
      }
    },

    filter: function(collection, search) {
      let array = Object.values(collection);
      const final = []
      for (let item of array) {
        if (search(item)) {
          final.push(item);
        }
      }
      return final
    },

    size: function(collection) {
      let array = Object.values(collection);
      return array.length
    },

    first: function(collection, n = 1) {
      let final = collection.slice(0, n)
      if (n > 1) {
        return final
      } else {
        return final[0]
      }
    },

    last: function(collection, n = 1) {
      let array = Object.values(collection);
      while (array.length > n) {
        array.shift();
      }
      if (n === 1) {
        return array[0];
      } else {
        return array;
      }
    },

    compact: function(array) {
      let final = [];
      for (let item of array) {
        if (!!item) {
          final.push(item);
        }
      }
      return final;
    },

    sortBy: function(array, callback) {
      let newArray = Object.values(array);
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow = false) {
      let final = [];
      flattenHelper(array);
      return final;

      function flattenHelper(array) {
        for (let i = 0; i < array.length; i++) {
          if (typeof array[i] === 'number') {
            final.push(array[i])
          } else {
            if (shallow === false) {
              flattenHelper(array[i]);
            } else {
              for (let item of array[i]) {
                final.push(item)
              }
            }
          }
        }
      }
    },

    sortedHelper: function(collection) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, isSorted=false, cb=false) {
      if (isSorted) {
        return fi.sortedHelp(collection)
      } else if (!cb) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = cb(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      let final = []
      for (let key in object) {
        final.push(key);
      }
      return final
    },

    values: function(object) {
      let final = []
      for (let key in object) {
        final.push(object[key]);
      }
      return final
    },

    functions: function(object) {
      let final = [];
      for (let key in object) {
        if (typeof object[key] === 'function') {
          final.push(key)
        }
      }
      return final.sort((a, b) => a - b) 
    },
  }
})()

fi.libraryMethod()
