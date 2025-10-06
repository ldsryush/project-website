const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const projectsContainer = document.getElementById('projects-container');


themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    document.querySelector('header').classList.toggle('dark-mode');
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => card.classList.toggle('dark-mode'));
});

async function fetchGitHubProjects(username) {
    projectsContainer.innerHTML = '<p>Loading projects from GitHub...</p>';

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);

        //error
        if (!response.ok) {
            throw new Error(`Network response failed: ${response.statusText}`);
        }
        const repos = await response.json();

        //console log
        console.log('Data retrieved from GitHub:', repos);

        projectsContainer.innerHTML = ''; 
        repos.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description provided.'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;

        projectsContainer.appendChild(projectCard);
        })

    } catch (error) {
        console.error('failed to fetch repositories...', error);
        projectsContainer.innerHTML = '<p>Error loading projects, please try again later.</p>';
    }
}

fetchGitHubProjects('ldsryush');

