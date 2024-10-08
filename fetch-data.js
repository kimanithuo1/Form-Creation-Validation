document.addEventListener('DOMContentLoaded', function () {
    // Define the async function to fetch user data
    async function fetchUserData() {
        // API URL to fetch user data
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        // Select the container where data will be displayed
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            // Convert the response to JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element to list the user names
            const userList = document.createElement('ul');

            // Loop through each user and create a <li> for each name
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the text to user's name
                userList.appendChild(listItem);   // Append each <li> to the <ul>
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors by displaying an error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Call the function after the DOM is fully loaded
    fetchUserData();
});
