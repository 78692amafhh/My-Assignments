let increase = 0
let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let innertop = document.querySelector('.innertop')

btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none';
    let randomnognrtr = 50 + Math.floor(Math.random() * 50)
    console.log(`Your file will be downloaded in`, randomnognrtr/10, `seconds.`);

    let int = setInterval( () => {
        increase++
        h2.innerHTML = increase+'%'
        innertop.style.width = increase+'%'
    },randomnognrtr);

    setTimeout( () => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, randomnognrtr*100);
})



