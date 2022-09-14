/* eslint-disable no-console */
export const throttle = (handler, timeout = 300) => {
  let invokedTime;
  let timer;
  return function (thi$, ...args) {
    console.log(invokedTime, timer);
    if (!invokedTime) {
      handler.apply(thi$, args);
      invokedTime = Date.now();
    } else {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (Date.now() - invokedTime >= timeout) {
          handler.apply(thi$, args);
          invokedTime = Date.now();
        }
      }, Math.max(timeout - (Date.now() - invokedTime), 0));
    }
  };
};
