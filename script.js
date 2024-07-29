// Add an event listener to the 'Add' button that triggers when it is clicked
document.getElementById('addButton').addEventListener('click', function() {
    // Get the input element where the user types the to-do item
    const input = document.getElementById('todoInput');
    // Get the value of the input and trim any leading/trailing whitespace
    const value = input.value.trim();
    // Check if the input value is not empty
    if (value) {
        // If not empty, add the to-do item to the list
        addTodoItem(value);
        // Clear the input field for the next to-do item
        input.value = '';
    }
});

// Function to add a new to-do item to the list
function addTodoItem(text) {
    // Create a new list item element
    const li = document.createElement('li');

    // Create a checkbox element for the to-do item
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; // Set the type of input to checkbox
    // Add an event listener to the checkbox to handle the change event
    checkbox.addEventListener('change', function() {
        // Toggle the 'completed' class to strike through the text when checked
        li.classList.toggle('completed');
        // Move the completed item to the bottom of the list if checked
        if (this.checked) {
            li.parentNode.appendChild(li);
        }
    });

    // Create a span element to hold the text of the to-do item
    const span = document.createElement('span');
    span.textContent = text; // Set the text of the span to the to-do item text

    // Create a delete button element
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'; // Set the text of the button to 'Delete'
    // Add an event listener to the delete button to handle the click event
    deleteButton.addEventListener('click', function() {
        // Remove the list item from the DOM when the delete button is clicked
        li.remove();
    });

    // Append the checkbox, text span, and delete button to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Append the new list item to the to-do list in the DOM
    document.getElementById('todoList').appendChild(li);
}
