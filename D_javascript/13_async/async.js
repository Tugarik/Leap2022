//async function returns Promise
/**
async function fryEgg() {
    return 1;
}
fryEgg().then((res) => { console.log(res) })
*/

//await commandgui turshaad uzeerei
/*
async function fryEgg() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // энд 1 сэкүнд хүлээнэ
    console.log(result);
}
console.log("a");
console.log("b");
fryEgg();
console.log("final");
*/


// await baihgui ued js flow shuud algasaad console commandiig turuulj ajilluulj bn
// async function asyncfryEgg() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Done!'), 2000)
//     })
//     return 10;
// }

// console.log(asyncfryEgg());


// function prepare_breakfast() {
//     let coffee_promise = new Promise((resolve, reject) => resolve("coffee ready"));
//     let egg_promise = new Promise((resolve, reject) => {
//         console.log('start boil egg ...')
//         setTimeout(() => {
//             resolve("egg is ready");
//         }, 5000);
//     });
//     egg_promise.then((res) => console.log(res));


//     let toast_promise = new Promise((resolve, reject) => {
//         console.log('preparing toast...')
//         setTimeout(() => {
//             resolve("toast is ready");
//         }, 2000);
//         console.log('toast finished');
//     });
//     toast_promise.then((res) => console.log(res));

//     let combined_promise = Promise.all([coffee_promise, egg_promise, toast_promise]);
//     return combined_promise;
// }

// async function morning() {
//     let result = await prepare_breakfast();
//     console.log(result);
//     console.log('breakfast is ready');
// }

// morning();


//custom delay function
// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }


// function f1() {
//     console.log('f1 started');
//     delay(2000).then(() => { console.log('f1 finished') });

// }


// function f2() {
//     console.log('f2 started');
//     delay(1000).then(() => { console.log('f2 finished') });

// }


// f1();
// f2();


//synchro
console.log("a");
console.log("b");
console.log("c");
for (i = 0; i < 1_000_000; i++) {
    for (j = 0; j < 1_000; j++) {
        const a = 1;
    }
}

console.log("final");

//asynchro
// console.log("a");
// console.log("b");
// console.log("c");

// setTimeout(() => { console.log("fafter 2.5 sec") }, 2500);
// console.log("final");