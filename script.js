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

const technology =
    document.querySelector(
        "#filter-technology",
    ); /*recupera el valor de la lista */

technology.addEventListener("change", function () {
    console.log(technology.value);
});

const location =
    document.querySelector(
        "#filter-location",
    ); /*recupera el valor de la lista */

location.addEventListener("change", function () {
    console.log(location.value);
});
const experience =
    document.querySelector(
        "#filter-experience",
    ); /*recupera el valor de la lista */

experience.addEventListener("change", function () {
    console.log(experience.value);
});

const searchInput = document.querySelector("#job-search-input");
searchInput.addEventListener("input", function () {
    console.log(searchInput.value); /*se verifica el contenido del input*/
});

searchInput.addEventListener("blur", function () {
    console.log("se dispara cuando el mouse sale del campo");
});

const searchForm = document.querySelector("#job-search-form");
searchForm.addEventListener("submit", function (event) {
    /*event.preventDefault()*/
    console.log(
        "submit",
    ); /*se verifica el contenido del form atravez del submit*/
});

document.addEventListener("keydown", function (event) {
    console.log(
        "tecla presionada:",
        event.key,
    ); /*verifica que tecla se presiona*/
});

const filterjob = document.querySelector("#filter-location");
const jobs = document.querySelectorAll(".jobs-listings");

filterjob.addEventListener("change", function () {
    const selectedValue = filterjob.value;

    jobs.forEach((job) => {
        const model = job.dataset.model;
        const isShown = selectedValue === "" || selectedValue === model;
        job.classList.toggle("is-hidden", isShown === false);

        /*  if (selectedValue === "" || selectedValue === model) {
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }*/
    });
});

const filtertech = document.querySelector("#filter-technology");
const techs = document.querySelectorAll(".jobs-listings");

filtertech.addEventListener("change", function () {
    const selectedValue = filtertech.value;

    techs.forEach((tech) => {
        const techno = tech.dataset.techno;
        const isShown = selectedValue === "" || selectedValue === techno;
        tech.classList.toggle("is-hidden", isShown === false);
    });
});
const filterexperience = document.querySelector("#filter-experience");
const exper = document.querySelectorAll(".jobs-listings");

filterexperience.addEventListener("change", function () {
    const selectedValue = filterexperience.value;

    exper.forEach((exp) => {
        const experi = exp.dataset.experi;
        const isShown = selectedValue === "" || selectedValue === experi;
        exp.classList.toggle("is-hidden", isShown === false);
    });
});
