import Elem from "./Elem.js";

class Megjelenit {
    #lista = {};
    constructor(tarolo, lista) {
        this.#lista = lista;
        tarolo.html('<table class="table table-hover table-bordered table-striped"></table>');
        this.tablaElem = tarolo.children(".table");
        this.tablazatbaIr();
    }


    tablazatbaIr() {
        this.#lista.forEach((elem, id) => {
            const sor = new Elem(id, elem, this.tablaElem);
        });
    }




} export default Megjelenit;