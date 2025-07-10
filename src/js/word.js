async function loadWords(inputData) {
  const prefix = inputData || "a"; // fallback to 'a' if empty
  const response = await fetch(`https://api.datamuse.com/words?sp=${prefix}*&max=100`);
  const data = await response.json();
  return data.map((entry) => entry.word.toLowerCase());
}

export default loadWords;
