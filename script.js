// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulário de contato
const form = document.getElementById('contato-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        // Por exemplo, usando fetch para enviar para um backend
        
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
}

// Animação de scroll para elementos
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Adiciona animação aos elementos principais
document.querySelectorAll('.projeto-card, .sobre-content, .contato-content').forEach(el => {
    observer.observe(el);
}); 