import css from "../css/search-bar.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap from "./assets/css/bootstrap.min.css";

class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            ${css}
            ${bootstrap}
        </style>
        <div class="container text-center mt-4">
            <h2 class="font-weight-bold">Mencari resep makanan yang lagi trend?</h2>
            <p>silahkan mencari resep makanan yang lagi trend disini, kami akan menampilkan berbagai
            resep makananan dari makanan tradisional, hingga internasional. mari dicoba disini.
            </p>
        </div>
        <div id="search-container" class="search-container">
            <input placeholder="Ketik disini" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);