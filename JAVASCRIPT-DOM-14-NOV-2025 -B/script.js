let stnmArryy = [
{
    team: "Mumbai Indians",
    captain: "Hardik Pandya",
    coach: "Mark Boucher",
    trophies: 5,
    city: "Mumbai",
    bgColor: 'rgb(149, 75, 6)'
},
{
    team: "Chennai Super Kings",
    captain: "Ruturaj Gaikwad", 
    coach: "Stephen Fleming",
    trophies: 5,
    city: "Chennai",
    bgColor: 'rgb(20, 90, 183)'
},
{
    team: "Royal Challengers Bangalore",
    captain: "Faf du Plessis",
    coach: "Andy Flower",
    trophies: 0,
    city: "Bangalore",
    bgColor: 'rgb(236, 7, 163)'
},
{
    team: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",
    coach: "Chandrakant Pandit",
    trophies: 2,
    city: "Kolkata",
    bgColor: 'rgb(80, 19, 149)'
}
];

let btn = document.querySelector('button');
let box = document.querySelector('#box');
let wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', function(){

let winner = stnmArryy[Math.floor(Math.random() * stnmArryy.length)];

  box.innerHTML = `
        <div class="team-info">
            <div class="win-team">Winning Team is: ${winner.team}</div>
            <div class="win-captain">Captain: ${winner.captain}</div>
            <div class="win-coach">Coach: ${winner.coach}</div>
            <div class="win-trophies">Trophies: ${winner.trophies}</div>
            <div class="win-city">City: ${winner.city}</div>
        </div>
    `;
    
    box.style.backgroundColor = winner.bgColor;
    box.style.fontSize = '2rem';
    
});