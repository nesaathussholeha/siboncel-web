const statusSelects = document.querySelectorAll(".status");

function updateStatusColor(select) {
    const value = select.value;

    select.classList.remove(
        "status-diproses",
        "status-dikirim",
        "status-selesai",
        "status-menunggu-pickup",
        "status-siap-pickup",
        "status-selesai-pickup"
    );

    switch (value) {
        case "Diproses":
            select.classList.add("status-diproses");
            break;

        case "Dikirim":
            select.classList.add("status-dikirim");
            break;

        case "Selesai":
            select.classList.add("status-selesai");
            break;

        case "Menunggu Pickup":
            select.classList.add("status-menunggu-pickup");
            break;

        case "Siap Pickup":
            select.classList.add("status-siap-pickup");
            break;

        case "Selesai Pickup":
            select.classList.add("status-selesai-pickup");
            break;
    }
}

statusSelects.forEach((select) => {
    updateStatusColor(select);

    select.addEventListener("change", () => {
        updateStatusColor(select);
    });
});