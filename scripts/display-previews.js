document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.querySelector('.recettes-nav');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-preview');
        recipeElement.innerHTML = `
            <img src="${recipe.photo}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
        `;
        recipeElement.addEventListener('click', () => {
            localStorage.setItem('selectedRecipeId', recipe.id);
            window.location.href = 'recipes.html';
        });
        recipesContainer.appendChild(recipeElement);
    });
});