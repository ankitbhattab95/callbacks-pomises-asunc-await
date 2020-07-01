let carName
let carObj = {}

setCarName = (callback) => {
    setTimeout(() => {
        setCarObj(callback); //callback
    }, 1000)
}

displayName = () => {
    console.log('carName = ', carName)
}
//2 new funcions, setCarObj and extractName are used to 
//resolve the issue in four.js
setCarObj = (callback) => {
    setTimeout(() => {
        carObj = { name: 'maruti', model: 'base' };
        extractName(callback) // this will ensure that carName is correctly set to carObj.name
    }, 1000);
}

extractName = (callback) => { 
    carName = carObj.name;
    callback();
}

setCarName(displayName)  //callback