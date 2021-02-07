const meal_container = document.getElementById('mealDetail');
const get_ingredient_btn = document.getElementById('ingredientMeals');

const SearchBtn = document.getElementById("Search");
SearchBtn.addEventListener("click", function () {

    const input = document.getElementById('input').value;
    // const mealsName = document.getElementById('mealsName');

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + input)
        .then(res => res.json())
        .then(res => displayMeals(res.meals));

    const inputBtnArea = document.getElementById("inputBtnArea");
    inputBtnArea.style.display = "none";
    const containerArea = document.getElementById("container");
    containerArea.style.display = "block";

});


const displayMeals = mealsName => {
    const mealsDiv = document.getElementById('mealsName')

    mealsName.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
            <img onclick="displayMealDetail('${meal.idMeal}')" src="${meal.strMealThumb}"></img>
            <h3 class ="meal-name">${meal.strMeal}</h3>

        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}

const displayMealDetail = id =>{
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]));

}

const renderMealInfo = meal => {
    const mealDiv = document.getElementById('mealDetail');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}"></img>
    <h3>${meal.strMeal}</h3>
        <p>Ingredients:</p>
        <ul>${meal.strIngredient1}</ul>
        <ul>${meal.strIngredient2}</ul>
        <ul>${meal.strIngredient3}</ul>
        <ul>${meal.strIngredient4}</ul>
        <ul>${meal.strIngredient5}</ul>
        <ul>${meal.strIngredient6}</ul>
        <ul>${meal.strIngredient7}</ul>
        <ul>${meal.strIngredient8}</ul>
        <ul>${meal.strIngredient9}</ul>
        <ul>${meal.strIngredient11}</ul>
        <ul>${meal.strIngredient12}</ul>
        <ul>${meal.strIngredient13}</ul>
        <ul>${meal.strIngredient14}</ul>
        <ul>${meal.strIngredient15}</ul>
        <ul>${meal.strIngredient16}</ul>
        <ul>${meal.strIngredient17}</ul>
        <ul>${meal.strIngredient18}</ul>
        <ul>${meal.strIngredient19}</ul>
        <ul>${meal.strIngredient20}</ul>
    `
}
