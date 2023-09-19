import Model from "../model/Model.js";
import Megjelenit from "../view/Megjelenit.js";
import Urlap from "../view/UralapView.js";

class Controller {
    constructor() {
        const tarolo = $(".tarolo");
        const model = new Model();
        new Urlap({
            tevekenyseg: "szakdolgozat specifikáció elkészítése",
            hatarido: "2023.10.15",
            kesz: false,
        }, $(".ujadat"));
        new Megjelenit(tarolo, model.getLista());

        $(window).on("torol", (event) => {
            /* console.log(event.detail); */
            model.torol(event.detail);
            tarolo.empty();
            new Megjelenit(tarolo, model.getLista());
        })

        $(window).on("kesz", (event) => {
            /* console.log(event.detail); */
            model.kesz(event.detail);
            tarolo.empty();
            new Megjelenit(tarolo, model.getLista());
        })
        $(window).on("megse", (event) => {
            /* console.log(event.detail); */
            model.megse(event.detail);
            tarolo.empty();
            new Megjelenit(tarolo, model.getLista());
        })
    }
} export default Controller;
