// Dynamic Projects Data
const projects = [
    {
        title: "DAPSAKA (Decentralized Lightweight IoT Authentication Protocol)",
        description: "Designed and developed a decentralized IoT authentication protocol with a web-based monitoring dashboard, enabling secure device authentication, encrypted communication, and real-time sensor data monitoring.",
        technologies: ["Cyber Security", "Python", "IoT"],
        github: "https://github.com",
        demo: "#"
    },
    {
        title: "AI-Based Real-Time Traffic Flow Optimizer",
        description: "Developed an AI-based traffic management system using ESP32, AWS Rekognition, AWS Lambda, and AWS IoT Core to optimize traffic signal timings based on real-time vehicle detection, improving traffic flow and reducing congestion.",
        technologies: ["Python", "AWS", "Machine Learning"],
        github: "https://github.com",
        demo: "#"
    }
];

// Function to Render Projects
function renderProjects(filterTech = "All") {
    const container = document.getElementById("projects-container");
    if (!container) return;
    
    container.innerHTML = "";

    const filteredProjects = filterTech === "All" 
        ? projects 
        : projects.filter(p => p.technologies.some(tech => tech.toLowerCase().includes(filterTech.toLowerCase())));

    filteredProjects.forEach(project => {
        const card = document.createElement("article");
        card.className = "project-card";
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join("")}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-sm">GitHub</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Event Listeners for Filters, Navigation, and Theme
document.addEventListener("DOMContentLoaded", () => {
    renderProjects();

    // Filter Buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            const tech = e.target.getAttribute("data-tech");
            renderProjects(tech);
        });
    });

    // Theme Toggle
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
        });
    }

    // Hamburger Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});