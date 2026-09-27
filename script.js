/* =========================================
   MENÚ MÓVIL
========================================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("open");

});


/* =========================================
   FILTRO DEL PROGRAMA
========================================= */

const dayButtons = document.querySelectorAll(".day");
const events = document.querySelectorAll(".event");


function showDay(day) {

    events.forEach(function (event) {

        if (event.dataset.day === day) {

            event.style.display = "grid";

        } else {

            event.style.display = "none";

        }

    });

}


dayButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedDay = button.dataset.day;


        dayButtons.forEach(function (dayButton) {

            dayButton.classList.remove("active");

        });


        button.classList.add("active");


        showDay(selectedDay);

    });

});


/* Mostrar el primer día al cargar */

showDay("friday");


/* =========================================
   FILTRO DE PELÍCULAS
========================================= */

const filmFilters =
    document.querySelectorAll(".film-filter");

const filmCards =
    document.querySelectorAll(".film-card");


filmFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const category = filter.dataset.category;


        filmFilters.forEach(function (button) {

            button.classList.remove("active");

        });


        filter.classList.add("active");


        filmCards.forEach(function (film) {

            if (
                category === "all" ||
                film.dataset.category === category
            ) {

                film.style.display = "block";

            } else {

                film.style.display = "none";

            }

        });

    });

});


/* =========================================
   FORMULARIO DE PARTICIPACIÓN
========================================= */

const filmForm =
    document.getElementById("filmForm");

const filmMessage =
    document.getElementById("filmMessage");


filmForm.addEventListener("submit", function (event) {

    event.preventDefault();


    filmMessage.textContent =
        "Tu cortometraje ha sido registrado correctamente.";


    filmMessage.style.color = "#171717";


    filmForm.reset();

});