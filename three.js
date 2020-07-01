let carName

//using callback to solve the issue in two.js file
//this will correctly log 'carName' as 'maruti'
setCarName = (callback) => {
    setTimeout(() => {
        carName = 'maruti';
        callback()
    }, 1000)
}

displayName = () => {
    console.log('carName = ', carName)
}

setCarName(displayName) //callback