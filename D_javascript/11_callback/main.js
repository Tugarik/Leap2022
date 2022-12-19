// callback
const now = new Date();

function greeting(func1, func2) {
    if (now.getHours() < 18) {
        func1();
    } else {
        func2();
    }
}

function printHello() {
    console.log('Hello');
}

function printBye() {
    console.log('Bye bye');
}

greeting(printHello, printBye);

