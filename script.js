document.addEventListener("DOMContentLoaded", () =>{
    //Ensuring the everything is done before it is loaded
    const form = document.getElementById("registeration-form");
   
    //selecting form-feedback
    const feedbackDiv = document.getElementById("form-feedback");
    
    //adding event listener
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
    //retrieving User Inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        //initializing Validation Variables
        let isValid = true;
        const messages = [];

        //username Validation
        if(username.length < 3){
            isValid = false;
            messages.push("Username is less than 3");
        }

        //email validation
         if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)){
            isValid = false;
            messages.push("Invalid Email");
         }

         //password validation
         if(password.length < 8){
            isValue = false;
            messages.push("Password must be at least 8 characters long");
         }
         feedbackDiv.style.display = "block"; // make it visible
if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
} else {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#d9534f";
}


    }) 
})