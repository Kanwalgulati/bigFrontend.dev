/**
 * 4. implement basic throttle()
 * BigFrontend.dev Problem
 * 
 * Link:
 * https://bigfrontend.dev/problem/implement-basic-throttle
 * 
 */

 // Write your solution below

 function throttle (func,wait){
    let isWaiting = false;
    let lastArgs = null;
    let lastThis = null;

    const startCoolDown = ()=>{
        setTimeout(()=>{
            if(lastArgs){
                func.apply(lastThis,lastArgs);
                lastArgs=null;
                lastThis=null;
                startCoolDown()
            }
            else{
                isWaiting=false
            }
        },wait)
    }

    return function (...args){
        if(isWaiting){
            lastArgs=args;
            lastThis=this;
        }
        else{
            func.apply(this,args);
            isWaiting=true;
            startCoolDown();
        }
    }
 }