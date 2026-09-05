/**
 * 1. implement curry()
 * BigFrontend.dev Problem
 *
 * Link:
 * https://bigfrontend.dev/problem/implement-curry
 *
 */

//TODO Write your solution below

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
/* 
//!Usig spread Operator and fn.call
function curry(fn){
    return function curriedFunction(...args){
        if(args.length>=fn.length){
           return  fn.call(this,...args);
        }
        else {
            return function(...newArgs){
                return curriedFunction.call(this,...args,...newArgs)
            }
        }

    }
}
*/

/*
//!Using inbuild function argumets varaible and apply
function curry(fn) {
    return function curriedFunction() {
        const args = Array.from(arguments);

        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return function () {
            const newArgs = Array.from(arguments);
            return curriedFunction.apply(this, args.concat(newArgs));
        };
    };
}
*/

/*
//!Using reflect.apply
function curry(fn) {
    return function curriedFunction(...args) {
        if (args.length >= fn.length) {
            return Reflect.apply(fn, this, args);
        }

        return function (...newArgs) {
            return curriedFunction.call(
                this,
                ...args,
                ...newArgs
            );
        };
    };
}
*/

/*
//!Bind approch
function curry(fn) {
    return function curriedFunction(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        return curry(fn.bind(this, ...args));
    };
}

*/

/*

//!Withour spread -- arguments + apply
function curry(fn) {
    return function curried() {
        const args = Array.from(arguments);

        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return function () {
            return curried.apply(
                this,
                args.concat(Array.from(arguments))
            );
        };
    };
}

*/
const curriedJoin = curry(join);
curriedJoin(1, 2, 3); // '1_2_3'
curriedJoin(1)(2, 3); // '1_2_3'
curriedJoin(1, 2)(3); // '1_2_3'
