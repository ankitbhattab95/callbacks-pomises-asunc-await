// the final objective of files one.js to eigth.js
// is to log carName as 'maruti'

// async functions may cause the 'carname' to be printed as 'undefined'
// Promises can help in resolving this issue, which is explained in these 8 js files

let carName
setCarName = () => {
    carName = 'maruti'
}

setCarName()
console.log('carName = ', carName)