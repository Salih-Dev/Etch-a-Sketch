const container = document.querySelector("#container");

function createSquares(number) {
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");
        container.appendChild(div);
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "blue";
        });
    };
};


const button = document.querySelector("button");

button.addEventListener("click", () => {
    let response = prompt("Enter number of squares per side(1-100): ");

    if (response > 100) {
        alert("Please enter an intiger between 1 and 100")
    }

    createSquares(response);
});