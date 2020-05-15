const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var results = [];


function async(arg, callback) {
    setTimeout(function () { callback(arg); }, 1200 * Math.random());
}

for (i = 0; i < a.length; i++) {
    async(a[i], (result) => {
        console.log(result);
    })
}