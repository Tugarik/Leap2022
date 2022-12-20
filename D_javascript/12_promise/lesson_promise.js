//promise tuluvuud
//pending
//fullfilled
//rejected

// promise is object

let BoldIncome = 5_000_000;

const hairiinHutch2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (BoldIncome > 1_000_000) {
            resolve('Success');
        } else {
            reject('shine tsomog gargahad mongo aahku');
        }
    }, 3000)
});

console.log(hairiinHutch2);

hairiinHutch2
    .then((resolveValue) => {
        console.log(resolveValue);
    })
    .catch((rejectValue) => {
        console.log(rejectValue);
    })
    .finally(() => {
        console.log('finished');
    });

