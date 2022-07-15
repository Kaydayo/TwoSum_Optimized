const twoSum = (array, target) => {
     const hashtable = {};
     for ( let i = 0; i < array.length; i++) {
        let complement = target - array[i];
       
        if ( hashtable.hasOwnProperty(complement)){
          return [array[hashtable[complement]], array[i]]
        }
 
        hashtable[array[i]] = i;   
     };
     
     return null;
};

console.log(twoSum([2,7,11,15],13))