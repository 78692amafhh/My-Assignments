
// // // // // JS PRACTICE


// // // // // 1. 🥇 Grade Checker (ग्रेड जाँच)
// // // // // Question (सवाल): Ek variable marks diya gaya hai. Iske aadhar par student ka grade print karo:

// // // // // "A" Grade: marks 90 ya usse zyada hon aur 100 se kam hon.

// // // // // "B" Grade: marks 70 ya usse zyada hon aur 90 se kam hon.

// // // // // "C" Grade: marks 50 ya usse zyada hon aur 70 se kam hon.

// // // // // Fail: Upar diye gaye marks se kam.

// // // // // Invalid: Agar marks 100 se zyada ho ya 0 se kam ho.

// // // // // JavaScript

// // // // // let marks = 95; 
// // // // // // Aapka code yahan likho



// // // // // let marks = 55;
// // // // // if (marks > 100 || marks < 0){
// // // // //     console.log("Valid marks daal bhai");
// // // // // } else if (marks >= 90) {
// // // // //     console.log("A Grade mila hai tujhe - `congratulation`")
// // // // // } else if (marks >= 70){
// // // // //     console.log("B grade mila - Good try")
// // // // // } else if (marks >= 50){
// // // // //     console.log("C grade aaya tera - keep it up")
// // // // // } else {
// // // // //  console.log("Fail - Looser")
// // // // // }


// // // // // let day = "Saturday";

// // // // // if (day === "Saturday" || day === "Sunday" ){
// // // // //         console.log("It is weekend");
// // // // // } else {
// // // // //     console.log("It is Weekdays");
// // // // // }

// // // // // let temp = 50;

// // // // // if(temp > 30){
// // // // //     console.log("It's Hot! Stay Hydrated")
// // // // // }  else if (temp > 20) {
// // // // //     console.log("Pleasant weather");
// // // // // } 
// // // // // else{
// // // // //     console.log("It's Cold! Wear a jacket");
// // // // // }


// // // // // let light = "red";

// // // // // if (light === "red") {
// // // // //     console.log("Stop")
// // // // // }  else if (light === "orange") {
// // // // //     console.log("Be Ready")
// // // // // } else {
// // // // //     console.log("Go")
// // // // // }


// // // // // let purchaseamt = 2000;

// // // // // if (purchaseamt >= 6500){
// // // // //     console.log("You get a 20% discount.")
// // // // // } else if (purchaseamt > 3500){
// // // // //     console.log("You get a 10% discount")
// // // // // } else {
// // // // //     console.log("No discount applicable")
// // // // // }


// // // // // let day = 1;

// // // // // switch (day) {
// // // // //     case 1:
// // // // //         console.log("Monday");
// // // // //     break;
// // // // //     case 2:
// // // // //         console.log("Tue");
// // // // //     break;
// // // // //     case 3:
// // // // //         console.log("Wed");
// // // // //     break;
// // // // //     case 4:
// // // // //         console.log("Thur");
// // // // //     break;
// // // // //     case 5:
// // // // //         console.log("Fri");
// // // // //     break;
// // // // //     case 6:
// // // // //         console.log("Sat");
// // // // //     break;
// // // // //     case 7:
// // // // //         console.log("Sun");
// // // // //     break;
// // // // //     default:
// // // // //         console.log("Invalid");

// // // // // }



// // // // // let score = 4;

// // // // // switch(true) {
// // // // //     case score > 8 && score < 11:
// // // // //     console.log("Grade A")
// // // // //     break;
// // // // //     case score > 6 && score < 9:
// // // // //     console.log("Grade B")
// // // // //     break;
// // // // //     case 3:
// // // // //     console.log("Grade C")
// // // // //     break;
// // // // //     case 4:
// // // // //     console.log("Grade D")
// // // // //     break;
// // // // //     default:
// // // // //     console.log("Fail")

// // // // // }



// // // // // let age = 20;

// // // // // let hasLicense = false;

// // // // // let canDrive = (age >= 18) && hasLicense;
// // // // // console.log(canDrive);


// // // // // // Vacation par ja sakte hain agar mausam Rainy na ho (isRainy is false) AUR Sunny ho (isSunny is true), YA agar hamare paas bahut paisa ho (hasMoney is true).
// // // // // let isRainy =  true;
// // // // // let isSunny =  false;
// // // // // let hasMoney =  true;

