const FULFILL = "fulfill";
const PENDING = "pending";
const REJECTED = "rejected";
let j = 0;
class MyPromise {
  i = j++;
  status = PENDING;
  value = null;
  reason = null;
  resolveCallback = [];
  rejectCallback = [];

  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch {
      this.reject(new Error("executor err"));
    }
  }
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILL;
      this.value = value;
      while (this.resolveCallback.length > 0) {
        this.resolveCallback.shift()(value);
      }
    }
  };
  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      while (this.rejectCallback.length > 0) {
        this.rejectCallback.shift()(reason);
      }
    }
  };
  then = (onResolved, onRejected) => {
    const innerP = new MyPromise((resolve, reject) => {
      if (this.status === FULFILL) {
        queueMicrotask(() => {
          try {
            this.resolvePromise(innerP, onResolved(this.value), resolve, reject);
          } catch {
            reject(this.reason);
          }
        });
      }
      if (this.status === REJECTED) {
        queueMicrotask(() => {
          try {
            this.resolvePromise(innerP, onRejected(this.reason), resolve, reject);
          } catch {
            reject(this.reason);
          }
        });
      }
      if (this.status === PENDING) {
        this.resolveCallback.push(() => {
          queueMicrotask(() => {
            try {
              this.resolvePromise(innerP, onResolved(this.value), resolve, reject);
            } catch {
              reject(this.reason);
            }
          });
        });
        this.rejectCallback.push(() => {
          queueMicrotask(() => {
            try {
              this.resolvePromise(innerP, onRejected(this.reason), resolve, reject);
            } catch {
              reject(this.reason);
            }
          });
        });
      }
    });
    return innerP;
  };

  resolvePromise = (innerP, returnValue, resolve, reject) => {
    if (innerP === returnValue) {
      reject(new Error("不能返回自己"));
    }
    if (returnValue instanceof MyPromise) {
      returnValue.then(resolve, reject);
    } else {
      resolve(returnValue);
    }
  };
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log("response-down");
    resolve("success-value");
  }, 100);
  // console.log('response-down')
  // resolve('success-value')
});
p.then(
  (value) => {
    console.log("then-1-resolve", value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("testing");
      }, 2000);
    });
    return "then-1-return-resolve";
  },
  (reason) => {
    console.log("then-1-reject", reason);
    return "then-1-return-reject";
  }
).then(
  (value) => {
    console.log("then-2-resolve", value);
  },
  (reason) => {
    console.log("then-2-reject", reason);
  }
);
