// function getData(given){
//     return new Promise(function(resolve, reject){
//         var data = given;
//         if(data>=100){
//             resolve('resolve ' + data);
//         }else{
//             reject('reject ' + data);
//         }
//     })
// }

// getData(100).then((data)=>{
//     console.log(data);
// })

// getData(99).then().catch((data)=>{
//     console.log(data);
// })

function fetchItems(){
    return new Promise(function(resolve,reject){
        var items = [1,2,3];
        resolve(items);
    });
}

async function logItems(){
    var resultItems = await fetchItems();
    console.log(resultItems);
}

console.log('hello');
logItems()
console.log('bye');
