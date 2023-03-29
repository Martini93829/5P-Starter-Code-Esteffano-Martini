//input boxes
let food = document.querySelector(".food");
let age = document.querySelector(".age");
//button
let button = document.querySelector("button");
//other pieces of body
let result = document.querySelector(".result");
let body = document.querySelector("body");
//result divs
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");

button.onclick=(function(){
    let userFood=food.value;
    let userAge=age.value;

    if (userFood ==="yes" && userAge <=25){
   answer2.style.display="block";
       result.innerHTML=userFood+ " you eat cheese curds and you can eat " +userAge+" curds!";
    }else if (userFood ==="yes" && userAge >=25){
   answer1.style.display="block";
       result.innerHTML=userFood+ " you eat cheese curds and you can eat " +userAge+" curds!";
    } else if (userFood ==="no" && userAge <=25){
   answer3.style.display="block";
       result.innerHTML=userFood+ " you do not eat cheese curds but you can eat " +userAge+" curds!";
    } else if (userFood ==="no" && userAge >=25){
   answer4.style.display="block";
       result.innerHTML=userFood+ " you do not eat cheese curds but you can eat " +userAge+" curds!";
    }
    
});
