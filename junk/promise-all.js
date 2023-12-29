// const myAll = (promiseArr) => {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(promiseArr)) {
//       return reject(TypeError('must be an arr'));
//     }
//     if (promiseArr.length === 0) {
//       return promiseArr;
//     }

//     const results = [];
//     let index = 0;
//     promiseArr.forEach((promise, idx) => {
//       promise
//         .then((resp) => {
//           results[idx] = resp;
//           index++;
//           if (index === promiseArr.length) {
//             resolve(results);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };

// const p1 = Promise.resolve('success - 1');
// const p2 = Promise.resolve('success - 2');
const p3 = Promise.reject('success - 3');
// const p4 = Promise.resolve('success - 4');

// myAll(0).then((result) => {
//   console.log(result, '@@@');
// });
