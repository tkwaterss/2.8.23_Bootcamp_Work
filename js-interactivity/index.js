console.log("Hello World!");

//Only need to pull in the for element outside of the function and event listener
const form = document.querySelector('form')
const message = document.querySelector('#message');

const addMovie = evt => {
    //clearing buttos default action
    evt.preventDefault();
    //pulling in the text typed into the movie field
    const inputField = document.querySelector('input');
    //creating new elements for the list
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');

    //asigning the input text to the new span element
    movieTitle.textContent = inputField.value;

    //Once the movieTitle span is made, we add a listener on the text to invoke crossOffMovie
    movieTitle.addEventListener('click', crossOffMovie);

    //Adding the span element to the new list item
    movie.appendChild(movieTitle);

    //creating a delete button on the movie list item
    const deleteBtn = document.createElement('button');
    //Puts and X at teh cetner of the button
    deleteBtn.textContent = 'X';
    //Tells the button to listen for a click and invoke the deleteMovie function
    deleteBtn.addEventListener('click', deleteMovie);
    //atts the delete button to the movie element
    movie.appendChild(deleteBtn);

    //Adds the newly created li to the existing ul section
    document.querySelector('ul').appendChild(movie);

    //finally resets the input field text to empty
    inputField.value = '';
}

//function to delete the movie when the deleteMovie button is clicked
const deleteMovie = evt => {
    //targets the parent of the button to remove the entire li element
    evt.target.parentNode.remove();
    message.textContent = `${evt.target.parentNode.firstChild.textContent} Removed from List!`;
    //calls the reveal Message function
    revealMessage();
}

const crossOffMovie = evt => {
    //looks at the button that was clicked and toggles the checked class on or off
    evt.target.classList.toggle('checked');
    if (evt.target.classList.contains('checked')) {
        message.textContent = `${evt.target.textContent} Watched!`;
    } else {
        message.textContent = `${evt.target.textContent} hasn't been watched`
    }
    //calls teh revealMessage function
    revealMessage();
}

const revealMessage = evt => {
    //if hide has been applied, it removes it before setting the timer
    message.classList.remove('hide');
    //setTimeout puts a delay on the callback function inside.
    //this callback function just adds the hide class to the message element
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

//listens for the submit button to be clicked to invoke the addMovie function
form.addEventListener('submit', addMovie);