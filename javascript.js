function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
const projects = [
    {
        title: "Movie ticket booking management system",
        description: "Description: The Movie Ticket Booking system presented in this project is designed to revolutionize how movie tickets are bought by leveraging the capabilities of Database Management System.In this project there is brief overview given on how does the system works like process of login into the page, search bar, types of movies, review ratings, locations etc.",
        link: "https://example.com/project-one"
    },
    
];

document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        
        projectElement.innerHTML = `
            <h2>${project.title}</h2><br>
            <p>${project.description}</p><br>
            
        `;
        
        projectsContainer.appendChild(projectElement);
    });
});
