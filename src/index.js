
document.addEventListener('DOMContentLoaded', ()=>{
    let selectThing = document.getElementById('breed-dropdown');
    let ulBreedArea = document.querySelector('#dog-breeds');
    console.log('%c HI', 'color: firebrick')

    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(res){
    return res.json()
    })
    .then((data)=>
        data.message.forEach(function (el) {
        slapDogsOnDOM(el)
    }))

    function slapDogsOnDOM(url) {
        let divUl = document.querySelector('#dog-imgs');
        let dogLi = document.createElement('li');
        let dogImg = document.createElement('img');
        dogImg.src = url;
        dogImg.width = 100;
        dogImg.height = 100;
        divUl.append(dogLi)
        dogLi.append(dogImg) 
    }
        
    //challenge 2 
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        
        return slapBreedsOnDom(data.message)
    })

    function slapBreedsOnDom(breeds) {
        for (key in breeds) {
        let breedLi = document.createElement('li');
        breedLi.className = 'breed'
        breedLi.innerText = key;
        ulBreedArea.appendChild(breedLi)
        }
    }
     //challenge 3
     //When the user clicks any of the dog breed list items, the color the text should change.
    ulBreedArea.addEventListener('click', (event)=>{
        let selected = event.target.classList.contains('breed');
        if (selected) {
            event.target.style.color = 'green'
        }
    })
     //challenge 4
    selectThing.addEventListener('change', handleSelectClick)
})//outside of DOM


function handleSelectClick(event) {
    let selectedVal = event.target.value //=> tells me what letter the user has clicked
    let ulBreedArea = document.querySelector('#dog-breeds');
    ulBreedArea.innerHTML = ''
    //capture the ul and clear the ul 
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => {
        return res.json();
    }).then((data) => {
        filterThatBreedsHashToArr(data.message, selectedVal).forEach((el)=>{
                renderFilteredList(el)
        })
    })
}
 

function filterThatBreedsHashToArr (hash, val) {
     let keyOfBreedsInArr = Object.keys(hash); //=>this returns an output of an arr of keys 
     let arrSelectedBreeds = keyOfBreedsInArr.filter((el)=>{
            return el[0] === val;
     }) 
        return arrSelectedBreeds;
}


function renderFilteredList (str) {
    let ulBreedArea = document.querySelector('#dog-breeds');
    let breedLi = document.createElement('li');
    breedLi.className = 'breed'
    breedLi.innerText = str;
    ulBreedArea.appendChild(breedLi)
}

//TO DO: Fix so that user can see all breeds after filter 