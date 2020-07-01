let carName
let carObj = {}

displayName = () => {
    console.log('displayName > carName = ', carName)
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
//alternate to .then .catch syntax
//await is only valid in async function
start = async () => {
    try {
        await setCarObj();
        extractName();
        displayName()
    }
    catch (err) {
        console.log(err)
    }
}

start()