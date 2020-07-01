let carName

//this will cause 'carName' to be displayed as 'undefined'
//solved in three.js
setCarName = () => {
    setTimeout(() => {
        carName = 'maruti'
    }, 1000)
}

setCarName()
console.log('carName = ', carName)