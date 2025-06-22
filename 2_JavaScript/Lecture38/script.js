console.log('Checking callback hell');

function getDataFromInternet(successCallback){
  console.log('Getting data from internet');
  setTimeout(() => {
    console.log('Got data from internet');
    successCallback();
  }, 2000);
}

getDataFromInternet();