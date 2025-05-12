// Database of Restaurants
        const restaurantsData = [
            {
                id: 1,
                name: "Burger King",
                image: "https://i.ibb.co/QvjdsT0n/burgerking.jpg",
                rating: 4.5,
                cuisine: ["American", "Burgers"],
                deliveryTime: "30-40 min",
                delivery: "Free delivery",
                address: "Agrabad, Chittagong",
                hours: "10:00 AM - 11:00 PM",
                reviews: "320+ reviews",
                location: { lat: 22.333, lng: 91.815 }, // Chittagong coordinates
                menu: [
                    {
                        category: "Burgers",
                        items: [
                            { id: "bk1", name: "Whopper", price: 450, image: "https://i.ibb.co/K7BdwKK/whopper.jpg", description: "The iconic flame-grilled burger with tomatoes, lettuce, mayo, ketchup, pickles, and onions." },
                            { id: "bk2", name: "Chicken Royale", price: 380, image: "https://i.ibb.co/J5nQTXP/chicken-royale.jpg", description: "Crispy chicken fillet topped with lettuce and creamy mayo." },
                            { id: "bk3", name: "Double Cheeseburger", price: 320, image: "https://i.ibb.co/MkVszS4/double-cheese.jpg", description: "Two flame-grilled beef patties with cheese, pickles, mustard and ketchup." }
                        ]
                    },
                    {
                        category: "Sides",
                        items: [
                            { id: "bks1", name: "French Fries", price: 150, image: "https://i.ibb.co/YdRT9kM/fries.jpg", description: "Golden and crispy french fries." },
                            { id: "bks2", name: "Onion Rings", price: 180, image: "https://i.ibb.co/YdRT9kM/onion-rings.jpg", description: "Crispy fried onion rings." }
                        ]
                    },
                    {
                        category: "Drinks",
                        items: [
                            { id: "bkd1", name: "Coca Cola", price: 100, image: "https://i.ibb.co/fkRHLbn/coke.jpg", description: "Refreshing Coca Cola." },
                            { id: "bkd2", name: "Sprite", price: 100, image: "https://i.ibb.co/fkRHLbn/sprite.jpg", description: "Refreshing Sprite." }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Pizza Hut",
                image: "https://i.ibb.co/rK24nLFP/pizzahut.jpg",
                rating: 4.3,
                cuisine: ["Italian", "Pizza"],
                deliveryTime: "35-45 min",
                delivery: "Free delivery",
                address: "GEC Circle, Chittagong",
                hours: "11:00 AM - 10:00 PM",
                reviews: "280+ reviews",
                location: { lat: 22.359, lng: 91.823 }, // Chittagong GEC area
                menu: [
                    {
                        category: "Pizzas",
                        items: [
                            { id: "ph1", name: "Pepperoni Pizza", price: 650, image: "https://i.ibb.co/JRKz3Dy/pepperoni.jpg", description: "Classic pepperoni pizza with mozzarella cheese." },
                            { id: "ph2", name: "Veggie Supreme", price: 580, image: "https://i.ibb.co/7VnxdPr/veggie.jpg", description: "Loaded with bell peppers, mushrooms, olives, and onions." },
                            { id: "ph3", name: "Chicken Supreme", price: 750, image: "https://i.ibb.co/7VnxdPr/chicken-supreme.jpg", description: "Loaded with chicken, bell peppers, and onions." }
                        ]
                    },
                    {
                        category: "Sides",
                        items: [
                            { id: "phs1", name: "Garlic Bread", price: 200, image: "https://i.ibb.co/dB9H7vk/garlic-bread.jpg", description: "Freshly baked garlic bread." },
                            { id: "phs2", name: "Chicken Wings", price: 350, image: "https://i.ibb.co/dB9H7vk/wings.jpg", description: "Spicy chicken wings." }
                        ]
                    },
                    {
                        category: "Drinks",
                        items: [
                            { id: "phd1", name: "Pepsi", price: 100, image: "https://i.ibb.co/fkRHLbn/pepsi.jpg", description: "Refreshing Pepsi." },
                            { id: "phd2", name: "7UP", price: 100, image: "https://i.ibb.co/fkRHLbn/7up.jpg", description: "Refreshing 7UP." }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: "KFC",
                image: "https://i.ibb.co/tp2TkK6b/JUn7-Nc-RO0y-UAWbyc-F7xd6shi4.webp",
                rating: 4.2,
                cuisine: ["American", "Fried Chicken"],
                deliveryTime: "25-35 min",
                delivery: "Free delivery",
                address: "Nasirabad, Chittagong",
                hours: "10:00 AM - 10:00 PM",
                reviews: "350+ reviews",
                location: { lat: 22.363, lng: 91.829 }, // Nasirabad, Chittagong
                menu: [
                    {
                        category: "Chicken",
                        items: [
                            { id: "kfc1", name: "Original Recipe Bucket", price: 950, image: "https://i.ibb.co/KLxB1L1/bucket.jpg", description: "10 pieces of our original recipe chicken." },
                            { id: "kfc2", name: "Hot & Crispy Chicken", price: 850, image: "https://i.ibb.co/KLxB1L1/hot-crispy.jpg", description: "8 pieces of our hot & crispy chicken." },
                            { id: "kfc3", name: "Zinger Burger", price: 380, image: "https://i.ibb.co/KLxB1L1/zinger.jpg", description: "Spicy chicken fillet burger with lettuce and mayo." }
                        ]
                    },
                    {
                        category: "Sides",
                        items: [
                            { id: "kfcs1", name: "French Fries", price: 150, image: "https://i.ibb.co/YdRT9kM/fries.jpg", description: "Golden and crispy french fries." },
                            { id: "kfcs2", name: "Coleslaw", price: 120, image: "https://i.ibb.co/YdRT9kM/coleslaw.jpg", description: "Fresh and creamy coleslaw." }
                        ]
                    },
                    {
                        category: "Drinks",
                        items: [
                            { id: "kfcd1", name: "Pepsi", price: 100, image: "https://i.ibb.co/fkRHLbn/pepsi.jpg", description: "Refreshing Pepsi." },
                            { id: "kfcd2", name: "7UP", price: 100, image: "https://i.ibb.co/fkRHLbn/7up.jpg", description: "Refreshing 7UP." }
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: "Domino's Pizza",
                image: "https://i.ibb.co/mVsFnt7Y/dominos.jpg",
                rating: 4.4,
                cuisine: ["Italian", "Pizza"],
                deliveryTime: "30-40 min",
                delivery: "Free delivery",
                address: "Khulshi, Chittagong",
                hours: "11:00 AM - 11:00 PM",
                reviews: "290+ reviews",
                location: { lat: 22.347, lng: 91.812 }, // Khulshi, Chittagong
                menu: [
                    {
                        category: "Pizzas",
                        items: [
                            { id: "dp1", name: "Margherita", price: 550, image: "https://i.ibb.co/JRKz3Dy/margherita.jpg", description: "Classic cheese pizza with tomato sauce." },
                            { id: "dp2", name: "Farmhouse", price: 650, image: "https://i.ibb.co/7VnxdPr/farmhouse.jpg", description: "Loaded with bell peppers, mushrooms, and onions." },
                            { id: "dp3", name: "Pepperoni", price: 700, image: "https://i.ibb.co/JRKz3Dy/pepperoni.jpg", description: "Classic pepperoni pizza with mozzarella cheese." }
                        ]
                    },
                    {
                        category: "Sides",
                        items: [
                            { id: "dps1", name: "Garlic Breadsticks", price: 220, image: "https://i.ibb.co/dB9H7vk/breadsticks.jpg", description: "Freshly baked garlic breadsticks." },
                            { id: "dps2", name: "Chicken Wings", price: 350, image: "https://i.ibb.co/dB9H7vk/wings.jpg", description: "Spicy chicken wings." }
                        ]
                    },
                    {
                        category: "Drinks",
                        items: [
                            { id: "dpd1", name: "Coca Cola", price: 100, image: "https://i.ibb.co/fkRHLbn/coke.jpg", description: "Refreshing Coca Cola." },
                            { id: "dpd2", name: "Sprite", price: 100, image: "https://i.ibb.co/fkRHLbn/sprite.jpg", description: "Refreshing Sprite." }
                        ]
                    }
                ]
            },
            {
                id: 5,
                name: "Hungry Dragon",
                image: "https://i.ibb.co/tJHx3w1/hungrydragon.jpg",
                rating: 4.6,
                cuisine: ["Chinese", "Asian"],
                deliveryTime: "30-40 min",
                delivery: "Free delivery",
                address: "GEC Circle, Chittagong",
                hours: "11:00 AM - 10:00 PM",
                reviews: "180+ reviews",
                location: { lat: 22.359, lng: 91.821 }, // GEC area
                menu: [
                    {
                        category: "Main Course",
                        items: [
                            { id: "hd1", name: "Kung Pao Chicken", price: 380, image: "https://i.ibb.co/zJcSQHd/kungpao.jpg", description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers." },
                            { id: "hd2", name: "Sweet & Sour Pork", price: 420, image: "https://i.ibb.co/zJcSQHd/sweetsour.jpg", description: "Crispy pork with pineapple in sweet and sour sauce." },
                            { id: "hd3", name: "Beef Chow Mein", price: 350, image: "https://i.ibb.co/zJcSQHd/chowmein.jpg", description: "Stir-fried noodles with beef and vegetables." }
                        ]
                    },
                    {
                        category: "Rice & Noodles",
                        items: [
                            { id: "hdr1", name: "Vegetable Fried Rice", price: 250, image: "https://i.ibb.co/4pQFbGV/friedrice.jpg", description: "Fried rice with mixed vegetables." },
                            { id: "hdr2", name: "Hakka Noodles", price: 280, image: "https://i.ibb.co/4pQFbGV/hakka.jpg", description: "Stir-fried noodles with vegetables in soy sauce." }
                        ]
                    },
                    {
                        category: "Appetizers",
                        items: [
                            { id: "hda1", name: "Spring Rolls", price: 180, image: "https://i.ibb.co/mCvFH0z/springrolls.jpg", description: "Crispy vegetable spring rolls." },
                            { id: "hda2", name: "Chicken Dumplings", price: 220, image: "https://i.ibb.co/mCvFH0z/dumplings.jpg", description: "Steamed chicken dumplings." }
                        ]
                    }
                ]
            },
            {
                id: 6,
                name: "Serial Griller",
                image: "https://i.ibb.co/TRGJ97Z/serialgriller.jpg",
                rating: 4.7,
                cuisine: ["American", "BBQ", "Burgers"],
                deliveryTime: "35-45 min",
                delivery: "Free delivery",
                address: "Agrabad, Chittagong",
                hours: "12:00 PM - 11:00 PM",
                reviews: "150+ reviews",
                location: { lat: 22.335, lng: 91.818 }, // Agrabad area
                menu: [
                    {
                        category: "Burgers",
                        items: [
                            { id: "sg1", name: "Classic Beef Burger", price: 420, image: "https://i.ibb.co/bddQZNM/beefburger.jpg", description: "Juicy beef patty with lettuce, tomato, and secret sauce." },
                            { id: "sg2", name: "BBQ Bacon Burger", price: 480, image: "https://i.ibb.co/bddQZNM/bbqburger.jpg", description: "Beef patty with bacon, cheddar cheese, and BBQ sauce." },
                            { id: "sg3", name: "Spicy Chicken Burger", price: 400, image: "https://i.ibb.co/bddQZNM/chickenburger.jpg", description: "Spicy grilled chicken with lettuce and mayo." }
                        ]
                    },
                    {
                        category: "BBQ",
                        items: [
                            { id: "sgb1", name: "BBQ Ribs", price: 650, image: "https://i.ibb.co/1n5Snft/ribs.jpg", description: "Slow-cooked pork ribs with BBQ sauce." },
                            { id: "sgb2", name: "Grilled Chicken", price: 380, image: "https://i.ibb.co/1n5Snft/grilledchicken.jpg", description: "Herb-marinated grilled chicken." }
                        ]
                    },
                    {
                        category: "Sides",
                        items: [
                            { id: "sgs1", name: "Loaded Fries", price: 220, image: "https://i.ibb.co/2d4CY0j/loadedfries.jpg", description: "Fries topped with cheese, bacon, and sour cream." },
                            { id: "sgs2", name: "Onion Rings", price: 180, image: "https://i.ibb.co/2d4CY0j/onionrings.jpg", description: "Crispy beer-battered onion rings." }
                        ]
                    }
                ]
            }
        ];
        
        // Deals Database
        const dealsData = [
            {
                id: 1,
                name: "KFC Bucket Meal",
                image: "https://i.ibb.co/zHP686DQ/kfc50.jpg",
                discount: "55% OFF",
                description: "Get a bucket of 20 pieces original recipe chicken at ৳999.",
                price: 999,
                restaurantId: 3,
                category: "chicken"
            },
            {
                id: 2,
                name: "Pizza Hut Family Deal",
                image: "https://i.ibb.co/PzzZ8x59/pizza50.webp",
                discount: "50% OFF",
                description: "Buy 1, get 1 free on second pan family pizza.",
                price: 1299,
                restaurantId: 2,
                category: "pizza"
            },
            {
                id: 3,
                name: "Burger King Combo",
                image: "https://i.ibb.co/KjsvmJ9b/Screenshot-2025-05-02-123325.png",
                discount: "40% OFF",
                description: "Get lunch deals starting from only ৳299!",
                price: 299,
                restaurantId: 1,
                category: "burger"
            },
            {
                id: 4,
                name: "Domino's Double Deal",
                image: "https://i.ibb.co/HPVZ1pC/dominos-deal.jpg",
                discount: "45% OFF",
                description: "Get 2 medium pizzas for only ৳899!",
                price: 899,
                restaurantId: 4,
                category: "pizza"
            },
            {
                id: 5,
                name: "KFC Zinger Box",
                image: "https://i.ibb.co/HF9F7q1/zinger-box.jpg",
                discount: "30% OFF",
                description: "Zinger burger, 2 pcs chicken, fries and drink for ৳649!",
                price: 649,
                restaurantId: 3,
                category: "chicken"
            },
            {
                id: 6,
                name: "Hungry Dragon Special",
                image: "https://i.ibb.co/hdmspLs/chinese-deal.jpg",
                discount: "25% OFF",
                description: "Chicken chow mein, spring rolls and sweet & sour pork for ৳799!",
                price: 799,
                restaurantId: 5,
                category: "chinese"
            },
            {
                id: 7,
                name: "Serial Griller BBQ Feast",
                image: "https://i.ibb.co/0XXkMFb/bbq-deal.jpg",
                discount: "35% OFF",
                description: "BBQ ribs, grilled chicken and loaded fries for only ৳899!",
                price: 899,
                restaurantId: 6,
                category: "burger"
            },
            {
                id: 8,
                name: "Pizza Hut Cheesy Bites",
                image: "https://i.ibb.co/51JVxQM/pizza-deal2.jpg",
                discount: "40% OFF",
                description: "Large cheesy bites pizza with 2 sides for ৳1099!",
                price: 1099,
                restaurantId: 2,
                category: "pizza"
            },
            {
                id: 9,
                name: "Burger King Double Whopper",
                image: "https://i.ibb.co/T8zQwNM/burger-deal.jpg",
                discount: "35% OFF",
                description: "Double whopper, fries and drink for only ৳599!",
                price: 599,
                restaurantId: 1,
                category: "burger"
            }
        ];
        
        // Global variables
        let map;
        let marker;
        let currentLocation = ""; // User's selected location
        let isLoggedIn = false;
        let cart = [];
        let selectedRestaurant = null;
        
        // Initialize the page when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Load initial restaurants
            loadRestaurants();
            
            // Load initial deals
            loadDeals();
            
            // Initialize location dropdown
            initLocationDropdown();
            
            // Initialize map
            try {
                initMap();
            } catch (error) {
                console.log("Map initialization error:", error);
                // Fallback if map doesn't load
                document.getElementById('map-container').innerHTML = '<div class="bg-white bg-opacity-10 p-4 rounded-lg text-center">Map not available</div>';
            }
            
            
            
            
            
            
            
            // Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
            





            // Auth Modal
            const authModal = document.getElementById('auth-modal');
            const closeAuthModal = document.getElementById('close-auth-modal');
            const myAccountBtn = document.getElementById('my-account-btn');
            const mobileAccountBtn = document.getElementById('mobile-account-btn');
            const tabButtons = document.querySelectorAll('.tab-btn');

            // Show Auth Modal
            function showAuthModal(tab = 'login') {
                authModal.classList.add('active');
                // Set the active tab
                setActiveTab(tab);
            }

            // Close Auth Modal
            function closeAuthModalFunc() {
                authModal.classList.remove('active');
            }

            // Set Active Tab
            function setActiveTab(tabId) {
                // Remove active class from all tabs and buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                // Add active class to selected tab and button
                document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
                document.getElementById(tabId).classList.add('active');
            }

            // Auth Event Listeners
            myAccountBtn.addEventListener('click', () => {
                if (isLoggedIn) {
                    // If logged in, show user profile or account options
                    alert('Account page will be implemented in future updates');
                } else {
                    // If not logged in, show auth modal
                    showAuthModal('login');
                }
            });
            mobileAccountBtn.addEventListener('click', () => {
                if (isLoggedIn) {
                    // If logged in, show user profile or account options
                    alert('Account page will be implemented in future updates');
                } else {
                    // If not logged in, show auth modal
                    showAuthModal('login');
                }
            });
            closeAuthModal.addEventListener('click', closeAuthModalFunc);

            // Close modal when clicking outside
            authModal.addEventListener('click', (e) => {
                if (e.target === authModal) {
                    closeAuthModalFunc();
                }
            });

            // Tab Switching
            tabButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tabId = btn.getAttribute('data-tab');
                    setActiveTab(tabId);
                });
            });

                        






            // Login/Signup Form Submission
            document.getElementById('login-form').addEventListener('submit', function(e) {
                e.preventDefault();
                isLoggedIn = true;
                alert('Login successful!');
                closeAuthModalFunc();
                updateLoginStatus();
            });
            
            document.getElementById('signup-form').addEventListener('submit', function(e) {
                e.preventDefault();
                isLoggedIn = true;
                alert('Signup successful!');
                closeAuthModalFunc();
                updateLoginStatus();
            });
            
            // Cart functionality
            const cartButton = document.getElementById('cart-button');
            const cartModal = document.getElementById('cart-modal');
            const cartOverlay = document.getElementById('cart-overlay');
            const closeCart = document.getElementById('close-cart');
            
            cartButton.addEventListener('click', openCart);
            closeCart.addEventListener('click', closeCartFunc);
            cartOverlay.addEventListener('click', closeCartFunc);
            
            // Quick add buttons in restaurant cards
            document.querySelectorAll('.quick-add-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering restaurant card click
                    const itemId = e.target.getAttribute('data-item-id') || e.target.closest('.quick-add-btn').getAttribute('data-item-id');
                    const restaurantId = parseInt(e.target.getAttribute('data-restaurant-id') || e.target.closest('.quick-add-btn').getAttribute('data-restaurant-id'));
                    
                    if (isLoggedIn) {
                        quickAddToCart(itemId, restaurantId);
                    } else {
                        showAuthModal('login');
                    }
                });
            });
            
            // Restaurant card click handler
            document.addEventListener('click', function(e) {
                // Check if clicked element is or is inside a restaurant card
                const restaurantCard = e.target.closest('.restaurant-card');
                
                if (restaurantCard && !e.target.closest('.quick-add-btn')) {
                    const restaurantId = parseInt(restaurantCard.getAttribute('data-restaurant-id'));
                    openRestaurantModal(restaurantId);
                }
            });
            
            // Deal Order Now button handler
            document.querySelectorAll('.deal-order-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering restaurant card click
                    const dealId = parseInt(e.target.getAttribute('data-deal-id'));
                    const restaurantId = parseInt(e.target.getAttribute('data-restaurant-id'));
                    const price = parseInt(e.target.getAttribute('data-price'));
                    
                    if (isLoggedIn) {
                        const deal = dealsData.find(d => d.id === dealId);
                        addToCart({
                            id: `deal-${dealId}`,
                            name: deal.name,
                            price: price,
                            quantity: 1,
                            image: deal.image,
                            restaurantId: restaurantId
                        });
                        showMiniToast(`${deal.name} added to cart!`);
                    } else {
                        showAuthModal('login');
                    }
                });
            });
            
            // Checkout button
            document.getElementById('checkout-btn').addEventListener('click', processCheckout);
            
            // Find Food button
            document.getElementById('find-food-btn').addEventListener('click', findRestaurants);
            
            // View All Restaurants button
            document.getElementById('view-all-btn').addEventListener('click', openAllRestaurantsModal);
            
            // View All Deals button
            document.getElementById('view-all-deals-btn').addEventListener('click', openAllDealsModal);
            
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
        });
        
        // Initialize Google Map
        function initMap() {
            try {
                // Bangladesh coordinates
                const bangladeshCoords = { lat: 23.685, lng: 90.356 };
                
                // Create the map centered on Bangladesh
                map = new google.maps.Map(document.getElementById('map-container'), {
                    center: bangladeshCoords,
                    zoom: 7,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false
                });
                
                // Create a marker for the user's selected location
                marker = new google.maps.Marker({
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP
                });
                
                // Listen for marker drag events
                marker.addListener('dragend', () => {
                    const position = marker.getPosition();
                    geocodePosition(position);
                });
                
                // Also initialize the delivery tracking map if it exists
                const deliveryMapElement = document.getElementById('delivery-map');
                if (deliveryMapElement) {
                    const deliveryMap = new google.maps.Map(deliveryMapElement, {
                        center: bangladeshCoords,
                        zoom: 12,
                        mapTypeControl: false,
                        streetViewControl: false,
                        fullscreenControl: false
                    });
                }
            } catch (error) {
                console.error("Error initializing map:", error);
            }
        }
        
        // Geocode the marker position to get address
        function geocodePosition(position) {
            try {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ location: position }, (results, status) => {
                    if (status === 'OK' && results[0]) {
                        const address = results[0].formatted_address;
                        document.getElementById('delivery-address').value = address;
                        currentLocation = address;
                        updateLocationDisplay();
                    }
                });
            } catch (error) {
                console.error("Geocoding error:", error);
            }
        }
        
        // Initialize location dropdown
        function initLocationDropdown() {
            const deliveryAddressInput = document.getElementById('delivery-address');
            const locationDropdown = document.getElementById('location-dropdown');
            const areaSearchToggle = document.getElementById('area-search-toggle');
            const mapContainer = document.getElementById('map-container');
            
            if (!deliveryAddressInput || !locationDropdown || !areaSearchToggle) {
                console.error("Missing required elements for location dropdown");
                return;
            }
            
            // Toggle location dropdown
            areaSearchToggle.addEventListener('click', () => {
                locationDropdown.classList.toggle('active');
            });
            
            // Select location from dropdown
            document.querySelectorAll('.location-option').forEach(option => {
                option.addEventListener('click', () => {
                    const location = option.getAttribute('data-location');
                    deliveryAddressInput.value = location;
                    currentLocation = location;
                    locationDropdown.classList.remove('active');
                    
                    // Update map with selected location
                    updateMapWithLocation(location);
                    
                    // Show map
                    mapContainer.style.display = 'block';
                    
                    // Update location display in other parts of the UI
                    updateLocationDisplay();
                });
            });
            
            // Hide dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (deliveryAddressInput && locationDropdown && areaSearchToggle) {
                    if (!e.target.closest('.location-dropdown') && e.target !== areaSearchToggle && e.target !== deliveryAddressInput) {
                        locationDropdown.classList.remove('active');
                    }
                }
            });
            
            // Focus on input
            if (deliveryAddressInput) {
                deliveryAddressInput.addEventListener('focus', () => {
                    locationDropdown.classList.add('active');
                });
            }
        }
        
        // Update map with selected location
        function updateMapWithLocation(location) {
            try {
                if (!map || !marker) {
                    console.warn("Map or marker not initialized");
                    return;
                }
                
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address: location + ', Bangladesh' }, (results, status) => {
                    if (status === 'OK' && results[0]) {
                        const position = results[0].geometry.location;
                        map.setCenter(position);
                        map.setZoom(14);
                        marker.setPosition(position);
                    }
                });
            } catch (error) {
                console.error("Error updating map:", error);
            }
        }
        
        // Update location display in UI
        function updateLocationDisplay() {
            const currentLocationDisplay = document.getElementById('current-location-display');
            if (currentLocationDisplay) {
                currentLocationDisplay.textContent = currentLocation || 'Select Location';
            }
        }
        
        // Load restaurants
        function loadRestaurants() {
            const container = document.getElementById('restaurants-container');
            if (!container) return;
            
            // Clear the container
            container.innerHTML = '';
            
            // Load featured restaurants (first 4)
            restaurantsData.slice(0, 4).forEach(restaurant => {
                container.appendChild(createRestaurantCard(restaurant));
            });
        }
        
        // Load deals
        function loadDeals() {
            const container = document.getElementById('deals-container');
            if (!container) return;
            
            // Clear the container
            container.innerHTML = '';
            
            // Load first 3 deals
            dealsData.slice(0, 3).forEach(deal => {
                container.appendChild(createDealCard(deal));
            });
        }
        
        // Create restaurant card
        function createRestaurantCard(restaurant) {
            const card = document.createElement('div');
            card.className = 'restaurant-card bg-white overflow-hidden shadow-md border border-gray-100 transition duration-300 cursor-pointer';
            card.setAttribute('data-restaurant-id', restaurant.id);
            
            // Get the first menu item for quick add
            const popularItem = restaurant.menu[0].items[0];
            
            card.innerHTML = `
                <div class="relative">
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-3 right-3 bg-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-sm">
                        <i class="fas fa-star text-yellow-500 mr-1.5"></i><div class="rating">${restaurant.rating}</div>
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-lg mb-2">${restaurant.name}</h3>
                    <div class="flex items-center text-blue-200 text-sm mb-2">
                        <i class="fas fa-utensils mr-2"></i>
                        <span>${restaurant.cuisine.join(' • ')}</span>
                    </div>
                    <div class="flex items-center text-blue-200 text-sm mb-3">
                        <i class="fas fa-clock mr-2"></i>
                        <span>${restaurant.deliveryTime} • ${restaurant.delivery}</span>
                    </div>
                    <div class="popular-item pt-2 border-t border-gray-700">
                        <p class="text-blue-200 text-xs mb-2">Popular Item:</p>
                        <div class="flex justify-between items-center">
                            <div>
                                <p class="text-white text-sm font-semibold">${popularItem.name}</p>
                                <p class="text-blue-200 text-xs">৳${popularItem.price}</p>
                            </div>
                            <button class="quick-add-btn bg-blue-500 text-white text-xs px-3 py-1 rounded-full hover:bg-blue-600 transition" 
                                    data-item-id="${popularItem.id}" 
                                    data-restaurant-id="${restaurant.id}">
                                <i class="fas fa-plus mr-1"></i>Add
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            return card;
        }
        
        // Create deal card
        function createDealCard(deal) {
            const card = document.createElement('div');
            card.className = 'deal-card rounded-lg overflow-hidden relative';
            
            card.innerHTML = `
                <div class="relative">
                    <img src="${deal.image}" alt="${deal.name}" class="w-full h-48 object-cover">
                    <div class="discount-badge">${deal.discount}</div>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-xl text-white mb-2">${deal.name}</h3>
                    <div class="bg-white bg-opacity-10 p-3 rounded-2xl mb-3">
                        <p class="text-white text-sm">${deal.description}</p>
                    </div>
                    <button class="deal-order-btn w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition font-semibold text-md shadow-lg transform hover:scale-105" data-deal-id="${deal.id}" data-restaurant-id="${deal.restaurantId}" data-price="${deal.price}">
                        Order Now
                    </button>
                </div>
            `;
            
            // Add event listener to Order Now button
            const orderBtn = card.querySelector('.deal-order-btn');
            if (orderBtn) {
                orderBtn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent triggering card click
                    const dealId = parseInt(e.target.getAttribute('data-deal-id'));
                    const restaurantId = parseInt(e.target.getAttribute('data-restaurant-id'));
                    const price = parseInt(e.target.getAttribute('data-price'));
                    
                    if (isLoggedIn) {
                        const deal = dealsData.find(d => d.id === dealId);
                        addToCart({
                            id: `deal-${dealId}`,
                            name: deal.name,
                            price: price,
                            quantity: 1,
                            image: deal.image,
                            restaurantId: restaurantId
                        });
                        showMiniToast(`${deal.name} added to cart!`);
                    } else {
                        showAuthModal('login');
                    }
                });
            }
            
            return card;
        }
        
        // Open restaurant modal
        function openRestaurantModal(restaurantId) {
            const restaurant = restaurantsData.find(r => r.id === restaurantId);
            if (!restaurant) return;
            
            selectedRestaurant = restaurant;
            
            const restaurantModal = document.getElementById('restaurant-modal');
            const restaurantName = document.getElementById('restaurant-name');
            const restaurantAddress = document.getElementById('restaurant-address');
            const restaurantHours = document.getElementById('restaurant-hours');
            const restaurantRating = document.getElementById('restaurant-rating');
            const restaurantReviews = document.getElementById('restaurant-reviews');
            
            if (!restaurantModal || !restaurantName || !restaurantAddress || 
                !restaurantHours || !restaurantRating || !restaurantReviews) {
                console.error("Missing restaurant modal elements");
                return;
            }
            
            // Update restaurant details
            restaurantName.textContent = restaurant.name;
            restaurantAddress.textContent = restaurant.address;
            restaurantHours.textContent = `Open: ${restaurant.hours}`;
            restaurantRating.textContent = restaurant.rating;
            restaurantReviews.textContent = restaurant.reviews;
            
            // Load menu
            loadRestaurantMenu(restaurant);
            
            // Show modal
            restaurantModal.classList.add('active');
            
            // Close modal when clicking outside or on close button
            document.getElementById('close-restaurant-modal').addEventListener('click', () => {
                restaurantModal.classList.remove('active');
            });
            
            restaurantModal.addEventListener('click', (e) => {
                if (e.target === restaurantModal) {
                    restaurantModal.classList.remove('active');
                }
            });
        }
        
        // Load restaurant menu
        function loadRestaurantMenu(restaurant) {
            const menuContainer = document.getElementById('restaurant-menu');
            if (!menuContainer) {
                console.error("Restaurant menu container not found");
                return;
            }
            
            menuContainer.innerHTML = '';
            
            restaurant.menu.forEach(category => {
                const categoryElement = document.createElement('div');
                categoryElement.className = 'menu-category mb-6';
                
                categoryElement.innerHTML = `
                    <h3 class="text-xl font-semibold text-white mb-3">${category.category}</h3>
                `;
                
                category.items.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'menu-item';
                    
                    itemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <div class="menu-item-details">
                            <h4 class="font-semibold text-white">${item.name}</h4>
                            <p class="text-blue-200 text-sm">${item.description}</p>
                            <p class="text-white mt-1">৳${item.price}</p>
                        </div>
                        <button class="add-to-cart-btn" data-item-id="${item.id}" data-restaurant-id="${restaurant.id}">
                            <i class="fas fa-plus"></i> Add
                        </button>
                    `;
                    
                    categoryElement.appendChild(itemElement);
                });
                
                menuContainer.appendChild(categoryElement);
            });
            
            // Add event listeners to Add to Cart buttons
            document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.target.getAttribute('data-item-id') || e.target.parentElement.getAttribute('data-item-id');
                    const restaurantId = parseInt(e.target.getAttribute('data-restaurant-id') || e.target.parentElement.getAttribute('data-restaurant-id'));
                    
                    if (isLoggedIn) {
                        addItemToCart(itemId, restaurantId);
                    } else {
                        showAuthModal('login');
                    }
                });
            });
        }
        
        // Add item to cart
        function addItemToCart(itemId, restaurantId) {
            const restaurant = restaurantsData.find(r => r.id === restaurantId);
            if (!restaurant) return;
            
            let item;
            restaurant.menu.forEach(category => {
                const foundItem = category.items.find(i => i.id === itemId);
                if (foundItem) item = foundItem;
            });
            
            if (!item) return;
            
            // Add to cart
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1,
                image: item.image,
                restaurantId: restaurantId
            });
            
            showMiniToast(`${item.name} added to cart!`);
        }

        // Quick add to cart function
        function quickAddToCart(itemId, restaurantId) {
            const restaurant = restaurantsData.find(r => r.id === restaurantId);
            if (!restaurant) return;
            
            let item;
            restaurant.menu.forEach(category => {
                const foundItem = category.items.find(i => i.id === itemId);
                if (foundItem) item = foundItem;
            });
            
            if (!item) return;
            
            // Add to cart
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: 1,
                image: item.image,
                restaurantId: restaurantId
            });
            
            // Show feedback
            const cartButton = document.getElementById('cart-button');
            if (cartButton) {
                cartButton.classList.add('animate-bounce');
                setTimeout(() => {
                    cartButton.classList.remove('animate-bounce');
                }, 1000);
            }
            
            // Show mini toast notification
            showMiniToast(`${item.name} added to cart!`);
        }

        // Mini toast notification
        function showMiniToast(message) {
            // Create toast element
            const toast = document.createElement('div');
            toast.className = 'mini-toast';
            toast.textContent = message;
            
            // Append to body
            document.body.appendChild(toast);
            
            // Add active class after a small delay to trigger animation
            setTimeout(() => {
                toast.classList.add('active');
            }, 10);
            
            // Remove toast after 3 seconds
            setTimeout(() => {
                toast.classList.remove('active');
                // Remove from DOM after animation completes
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
        }
        
        // Add to cart
        function addToCart(item) {
            // Check if item from the same restaurant
            if (cart.length > 0 && cart[0].restaurantId !== item.restaurantId) {
                if (confirm('Your cart contains items from another restaurant. Would you like to clear your cart and add this item?')) {
                    cart = [];
                } else {
                    return;
                }
            }
            
            // Check if item already in cart
            const existingItemIndex = cart.findIndex(i => i.id === item.id);
            
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += item.quantity;
            } else {
                cart.push(item);
            }
            
            // Update cart UI
            updateCartUI();
        }
        
        // Update cart UI
        function updateCartUI() {
            const cartCount = document.getElementById('cart-count');
            const cartItems = document.getElementById('cart-items');
            const cartSubtotal = document.getElementById('cart-subtotal');
            const cartTotal = document.getElementById('cart-total');
            
            if (!cartCount || !cartItems || !cartSubtotal || !cartTotal) {
                console.error("Missing cart UI elements");
                return;
            }
            
            // Update cart count
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
            
            // Update cart items
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-center text-blue-200 py-4">Your cart is empty</p>';
                cartSubtotal.textContent = '৳0';
                cartTotal.textContent = '৳60'; // Delivery fee only
                return;
            }
            
            let subtotal = 0;
            
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <p class="font-semibold text-white">${item.name}</p>
                        <p class="text-blue-200 text-sm">৳${item.price}</p>
                    </div>
                    <div class="cart-item-controls">
                        <div class="quantity-btn decrease-btn" data-item-id="${item.id}">-</div>
                        <div class="cart-item-quantity">${item.quantity}</div>
                        <div class="quantity-btn increase-btn" data-item-id="${item.id}">+</div>
                    </div>
                `;
                
                cartItems.appendChild(itemElement);
                
                subtotal += item.price * item.quantity;
            });
            
            // Update subtotal and total
            cartSubtotal.textContent = `৳${subtotal}`;
            cartTotal.textContent = `৳${subtotal + 60}`; // Adding delivery fee
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.decrease-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.target.getAttribute('data-item-id');
                    updateItemQuantity(itemId, -1);
                });
            });
            
            document.querySelectorAll('.increase-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.target.getAttribute('data-item-id');
                    updateItemQuantity(itemId, 1);
                });
            });
        }
        











        


        // Update item quantity
        function updateItemQuantity(itemId, change) {
            const itemIndex = cart.findIndex(item => item.id === itemId);
            
            if (itemIndex === -1) return;
            
            cart[itemIndex].quantity += change;
            
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
            
            updateCartUI();
        }
        
        // Open cart
        function openCart() {
            document.getElementById('cart-modal').classList.add('active');
            document.getElementById('cart-overlay').classList.add('active');
        }
        
        // Close cart
        function closeCartFunc() {
            document.getElementById('cart-modal').classList.remove('active');
            document.getElementById('cart-overlay').classList.remove('active');
        }
        
        // Process checkout
        function processCheckout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            if (!isLoggedIn) {
                alert('Please login to checkout');
                closeCartFunc();
                showAuthModal('login');
                return;
            }
            
            if (!currentLocation) {
                alert('Please select a delivery location');
                closeCartFunc();
                return;
            }
            
            // Generate a random order number
            const orderNumber = Math.floor(Math.random() * 1000000);
            
            // Get restaurant name
            const restaurant = restaurantsData.find(r => r.id === cart[0].restaurantId);
            
            // Update tracking modal
            document.getElementById('tracking-restaurant').textContent = restaurant.name;
            document.getElementById('tracking-order-number').textContent = `Order #${orderNumber}`;
            document.getElementById('delivery-time').textContent = restaurant.deliveryTime;
            document.getElementById('delivery-address-display').textContent = currentLocation;
            
            // Close cart modal
            closeCartFunc();
            
            // Show tracking modal
            document.getElementById('tracking-modal').classList.add('active');
            
            // Start order tracking animation
            startOrderTracking();
            
            // Clear cart
            cart = [];
            updateCartUI();
            
            // Close tracking modal when clicking on close button
            document.getElementById('close-tracking-modal').addEventListener('click', () => {
                document.getElementById('tracking-modal').classList.remove('active');
            });
            
            // Close tracking modal when clicking outside
            document.getElementById('tracking-modal').addEventListener('click', (e) => {
                if (e.target === document.getElementById('tracking-modal')) {
                    document.getElementById('tracking-modal').classList.remove('active');
                }
            });
        }
        
        // Start order tracking animation
        function startOrderTracking() {
            const preparingIcon = document.getElementById('preparing-icon');
            const preparingLine = document.getElementById('preparing-line');
            const onTheWayIcon = document.getElementById('on-the-way-icon');
            const onTheWayLine = document.getElementById('on-the-way-line');
            const deliveredIcon = document.getElementById('delivered-icon');
            
            if (!preparingIcon || !preparingLine || !onTheWayIcon || !onTheWayLine || !deliveredIcon) {
                console.error("Missing tracking elements");
                return;
            }
            
            // Set preparing step as active (already done in HTML)
            
            // After 3 seconds, set on the way step as active
            setTimeout(() => {
                preparingLine.classList.add('active');
                onTheWayIcon.classList.add('active');
                
                // After another 5 seconds, set delivered step as active
                setTimeout(() => {
                    onTheWayLine.classList.add('active');
                    deliveredIcon.classList.add('active');
                    
                    // After another 3 seconds, show delivered message
                    setTimeout(() => {
                        alert('Your food has been delivered! Enjoy your meal!');
                        document.getElementById('tracking-modal').classList.remove('active');
                    }, 3000);
                }, 5000);
            }, 3000);
        }
        
        // Find restaurants based on selected location
        function findRestaurants() {
            const locationInput = document.getElementById('delivery-address');
            if (!locationInput) return;
            
            currentLocation = locationInput.value.trim();
            
            if (!currentLocation) {
                alert('Please enter your delivery address');
                return;
            }
            
            // Update map with the location
            updateMapWithLocation(currentLocation);
            
            // Show map
            const mapContainer = document.getElementById('map-container');
            if (mapContainer) {
                mapContainer.style.display = 'block';
            }
            
            // Update location display
            updateLocationDisplay();
            
            // Scroll to restaurants section
            const restaurantsSection = document.querySelector('#restaurants');
            if (restaurantsSection) {
                restaurantsSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Alert for demo purposes
            alert(`Finding restaurants near ${currentLocation}`);
        }
        




        
        // Update login status in UI
        function updateLoginStatus() {
            const myAccountBtn = document.getElementById('my-account-btn');
            const mobileAccountBtn = document.getElementById('mobile-account-btn');
            
            if (!myAccountBtn || !mobileAccountBtn) {
                console.error("Missing login UI elements");
                return;
            }
            
            if (isLoggedIn) {
                myAccountBtn.innerHTML = '<i class="fas fa-user-check mr-2"></i>My Account';
                myAccountBtn.classList.add('bg-green-500');
                myAccountBtn.classList.remove('bg-blue-500');
                
                mobileAccountBtn.innerHTML = '<i class="fas fa-user-check mr-2"></i>My Account';
                mobileAccountBtn.classList.add('bg-green-500');
                mobileAccountBtn.classList.remove('bg-orange-500');
            } else {
                myAccountBtn.innerHTML = '<i class="fas fa-user mr-2"></i>My Account';
                myAccountBtn.classList.add('bg-blue-500');
                myAccountBtn.classList.remove('bg-green-500');
                
                mobileAccountBtn.innerHTML = '<i class="fas fa-user mr-2"></i>My Account';
                mobileAccountBtn.classList.add('bg-orange-500');
                mobileAccountBtn.classList.remove('bg-green-500');
            }
        }




        // Open All Restaurants Modal
        function openAllRestaurantsModal() {
            // Populate all restaurants
            const container = document.getElementById('all-restaurants-container');
            if (!container) {
                console.error("All restaurants container not found");
                return;
            }
            
            container.innerHTML = '';
            
            restaurantsData.forEach(restaurant => {
                container.appendChild(createRestaurantCard(restaurant));
            });
            
            // Show modal
            const allRestaurantsModal = document.getElementById('all-restaurants-modal');
            if (!allRestaurantsModal) {
                console.error("All restaurants modal not found");
                return;
            }
            
            allRestaurantsModal.classList.add('active');
            
            // Close modal functionality
            const closeAllRestaurantsModal = document.getElementById('close-all-restaurants-modal');
            if (closeAllRestaurantsModal) {
                closeAllRestaurantsModal.addEventListener('click', () => {
                    allRestaurantsModal.classList.remove('active');
                });
            }
            
            allRestaurantsModal.addEventListener('click', (e) => {
                if (e.target === allRestaurantsModal) {
                    allRestaurantsModal.classList.remove('active');
                }
            });
            
            // Cuisine filter buttons
            document.querySelectorAll('.cuisine-filter-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const cuisine = e.target.getAttribute('data-cuisine');
                    
                    // Remove active class from all buttons
                    document.querySelectorAll('.cuisine-filter-btn').forEach(btn => {
                        btn.classList.remove('bg-blue-500');
                        btn.classList.add('bg-white', 'bg-opacity-10');
                    });
                    
                    // Add active class to clicked button
                    e.target.classList.remove('bg-white', 'bg-opacity-10');
                    e.target.classList.add('bg-blue-500');
                    
                    // Filter restaurants
                    container.innerHTML = '';
                    
                    if (cuisine === 'all') {
                        // Show all restaurants
                        restaurantsData.forEach(restaurant => {
                            container.appendChild(createRestaurantCard(restaurant));
                        });
                    } else {
                        // Filter by cuisine
                        const filteredRestaurants = restaurantsData.filter(restaurant => 
                            restaurant.cuisine.some(c => c.toLowerCase() === cuisine.toLowerCase())
                        );
                        
                        filteredRestaurants.forEach(restaurant => {
                            container.appendChild(createRestaurantCard(restaurant));
                        });
                    }
                });
            });
            
            // Change location button
            const changeLocationBtn = document.getElementById('change-location-btn');
            if (changeLocationBtn) {
                changeLocationBtn.addEventListener('click', () => {
                    allRestaurantsModal.classList.remove('active');
                    const deliveryAddressInput = document.getElementById('delivery-address');
                    if (deliveryAddressInput) {
                        deliveryAddressInput.focus();
                        const locationDropdown = document.getElementById('location-dropdown');
                        if (locationDropdown) {
                            locationDropdown.classList.add('active');
                        }
                    }
                });
            }
        }
        
        // Open All Deals Modal
        function openAllDealsModal() {
            // Populate all deals
            loadAllDeals();
            
            // Show modal
            const allDealsModal = document.getElementById('all-deals-modal');
            if (!allDealsModal) {
                console.error("All deals modal not found");
                return;
            }
            
            allDealsModal.classList.add('active');
            
            // Close modal when clicking on close button
            const closeAllDealsModal = document.getElementById('close-all-deals-modal');
            if (closeAllDealsModal) {
                closeAllDealsModal.addEventListener('click', () => {
                    allDealsModal.classList.remove('active');
                });
            }
            
            // Close modal when clicking outside
            allDealsModal.addEventListener('click', (e) => {
                if (e.target === allDealsModal) {
                    allDealsModal.classList.remove('active');
                }
            });
            
            // Deal filter buttons
            document.querySelectorAll('.deal-filter-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const filter = e.target.getAttribute('data-filter');
                    
                    // Remove active class from all buttons
                    document.querySelectorAll('.deal-filter-btn').forEach(btn => {
                        btn.classList.remove('bg-blue-500');
                        btn.classList.add('bg-white', 'bg-opacity-10');
                    });
                    
                    // Add active class to clicked button
                    e.target.classList.remove('bg-white', 'bg-opacity-10');
                    e.target.classList.add('bg-blue-500');
                    
                    // Filter deals
                    if (filter === 'all') {
                        loadAllDeals();
                    } else {
                        filterDealsByCategory(filter);
                    }
                });
            });
        }
        
        // Load all deals
        function loadAllDeals() {
            const container = document.getElementById('all-deals-container');
            if (!container) {
                console.error("All deals container not found");
                return;
            }
            
            container.innerHTML = '';
            
            dealsData.forEach(deal => {
                container.appendChild(createDealCardForModal(deal));
            });
        }
        
        // Filter deals by category
        function filterDealsByCategory(category) {
            const container = document.getElementById('all-deals-container');
            if (!container) {
                console.error("All deals container not found");
                return;
            }
            
            container.innerHTML = '';
            
            const filteredDeals = dealsData.filter(deal => deal.category === category);
            
            filteredDeals.forEach(deal => {
                container.appendChild(createDealCardForModal(deal));
            });
        }
        
        // Create deal card for modal
        function createDealCardForModal(deal) {
            const card = document.createElement('div');
            card.className = 'deal-card rounded-lg overflow-hidden relative';
            
            card.innerHTML = `
                <div class="relative">
                    <img src="${deal.image}" alt="${deal.name}" class="w-full h-48 object-cover">
                    <div class="discount-badge">${deal.discount}</div>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-xl text-white mb-2">${deal.name}</h3>
                    <div class="bg-white bg-opacity-10 p-3 rounded-2xl mb-3">
                        <p class="text-white text-sm">${deal.description}</p>
                    </div>
                    <button class="deal-order-btn-all w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition font-semibold text-md shadow-lg transform hover:scale-105" data-deal-id="${deal.id}" data-restaurant-id="${deal.restaurantId}" data-price="${deal.price}">
                        Order Now
                    </button>
                </div>
            `;
            
            // Add event listener to Order Now button
            const orderBtn = card.querySelector('.deal-order-btn-all');
            if (orderBtn) {
                orderBtn.addEventListener('click', (e) => {
                    const dealId = parseInt(e.target.getAttribute('data-deal-id'));
                    const restaurantId = parseInt(e.target.getAttribute('data-restaurant-id'));
                    const price = parseInt(e.target.getAttribute('data-price'));
                    
                    if (isLoggedIn) {
                        const deal = dealsData.find(d => d.id === dealId);
                        if (deal) {
                            addToCart({
                                id: `deal-${dealId}`,
                                name: deal.name,
                                price: price,
                                quantity: 1,
                                image: deal.image,
                                restaurantId: restaurantId
                            });
                            showMiniToast(`${deal.name} added to cart!`);
                        }
                    } else {
                        const allDealsModal = document.getElementById('all-deals-modal');
                        if (allDealsModal) {
                            allDealsModal.classList.remove('active');
                        }
                        showAuthModal('login');
                    }
                });
            }
            
            return card;
        }