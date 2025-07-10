
# 🔍 Real-Time Text Prediction System using Trie

This project implements a real-time predictive text input system using the **Trie (prefix tree)** data structure. It supports fast and efficient autocomplete suggestions as users type, combining hardcoded data (country names) and dynamic word fetching from the **Datamuse API**.

---

## 🚀 Features

- 🔤 **Real-time autocomplete suggestions**
- 🌐 **Fetches dynamic words** from Datamuse API based on input
- 🌍 **Hardcoded country names** for offline fallback/autocomplete
- ⚡ Built using **pure JavaScript**, HTML, and CSS
- 🧠 Powered by an efficient **Trie data structure**
- 📚 Case-insensitive matching and proper word capitalization

---

## 📁 Project Structure

```text
├── index.html       # UI structure
├── style.css        # Styling
├── script.js        # Main logic (DOM + Trie + API)
├── countries.js     # Static list of countries
├── word.js          # API call logic (Datamuse)
├── Trie.js          # Trie data structure implementation
```

---

## 📸 Screenshots

> _You can add screenshots here of the live search experience._

---

## 💡 How It Works

1. On keyup in the input field, the `handleSearch()` function is triggered.
2. It:
   - Fetches related words using Datamuse API (`word.js`)
   - Combines them with static country names
   - Inserts all words into a `Trie`
   - Displays suggestions matching the current input using `autoComplete()`
3. Suggestions are shown below the input in real-time.

---

## 🧠 Data Structures & Algorithms Used

- **Trie (Prefix Tree)**:
  - Used for efficient prefix-based search
  - Time complexity for search/insert: `O(k)` where `k = length of input`
- **AutoComplete**:
  - DFS traversal from the input prefix node
- **Asynchronous JavaScript**:
  - `async/await` to fetch live suggestions via API

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)


---

## 📝 Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/kumarswamy2025/Real-Time-Text-Prediction-System.git
   ```

2. Open `index.html` in a browser.

3. Start typing in the input box to see autocomplete suggestions in real time!

---

## 📈 Project Applications

- Search bar optimizations  
- Command palette suggestion engines  
- Code completion tools  
- Chatbots and messaging apps

---

## 👨‍💻 Author

Developed with ❤️ by **Kumar Swamy** — a passionate Full Stack Developer with experience in building modern web applications.

- 🌐 [Portfolio](https://portfolio-frontend-g4v2.onrender.com/)
- 💻 [GitHub](https://github.com/kumarswamy2025)
- 💼 [LinkedIn](https://www.linkedin.com/in/kumar-swamy-239623247/)

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share!`

---
