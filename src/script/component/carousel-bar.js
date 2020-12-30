import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import slideke1 from "../../../assets/images/img1.jpg";
import slideke2 from "../../../assets/images/img2.jpg";

class Carousel extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        ${bootstrap}
        </style>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img id="slide1" src=${slideke1} class="d-block w-100" alt="slide ke 1" width="100%" height="500px">
                </div>
                <div class="carousel-item">
                    <img id="slide2" src=${slideke2} class="d-block w-100" alt="slide ke 2" width="100%" height="500px">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        `;
    }
}

customElements.define("carousel-bar", Carousel);