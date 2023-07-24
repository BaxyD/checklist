document.getElementById('myInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // check if enter key is pressed
        event.preventDefault(); // prevent default form submission
        let inputValue = this.value; // get the input value
        let listItem = document.createElement('li'); // create a new list item
        listItem.setAttribute('type', 'checkbox'); // set type to checkbox
        listItem.id = `checkbox-${listItem.id}`; // sets id for new list items
        listItem.textContent = inputValue; // set the content of the list item
        document.getElementById('myList').appendChild(listItem); // append the list item to the unordered list
        
        listItem.addEventListener('click', function(check){
            this.classList.toggle('crossed-out');
        }); // adding a crossed out function nested in the original function
        
        this.value = ''; // clear the input field
    }
})
function toggleTab() {
    const tabContent = document.querySelector('.tab-content');
    console.log('hello');
    if (tabContent.style.display === 'none') {
        tabContent.style.display = 'block';
        tabContent.style.left = '0';
    } else {
        tabContent.style.display = 'none';
        tabContent.style.left = '-180px';
    }
}

