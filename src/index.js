document.addEventListener('DOMContentLoaded', () => {
console.log("it's working")

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
  .then(res => res.json())
  .then(data => add4DogsToDom(data.message))

fetch(breedUrl)
  .then(res => res.json())
  .then(data => addBreedsToDom(data.message))

  function addBreedsToDom(data){
    let breedList = document.querySelector(".breed-div");
      (Object.keys(data)).forEach(breed => {
        breedList.innerHTML += `<ul id="dog-breeds">
        <li>${breed}</li></ul>`
    })
  }
  //
  // breeds.forEach(breed => {
  //   // let breedLi = document.createElement("li");
  //   breedList.innerHTML += `<li>
  //   ${breed}</li>`
  // })


  function add4DogsToDom(urls){
    let dogList = document.querySelector("#pupper-list");

      urls.forEach((el) => {
        let dogLi = document.createElement("li");
        let dogImg = document.createElement("img");
      // dogLi.innerHTML = el
        dogImg.src = el
        dogList.append(dogLi)
        dogLi.append(dogImg)
    })
  }


})
