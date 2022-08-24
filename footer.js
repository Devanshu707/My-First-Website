const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
                    <img src="img/LOGO.png" class="logo" alt="">
                    <div class="footer-ul-container">
                        <ul class="category">
                            <li class="category-title">men</li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/men.html" class="footer-link">Ethnic Wear</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/men.html" class="footer-link">Suits</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/men.html" class="footer-link">shirts</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/men.html" class="footer-link">shoes</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/accessories.html" class="footer-link">sunglasses</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/accessories.html" class="footer-link">wallets</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/accessories.html" class="footer-link">belts</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/accessories.html" class="footer-link">watches</a></li>
                        </ul>
                        <ul class="category">
                            <li class="category-title">women</li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/women.html" class="footer-link">traditionals</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/women.html" class="footer-link">western</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/accessories.html" class="footer-link">watches</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/accessories.html" class="footer-link">wallets</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/accessories.html" class="footer-link">sunglasses</a></li>
                            <li><a href="http://127.0.0.1:5500/E-Commerce/index.html" class="footer-link">others</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <footer>
                <p class="footer-title">Get the latest trends in Accessories, Clothing, Watches and Shoes from Top Brands, Great Offers, Easy & Fast Delivery, Best Deals, Huge Selection, No Cost EMI Available, Low Prices, only on FASHIFY</p>
                <p class="info"></p>
                <p class="info">Support Emails - help@fashify.com, customersupport@fashify.com</p>
                <p class="info">Telephone - 1800000001, 1800000002</p>
                <div class="footer-social-container">
                    <div>
                        <a href="#" class="social-link">Terms & Services</a>
                        <a href="#" class="social-link">Privacy Page</a>
                        <a href="#" class="social-link">Instagram</a>
                        <a href="#" class="social-link">Facebook</a>
                        <a href="#" class="social-link">Twitter</a>
                    </div>
                </div>
                <p class="footer-credit">Fashify, Best Apparels Online Store</p>
    `;
}

createFooter();