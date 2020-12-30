import "regenerator-runtime";
import "./styles/style.css";
import "./styles/bootstrap.min.css";
import "./script/component/nav-bar.js";
import "./script/component/carousel-bar.js";
import "./script/component/footer-bar.js";
import "../assets/jquery/jquery.min.js";
// import "../assets/js/bootstrap.min.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);