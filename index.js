function wakeDog(a,b){
    let text = `Wake ${a} the ${b}`
    return text
}
function leashDog(a,b){
    let text = `Leash ${a} the ${b}`
    return text
}
function walkToPark(a,b){
    let text = `Walk to the park with ${a} the ${b}`
    return text
}
function throwFrisbee(a,b){
    let text = `Throw the frisbee for ${a} the ${b}`
    return text
}
function walkHome(a,b){
    let text = `Walk home with ${a} the ${b}`
    return text
}

function unleashDog(a,b){
    let text = `Unleash ${a} the ${b}`
    return text
}
let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
function exerciseDog(dogName,dogBreed) {
    let arry = []
    for (let i = 0; i < routine.length; i++) {
       arry.push(routine[i](dogName,dogBreed))
    }
  return arry;
}