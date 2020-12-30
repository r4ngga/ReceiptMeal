import '../component/meal-list.js';
// import '../component/meal-category-list';
import '../component/search-bar.js';
// import slider1 from "../assets/images/img1.jpg";
// import slider2 from "../assets/images/img2.jpg";
// import title from "../assets/images/rmfavicon.png";
// import navbaricon from "../assets/images/iconrm.jpg";
import DataSource from "../data/data-source.js";

// document.querySelector('#icontitle').src = title;
// document.querySelector('#navicon').src = navbaricon;
// document.querySelector('#slide1').src = slider1;
// document.querySelector('#slide2').src = slider2;


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealItemElement = document.querySelector("meal-list");
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealItemElement.meals = results;
    };

    const fallbackResult = message => {
        mealItemElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;