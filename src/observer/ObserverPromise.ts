const testPromise = new Promise(((resolve, reject) => {
    setTimeout(() => {
        const flag: boolean = Boolean(Math.round(Math.random()));
        if (flag) {
            resolve({data: 'success'})
        }else  {
            reject({data: 'error'})
        }

    }, 2000)
}))

testPromise.then((res: any) => {
    console.log(res);
}).catch((err) =>{
    console.log(err);
})
