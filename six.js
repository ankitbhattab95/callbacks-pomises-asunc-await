let carName
let carObj = {}
//this is an alternate way of writing the five.js file 
//this pyramid structure is called callback hell
//although it resolves the issues, it is not easy to read
//as the callback dependency will grow, so will this pyramid structure
setCarName = (callback) => {
    setTimeout(() => {
        setTimeout(() => {
            carObj = { name: 'maruti', model: 'base' };
            carName = carObj.name;
            callback();
        }, 1000);
    }, 1000)
}

displayName = () => {
    console.log('carName = ', carName)
}


setCarName(displayName)  //callback




