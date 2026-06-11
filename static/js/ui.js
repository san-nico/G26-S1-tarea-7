const btn_derecha = document.querySelector("#btn-derecha");
const btn_izquierda = document.querySelector("#btn-izquierda");
const btn_buscar = document.querySelector("#btn-buscar");
const input = document.querySelector("#btn-input");
let pagina=1;
let pagina_nueva=1;
input.value=pagina;

btn_derecha.addEventListener("click", async () => {
    pagina_nueva += 1;
    input.value=pagina_nueva;
});
btn_izquierda.addEventListener("click", async () => {
    pagina_nueva -= 1;
    input.value=pagina_nueva;
});
btn_buscar.addEventListener("click", async () => {
    if (pagina!==pagina_nueva){
        pagina=pagina_nueva
        await cargarPagina(pagina);
    }
    
});