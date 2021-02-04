

let topbutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function replace( hide, show ) {
    document.getElementById(hide).style.display="none";
    document.getElementById(show).style.display="block";
  }


  window.transitionToPage = function(href) {
    document.querySelector('a').addEventListener("click", function(event){
        event.preventDefault()
      });
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


// window.onload = () => {
//     const transitionEl = document.querySelector('.transition');
//     const anchors = document.querySelector('a')

      
//     setTimeout(() => {
//         transitionEl.classList.remove('is-active')
//     }, 500);
// for (let i=0; i<anchors.length; i++){
//     const anchor = anchors[i];

//     anchor.addEventListener('click', e =>{
//         e.preventDefault();
//         let target = e.target.href;
//         transitionEl.classList.add('is-active')
//         setTimeout(() => {
//             window.location.href=target;
//         }, 500);

    
//         })
//     }
// }

