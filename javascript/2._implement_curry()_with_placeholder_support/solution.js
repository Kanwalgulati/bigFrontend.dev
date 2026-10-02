/**
 * 2. implement curry() with placeholder support
 * BigFrontend.dev Problem
 * 
 * Link:
 * https://bigfrontend.dev/problem/implement-curry-with-placeholder
 * 
 */

const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}
function curry(fn) {
    return function curriedWithPlaceholder(...args){
        const hasEnoughValues = args.length>=fn.length;
        const isComplete  = !args.slice(0,fn.length).includes(curry.placeholder)
        if(hasEnoughValues&&isComplete){
           return fn(...args);
        }
        else{
            return function(...newArgs){
                const mergeArray = args.map(arg=>arg===curry.placeholder&&newArgs.length>0?newArgs.shift():arg);
                return curriedWithPlaceholder(...mergeArray,...newArgs);
            }
        }
    }
  // your code here
}


curry.placeholder = Symbol()




const curriedJoin = curry(join)
const _ = curry.placeholder
console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(_, 2)(1, 3));
console.log(curriedJoin(_, _, _)(1)(_, 3)(2))
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(_, 2)(1, 3) // '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

 // Write your solution below
