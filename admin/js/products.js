const modal = document.getElementById("productModal");
const openBtn = document.querySelector(".btn-add-product");
const closeBtn = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelModal");

function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

openBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

cancelBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

const editModal = document.getElementById("editProductModal");

const editButtons = document.querySelectorAll(".btn-edit");

const closeEditModal = document.getElementById("closeEditModal");
const cancelEditModal = document.getElementById("cancelEditModal");

editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    editModal.classList.add("active");
  });
});

function closeEdit() {
  editModal.classList.remove("active");
}

closeEditModal.addEventListener("click", closeEdit);
cancelEditModal.addEventListener("click", closeEdit);

editModal.addEventListener("click", (e) => {
  if (e.target === editModal) {
    closeEdit();
  }
});

// /* Hitung Harga Diskon */
// const hargaNormal = document.getElementById("hargaNormal");
// const diskon = document.getElementById("diskon");
// const hargaDiskon = document.getElementById("hargaDiskon");

// function hitungDiskon() {
//   const harga = parseFloat(hargaNormal.value) || 0;
//   const persen = parseFloat(diskon.value) || 0;

//   const hasil = harga - (harga * persen) / 100;

//   hargaDiskon.value = "Rp " + hasil.toLocaleString("id-ID");
// }

// hargaNormal.addEventListener("input", hitungDiskon);
// diskon.addEventListener("input", hitungDiskon);
