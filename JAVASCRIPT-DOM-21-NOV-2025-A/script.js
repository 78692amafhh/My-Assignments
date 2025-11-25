
let main = document.querySelector("main");
let cursor = document.querySelector("#cursor");

main.addEventListener('mousemove', 
      function(info){
            cursor.style.left = info.x + 'px'
            cursor.style.top = info.y + 'px'
      }
)

