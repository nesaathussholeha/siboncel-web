const wishlistButtons =
    document.querySelectorAll(".favorite");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".product-card");

        card.remove();

    });

});