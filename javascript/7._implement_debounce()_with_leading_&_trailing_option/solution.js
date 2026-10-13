/**
 * 7. implement debounce() with leading & trailing option
 * BigFrontend.dev Problem
 *
 * Link:
 * https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option
 *
 */

// Write your solution below

function debounce(func, wait, options = {}) {
  const { leading = false, trailing = true } = options;
  let timer = null;
  let lastArgs = null;
  let lastThis = null;
  let calledAgain = false;

  return function (...args) {
    const isFirstCall = tiemr === null;
    if (timer != null) {
      clearTimeout(timer);
    }
    if (isFirstCall) {
      calledAgain = false;
      if (leading) {
        func.call(this, ...args);
      }
    } else {
      calledAgain = true;
    }
    lastArgs = args;
    lastThis = this;
    timer = setTimeout(() => {
      if (trailing && (calledAgain || !leading)) {
        func.call(lastThis, ...lastArgs);
      }
      timer = null;
      lastArgs = null;
      lastThis = null;
      calledAgain = null;
    }, wait);
  };
}
