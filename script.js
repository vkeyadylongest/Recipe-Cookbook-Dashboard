const recipes = [
    {
        title: "Classic Margherita Pizza",
        ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil leaves", "Olive oil", "Salt"],
        cookingTime: 25 // minutes
    },
    {
        title: "Chicken Stir Fry",
        ingredients: ["Chicken breast", "Broccoli", "Bell peppers", "Soy sauce", "Garlic", "Ginger", "Sesame oil", "Rice"],
        cookingTime: 30
    },
    {
        title: "Avocado Toast",
        ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Chili flakes"],
        cookingTime: 10
    },
    {
        title: "Beef Lasagna",
        ingredients: ["Lasagna sheets", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Ricotta cheese", "Mozzarella", "Parmesan", "Bechamel sauce", "Italian herbs"],
        cookingTime: 75
    },
    {
        title: "Banana Smoothie",
        ingredients: ["Banana", "Milk", "Honey", "Ice cubes"],
        cookingTime: 5
    },
    {
        title: "Grilled Salmon",
        ingredients: ["Salmon fillet", "Lemon", "Garlic", "Olive oil", "Dill", "Salt", "Pepper"],
        cookingTime: 20
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