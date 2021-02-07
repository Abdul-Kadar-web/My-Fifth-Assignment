const SearchBtn = document.getElementById("Search");
SearchBtn.addEventListener("click", function () {

    // const input = document.getElementById('input').value;
    // const mealsName = document.getElementById('mealsName');

    const inputBtnArea = document.getElementById("inputBtnArea");
    inputBtnArea.style.display = "none";
    const containerArea = document.getElementById("container");
    containerArea.style.display = "block";

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(res => displayMeals(res.meals));
});


const displayMeals = mealsName => {
    const mealsDiv = document.getElementById('mealsName')

    mealsName.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
            <img onclick="displayMealDetail('${meal.strMeal}')" src="${meal.strMealThumb}"></img>
            <h3 class ="meal-name">${meal.strMeal}</h3>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}

const displayMealDetail = list => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/list.php?i=${list}`
    fetch(url)
        .then(res => res.json())
        // .then(res => console.log(res.meals[0].list));
    .then(res => renderCountryInfo(res.meals[0]));

}

const renderCountryInfo = meal => {
    const mealDiv =document.getElementById('mealDetail');
    mealDiv.innerHTML = `
        <p>Ingredients: ${meal.strIngredient}</p>
    `
}