// // // // // let weathercondition = (!isRainy && isSunny);
// // // // // let canGo = weathercondition || hasMoney;

// // // // // console.log(canGo);
// // // // // // Vacation logic: (Mausam Accha HO) OR (Paisa HO)
// // // // // let isWeatherGood = (!isRainy && isSunny); // (!true && false) -> (false && false) -> false

// // // // // let goToVacation = isWeatherGood || hasMoney;

// // // // // // Or simpler: let goToVacation = (!isRainy && isSunny) || hasMoney;

// // // // // console.log(goToVacation);


// // // // // Question (सवाल): Teen variables hain: isGuest, isPremium, aur isSubscribed. Check karo ki kya user ko Exclusive Content ka Access milega ya nahi.

// // // // // Access milega agar user Premium ho AUR Guest na ho (isGuest is false).

// // // // // YA

// // // // // Agar user Premium na ho (isPremium is false) AUR Subscribed ho (isSubscribed is true).


// // // // // let isGuest =  true;
// // // // // let isPremium =  true;
// // // // // let isSubscribed =  false;

// // // // // let canaccess = (isPremium && !isGuest) || (!isPremium && isSubscribed);
// // // // // console.log(canaccess);



// // // // // function sum(a, b) {
// // // // //     // Write your logic here
// // // // // let a = 50;
// // // // // let b = 30;
// // // // // let c = a+b;
// // // // // }
// // // // // sum(a, b)

// // // // // console.log(sum(5, 8));

// // // // // module.exports = {sum}



// // // // let testvar1 = 
// // // // [
// // // //   {"id":1,"name":"Aman","role":"developer","isActive":true,"lastLogin":"2025-11-18"},
// // // //   {"id":2,"name":"Priya","role":"designer","isActive":true,"lastLogin":"2025-11-19"},
// // // //   {"id":3,"name":"Rohit","role":"tester","isActive":false,"lastLogin":"2025-11-10"},
// // // //   {"id":4,"name":"Neha","role":"product","isActive":true,"lastLogin":"2025-11-16"},
// // // //   {"id":5,"name":"Sahil","role":"devops","isActive":false,"lastLogin":"2025-11-01"}
// // // // ]

// // // // let sum = "";

// // // // testvar1.forEach(function (val) {
// // // //    sum = sum + `<div class="card">
// // // //         <img src="${val.image}" alt="">
       
// // // //         <h3>${val.name}</h3>
// // // //         <h4>${val.role}</h4>
// // // //         <p>${val.text}</p>
// // // //         </div>`
// // // // }

// // // // )


// // // // let var1 = '';
// // // // testvar1.forEach(
// // // //     func
// // // // )







// // // // let test120 = [{}];

// // // // let testvar09 =  '';

// // // // test120.forEach(
// // // //   function(va l){
// // // //     testvar09 = testvar09+`
// // // //     `
// // // //   }
// // // // )

// // // // let main = d  ocument.querySelector('main');
// // // // main.innerHTML= testvar09;



// // // let a = 10;
// // // let b = 5;
// // // let c= 20;
// // // if (a > b ){
// // //     consol.log('a is greater thn b')
// // // } else if (a < 20) {
// // //     console.log('a is ')
// // // }


// // // Check if 10 is greater than 5, less than 20, and equal to 10.
// // // let num = 10;

// // // if (num > 5 && num < 20 && num === 10) {
// // //     console.log("Validation Successful: Number meets all three criteria.");
// // // } else {
// // //     console.log("Validation Failed: Number did not meet all criteria.");
// // // }

// // // Teen variables hain: isFirstTimeUser, isFestivalSale, aur cartTotal (number). Check karo ki user ko 25% Discount milega ya nahi.
// // // Discount milega agar: (isFirstTimeUser TRUE ho AUR cartTotal ₹5000 se zyada ho)

// // // YA

// // // Agar (isFestivalSale TRUE ho AUR isFirstTimeUser FALSE ho).

// // isFirstTimeUser = true;
// // isFestivalSale = false;
// // cartTotal = 5000;

// // isFirstTimeUser = 

// let a = 10;
// let b = 5;
// let c= 20;
// if (a > b ){
//     consol.log('a is greater thn b')
// } else if (a < 20) {
//     console.log('a is ')
// }

