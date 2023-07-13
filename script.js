document.getElementById('myInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // check if enter key is pressed
        event.preventDefault(); // prevent default form submission
        let inputValue = this.value; // get the input value
        let listItem = document.createElement('li'); // create a new list item
        listItem.textContent = inputValue; // set the content of the list item
        document.getElementById('myList').appendChild(listItem); // append the list item to the unordered list
        this.value = ''; // clear the input field
    }
})