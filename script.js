function showSelectedRoutes() {
    const checkboxes = document.querySelectorAll('input[name="route"]:checked');
    const selectedRoutes = Array.from(checkboxes).map(checkbox => checkbox.value);
    if (selectedRoutes.length > 0) {
        alert("Selected Routes: " + selectedRoutes.join(", "));
    } else {
        alert("No routes selected.");
    }
}
<a href="website.html">Select</a>