// add logic to show email


const createRestaurantHomePage = () =>{

    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');



    //create and append image element
    const image = document.createElement('img');
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg';
    pageContent.appendChild(image);

    // create and append headline

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome';
    pageContent.appendChild(headline);

    // create and append copy element
    const copy = document.createElement('p');
    copy.textContent= ('Servimos comida, veni a disfrutar');
    pageContent.appendChild(copy);
    content.appendChild( pageContent);

}


export default createRestaurantHomePage;