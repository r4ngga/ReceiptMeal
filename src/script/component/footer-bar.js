import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import css from "../css/footer-bar.css";

class Footer extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            ${bootstrap}
            ${css}
        </style>
        <footer>
            <div class="footer-copyright text-center py-3 text-white" style="background-color: #6495ED;"> Copyright
            &#169; 2020 <a href="index.html" style="color: black;"> Receipt Meals</a>
             </div>
        </footer>
        `;
    }
}

customElements.define("footer-bar", Footer);