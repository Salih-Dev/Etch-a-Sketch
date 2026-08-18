const container = document.querySelector("#container");
const button = document.querySelector("button");

function createSquares(number) {

    container.innerHTML = "";

    const sizePercentage = 100 / number;

    for (let i = 0; i < number * number; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");

        div.style.flex =  `0 0 ${sizePercentage}%`;
        div.style.height = `${sizePercentage}%`;

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "blue";
        });

        container.appendChild(div);
    };
};

createSquares(16);


button.addEventListener("click", () => {
    let response = prompt("Enter number of squares per side (1-100): ");

    if (response === null) {
        return;
    }

    const gridSize = parseInt(response, 10);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid integer between 1 and 100.");
        return;
    }

    createSquares(gridSize);
});