function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(task = "go to the office"){
    return `This Monday, I will ${task}.`
}

function wrapAdjective(whatever = "*"){
    return function(atribute = "special"){
        return `You are ${whatever}${atribute}${whatever}!`

    }
}