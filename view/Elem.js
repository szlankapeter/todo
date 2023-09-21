class Elem {
    #obj = {}
    #id;
    constructor(id, obj, tarolo) {
        this.#id = id;
        this.#obj = obj
        this.tarolo = tarolo;
        this.#sor();

        this.soreElem = this.tarolo.children("tr:last-child");
        this.keszElem = this.soreElem.children("td").children(".kesz");
        this.megseElem = this.soreElem.children("td").children(".megse");
        this.torolElem = this.soreElem.children("td").children(".torol");
        console.log(this.keszElem);

        this.keszElem.on("click", () => {
            this.esemeny("kesz");
        });

        this.megseElem.on("click", () => {
            this.esemeny("megse");
        });

        this.torolElem.on("click", () => {
            this.esemeny("torol");
        });
        

    }

    #sor() {
        let color = this.#obj.kesz ? "kez" : "nincs-kesz";
        let txt = `<tr class="${color}">`;
        for (const key in this.#obj) {
            txt += `<td>${this.#obj[key]}</td>`;
        }
        txt += `<td><button class="kesz">✅</button></td>`;
        txt += `<td><button class="megse">❌</button></td>`;
        txt += `<td><button class="torol">&#128465;</button></td>`;
        txt += "</tr>"
        this.tarolo.append(txt);
    }

    esemeny(nev){
        const esemeny = new CustomEvent(nev, {detail : this.#id});
        window.dispatchEvent(esemeny);
    }

    


} export default Elem