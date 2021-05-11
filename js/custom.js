// get current year
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#currentDate").innerHTML = currentYear;
}
getCurrentYear();