function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('open');
}

const courseDetails = {
    quantum: ["Wave-Particle Duality", "Schrödinger's Equation", "Quantum Entanglement"],
    statistical: ["Boltzmann Distribution", "Entropy", "Partition Functions"],
    classical: ["Newton's Laws", "Lagrangian Mechanics", "Hamiltonian Mechanics"],
    electrodynamics: ["Maxwell's Equations", "Electromagnetic Waves", "Electric Potential"]
};

const projectDetails = {
    "quantum-sim": ["Simulating Quantum Systems", "Quantum Algorithms", "Quantum Hardware Integration"],
    "entangled-photons": ["Entanglement Experiments", "Photon Pair Generation", "Nonlinear Optics Applications"],
    "optics-lab": ["Wave Interference", "Diffraction Patterns", "Polarization Techniques"]
};

const detailsSection = document.getElementById("details-section");
const detailsTitle = document.getElementById("details-title");
const detailsList = document.getElementById("details-list");

document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
        const type = item.dataset.course || item.dataset.project;
        const details = courseDetails[type] || projectDetails[type];
        if (details) {
            detailsTitle.textContent = item.textContent;
            detailsList.innerHTML = details.map(detail => `<li>${detail}</li>`).join("");
            detailsSection.style.display = "block";
        }
    });
});
