function navItemActive(event) {
    let i;
    let navItem = document.getElementsByClassName("nav-link");
    for (i = 0; i < navItem.length; i++) {
        navItem[i].className = navItem[i].className.replace(' nav-item-active', '');

    }
    event.currentTarget.className += ' nav-item-active';
}


// para input color
var muestrario;
var colorPredeterminado = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    muestrario = document.querySelector("#muestrario");
    muestrario.value = colorPredeterminado;
    muestrario.addEventListener("input", actualizarPrimero, false);
    muestrario.addEventListener("change", actualizarTodo, false);
    muestrario.select();
  }

  function actualizarPrimero(event) {
    var p = document.querySelector("p");
  
    if (p) {
      p.style.color = event.target.value;
    }
  }

  function actualizarTodo(event) {
    document.querySelectorAll("p").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }