const accountForm = document.getElementById("accountForm");
const addressForm = document.getElementById("addressForm");
const accountMessage = document.getElementById("accountMessage");
const addressMessage = document.getElementById("addressMessage");

accountForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (
        fullname === "" ||
        email === "" ||
        phone === ""
    ) {
        accountMessage.className = "form-message error";
        accountMessage.textContent = "Semua data informasi akun wajib diisi.";
        return;
    }

    accountMessage.className = "form-message success";
    accountMessage.textContent = "Informasi akun berhasil disimpan.";
});

addressForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const postalCode = document.getElementById("postalCode").value.trim();

    if (
        address === "" ||
        city === "" ||
        postalCode === ""
    ) {
        addressMessage.className = "form-message error";
        addressMessage.textContent = "Semua data alamat wajib diisi.";
        return;
    }

    addressMessage.className = "form-message success";
    addressMessage.textContent = "Alamat pengiriman berhasil disimpan.";

});