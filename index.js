// create functions for each exeercise in the routine 
// and assign them to a variable 
// create a variable for an array of all the exercises 
// create a routine function that takes two arguments the dog name and breed
// in that function create an variable for an empty array
// iterate through the variable of all the excercises 
// push each exercise to the new array 
// return the new array 


let wakeDog = function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`)
    return `Wake ${dogName} the ${dogBreed}`
  }

  let leashDog = function leashDog(dogName, dogBreed){
      console.log(`leash ${dogName} the ${dogBreed}`)
      return `Leash ${dogName} the ${dogBreed}`
  }

  let walkToPark = function walkToPark(dogName, dogBreed){
      console.log(`walk to the park with ${dogName} the ${dogBreed}`)
      return `Walk to the park with ${dogName} the ${dogBreed}`
  }

  let throwFrisbee = function throwFrisbee(dogName, dogBreed){
      console.log(` throw the frisbee for ${dogName} the ${dogBreed}`)
      return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }
   

  let walkHome = function walkHome(dogName, dogBreed){
      console.log(`Walk home with ${dogName} the ${dogBreed}`)
      return `Walk home with ${dogName} the ${dogBreed}`
  }

  let unleashDog = function unleashDog(dogName, dogBreed){
      console.log(`unleash ${dogName} the ${dogBreed}`)
      return `Unleash ${dogName} the ${dogBreed}`
  }

  let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

  function exerciseDog(dogName, dogBreed){
      let exercises = []
      for (let i = 0; i < routine.length; i++) {
      let fn = routine[i]
      const exercise = fn(dogName, dogBreed)
      exercises.push(exercise)

      }
      return exercises 

  }


