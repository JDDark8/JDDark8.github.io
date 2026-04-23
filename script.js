const yearTarget = document.querySelector('#year');
const revealNodes = document.querySelectorAll('.reveal');

if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.18 }
);

revealNodes.forEach((node) => observer.observe(node));