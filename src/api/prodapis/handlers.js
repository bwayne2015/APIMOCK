const csv=require('csvtojson')
const async = require('async')

let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });

  return p;
};

export let loop = (request, h) => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    var promise= new Promise(((resolve) => {
        async.eachSeries(numbers, (n, cb) => {
            adder(sum, n)
                .then(res => {
                    console.log(`Trying to add ${n}`);
                    sum = res;
                    console.log(`Current sum is ${sum}`);
                    cb()
                });
        }, function() {
            resolve(sum)
        });
    }));
    return promise;
};



export let csv2json = (request, h) => {
    let data = [];
    var promise = new Promise((resolve) => {
        csv()
            .fromStream(request.payload.csvFile)
            .on('json',(jsonObj)=>{
                data.push(jsonObj);
            })
            .on('done', (err) => {
                resolve(data)
            });
        });
        return promise;
};