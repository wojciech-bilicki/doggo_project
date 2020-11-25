const fetchDoggoBreeds = async () => {
  const response = await fetch('https://api.thedogapi.com/v1/breeds')
  const breeds = await  response.json()
  return breeds
}

const getDogDataByBreedId = async (breedId) => {
  const response = await fetch(
    'https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' +
      breedId
  );
  const [dogData] = await response.json();
  return dogData
}

export {
  fetchDoggoBreeds,
  getDogDataByBreedId
}