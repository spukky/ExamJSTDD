// 2.2 Parallel scenario

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var results = [];

function timeout() {
    return new Promise(resolve => setTimeout(resolve, 1200 * Math.random()));
}

async function async(arg, callback) {
    await timeout();
    await callback(arg);
}

async function SeriesCallback() {
    for (i = 0; i < a.length; i++) {
        await async(a[i], (result) => {
            process.stdout.write(result.toString());
        })

    }
}

SeriesCallback();