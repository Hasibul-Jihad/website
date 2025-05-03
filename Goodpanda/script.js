 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobile-menu-btn');
 const mobileMenu = document.getElementById('mobile-menu');
 const loginBtn = document.getElementById('login-btn');
 const mobileLoginBtn = document.getElementById('mobile-login-btn');

 mobileMenuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('active');
 });

 // Login Button Functionality
 function showLoginModal() {
     alert('Login functionality would go here. In a real implementation, this would show a login modal or redirect to a login page.');
 }

 loginBtn.addEventListener('click', showLoginModal);
 mobileLoginBtn.addEventListener('click', showLoginModal);

 // Back to Top Button
 const backToTopButton = document.getElementById('back-to-top');

 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         backToTopButton.style.display = 'block';
     } else {
         backToTopButton.style.display = 'none';
     }
 });

 backToTopButton.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         // Close mobile menu if open
         mobileMenu.classList.remove('active');
         
         const targetId = this.getAttribute('href');
         if (targetId === '#') return;
         
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80, // Adjust for fixed header
                 behavior: 'smooth'
             });
         }
     });
 });

 // Restaurant card click handler
 document.querySelectorAll('.restaurant-card').forEach(card => {
     card.addEventListener('click', () => {
         // In a real implementation, this would redirect to the restaurant page
         alert('This would navigate to the restaurant page in a real implementation.');
     });
 });

 // Category card click handler
 document.querySelectorAll('.category-card').forEach(card => {
     card.addEventListener('click', () => {
         // In a real implementation, this would filter restaurants by category
         alert('This would filter restaurants by category in a real implementation.');
     });
 });

 // Order Now button handler
 document.querySelectorAll('button:contains("Order Now")').forEach(button => {
     button.addEventListener('click', (e) => {
         e.stopPropagation(); // Prevent triggering restaurant card click
         alert('This would add the deal to cart and navigate to checkout in a real implementation.');
     });
 });


 