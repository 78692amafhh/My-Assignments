let audio1 = new Audio('./24.mp3')
let audio2 = new Audio('./25.mp3')
let audio3 = new Audio('./26.mp3')
let audio4 = new Audio('./27.mp3')
let audio5 = new Audio('./28.mp3')
let audio6 = new Audio('./29.mp3')



document.addEventListener('keydown', function(e){
    if (e.code === 'KeyA') {
        audio1.play();
    } else if  (e.code === 'KeyB'){
        audio2.play();
    }else if  (e.code === 'KeyC'){
        audio3.play();
    }else if  (e.code === 'KeyD'){
        audio4.play();
    }else if  (e.code === 'KeyE'){
        audio5.play();
    }else if  (e.code === 'KeyF'){
        audio6.play();
    }
});
