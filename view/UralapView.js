class Urlap{

    #adat = [];

    constructor(adat, szuloElem){
        this.szuloElem = szuloElem;
        this.szuloElem.html("<form>");
        this.formElem = this.szuloElem.children("form");
        this.#adat = adat;
        this.#urlapLetrehoz();
        this.submitGomb = this.formElem.children("div").children("#submit");
        this.submitGomb.on("click", (event)=>{
            event.preventDeafult();
            this.#adatGyujt();
            this.#esemeny("ujAdat");
        })
    }

    #adatGyujt(){
        $("#adat1").val();
    }

    #urlapLetrehoz(){
        const tarolo = $("form");
        let txt = `<input type="text" id="adat1">`;
        txt += `<input type="text" id="adat2">`;
        txt += `<input type="submit">`
        tarolo.append(txt);
    }

    #esemeny(){
        const esemeny = CustomEvent(nev, {detail : this.#adat});
        window.dispatchEvent(esemeny);
    }

}export default Urlap;