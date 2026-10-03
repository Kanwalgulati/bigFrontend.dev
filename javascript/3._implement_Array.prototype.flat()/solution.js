/**
 * 3. implement Array.prototype.flat()
 * BigFrontend.dev Problem
 * 
 * Link:
 * https://bigfrontend.dev/problem/implement-Array-prototype.flat
 * 
 */

 // Write your solution below

 

// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    const result = [];
    for(let i=0;i<arr.length;i++){
        if(i in arr){
            const item = arr[i];
            if(Array.isArray(item) &&  depth >0){
                const flattened = flat(item,depth-1)
                for(let j=0;j<flattened.length;j++){
                    result.push(flattened[j]);
                }
            }
            else{
                result.push(arr[i]);
            }
        }
    }
    return result;
  // your imeplementation here
}



const arr = [1, [2], [3, [4]]];
console.log(flat(arr))
// [1, 2, 3, [4]]
flat(arr, 1)
// [1, 2, 3, [4]]
console.log(flat(arr, 2))
// [1, 2, 3, 4]