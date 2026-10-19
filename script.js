const recipes = [
    {
        title: "Ugali with Sukuma Wiki",
        ingredients: ["Maize flour", "Water", "Sukuma wiki (collard greens)", "Onion", "Tomato", "Cooking oil", "Salt"],
        cookingTime: 35
    },
    {
        title: "Nyama Choma",
        ingredients: ["Beef or goat meat", "Salt", "Black pepper", "Garlic", "Ginger", "Cooking oil", "Lemon"],
        cookingTime: 60
    },
    {
        title: "Chapati",
        ingredients: ["Wheat flour", "Water", "Cooking oil", "Salt", "Sugar"],
        cookingTime: 40
    },
    {
        title: "Githeri",
        ingredients: ["Maize", "Beans", "Onion", "Tomato", "Cooking oil", "Salt", "Carrot", "Potato"],
        cookingTime: 50
    },
    {
        title: "Pilau",
        ingredients: ["Basmati rice", "Beef", "Onion", "Garlic", "Ginger", "Pilau masala", "Cooking oil", "Salt", "Cinnamon", "Cardamom"],
        cookingTime: 55
    },
    {
        title: "Mukimo",
        ingredients: ["Potato", "Maize", "Peas", "Pumpkin leaves", "Salt", "Cooking oil"],
        cookingTime: 45
    }
];

// Function to calculate difficulty dynamically
function calculateDifficulty(ingredientsCount, cookingTime) {
    const score = ingredientsCount + (cookingTime / 10);

    if (score <= 8) return "Easy";
    if (score <= 14) return "Medium";
    return "Hard";
}

// Function to create and display recipe cards
function displayRecipes() {
    const container = document.getElementById("recipe-container");
    container.innerHTML = ""; // Clear previous cards

    recipes.forEach(recipe => {
        const difficulty = calculateDifficulty(recipe.ingredients.length, recipe.cookingTime);
        const difficultyClass = difficulty.toLowerCase();

        const card = document.createElement("div");
        card.className = "recipe-card";

        card.innerHTML = `
            <h2 class="recipe-title">${recipe.title}</h2>

            <div class="recipe-meta">
                <div class="meta-item">
                    ⏱️ ${recipe.cookingTime} mins
                </div>
                <div class="meta-item">
                    <span class="difficulty ${difficultyClass}">${difficulty}</span>
                </div>
            </div>

            <h3 class="ingredients-title">Ingredients (${recipe.ingredients.length})</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
        `;

        container.appendChild(card);
    });
}

// Initialize the dashboard
displayRecipes();