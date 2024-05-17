document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get('id');
    console.log("Recipe ID from URL:", recipeId);

    fetch('data/recipes.json')
        .then(response => response.json())
        .then(data => {
            console.log("Data fetched from JSON:", data);
            const recipe = data.find(r => r.id === recipeId);
            console.log("Found Recipe:", recipe);

            const recipeDetails = document.getElementById('recipe-details');
            if (recipe) {
                recipeDetails.innerHTML = `
                    <h1>${recipe.title}</h1>
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <p>${recipe.description}</p>
                    <h3>Ingrédients</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <h3>Instructions</h3>
                    <p>${recipe.instructions}</p>
                `;
            } else {
                recipeDetails.innerHTML = `<p>Recette non trouvée</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching or processing JSON:", error);
        });
});
