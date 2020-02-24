// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//create tab
const createTab = (topic) => {
    const t = document.createElement('div');
    t.classList.add('tab');
    t.textContent = topic;
    return t;
}

//axios
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        //console.log(response.data);
        (response.data.topics).forEach(tp => {
            const topic = createTab(tp);
            document.querySelector('.topics').appendChild(createTab(tp));
        });
    })
    .catch((error) => {console.error(error)});

