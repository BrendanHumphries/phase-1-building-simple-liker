// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.querySelectorAll('.like span');
heart.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.className === 'like-glyph') {
      mimicServerCall()
      .then(() => {
        element.textContent = FULL_HEART;
        element.className = 'activated-heart';
      })
      .catch(() => {
        const modalContainer = document.querySelector('#modal');
        modalContainer.className = '';
        setTimeout(() => {modalContainer.className = 'hidden'}, 3000);
      })
    } else  if (element.className === 'activated-heart') {
      element.textContent = EMPTY_HEART;
      element.className = 'like-glyph';
    }
  })
})

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