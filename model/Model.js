import { TODOLIST2 } from "./adatok.js";

class Model {
    #lista = [];
    constructor() {
        this.#lista = TODOLIST2;
    }

    getLista() {
        return this.#lista;
    }

    torol(index){
        this.#lista.splice(index,1);
    }

    kesz(index){
        console.log(this.#lista[index]);
       this.#lista[index].kesz = true;
    }

    megse(index){
        this.#lista[index].kesz = false;
    }



    
} export default Model;