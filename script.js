document.addEventListener("DOMContentLoaded", function() {

    function updateClock() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const clock = document.getElementById("clock");

        if (clock) {
            clock.textContent = hours + ":" + minutes + ":" + seconds;
        }

        const hari = [
            "Minggu", "Senin", "Selasa", "Rabu",
            "Kamis", "Jumat", "Sabtu"
        ];

        const bulan = [
            "Januari", "Februari", "Maret", "April",
            "Mei", "Juni", "Juli", "Agustus",
            "September", "Oktober", "November", "Desember"
        ];

        const tanggal =
            hari[now.getDay()] + ", " +
            now.getDate() + " " +
            bulan[now.getMonth()] + " " +
            now.getFullYear();

        const dateNow = document.getElementById("dateNow");

        if (dateNow) {
            dateNow.textContent = tanggal;
        }

        const year = document.getElementById("year");

        if (year) {
            year.textContent = now.getFullYear();
        }
    }

    updateClock();
    setInterval(updateClock, 1000);


    const form = document.getElementById("quoteForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const nama = document.getElementById("nama").value.trim();
            const paket = document.getElementById("paket").value;
            const kebutuhan = document.getElementById("kebutuhan").value.trim();

            if (nama === "" || kebutuhan === "") {
                alert("Silakan isi nama dan kebutuhan terlebih dahulu.");
                return;
            }

            const pesan =
                "Halo Udi,\n\n" +
                "Nama: " + nama + "\n" +
                "Paket: " + paket + "\n" +
                "Kebutuhan: " + kebutuhan + "\n\n" +
                "Terima kasih.";

            const nomor = "6285716123618";
            const url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);

            window.open(url, "_blank");
            form.reset();
        });
    }


    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarMenu = document.getElementById("menu");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            if (
                window.innerWidth < 992 &&
                navbarMenu &&
                navbarMenu.classList.contains("show")
            ) {
                const navbarButton = document.querySelector(".navbar-toggler");

                if (navbarButton) {
                    navbarButton.click();
                }
            }
        });
    });


    const animatedElements = document.querySelectorAll(
        ".service-card, .food-card, .price-card, .contact-form"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-animation");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        animatedElements.forEach(function(element) {
            element.classList.add("before-animation");
            observer.observe(element);
        });
    } else {
        animatedElements.forEach(function(element) {
            element.classList.add("show-animation");
        });
    }

});