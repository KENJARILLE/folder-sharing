document.addEventListener('DOMContentLoaded', function () {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyB1wwcVJpZHraOaJOG1w5yFDJEk_T-6qBk",
        authDomain: "folder-sharing-f7df9.firebaseapp.com",
        projectId: "folder-sharing-f7df9",
        storageBucket: "folder-sharing-f7df9.appspot.com",
        messagingSenderId: "464700051533",
        appId: "1:464700051533:web:612e3e27ae3624ee8b4c04",
        measurementId: "G-9Q7SYT6BWF"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // DOM Elements for Signup
    const signupEmail = document.getElementById("signup-email");
    const signupPassword = document.getElementById("signup-password");
    const status = document.getElementById("status");
    const signupButton = document.getElementById("signup-button");

    // Disable signup button and show loading message
    function showLoadingState() {
        signupButton.disabled = true;
        status.textContent = "Signing up, please wait...";
        status.style.color = "orange";
    }

    // Enable signup button and reset status
    function resetSignupState() {
        signupButton.disabled = false;
        status.textContent = "";
    }

    // Signup Function (unchanged)
    document.getElementById("signup-button").addEventListener("click", () => {
        const email = signupEmail.value;
        const password = signupPassword.value;

        // Basic input validation
        if (email === "" || password === "") {
            status.textContent = "Please fill in both fields.";
            status.style.color = "red";
            return; // Stop the signup process if fields are empty
        }

        showLoadingState(); // Show loading state

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                status.textContent = "Signup successful!";
                status.style.color = "green";
                console.log("User:", userCredential.user);

                // Clear the input fields
                signupEmail.value = "";
                signupPassword.value = "";

                // Redirect to the login page after successful signup
                setTimeout(() => {
                    window.location.href = "index.html";  // Assuming "index.html" is your login page
                }, 1000); // Wait a bit before redirecting
            })
            .catch((error) => {
                status.textContent = "Signup failed: " + error.message;
                status.style.color = "red";
                console.error("Error:", error.message);
            })
            .finally(() => {
                resetSignupState(); // Reset the state after the process finishes
            });
    });

});

