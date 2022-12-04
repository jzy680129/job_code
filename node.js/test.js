// let arr = ["a", "b", "c"];
// let pairs = arr.map((x, i) => [x, i + 3]);

// console.log(pairs);
// let map = new Map(pairs);
// console.log(map);
// console.log(arr[Symbol.iterator]);
// let iter = arr[Symbol.iterator]();
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// class Foo {
//   [Symbol.iterator] () {
//     return {
//       next () {
//         return { done: false, value: 'foo' };
//       }
//     }
//   }
// }
// let f = new Foo();

// console.log(f[Symbol.iterator]());
// f_iter = f[Symbol.iterator]();
// console.log(f_iter.next());
// console.log(f_iter.next());


// class Counter {
//   constructor(limit) {
//     this.count = 1;
//     this.limit = limit;
//   }
//   //迭代中会调用next()函数
//   next () {
//     if (this.count <= this.limit) {
//       return { done: false, value: this.count++ * 2 };
//     }
//     else {
//       return { done: true, value: undefined };
//     }
//   }
//   [Symbol.iterator] () {
//     return this
//   }
// }


// let counter = new Counter(3);
// for (let i of counter) {
//   console.log(i);
// }

// class Counter_1 {
//   constructor(limit) {
//     //定义区间
//     this.limit = limit;
//   }
//   [Symbol.iterator] () {
//     let count = 1;
//     let limit = this.limit;
//     return {
//       next () {
//         if (count <= limit) {
//           return { done: false, value: count++ };
//         } else {
//           return { done: true, value: undefined }
//         }
//       },
//       return () {
//         // 当强制返回可以做的事情
//         console.log("强制终止");
//         return { done: true }
//       }
//     };
//   }
// }


// let couter_1 = new Counter_1(4);
// for (let i of couter_1) {
//   console.log(i);
// }

// for (let i of couter_1) {
//   if (i === 2) {
//     break
//   }

//   console.log(i);
// }
function* generratorFn () {
  console.log("start");
  yield "foo";
  console.log("aaa");
  yield;
  console.log("bbbbb");
  yield;
  console.log("voe");
  return 1
}
let getiter = generratorFn();
getiter.next();
getiter.next();
getiter.next();
getiter.next();


for (let i of generratorFn()) {

}

function* test01 () {
  console.log(yield);
  console.log(yield);
  console.log(yield);
  return 1
}

let ts01 = test01();
ts01.next(1)
ts01.next(2)
ts01.next(3)

function* nTimes (n) {
  for (let i = 0; i < n; i++) {
    console.log("a");
    yield i;
    console.log('b');
  }
}
for (let i of nTimes(4)) {
  console.log(i);
}