//2.1 Series call back

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var results = [];

function timeout() {
    return new Promise(resolve => setTimeout(resolve, 1200 * Math.random()));
}

async function async(arg, callback) {
    await timeout();
    await callback(arg);
}

async function test() {
    for (i = 0; i < a.length; i++) {
        await async(a[i], (result) => {
            if (result % 3 == 0) {

            }
            console.log(result);
        })

    }
}

test();