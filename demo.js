<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!-- Include jQuery -->
<script>
    $(document).ready(function(){
        $('.menu-toggle').click(function(){
            $('.nav-links').toggleClass('active'); // Toggle navigation menu on button click
        });
    });
</script>

// Function to toggle the navigation menu
/*function toggleMenu() {
    var navLinks = document.querySelector('nav ul.nav-links');
    navLinks.classList.toggle('active');
    
    
}*/

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

