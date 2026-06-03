const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", () => {

    const keyword = searchInput.value.toLowerCase();

    productCards.forEach(card => {

        const productName = card
            .querySelector(".product-name")
            .textContent
            .toLowerCase();

        if (productName.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

const categoryButtons = document.querySelectorAll(".category");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const selectedCategory =
            button.textContent.trim();

        productCards.forEach(card => {

            const cardCategory =
                card.dataset.category;

            if (
                selectedCategory === "Semua" ||
                selectedCategory === cardCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

const favoriteButtons =
    document.querySelectorAll(".favorite");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon =
            button.querySelector("iconify-icon");

        if (button.classList.contains("active")) {

            icon.setAttribute(
                "icon",
                "mdi:heart"
            );

        } else {

            icon.setAttribute(
                "icon",
                "mdi:heart-outline"
            );

        }

    });

});

const cartButtons =
    document.querySelectorAll(".cart");

const cartIcon =
    document.querySelector(".cart-btn");

let cartCount = 0;

const badge = document.createElement("span");

badge.classList.add("cart-badge");
badge.textContent = "0";

cartIcon.style.position = "relative";

cartIcon.appendChild(badge);

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        badge.textContent = cartCount;

        const productName =
            button
                .closest(".product-card")
                .querySelector(".product-name")
                .textContent;

        showToast(
            `${productName} ditambahkan ke keranjang`
        );

    });

});

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2500);

}