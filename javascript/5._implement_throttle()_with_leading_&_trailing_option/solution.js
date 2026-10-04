/**
 * 5. implement throttle() with leading & trailing option
 * BigFrontend.dev Problem
 *
 * Link:
 * https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option
 *
 */

// Write your solution below

function throttle(func, wait, option = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  return function (...args) {
    //agar timer cooldown chal raha h , to bas naye arguments save kro lo
    if (timer) {
      lastArgs = args;
      lastThis = this;
      return;
    }

    //agar timer nhi chl raha h

    //check karo ki kya leading true hai?
    if (option.leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
      lastThis = this;
    }

    //cooldown timer start karo

    const startCoolDown = () => {
      //timer khatam hone k bad check kro kya trailing true hai?  and kya koi request pending hai?
      if (option.trailing && lastArgs) {
        func.apply(lastThis, lastArgs); //pending rquest chalao
        lastArgs = null;
        lastThis = null;
        timer = setTimeout(startCoolDown, wait); //wapas timer laga do
      }
      //agarr trailing false hai, ya koi request penidng nhi thi
      //to gate puri trha open krdo reset

      timer = null;
      lastArgs = null;
      lastThis = null;
    };
    timer = setTimeout(startCoolDown, wait);
  };
}
