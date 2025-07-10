// ============
// IMPORT FILES
// ============

// Import list of countries
import countries from "./countries.js";

// Import function to load words from API
import loadWords from "./word.js";

// Import Trie Data Structure
import Trie from "./Trie.js";

// =========
// VARIABLES
// =========

// Input field (search box)
const search = document.querySelector(".input__input");

// Output container
const countriesContainer = document.querySelector(".output__countries");

// ===================
// TRIE DATA STRUCTURE
// ===================

const trie = new Trie();

// Load country names into Trie (once)
countries.forEach((obj) => {
  trie.insert(obj.name.toLowerCase());
});

// ====================
// HELPER FUNCTIONS
// ====================

// Capitalize each word
function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// ====================
// SEARCH FUNCTIONALITY
// ====================

async function handleSearch(event) {
  const input = event.currentTarget.value.trim().toLowerCase();

  // Clear existing suggestions
  countriesContainer.innerHTML = "";

  if (input === "") return;

  // Fetch words from API based on input
  const apiWords = await loadWords(input);

  // Add fetched words to Trie
  apiWords.forEach((word) => {
    trie.insert(word.toLowerCase());
  });

  // Get suggestions from Trie
  const results = trie.autoComplete(input);

  // Show results
  if (results !== -1) {
    results.forEach((suggestion) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("output__country");
      newDiv.innerText = capitalizeFirstLetter(suggestion);
      countriesContainer.appendChild(newDiv);
    });
  }
}

// Attach event listener
search.addEventListener("keyup", handleSearch);
