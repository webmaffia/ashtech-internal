// Resources Page - Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.resources-tabs__link');
    
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
            
            // You can add logic here to show/hide different content based on tab
            console.log('Active tab:', tabName);
            
            // Smooth scroll to news section
            const newsSection = document.querySelector('.resources-news');
            if (newsSection) {
                newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

