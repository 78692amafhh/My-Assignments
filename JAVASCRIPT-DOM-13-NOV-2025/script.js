let title = document.querySelector('h1')
let ctaPlus = document.querySelector('#plus')
let ctaMinus = document.querySelector('#minus') 
let resetBtn = document.getElementById('reset');

let counter = 0;

ctaPlus.addEventListener('click', function(){
    counter++;
    title.innerHTML = counter;
    resetBtn.style.background = "rgb(52 52 52)";
    resetBtn.style.border = "1px solid rgb(52 52 52)";
    title.style.color = "green";
})
ctaMinus.addEventListener('click', function(){
    counter--;
    title.innerHTML = counter;
    resetBtn.style.background = "rgb(52 52 52)";
    resetBtn.style.border = "1px solid rgb(52 52 52)";
    title.style.color = "red";
})
resetBtn.addEventListener('click', function(){
     counter = 0;
    title.innerHTML = counter;
    resetBtn.style.background = "#0d0d0d";
    resetBtn.style.border = "1px solid #fff";
    title.style.color = "#fff";
})