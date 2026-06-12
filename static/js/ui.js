let pagina = 1;
let paginaNueva = 1;

import {cargarPagina} from "./render.js";

export function setPagina(pagina_index) {
    pagina=pagina_index
}
export function inicializarPaginacion() {
  const btnDerecha = document.querySelector("#btn-derecha");
  const btnIzquierda = document.querySelector("#btn-izquierda");
  const btnBuscar = document.querySelector("#btn-buscar");
  const input = document.querySelector("#btn-input");

  input.value = pagina;

  btnDerecha.addEventListener("click", () => {
    paginaNueva += 1;
    input.value = paginaNueva;
  });

  btnIzquierda.addEventListener("click", () => {
    paginaNueva -= 1;
    if (paginaNueva < 1) {
      paginaNueva = 1;
    }
    input.value = paginaNueva;
  });

btnBuscar.addEventListener("click", () => {
  console.log("cargando");
      pagina = paginaNueva;
    // En vez de await cargarPagina(pagina), cambiamos el hash
    location.hash = `pagina=${pagina}`;
});

}