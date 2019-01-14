console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener('DOMContentLoaded', function() {







  fetch(imgUrl)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      json.message.forEach(function(imgSrc) {
        const img = document.createElement('img')
        img.src = imgSrc
        document.querySelector('#dog-image-container').appendChild(img)

      })
    });


  fetch(breedUrl)
    .then(response => response.json())
    .then(json => {
      Object.keys(json.message).forEach(function(breed) {
        const li = document.createElement('li')
        li.innerText = breed
        document.querySelector('#dog-breeds').appendChild(li)
      })

      const li = document.getElementsByTagName('li')
      Array.from(li).forEach(function(breedLi) {
        breedLi.addEventListener('click', function(event) {
          event.target.style.color="red"
          // if we use => we need event.target, otherwise we can use this keyword for the element that triggered the event
        })
      })

    })






  // querySelector only returns static collection and not something that gets changed as the page changes
  // querySelector also gives back nodelist not a real array
  document.getElementById('breed-dropdown').addEventListener("change", filterBreeds);

function filterBreeds (event){
  const lis = document.querySelectorAll('li')
  Array.from(lis).forEach(function (li) {
    if (li.innerText[0] == event.target.value) {
      li.style.display = 'block'
    }else{
      li.style.display = 'none'
    }


  })
}

  // document.createElement('li').appendChild(img))






});
