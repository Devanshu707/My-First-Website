const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/logoname.png" class="brand-logo">
  
    <div class="nav-items">
    
    <div class="search">
        <input type="text" class="search-box" placeholder="search brand, product">
       <button class="search-btn">search</button>
    </div>
     </a>
        <a href="#"><img src="img/cart1.webp" alt=""></a>
        <a href="#"><img src="img/user.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="<li class="link-item"><a href="http://127.0.0.1:5500/E-Commerce/index.html" class="link">Home</a></li>
    <li class="link-item"><a href="http://127.0.0.1:5500/E-Commerce/men.html" class="link">Men</a></li>
    <li class="link-item"><a href="http://127.0.0.1:5500/E-Commerce/women.html" class="link">Women</a></li>
    <li class="link-item"><a href="http://127.0.0.1:5500/E-Commerce/accessories.html" class="link">Accessories</a></li>
</ul>
    `;
}

createNav();