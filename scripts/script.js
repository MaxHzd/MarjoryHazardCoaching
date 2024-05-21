document.addEventListener("DOMContentLoaded", function() {
    fetch('data/recipes.json')
        .then(response => response.json())
        .then(data => {
            const recipeList = document.getElementById('recipe-list');
            data.forEach(recipes => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a href="recettes.html?id=${recipes.id}">
                        <img src="${recipes.image}" alt="${recipes.title}">
                        <h2>${recipes.title}</h2>
                    </a>
                `;
                recipeList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching or processing JSON:", error);
        });
});