// code your solution here

function saturdayFun(rollerskate) {
    if (rollerskate) {
        return "This Saturday, I want to bathe my dog!"
    }else{
        return "This Saturday, I want to roller-skate!"
    }
}

function mondayWork(goToOffice){
    if (goToOffice) {
        return "This Monday, I will work from home."
    }else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(string = "*" ) {
    const innerFunction= function(adjective = "special"){
       return `You are ${string}${adjective}${string}!`
    }
    return innerFunction  
}