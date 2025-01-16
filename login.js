document.addEventListener('DOMContentLoaded', function () {

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
    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");
    const loginStatus = document.getElementById("login-status");
    const loginButton = document.getElementById("login-button");

    // Ensure elements exist before attaching event listeners
    if (!loginEmail || !loginPassword || !loginButton || !loginStatus) {
        console.error("One or more login elements are missing. Check the HTML IDs.");
        return;
    }

    loginButton.addEventListener("click", () => {
        console.log("Login button clicked");

        const email = loginEmail.value.trim();
        const password = loginPassword.value.trim();

        if (!email || !password) {
            loginStatus.textContent = "Please fill in both fields.";
            loginStatus.style.color = "red";
            return;
        }

        loginStatus.textContent = "Logging in, please wait...";
        loginStatus.style.color = "orange";

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                loginStatus.textContent = "Login successful!";
                loginStatus.style.color = "green";
                console.log("User logged in:", userCredential.user);

                setTimeout(() => {
                    window.location.href = "home.html";
                }, 1000);
            })
            .catch((error) => {
                loginStatus.textContent = "Login failed: " + error.message;
                loginStatus.style.color = "red";
                console.error("Login error:", error.message);
            });
    });
});
