let main = document.querySelector('main');
let button = document.querySelector('.reset');

promptAnddivs();
function promptAnddivs() {
    let gridSize = prompt('Pick drawing grid size~', 'Max-limit: 100');

    if (gridSize <= 100 && gridSize >= 0) {
        for (let i = 0; i < gridSize * gridSize; i++) {
            let divs = document.createElement('div');
            divs.className = 'divs';
            let divsText = document.createTextNode('');
            divs.appendChild(divsText);
            main.appendChild(divs);
        }
    
        main.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        let colorDivs = document.querySelectorAll('.divs');
    
        for (let i = 0; i < colorDivs.length; i++) {
            colorDivs[i].addEventListener('mouseenter', function(e) {
                e.target.style.backgroundColor = 'blue';
            });
        };
    } else {
        alert('Surpassed maximum or minimum limit, press reset to try again');
    }
};
