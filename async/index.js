
// Syncronious code

// let a = 90;
// let b = 0;

// setTimeout(()=>{
//     b = 30
// },2000)
// console.log(a+b);


// Async
let a = 34;
let b = 0;

// Handle async with promise
let res = new Promise((res,rej)=>{
setTimeout(()=>{
res(99)
},2000)
})

res.then((res)=>{
    b = res
    console.log(a + b);
})