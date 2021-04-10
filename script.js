
let div = document.getElementById("main");
let colorText = document.querySelector("h2");
let btn = document.getElementById("btn");

btn.addEventListener("click",() => {
    let randomNum1 = (Math.ceil(Math.random()*255));
let randomNum2 = (Math.ceil(Math.random()*255));
let randomNum3 = (Math.ceil(Math.random()*255));
    document.body.style.backgroundColor=`rgb(${randomNum1},${randomNum2},${randomNum3})`;

    btn.style.backgroundColor=`rgb(${randomNum1},${randomNum2},${randomNum3})`;
    
    colorText.innerHTML=`COLOR : RGB ( ${randomNum1} , ${randomNum2} , ${randomNum3} )`;

});

