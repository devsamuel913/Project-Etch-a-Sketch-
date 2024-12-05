//this will create 16 divs
for(let i = 0; i < 256; i++){
    let newDiv = document.createElement("div");
    newDiv.style.border = "5px solid black";
    newDiv.classList.add("item");

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

//let the user enter the size of the new grid, replace the existing one and make it work equally well
const newGridButton = document.getElementById("new-grid");
newGridButton.addEventListener("click",askForSize);

function askForSize(){
    let userInputHeight = parseInt(prompt("What do you want the height of your grid to be?"))
    let userInputWidth = parseInt(prompt("What do you want the width of your grid to be?"))
    const divsContainer = document.getElementById('divs-container');

    if(userInputHeight != "" && userInputWidth != "" && userInputHeight && userInputHeight < 100 && userInputWidth < 100 && !isNaN(userInputHeight) && !isNaN(userInputWidth)){
        divsContainer.innerHTML = "";
        let wholeSize = parseInt(userInputHeight) * parseInt(userInputWidth); //This represents the whole area of the grid

        for(let i = 0; i < wholeSize; i++){ //let js created as many divs as the result of the height and widht product
            let newDiv = document.createElement("div");
            newDiv.style.border = "5px solid black";
            newDiv.classList.add("item");
            const classForGrids = document.querySelector(".cl-divs-container");
            classForGrids.style.maxHeight = `${parseInt(userInputHeight)*100}` + "px";
            classForGrids.style.maxWidth = `${parseInt(userInputWidth)*100}` + "px";

            const divs = document.querySelectorAll('.item');
            divs.forEach(div => {
            div.addEventListener('mouseenter',hoverDiv)});

            document.getElementById("divs-container").appendChild(newDiv);
        }

    }else{
        alert("Invalid input! Your input is over 100 squares or you entered a letter.")
    }
    
}


