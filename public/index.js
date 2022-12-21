const icon = document.querySelector(".container");
const navBack = document.querySelector(".dark");
const all = document.querySelectorAll('li')


function myFunction(x) {  x.classList.toggle("change");  }

icon.addEventListener("click", ()=>{
  all.forEach(nav => nav.classList.toggle("changed"))
  navBack.classList.toggle('changed');  
})

for(let i=0; i<all.length; i++) {
  all[i].addEventListener('click', function() {
    all.forEach(nav => nav.classList.toggle("changed"));
    navBack.classList.toggle('changed');
  })  }

