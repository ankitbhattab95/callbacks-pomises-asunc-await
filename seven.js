let carName
let carObj = {}

displayName = () => {
    console.log('inside displayName > carName = ', carName)
}

setCarObj = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        carObj = { name: 'maruti', model: 'base' };
        console.log('inside setcarname')
        resolve()
    }, 1000);
    })
}

extractName = () => {
    carName = carObj.name;
    console.log('inside extractName')
}

//better than callback hell
setCarObj()
    .then(() => extractName())
    .then(() => displayName())
    .catch(err => console.log(err))