// function calclte(a, b, op){
//   switch (op){
//     case "+":
//       return a+b;

//       case "-":
//         return a-b;

//         case "*":
//           return a*b;
          
//           case "/":
//           return a/b;
      
//       default:
//       return "Invalid operator";

//   }

// }
// console.log(calclte(10, 20, '+')); 

// function calc(a, b, operator) {
//   switch (operator) {
//     case '+':
//       return a + b;

//     case '-':
//       return a - b;

//     case '*':
//       return a * b;

//     case '/':
//       return a / b;

//     default:
//       return "Invalid operator";
//   }
// }
// console.log(calc(10, 20, '+'));   // 👉 30
// console.log(calc(50, 10, '-'));   // 👉 40
// console.log(calc(6, 5, '*'));     // 👉 30
// console.log(calc(40, 10, '/'));   // 👉 4
// console.log(calc(10, 20, '%'));   // 👉 Invalid operator



// let as = "+";
//  switch (as){
//     case "+":
//       return a+b;

//       case "-":
//         return a-b;

//         case "*":
//           return a*b;
          
//           case "/":
//           return a/b;
      
//       default:
//       return "Invalid operator";

//   }
//   console.log(as);

let p = 1000;
let r = 0.5;
let t = 10;
let n = 4;

let A = p


// let p = 1000;
// let r = 0.5;
// let t = 10;
// let n = 4;

// A = Px(1+r/n)^(n*t)

// // let A = P*()
// function oprt(a, b, op){
//     switch(op){
//         case '+':
//             return a+b;
//             break;
//             case'-':
//             return a-b;
//             break;
//         default:
//             return "Invalid Case";
//     }
// }
// console.log(oprtArrow(10, 5, '+')); // Output: 15

// function calc(a, b, operator) {

//   switch (operator) {
//     case '+':
//       return a + b;

//     case '-':
//       return a - b;

//     case '*':
//       return a * b;

//     case '/':
//       return a / b;

//     default:
//       return "Invalid operator";
//   }
// }




// function checkStatusTraditional(isLogged, balance) 
// { 
//   if (isLogged) {
//      if (balance > 0) { 
//       console.log(checkStatusTraditional(true, 100));
//       } else { 
//       console.log(checkStatusTraditional(false, 100));} 
//     } else { 
//       console.log(checkStatusTraditional(true, 0));} 
// }
// checkStatusTraditional(true, 3) ;



// function checkStatusTraditional(isLogged, balance) 
// { 
//     if (isLogged) {
//         if (balance > 0) { 
//             return "Transaction Successful"; 
//         } else { 
//             return "Error: Insufficient Balance";
//         } 
//     } else { 
//         return "Error: Not Logged In";
//     } 
// }

// console.log("Test 1 (Success):", checkStatusTraditional(true, 3));
// console.log("Test 2 (Low Balance):", checkStatusTraditional(true, 0));
// console.log("Test 3 (Not Logged In):", checkStatusTraditional(false, 100));


// funtion qqq(asa, zxc){
//     if(asa){
//         if (zxc > 0){
//           return "sucess"            
//         } else {
//           return "fail"}        
//     } else {
//         return "fail tu"
//     }
// }
// console.log(qqq(true, 0));


// // Early Return Version
// function qqqEarly(asa, zxc) {
//     if (!asa) {
//         return "Fail: Not logged in";
//     }
//     if (zxc <= 0) {
//         return "Fail: Low balance"; 
//     }
//     return "Success";
// }

// console.log(qqqEarly(true, 0)); 









// Write a program that prints A, B, C, D, or F based on marks

// cons marks = 20;

// let result = (marks)=> {
//  if (marks < 0 || marks > 100){
//     return "INVALID"
//  } else if (marks >= 90){
//      return "A"
//  } else if (marks <= 70){
//      return "B"
//  } else if (marks <= 50){
//      return "C"
//  } else if (marks < 33){
//      return "D"
//  } else {
//   return "Fail"
//  }


// }
// result(20);


