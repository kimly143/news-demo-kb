/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//create a carousel component
const createCarousel = () => {
  const cr = document.createElement('div');
    cr.classList.add('carousel');

    const leftBtn = document.createElement('div');
    leftBtn.classList.add('left-button');
    leftBtn.textContent = ' < ';
    cr.appendChild(leftBtn);

    const imgs = ['./assets/carousel/mountains.jpeg','./assets/carousel/computer.jpeg','./assets/carousel/trees.jpeg','./assets/carousel/turntable.jpeg'];

    imgs.forEach(img => {
      const cImage = document.createElement('img');
      cImage.src = img;
      cr.appendChild(cImage);
    });

    const rightBtn = document.createElement('div');
    rightBtn.classList.add('right-button');
    rightBtn.textContent = ' > ';
    cr.appendChild(rightBtn);

    return cr;
}

document.querySelector('.carousel-container').appendChild(createCarousel());