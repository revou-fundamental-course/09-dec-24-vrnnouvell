function toggleOverlay(selectedCard) {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        const overlay = card.querySelector('.overlay'); 

        if (card === selectedCard) {
            const isHidden = overlay.classList.contains('hidden');
            overlay.classList.toggle('hidden', !isHidden); 
            card.classList.toggle('active', !isHidden);   
        } else {
            overlay.classList.remove('hidden');
            card.classList.remove('active');
        }
    });
}

