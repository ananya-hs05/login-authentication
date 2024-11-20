const validUsername = "user123";
const validPassword = "password123";

// Select elements
const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

// Login authentication function
loginButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    errorMessage.textContent = "";
    // Redirect or perform any action after successful login
  } else {
    errorMessage.textContent = "Invalid username or password!";
  }
});