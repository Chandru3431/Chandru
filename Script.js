function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // Demo login details
  if (user === "student" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerHTML = "❌ Invalid Login";
  }
}

function logout() {
  window.location.href = "index.html";
}
