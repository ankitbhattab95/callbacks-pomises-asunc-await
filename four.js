let carName
let carObj = {}

//Now, in this example, setCarName function depends on another async function setCarObj
//this will create an issue similar to that in two.js file
//solved in five.js file
setCarName = (callback) => {
    setTimeout(() => {
        setCarObj();
        carName = carObj.name
        callback()
    }, 1000)
}

displayName = () => {
    console.log('carName = ', carName)
}


setCarObj = () => {
    setTimeout(() => {
        carObj = { name: 'maruti', model: 'base' };
    }, 1000);
}

setCarName(displayName) //callback  