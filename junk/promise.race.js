const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('---1----');
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('---2----');
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('---3----');
  }, 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('---4----');
  }, 400);
});

const myRace = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(TypeError('must be an array'));
    }
    if (promises.length === 0) {
      resolve(promises);
    }
    promises.forEach((promise) => {
      promise
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
myRace([p1, p2, p3, p4])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
