// Resources Page - Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.resources-tabs__link');
    const tabContents = document.querySelectorAll('.resources-content__tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('resources-tabs__link--active');
            });
            
            // Add active class to clicked button
            this.classList.add('resources-tabs__link--active');
            
            // Get the tab data
            const tabName = this.getAttribute('data-tab');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('resources-content__tab--active');
            });
            
            // Show the selected tab content
            const activeContent = document.querySelector(`.resources-content__tab[data-content="${tabName}"]`);
            if (activeContent) {
                activeContent.style.display = 'block';
                activeContent.classList.add('resources-content__tab--active');
                
                // Smooth scroll to content section
                setTimeout(() => {
                    activeContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });

    // Load More Functionality
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Get all hidden news cards
            const hiddenCards = document.querySelectorAll('.news-card--hidden');
            
            // Show all hidden cards with animation
            hiddenCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.remove('news-card--hidden');
                    card.classList.add('news-card--visible');
                }, index * 100); // Stagger the animation
            });
            
            // Hide the Load More button
            this.parentElement.style.display = 'none';
        });
    }
});

