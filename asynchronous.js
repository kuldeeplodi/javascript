// console.log("begin execution");

// let wait = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("logic execution");
//   }, 2000);
// });

// wait.then((d) => {
//   console.log(d);
//   console.log("complete execution");
// });

a = 23;
b = 3;

const waiting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});
waiting.then((date) => {
  console.log(a + date);
});
