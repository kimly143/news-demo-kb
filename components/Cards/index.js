// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//create card
const createCard = ({headline, authorPhoto, authorName}) => {
    const eCard = document.createElement('div');
    eCard.classList.add('card');

    const hl = document.createElement('div');
    hl.classList.add('headLine');
    hl.textContent = headline;
    eCard.appendChild(hl);

    const author = document.createElement('div');
    author.classList.add('author');
    eCard.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const auImage = document.createElement('img');
    auImage.src = authorPhoto;
    imgContainer.appendChild(auImage);

    const auName = document.createElement('span');
    auName.textContent = `By ${authorName}`;
    author.appendChild(auName);

    return eCard;
}

//axios
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        for(topic in response.data.articles){
            (response.data.articles[topic]).forEach(item => {
                document.querySelector('.cards-container').appendChild(createCard(item));
            });
        }
    })
    .catch((error) => {console.error(error)});