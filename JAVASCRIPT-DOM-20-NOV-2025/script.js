let testimonials = [
  { name: "John Doe", 
        image: "https://images.unsplash.com/photo-1757317202611-5047086e9024?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", role: "Senior Developer", text: "Excellent work on responsive designs!" },
  { name: "Mike Johnson", 
        image: "https://plus.unsplash.com/premium_photo-1759558515428-e9d62979f6f8?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", role: "Client", text: "Delivered the project before deadline." },
  { name: "Sarah Lee", 
        image: "https://images.unsplash.com/photo-1718131507821-78f160223491?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", role: "Team Lead", text: "Great attention to detail and pixel-perfect UI." },
  { name: "Alex Brown", 
        image: "https://images.unsplash.com/photo-1719578833621-a3b2f6d4aca6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", role: "Mentor", text: "Fast learner with strong fundamentals." }
];


let sum = "";

testimonials.forEach(function (val) {
   sum = sum + `<div class="card">
        <img src="${val.image}" alt="">
       
        <h3>${val.name}</h3>
        <h4>${val.role}</h4>
        <p>${val.text}</p>
        </div>`
}

)


let main = document.querySelector('main')

main.innerHTML = sum