
window.onload = function() {
  var modal = document.getElementById('id01');
  modal.style.display = "block";
};


window.onclick = function(event) {
  var modal = document.getElementById('id01');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


const form = document.querySelector(".modal-content");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="psw"]').value;
  const repeatPassword = document.querySelector('input[name="psw-repeat"]').value;

  
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }
  if (password !== repeatPassword) {
    alert("Passwords do not match.");
    return;
  }

  
  alert("Sign up successful! Redirecting to Home page...");
  window.location.href = "index.html"; 
});