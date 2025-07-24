
function redirectJob() {
    const select = document.getElementById("jobSelect");
    const value = select.value;
    if (value) {
        window.location.href = value;
    }
}