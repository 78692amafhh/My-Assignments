let addelement = [
    {
        Telangana: "Sheryians Coding School",
        Tripura: "Sheryians Coding School",
        Sikkim: "Sheryians Coding School"
    },
    
    {
        Rajasthan: "Sheryians Coding School",
        Punjab: "Sheryians Coding School",
        Odisha: "Sheryians Coding School"
    },
    
    {
        Goa: "Sheryians Coding School",
        Gujarat: "Sheryians Coding School",
        Maharashtra: "Sheryians Coding School"
    }
];

let btn = document.querySelector('button');
let box = document.querySelector('#box');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * addelement.length);
    const randomObject = addelement[randomIndex];

    const objectKeys = Object.keys(randomObject);
    
    const randomKeyIndex = Math.floor(Math.random() * objectKeys.length);
    const selectedKey = objectKeys[randomKeyIndex];
    
    const selectedValue = randomObject[selectedKey];
    
    let newDiv = document.createElement('div');
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let rot = Math.random() *360;
    newDiv.innerHTML = `${selectedKey}: ${selectedValue}`; 
    
    newDiv.style.color = getRandomColor(); 
    newDiv.style.padding = '10px';
    newDiv.style.margin = '5px 0';
    newDiv.style.border = '1px solid #ccc';
    newDiv.style.borderRadius = '50px';
    newDiv.style.backgroundColor = '#000';
    newDiv.style.position = 'absolute';
    newDiv.style.left = x+`%`;
    newDiv.style.top = y+`%`;
    
    newDiv.style.rotate = rot+'deg'

    box.appendChild(newDiv);
    
    box.style.backgroundColor = '#777';
});