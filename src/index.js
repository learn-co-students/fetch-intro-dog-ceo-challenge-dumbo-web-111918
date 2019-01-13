console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
//end of my whole loaded listener
})
//variables
const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedURL = 'https://dog.ceo/api/breeds/list/all';
const dogImageContainer  = document.querySelector("#dog-image-container");
let dogBreedsContainer = document.querySelector("#dog-breeds");
const breedDropdown = document.querySelector("#breed-dropdown");
let breeds =[];





//for li listener to change on click
//pick the ul , do ul.addEventListener, takes in name of event and function
//do event delegation, if it is an li, change target color to something
//otherwise would have to add eventlistener to each li

// dogBreedsContainer.addEventListener("click", function(event){
//   console.log(event);
//   event.target.style.color = "blue";
//   //console.log(li);
//   //document.getElementById("li").style.color = "blue";
// });


//fetch dog images
//use fetch to grab from website
//parse to json object
//use two promises first one is return
//second one is console.log? has the data
//save the data to a variable outside of the function
//so I can reuse it.
//test as i go

//now that I have variable
//select part of DOM to append
//make a function that will take one element
//make an image tag,
//drop this guy in as an image
//append to DOM
//could also do string interp ? to just add them? not sure
//call .forEach to add them all
//

  fetch(imgURL, {
  	method: "GET"
  })
  .then(function(response){
  	if (response.ok){
  	  //console.log(response)
    return response.json();
     }
  })
  .then(function(parsedJSON){
  	  //console.log(parsedJSON);

      //option 1 call forEach on the message and then do string interp of the images onto the UL
      //parsedJSON.message.forEach(function (imageURL){
        //can create img and set src in one step and skip the append by doing += to the parent node.
        //note this all is a string for javascript
        //
      //dogImageContainer.innerHTML += `<img src = ${imageURL}>`;
     //});
     //option 2 create a separate function for imageMaker and then call forEach
     let images = parsedJSON.message
  	 images.forEach(imageMaker);
  });

//fetch text
fetch(breedURL, {
  	method: "GET"
  })
  .then(function(response){
  	if (response.ok){
  	  //console.log(response)
     return response.json();
     }
  })
  .then(function(parsedJSON){
  	 //console.log(parsedJSON.message);

     //console.log(Object.keys(parsedJSON.message));
     breeds = Object.keys(parsedJSON.message);

 //option 1 do a for each on breeds and then just string interp adding to the
 //ul breedDogsContainer. If I do that, remember the <l1> is part of string interp

  // breeds.forEach (function (breed){
  //   dogBreedsContainer.innerHTML += `<li> ${breed} </li>`;
   //});

    //option 2 created a separate function for breedMaker and then call it
       breeds.forEach(liMaker);

  });

//***listeners here***

   dogBreedsContainer.addEventListener("click", function(event) {
//   i was able to do this on the ul because target was the li
     event.target.style.color = "blue";
   });
breedDropdown.addEventListener("change", function(event){
  //console.log(event.target.value); - this is a, b, c, d
  //for select the value of select tag is the value

//option one
//give each li an id
     let breedLis = document.querySelectorAll("#myLi");
   //this couldn't be selected until I created the lis and gave them each an id
    breedLis.forEach(function(breed){
      console.log(breed);
       let breedName = breed.innerHTML;
        if (breedName[0] !== event.target.value){
          breed.style.display = "none";
        }
    // // //option two
    // // // dont have to give each li an id. just set return of fetch data equal
    // // // to full array, filter array by letter
    // // // then map over filtered and set dogContainer.innerHTML to that set
    //    }
    });
  });



//put helper functions here
  function imageMaker (url) {
    const newImg = document.createElement("img");
    newImg.src =url;
    //console.log(newImg);
    newImg.style.width = "200px";
    newImg.style.height = "200px";
    dogImageContainer.append(newImg);
  }

function liMaker (breedName) {
    const newLi = document.createElement("li");
    newLi.innerHTML = breedName;
    newLi.id = "myLi"
    dogBreedsContainer.append(newLi);
  }