// const score = (marks)=> {
//     if (marks> 100 || marks < 0){
//         return "Invalid marks"
//     } else if (marks >= 90) {
//         return "Grade A"
//         } else if (marks <= 89 && marks >= 70) {
//      return "Grade B"    
//     } else if (marks <= 69 && marks >= 50){
//     return "Grade C"    
//     } else if (marks <= 49 && marks >= 33) {
//     return "Grade D"        
//     } else return "Fail"
// }
// // console.log(score(56));
// const rpsss = (usr, cmp) => {
//     if (usr === cmp) return "Draw";
//     if (usr === "sizor" && cmp === "rock") return "cmp win";
//     if (usr === "rock" && cmp === "paper") return "cmp win";
//     if (usr === "sizor" && cmp === "paper") return "user win";
//     if (usr === "rock" && cmp === "sizor") return "user win";
// };
// console.log(rpsss("sizor", "rock")); // comma operator hata diya


// const rpsss = (usr, cmp)=>{
//     if (usr === cmp) return  "Draw";
//     if (usr === "sizor" && cmp === "rock") return "cmp win";
//     if (usr === "rock" && cmp === "paper") return "cmp win";
//     if (usr === "sizor" && cmp === "paper") return "user win";
//     if (usr === "rock" && cmp === "sizor") return "user win";
//     if (usr === "paper" && cmp === "rock") return "user win";
//  }
//  console.log(rpsss("paper", "rock"));


// let rps = (user , copm) => {
//     if (user === copm)  return "Draw";
//     if (user === "Rock" && copm === "Seasor") return "user";
//     if (user === "Seasor" && copm === "Rock") return "copm";
//     if (user === "Rock" && copm === "Paper") return "user";
//     if (user === "Paper" && copm === "Seasor") return "user";
//     if (user === "Paper" && copm === "Rock") return "Paper";
// }
// console.log(rps("Paper" , "Seasor"));


// const getGradeEarly = (marks) => {
//     // 1. अगर marks 90+ हैं, तो 'A' return करके फ़ंक्शन यहीं रुक जाएगा।
//     if (marks >= 90) {
//         return "A";
//     }

//     // 2. यह लाइन तभी एग्जीक्यूट होगी जब marks < 90 हो (पिछले 'if' का 'else' बन गया)।
//     if (marks >= 80) {
//         return "B";
//     }
    
//     // 3. अगर कोई शर्त पूरी नहीं हुई, तो Default Value.
//     return "F"; 
// };

// xxxxxxxxxx

// let accessgrantd = (logedinho , adminbhi)=>{
//     if (typeof logedinho !== "bloolean" || typeof adminbhi !== "boolean"){
//         return "true ya false is must";
//     }
//     if (logedinho && adminbhi){
//             return "U r admin";
//     }
//     else if (logedinho){
//             return "U r editor";
//     }
//     else if (adminbhi){
//             return "login as admin 1st to access adminarea";
//     }
//     else {
//         return "u r guest user";
//     }
// };
// let logedinho = true;
// let adminbhi = false;
// console.log("Test 1 (Logged In User): " + accessgrantd(logedinho, adminbhi));

// const checkAccess = (isLoggedIn, isAdmin) => {
//     if (typeof isLoggedIn !== 'boolean' || typeof isAdmin !== 'boolean') {
//         return "Error: Login status aur Admin status boolean (true/false) hone chahiye.";
//     }

//     if (isLoggedIn && isAdmin) {
//         return "Welcome, Administrator! You have full system access.";
//     }

//     else if (isLoggedIn) { 
//         return "Hello User! Your account is active, but access is limited.";
//     }
//     else if (isAdmin) { 
//         return "Access Error: Cannot be an Admin without being logged in.";
//     }
//     else {
//         return "Guest Mode. Please log in to continue.";
//     }
// };

// let isLoggedIn = true;
// let isAdmin = false;

// console.log("Test 1 (Logged In User): " + checkAccess(isLoggedIn, isAdmin));

// isLoggedIn = true;
// isAdmin = true;
// console.log("Test 2 (Administrator): " + checkAccess(isLoggedIn, isAdmin));

// isLoggedIn = false;
// isAdmin = false;
// console.log("Test 3 (Guest): " + checkAccess(isLoggedIn, isAdmin));

// isLoggedIn = false;
// isAdmin = true;
// console.log("Test 4 (Admin Not Logged In): " + checkAccess(isLoggedIn, isAdmin));

// console.log("Ye line string hai:" + accessgrantd (logedinho, adminbhi) );


// let accessgrantd = (logedinho , adminbhi


