const NUMBER_OF_DOGS = 15;

//creates state object
const state = {
  dogImageContainer: null,
	addDogButton: null,
	dogCountLabel: null,
	dogCount: 1
};

const pickRandomNumber = () => {
  return Math.floor(Math.random() * NUMBER_OF_DOGS) +1;
};

//print a random number
// console.log(pickRandomNumber());

//go to state obj and update dog object attribute to hold the img element with id
const loadControls = () => {
	state.addDogButton = document.getElementById('add-dog-button');
  state.dogImageContainer = document.getElementById('dog-image-container');
	state.dogCountLabel = document.getElementById('dog-count-label')
};

//helper function
// const setRandomDog = () => {
//   //const dogImg = document.getElementById('dog-image');
//   const imgNumber = pickRandomNumber();
//   const newImgName = `../imgs/${imgNumber}.jpeg`;
//   state.dogImage.src = newImgName;
// };

// created a funciton register event
// const registerEventHandlers = () => {
//   // console.log(pickRandomNumber()); // another way to generate a random number using document
//   const dogImg = document.getElementById('dog-image');
//   const imgNumber = pickRandomNumber();
//   const newImgName = `../imgs/${imgNumber}.jpeg`;
//   dogImg.src = newImgName;
// };

// const addDogImgToTop = () => {};

//first thing that happens is grab that first piece of state 
//and then run the set, so i don't to manually grab and be able to just update
const registerEventHandlers = () => {
  loadControls();
  //setRandomDog();
  state.addDogButton.addEventListener('click', (event) => {
    //const dogImg = document.getElementById('dog-image-container');
    const imgNumber = pickRandomNumber();
	  const newImgName = `../imgs/${imgNumber}.jpeg`;
	  const newDog = document.createElement('img');
		newDog.src = newImgName;
		newDog.alt = 'A random doggo';
		state.dogImageContainer.prepend(newDog);
		++state.dogCount;
		state.dogCountLabel.textContent = state.dogCount;
	});
};
//document holds everything in our html and we can access what we need for ou html
// DOMContentLoaded: built in events that we can listen for.
document.addEventListener('DOMContentLoaded', registerEventHandlers);