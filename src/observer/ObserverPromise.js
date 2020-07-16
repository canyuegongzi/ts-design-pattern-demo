var testPromise = new Promise((function (resolve, reject) {
    setTimeout(function () {
        var flag = Boolean(Math.round(Math.random()));
        if (flag) {
            resolve({ data: 'success' });
        }
        else {
            reject({ data: 'error' });
        }
    }, 2000);
}));
testPromise.then(function (res) {
    console.log(res);
})["catch"](function (err) {
    console.log(err);
});
