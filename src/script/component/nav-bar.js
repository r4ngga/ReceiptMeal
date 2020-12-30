// import bootstrap from "./assets/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import css from "../css/nav-bar.css";

class NavBar extends HTMLElement {

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
        <nav class="navbar fixed-top navbar-expand-lg navbar-primary bg-white">
            <div class="container justify-content-left p-2">
                    <img src="../assets/images/iconrm.jpg" width="150px" alt=""> 
                    <!-- <img id="navicon" src="" width="150px" alt=""> -->
            </div>    

               <ul class="navbar-nav mr-auto ml-5">
                    <li class="nav-item">
                        <a href="index.html" class="navbar-brand">Home</a>
                    </li>
                </ul>
        </nav>
        `;
    }
}

customElements.define("nav-bar", NavBar);