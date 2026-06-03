// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Login berhasil!");
  });
}

// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Mengambil nilai radio button yang sedang terpilih
    const selectedRole = document.querySelector('input[name="role"]:checked').value;

    // Menampilkan alert dinamis sesuai pilihan
    alert(`Akun berhasil dibuat sebagai ${selectedRole.toUpperCase()}!`);
  });
}