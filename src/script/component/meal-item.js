import css from "../css/meal-item.css";

class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set meal(meals) {
        this._meal = meals;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                ${css}
            </style>
             <img class="meal-thumbnail"
                src="${this._meal.strMealThumb}">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <p>${this._meal.strInstructions}</p>
            </div>
        `;
    }
}

customElements.define("meal-item", MealItem);