//this will create 16 divs
for(let i = 0; i < 256; i++){
    let newDiv = document.createElement("div");
    newDiv.style.border = "5px solid black";
    newDiv.classList = "item";

    document.getElementById("divs-container").appendChild(newDiv);
}

