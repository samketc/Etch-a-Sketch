const container = document.querySelector('.container');
const newGrid = document.querySelector('.newGrid');

//newGrid button functionality
newGrid.addEventListener("click", () =>{
    let size = prompt('How big?');
    container.innerHTML = "";
    size>100 ? size=100 : size = size;
    createGrid(size,size);
})

//create a grid of divs
function createGrid(rows,cols){
    for(x=1;x<=rows;x++){
        const row = document.createElement("div");
        row.id = 'row'+x;
        row.className = 'row';
        for(y=1;y<=cols;y++){
            const cell = document.createElement("div");
            cell.id = 'row'+x+'col'+y;
            cell.className = 'cell';
            cell.style.width = Math.floor(800/cols)+'px';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

//add mouse hover highlight effect
container.addEventListener("mouseover", (e) => {
    if(e.target.className==='cell') {
        e.target.style.background = 'gray';
    }
})