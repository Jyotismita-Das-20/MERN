function getDataFromInternet(successCallback){
  console.log('Getting data from internet');
  successCallback('KG coding');
}

getDataFromInternet((data) => {
  console.log(`Data is fetched ${data}`);
});

function getDataFromInternetUsingPromise(){
  let promise = new promise((resolve, reject) => {
    console.log(`Getting data from internet using promise`);
    for (let i=0; i<10000; i++) console.log(i);
    //resolve('KG coding');
    reject('Internet Timeout');
  });
  return promise;
}

getDataFromInternetUsingPromise()
.then((data) => {
  console.log(`Data is fetched ${data}`);
});