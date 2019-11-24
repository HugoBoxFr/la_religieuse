let ingredients = ["Religieuse", "menthe", "sucre de canne", "basilic", "wasabi", "Schweppes", "Manta Cola", "limonade", "jus de citron vert", "piment vert"];

function generateRandomNumbers(nbNumbers) {
	let randomNumbers = [];
  for(let i = 0; i < nbNumbers; i++) {
  	randomNumbers[i] = Math.round(Math.random() * 10 + 1);
    if (randomNumbers[i] > 10) {
    	randomNumbers[i] = 10;
    }
	}
  return randomNumbers;
}

let nbs = generateRandomNumbers(50);
//alert(nbs);

function generateInstruction() {
	return generateRandomNumbers(1) + " cl de " + ingredients[(generateRandomNumbers(1) - 1)] + "\n";
}

function generateCocktailRecipe(nbLines) {
	let recipe = [];
    for (let i = 0; i < nbLines; i++) {
        recipe += generateInstruction() + "<br>";
    }
    return recipe;
}   

//alert(generateCocktailRecipe(4));

let generatorButton = document.getElementById("generator-button");
let cocktailParagraph = document.getElementById("cocktail");

generatorButton.addEventListener("click", function(){
    cocktailParagraph.textContent = generateCocktailRecipe(6);
});


































