// Smooth fade-in animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(sec => observer.observe(sec));

// Load Projects from projects.json
fetch("projects.json")
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById("projects-container");

        projects.forEach(p => {
            const card = document.createElement("div");
            card.classList.add("project-card");

            card.innerHTML = `
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <span class="tech">${p.tech}</span>

                <div class="buttons">
                    <a href="${p.github}" target="_blank" class="btn">GitHub</a>
                    <a href="${p.demo}" target="_blank" class="btn">Demo Video</a>
                </div>
            `;

            container.appendChild(card);
        });
    })
    .catch(err => console.error("Error loading projects:", err));


