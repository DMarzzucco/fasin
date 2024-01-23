// respon
let menuVisible = false;
function showAndHideM() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function selecionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// tabla
function openTab(tabName) {
    var tablas = document.querySelectorAll('.tab');
    tablas.forEach(function (tab) {
        tab.classList.remove('active', 'scale-up-center');
    });

    document.getElementById(tabName).classList.add('active', 'scale-up-center');
}
//redir
function redireccionar(url) {
    if (url && url !== '#') {
        window.location.href = url;
    }
}



