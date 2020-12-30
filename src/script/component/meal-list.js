import "./meal-item.js";
import css from "../css/meal-list.css";


class MealList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal;
            this.shadowDOM.appendChild(mealItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            ${css}
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}


customElements.define("meal-list", MealList);