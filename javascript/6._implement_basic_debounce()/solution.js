/**
 * 6. implement basic debounce()
 * BigFrontend.dev Problem
 * 
 * Link:
 * https://bigfrontend.dev/problem/implement-basic-debounce
 * 
 */

 // Write your solution below


 
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  let isWaiting = null;
  return function (...args){
    if(isWaiting){
      clearTimeout(isWaiting);
    }
    isWaiting = setTimeout(()=>{
      func.call(this,args)
    },wait)
  }

  // your code here
}


