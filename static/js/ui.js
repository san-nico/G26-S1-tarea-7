const btn_derecha = document.querySelector("#btn-derecha");
const btn_izquierda = document.querySelector("#btn-izquierda");
const btn_buscar = document.querySelector("#btn-buscar");
const input = document.querySelector("#btn-input");
let pagina=1;

input.value=pagina;

btn_derecha.addEventListener("click", async () => {
    pagina += 1;
    input.value=pagina;
});
btn_izquierda.addEventListener("click", async () => {
    pagina -= 1;
    input.value=pagina;
});
btn_buscar.addEventListener("click", async () => {
    await cargarPagina(pagina);
});