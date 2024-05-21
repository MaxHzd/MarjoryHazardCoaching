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
            if (recipes) {
                recipeDetails.innerHTML = `
                    <h1>${recipes.title}</h1>
                    <img src="${recipes.image}" alt="${recipes.title}">
                    <p>${recipes.description}</p>
                    <h3>Ingrédients</h3>
                    <ul>
                        ${recipes.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <h3>Instructions</h3>
                    <p>${recipes.instructions}</p>
                `;
            } else {
                recipeDetails.innerHTML = `<p>Recette non trouvée</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching or processing JSON:", error);
        });
});
