// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//function Header() {}

const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');

    const d = document.createElement('span');
    d.classList.add('date');
    d.textContent = 'SMARCH 28, 2019';
    header.appendChild(d);

    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    header.appendChild(h1);

    const t = document.createElement('span');
    t.classList.add('temp');
    t.textContent = '98°';
    header.appendChild(t);
    
    return header;
}
document.querySelector('.header-container').appendChild(createHeader());