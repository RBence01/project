window.addEventListener("load", () => {
    console.log("loaded");
    document.getElementById("search").addEventListener("input", search);
});

function search(e) {
    let searchbar = e.target;
    console.log(searchbar.value);
}