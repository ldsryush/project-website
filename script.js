// This is where our JavaScript journey begins!

// --- Step 1: DOM Manipulation - Dark Mode Toggle ---
// The DOM (Document Object Model) is a programming interface for web documents.
// It represents the page so that programs can change the document structure, style, and content.

// 1a. Select the button and the body from the DOM.
// `document.getElementById` is a classic way to grab an element by its unique ID.
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 1b. Add an event listener.
// This tells the button to "listen" for a 'click' event and then run a function.
themeToggleButton.addEventListener('click', () => {
    // 1c. Toggle the 'dark-mode' class on the body.
    // `classList.toggle` adds the class if it's not there, and removes it if it is.
    // This is a super efficient way to switch styles.
    body.classList.toggle('dark-mode');
    
    // We can also apply the dark mode to the header and project cards
    // to ensure they also change theme.
    document.querySelector('header').classList.toggle('dark-mode');
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => card.classList.toggle('dark-mode'));
});

// --- Step 2: Working with Data - Your Projects ---
// In a real-world scenario, this data might come from a database or an API.
// For now, we'll use a simple JavaScript array of objects.

const projects = [
    {
        title: "Project One",
        description: "This is the first project. It's about making things work.",
        link: "#"
    },
    {
        title: "Project Two",
        description: "This is the second project. It's about making things look good.",
        link: "#"
    },
    {
        title: "Project Three",
        description: "This is the third project. It's about making things fast and efficient.",
        link: "#"
    }
];

// --- Step 3: Dynamic HTML Generation ---
// We can use JavaScript to create HTML elements from our data.
// This is the core of modern web applications.

// 3a. Get the container where we'll put our project cards.
const projectsContainer = document.getElementById('projects-container');

// 3b. Loop through the `projects` array.
// The `forEach` method is a clean way to iterate over an array.
projects.forEach(project => {
    // 3c. Create a new `div` element for each project.
    const projectCard = document.createElement('div');
    
    // 3d. Add a class to the new div for styling.
    projectCard.classList.add('project-card');
    
    // 3e. Set the inner HTML of the card using a template literal.
    // Template literals (the backticks ``) let us embed variables directly in strings.
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    
    // 3f. Append the new card to the container.
    // This adds the `projectCard` as a child of the `projectsContainer` in the DOM.
    projectsContainer.appendChild(projectCard);
});

// --- Step 4: Next Steps & Further Learning ---
// Now that you have the basics, here are some ideas to explore:
//
// - **Fetching Data from an API:** Instead of a local `projects` array,
//   try fetching project data from a public API (like the GitHub API to list your repos).
//   You'll learn about `fetch()`, Promises, and `async/await`.
//
// - **More Interactivity:** Add a form to filter projects by name or technology.
//   This will teach you about handling user input and updating the DOM in response.
//
// - **Local Storage:** Save the user's dark mode preference in their browser's
//   `localStorage` so it persists even after they close the tab.
//
// - **Advanced CSS & Animations:** Add some simple CSS transitions or animations
//   that are triggered by JavaScript events.
