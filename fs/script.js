// navegacion
const $hideShow=document.getElementById("hideShow"),
      $aside=document.getElementById("aside");

$hideShow.addEventListener("click",()=>{
    $aside.classList.toggle("desplegar")
});      

// tabs
function openTab(tabName) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}