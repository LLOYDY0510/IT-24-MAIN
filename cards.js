function filterCards() {
    const input = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none';
        }
    });
}