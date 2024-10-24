let mode = "dark";
let bulb = document.querySelector("#bulb");

let outside = document.querySelector("#outside");
outside.classList.add("end");

let heading = document.querySelector("h1");
let scoreBox = document.querySelector("#score");

let click = () =>{
    if (mode ==="light"){
        document.body.style.backgroundColor = "#212529";
        document.body.style.color = "white";
        winnerst.style.color = "#F8F9FA";
        heading.style.color = "#F8F9FA";
        scoreBox.style.color = "#F8F9FA";
        outside.classList.add("end");
        outside.classList.remove("start");
        mode = "dark";
        bulb.style.backgroundColor = "black";
        bulb.style.color = "white";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        winnerst.style.color = "#212529";
        heading.style.color = "#212529";
        scoreBox.style.color = "#212529";
        outside.classList.add("start");
        outside.classList.remove("end");
        mode = "light";
        bulb.style.backgroundColor = "white";
        bulb.style.color = "black";
    }
};
bulb.addEventListener("click",(event) => {
    event.stopPropagation();
    click();
});
outside.addEventListener("click",click);