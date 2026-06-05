// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Login berhasil!");
  });
}

// REGISTER
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const role = document.querySelector('input[name="role"]:checked').value;

    if (role === "admin") {
        window.location.href = "/admin/index.html";
    } else {
        window.location.href = "/katalog.html";
    }
});