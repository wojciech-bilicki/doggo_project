import palindrome from 'is-this-palindrome'

import letTheTimerBegin from './src/timer'
import { fetchDoggoBreeds, getDogDataByBreedId } from './src/api';


const select = document.querySelector('.breed-select');
const doggoImgEl = document.querySelector('.doggo-image');


const pupulateDogUI = (dogData) => {
  document.body.lastChild.remove()
  doggoImgEl.setAttribute('src', dogData.url);
  const dogDescription = `${dogData.breeds[0].name} is ${dogData.breeds[0].temperament} and was used for ${dogData.breeds[0].bred_for}`;
  const dogDescriptionParagraph = document.createElement('p');
  dogDescriptionParagraph.textContent = dogDescription;
  document.body.appendChild(dogDescriptionParagraph);
}



const populateSelectWithBreeds = (breeds) => {
  breeds.forEach((breed) => {
    const option = document.createElement('option');
    option.text = breed.name;
    option.value = breed.id;
    select.appendChild(option);
  });
};

select.addEventListener('change', async (event) => {
  console.log(event.target.value);
  const breedId = event.target.value;
  const dogData = await getDogDataByBreedId(breedId);
  pupulateDogUI(dogData)
  console.log(palindrome.isPalindrome("wanna"))
});

const initTheApp = async () => {
  letTheTimerBegin()
  const breeds = await fetchDoggoBreeds();
  populateSelectWithBreeds(breeds);
};

initTheApp();
