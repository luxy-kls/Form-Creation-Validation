//declaring an async function
async function fetchUserData() {
    
    //defining the api url
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    //selecting the data container element
   const dataContainer = document.getElementById('api-data');

   //fetching data using the try-catch
   try{
    let response = await fetch(apiUrl);
    let users = await response.json();

    //clearing loading message
    dataContainer.innerHTML ='';

    //initiating and appending user list
    const userList = document.createElement("ul");

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        userList.appendChild(li);

    });

    dataContainer.appendChild(userList);
   } catch{
     dataContainer.innerHTML ='';
     dataContainer.textContent = 'Failed to Load data';
   }
}
document.addEventListener("DOMContentLoaded", function(){
    fetchUserData();
})