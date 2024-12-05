//this will create 16 divs
for(let i = 0; i < 256; i++){
    let newDiv = document.createElement("div");
    newDiv.style.border = "5px solid black";
    newDiv.classList = "item";

    document.getElementById("divs-container").appendChild(newDiv);
}

// when you hover over a div it gets completely colored
const divs = document.querySelectorAll('.item');
divs.forEach(div => {
    div.addEventListener('mouseenter',hoverDiv)
});

function hoverDiv(event){
    if (!event.target.classList.contains("colored")) { // Check if the div doesn't have the 'colored' class
        event.target.classList.add("colored"); // Add the 'colored' class if it doesn't have it
    }
}