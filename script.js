document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });

        icon.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });
});
