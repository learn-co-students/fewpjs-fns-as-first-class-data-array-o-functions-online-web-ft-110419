function wakeDog(dogName, dogBreed){
  const command = `Wake ${dogName} the ${dogBreed}`
  console.log(command);
  return command;
}

function leashDog(dogName, dogBreed){
  const command = `Leash ${dogName} the ${dogBreed}`
  console.log(command);
  return command;
}

function walkToPark(dogName, dogBreed){
  const command = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(command);
  return command;
}

function throwFrisbee(dogName, dogBreed){
  const command = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(command);
  return command;
}

function walkHome(dogName, dogBreed){
  const command = `Walk home with ${dogName} the ${dogBreed}`
  console.log(command);
  return command;
}

function unleashDog(dogName, dogBreed){
  const command = `Unleash ${dogName} the ${dogBreed}`
  console.log(command);
  return command;
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed){
  let array = []
  for (let i = 0; i < routine.length; i++){
    array.push(routine[i](dogName, dogBreed))
  }
  return array;
}
