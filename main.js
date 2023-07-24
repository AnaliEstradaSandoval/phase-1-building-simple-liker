// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heart = document.querySelector('.like')
const span = document.querySelector('.like-glyph')
const hearts = document.getElementsByClassName('like')
const spans = document.getElementsByClassName('like-glyph')

// Your JavaScript code goes here
document.getElementById("modal").hidden = true


function displayHeart(){
  if (span.classList.contains("activated-heart")){
   span.classList.remove("activated-heart");
   span.textContent = EMPTY_HEART
  }else {
   span.classList.add("activated-heart")
   span.textContent = FULL_HEART
  }
 }
 
for (let i = 0; i < hearts.length; i++){
  hearts[i].addEventListener('click', (e) => {
    e.preventDefault();
    mimicServerCall()
    .then(function(object){
     console.log(object)
     displayHeart()
      })
 
     .catch(function(error){
     document.getElementById("modal").hidden = false
     let modalMessege = document.getElementById("modal-message")
     modalMessege.textContent = error.messege
     setTimeout(() => {
       document.getElementById("modal").hidden = true
     }, 3000);
     })
 })
}

//  heart.addEventListener('click', (e) => {
//    e.preventDefault()
//    mimicServerCall()
//    .then(function(object){
//     console.log(object)
//     displayHeart(object)
//      })

//     .catch(function(error){
//     document.getElementById("modal").hidden = false
//     let modalMessege = document.getElementById("modal-message")
//     modalMessege.textContent = error.messege
//     setTimeout(() => {
//       document.getElementById("modal").hidden = true
//     }, 3000);
//     })
// })
 

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}




// function displayHeart(object){
//   if (span.classList.contains("activated-heart")){
//    span.classList.remove("activated-heart");
//    span.textContent = EMPTY_HEART
//   }else {
//    span.classList.add("activated-heart")
//    span.textContent = FULL_HEART
//   }
//  }
 
//  heart.addEventListener('click', (e) => {
//    e.preventDefault()
//    mimicServerCall()
//    .then(function(object){
//     console.log(object)
//     displayHeart(object)
//      })