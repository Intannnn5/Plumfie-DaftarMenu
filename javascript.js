document.addEventListener("DOMContentLoaded", function () {
    let tiktokIcon = document.querySelector('.fa-tiktok');
    let instagramIcon = document.querySelector('.fa-instagram');

    if (tiktokIcon) {
        tiktokIcon.addEventListener('click', function () {
            window.open('https://www.tiktok.com', '_blank', 'noopener,noreferrer');
        });
    }

    if (instagramIcon) {
        instagramIcon.addEventListener('click', function () {
            window.open('https://www.instagram.com', '_blank', 'noopener,noreferrer');
        });
    }

    let searchContainer = document.querySelector(".search");
    if (searchContainer) {
        let searchBox = document.createElement("input");
        searchBox.type = "text";
        searchBox.placeholder = "Search Ice Cream";
        searchBox.classList.add("search-input");

        searchContainer.appendChild(searchBox);

        searchBox.addEventListener("keydown", function (event) {
            if (event.key === " ") {
                event.preventDefault();
            }
        });

        searchBox.addEventListener("input", function () {
            let query = searchBox.value.toLowerCase();
            let menuItems = document.querySelectorAll(".menu-item");

            menuItems.forEach(function (item) {
                let itemName = item.querySelector("h3").innerText.toLowerCase();
                if (itemName.includes(query)) {
                    item.style.display = "block";
                    item.style.opacity = "1";
                } else {
                    item.style.opacity = "0";
                    setTimeout(() => item.style.display = "none", 200);
                }
            });
        });
    }
});
