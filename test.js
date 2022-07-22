console.log("hello world");

const multiply = ( a, b) => {
    return a * b;
}

const drinkCheck = ( age ) => {
    if(age < 21 ) {
        return "yo are not allowed to drink because you are " + age;
    } else if( age >= 21) {
     return "yo are allowed to drink because you are over the " + age;
    } else{
        return" I don't know what this means";
    }
}

console.log(drinkCheck(18))