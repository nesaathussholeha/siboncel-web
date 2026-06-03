document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll('.product-card, .imperfect-card');

    cards.forEach(card => {
        card.style.transition = "transform 0.15s ease-out, box-shadow 0.3s ease";

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((rect.height / 2) - y) / (rect.height / 2) * 8;
            const rotateY = (x - (rect.width / 2)) / (rect.width / 2) * 8;

            card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            card.style.boxShadow = "0 20px 35px rgba(26, 58, 42, 0.15)";
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = "perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)";
            card.style.boxShadow = "";
        });
    });

    const sections = document.querySelectorAll('section, .product-card, .imperfect-card, .footer-col');

    sections.forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(30px)";
        sec.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    const scrollReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(sec => {
            const secTop = sec.getBoundingClientRect().top;

            if (secTop < triggerBottom) {
                sec.style.opacity = "1";
                sec.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Trigger pertama kali

    const buttons = document.querySelectorAll('button, .nav-cta, .btn-lihat, .btn-belanja-dark');

    buttons.forEach(btn => {
        btn.style.transition = "transform 0.1s ease";

        btn.addEventListener('mousedown', () => {
            btn.style.transform = "scale(0.95)"; // Mengecil sedikit saat ditekan
        });

        btn.addEventListener('mouseup', () => {
            btn.style.transform = "scale(1)"; // Kembali normal saat dilepas
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = "scale(1)";
        });
    });

    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});