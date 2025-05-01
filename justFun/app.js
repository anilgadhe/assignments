let yesButton = document.querySelector(".mx-2");

let noButton = document.querySelector(".no");

let container = document.querySelector(".container");

let p = document.createElement("p");
p.innerText="You are so kind :)"

yesButton.addEventListener("click",()=>{
     container.appendChild(p);
});



noButton.addEventListener("mouseover",()=>{
    const container = document.querySelector(".container");
    const maxX = container.clientWidth - noButton.offsetWidth;
    const maxY = container.clientHeight - noButton.offsetHeight;

    const randX = Math.floor(Math.random() * maxX);
    const randY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = `${randX}px`;
    noButton.style.top = `${randY}px`;
})