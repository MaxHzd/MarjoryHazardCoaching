document.addEventListener('DOMContentLoaded', () => {
    const recipeId = localStorage.getItem('selectedRecipeId');
    const recipe = recipes.find(r => r.id == recipeId);

    if (recipe) {
        const mainContainer = document.querySelector('main');
        mainContainer.innerHTML = `
            <h1>${recipe.title}</h1>
            <img src="${recipe.photo}" alt="${recipe.title}">
            <p>${recipe.description}</p>
            <h2>Ingrédients</h2>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h2>Instructions</h2>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        `;
    }
});