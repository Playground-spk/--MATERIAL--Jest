

const multipleTwoNumber = (x,y) => x*y

const curryingMultipleWith2 = multipleTwoNumber.bind(null,2);


module.exports = {
    curryingMultipleWith2
}

