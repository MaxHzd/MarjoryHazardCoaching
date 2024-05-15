document.addEventListener("DOMContentLoaded", function() {
    fetch('data/recipes.json')
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById('recipe-list');
            data.forEach(recipe => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a href="recipes.html?id=${recipe.id}">
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <h2>${recipe.title}</h2>
                    </a>
                `;
                recipeList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching or processing JSON:", error);
        });
});
