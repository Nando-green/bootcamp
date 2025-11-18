const jobsListingSection = document.querySelectorAll(".jobs-listings");

jobsListingSection.forEach((section) => {
    section.addEventListener("click", function (event) {
        const element = event.target.closest(".button-apply-job");
        if (element) {
            element.textContent = "¡Aplicado!";
            element.classList.add("is-applied");
            element.disabled = true;
        }
    });
});

const filter =
    document.querySelector(
        "#filter-technology"
    ); /*recupera el valor de la lista */

filter.addEventListener("change", function () {
    console.log(filter.value);
});

const location =
    document.querySelector(
        "#filter-location"
    ); /*recupera el valor de la lista */

location.addEventListener("change", function () {
    console.log(location.value);
});
