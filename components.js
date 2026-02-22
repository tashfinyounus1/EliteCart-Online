// ── EliteCart Online — components.js ──
// Injects header, footer, cart panel, wishlist panel, auth modal, checkout, track modal
// into any page that includes this script.

(function () {
  const HEADER_HTML = `
<!-- TOPBAR -->
<div class="mahi-topbar">🎉 FREE DELIVERY on orders above ৳999 &nbsp;|&nbsp; Code <strong>ELITE10</strong> for 10% off &nbsp;|&nbsp; 500K+ Happy Customers!</div>

<!-- HEADER -->
<header id="mahi-header">
  <div class="mahi-header-inner">
    <a href="index.html" class="mahi-logo">
      <div class="mahi-logo-mark">E</div>
      <div class="mahi-logo-name">EliteCart <span>Online</span></div>
    </a>
    <div id="mahi-search-wrap">
      <input type="text" id="mahi-search-input" placeholder="Search products, brands, categories..." oninput="handleSearchInput()" onkeydown="handleSearchKey(event)" autocomplete="off">
      <button class="mahi-search-btn" onclick="doSearch()" aria-label="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
      <div id="mahi-search-drop"></div>
    </div>
    <div class="mahi-h-actions">
      <button class="mahi-h-btn" onclick="handleLoginClick()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <span data-login-label>Login</span>
      </button>
      <button class="mahi-h-btn" onclick="openMahiWishlist()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        Wishlist <span class="mahi-badge" data-wl-badge style="display:none">0</span>
      </button>
      <button class="mahi-h-btn" onclick="openMahiCart()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        Cart <span class="mahi-badge" data-cart-badge style="display:none">0</span>
      </button>
      <button class="mahi-hamburger" id="mahi-hamburger" onclick="toggleMobileNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<!-- DESKTOP NAV -->
<nav id="mahi-nav">
  <div class="mahi-nav-inner" id="mahi-nav-inner">
    <a href="index.html">🏠 Home</a>
    <a href="category.html#cat=electronics">📱 Electronics</a>
    <a href="category.html#cat=fashion">👗 Fashion</a>
    <a href="category.html#cat=home-living">🏠 Home & Living</a>
    <a href="category.html#cat=beauty">💄 Beauty</a>
    <a href="category.html#cat=gaming">🎮 Gaming</a>
    <a href="category.html#cat=groceries">🍎 Groceries</a>
    <a href="category.html#cat=sports">🏋️ Sports</a>
    <a href="category.html#cat=automotive">🚗 Automotive</a>
    <a href="category.html#cat=books">📚 Books</a>
    <a href="category.html#cat=flash" class="mahi-flash-link">⚡ Flash Sale</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </div>
</nav>

<!-- MOBILE NAV -->
<div id="mahi-mobile-nav">
  <a href="index.html" onclick="closeMobileNav()">🏠 Home</a>
  <a href="category.html#cat=electronics" onclick="closeMobileNav()">📱 Electronics</a>
  <a href="category.html#cat=fashion" onclick="closeMobileNav()">👗 Fashion</a>
  <a href="category.html#cat=gaming" onclick="closeMobileNav()">🎮 Gaming</a>
  <a href="category.html#cat=sports" onclick="closeMobileNav()">🏋️ Sports</a>
  <a href="category.html#cat=flash" onclick="closeMobileNav()">⚡ Flash Sale</a>
  <a href="about.html" onclick="closeMobileNav()">About</a>
  <a href="contact.html" onclick="closeMobileNav()">Contact</a>
</div>`;

  const PANELS_HTML = `
<!-- OVERLAY -->
<div id="mahi-overlay" onclick="closeAllPanels()"></div>

<!-- CART PANEL -->
<div id="mahi-cart-panel">
  <div class="mahi-panel-header">
    <h3>🛒 Shopping Cart</h3>
    <button class="mahi-close-btn" onclick="closeMahiCart()">✕</button>
  </div>
  <div id="mahi-cart-items"></div>
  <div class="mahi-cart-footer">
    <div class="mahi-cart-total"><span>Total Amount</span><strong id="mahi-cart-total">৳ 0</strong></div>
    <button class="mahi-btn-checkout" onclick="openCheckout()">Proceed to Checkout →</button>
  </div>
</div>

<!-- WISHLIST PANEL -->
<div id="mahi-wl-panel">
  <div class="mahi-panel-header">
    <h3>❤️ My Wishlist</h3>
    <button class="mahi-close-btn" onclick="closeMahiWishlist()">✕</button>
  </div>
  <div id="mahi-wl-items"></div>
</div>

<!-- AUTH MODAL -->
<div id="mahi-auth-modal" onclick="if(event.target===this)closeMahiAuth()">
  <div class="mahi-auth-box">
    <button class="mahi-modal-close-btn" onclick="closeMahiAuth()">✕</button>
    <h2>Welcome Back!</h2>
    <p class="mahi-auth-sub">Sign in to your EliteCart Online account</p>
    <div class="mahi-auth-tabs">
      <button class="mahi-auth-tab active" id="mahi-tab-login" onclick="switchAuthTab('login')">Login</button>
      <button class="mahi-auth-tab" id="mahi-tab-reg" onclick="switchAuthTab('register')">Register</button>
    </div>
    <div id="mahi-form-login">
      <div class="mahi-auth-field"><label>Email or Phone</label><input type="text" id="mahi-a-email" placeholder="Email or phone" onkeydown="if(event.key==='Enter')doLogin()"></div>
      <div class="mahi-auth-field"><label>Password</label><input type="password" id="mahi-a-pass" placeholder="Password" onkeydown="if(event.key==='Enter')doLogin()"></div>
      <button class="mahi-auth-btn" onclick="doLogin()">Login to Account</button>
      <p style="text-align:center;font-size:12px;color:#555;margin-top:14px;">No account? <a href="#" onclick="switchAuthTab('register');return false" style="color:#e63232">Register →</a></p>
    </div>
    <div id="mahi-form-reg" style="display:none">
      <div class="mahi-form-row-2">
        <div class="mahi-auth-field"><label>First Name</label><input type="text" id="mahi-r-fn" placeholder="First name"></div>
        <div class="mahi-auth-field"><label>Last Name</label><input type="text" id="mahi-r-ln" placeholder="Last name"></div>
      </div>
      <div class="mahi-auth-field"><label>Email</label><input type="email" id="mahi-r-em" placeholder="your@email.com"></div>
      <div class="mahi-auth-field"><label>Phone</label><input type="tel" id="mahi-r-ph" placeholder="01XXXXXXXXX"></div>
      <div class="mahi-auth-field"><label>Password</label><input type="password" id="mahi-r-pw" placeholder="Min. 6 characters" onkeydown="if(event.key==='Enter')doRegister()"></div>
      <button class="mahi-auth-btn" onclick="doRegister()">Create Account</button>
      <p style="text-align:center;font-size:12px;color:#555;margin-top:14px;">Have account? <a href="#" onclick="switchAuthTab('login');return false" style="color:#e63232">Login →</a></p>
    </div>
  </div>
</div>

<!-- CHECKOUT MODAL -->
<div id="mahi-checkout-modal" onclick="if(event.target===this)closeCheckout()">
  <div class="mahi-checkout-box">
    <button class="mahi-modal-close-btn" onclick="closeCheckout()">✕</button>
    <h2>🛍️ Checkout</h2>
    <div id="mahi-co-summary"></div>
    <h3 style="font-size:11px;color:#666;text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;font-weight:700;">Delivery Details</h3>
    <div class="mahi-form-row-2">
      <div class="mahi-co-field"><label>First Name</label><input type="text" id="mahi-co-fn" placeholder="First name"></div>
      <div class="mahi-co-field"><label>Last Name</label><input type="text" id="mahi-co-ln" placeholder="Last name"></div>
    </div>
    <div class="mahi-co-field"><label>Phone</label><input type="tel" id="mahi-co-ph" placeholder="01XXXXXXXXX"></div>
    <div class="mahi-co-field"><label>Full Address</label><input type="text" id="mahi-co-addr" placeholder="House, Road, Area"></div>
    <div class="mahi-form-row-2">
      <div class="mahi-co-field"><label>City</label>
        <select id="mahi-co-city"><option>Dhaka</option><option>Chittagong</option><option>Sylhet</option><option>Rajshahi</option><option>Khulna</option><option>Barishal</option><option>Rangpur</option><option>Mymensingh</option></select>
      </div>
      <div class="mahi-co-field"><label>District</label><input type="text" id="mahi-co-dist" placeholder="District"></div>
    </div>
    <h3 style="font-size:11px;color:#666;text-transform:uppercase;letter-spacing:.5px;margin:14px 0 10px;font-weight:700;">Payment Method</h3>
    <div class="mahi-pay-methods">
      <div class="mahi-pay-method selected" onclick="selectPayMethod(this)"><div class="mahi-pm-icon">📱</div>bKash</div>
      <div class="mahi-pay-method" onclick="selectPayMethod(this)"><div class="mahi-pm-icon">💳</div>Nagad</div>
      <div class="mahi-pay-method" onclick="selectPayMethod(this)"><div class="mahi-pm-icon">🏦</div>Rocket</div>
      <div class="mahi-pay-method" onclick="selectPayMethod(this)"><div class="mahi-pm-icon">💵</div>Cash on Delivery</div>
      <div class="mahi-pay-method" onclick="selectPayMethod(this)"><div class="mahi-pm-icon">💳</div>VISA Card</div>
      <div class="mahi-pay-method" onclick="selectPayMethod(this)"><div class="mahi-pm-icon">🏧</div>Mastercard</div>
    </div>
    <button class="mahi-btn-checkout" onclick="placeOrder()">✅ Place Order Now</button>
  </div>
</div>

<!-- TRACK MODAL -->
<div id="mahi-track-modal" onclick="if(event.target===this)closeTrackModal()">
  <div class="mahi-track-box">
    <button class="mahi-modal-close-btn" onclick="closeTrackModal()">✕</button>
    <h2 style="font-family:var(--ff-d);font-size:24px;margin-bottom:4px;">📦 Track Order</h2>
    <p style="color:#666;font-size:13px;margin-bottom:20px;">Enter your Order ID to see real-time status</p>
    <div class="mahi-auth-field"><label>Order ID</label><input type="text" id="mahi-track-input" placeholder="e.g. MHO24891234" onkeydown="if(event.key==='Enter')doTrack()"></div>
    <button class="mahi-auth-btn" onclick="doTrack()">Track My Order</button>
    <div id="mahi-track-steps" style="display:none;margin-top:20px;"></div>
  </div>
</div>`;

  const FOOTER_HTML = `
<footer>
  <div class="mahi-footer-inner">
    <div class="mahi-footer-brand">
      <a href="index.html" class="mahi-logo" style="margin-bottom:14px">
        <div class="mahi-logo-mark">E</div>
        <div class="mahi-logo-name">EliteCart <span>Online</span></div>
      </a>
      <p>Your one-stop universal online shopping destination in Bangladesh. Quality products, best prices, fast delivery.</p>
      <div class="mahi-social-links">
        <div class="mahi-social-link" onclick="showToast('Facebook: @EliteCartOnline')">f</div>
        <div class="mahi-social-link" onclick="showToast('Instagram: @EliteCartOnline')">📸</div>
        <div class="mahi-social-link" onclick="showToast('X: @EliteCartOnline')">𝕏</div>
        <div class="mahi-social-link" onclick="showToast('YouTube: EliteCart Online')">▶</div>
      </div>
    </div>
    <div class="mahi-footer-col"><h4>Quick Links</h4><ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact Us</a></li>
      <li><a href="category.html#cat=flash">Flash Sale</a></li>
    </ul></div>
    <div class="mahi-footer-col"><h4>Categories</h4><ul>
      <li><a href="category.html#cat=electronics">Electronics</a></li>
      <li><a href="category.html#cat=fashion">Fashion</a></li>
      <li><a href="category.html#cat=home-living">Home & Living</a></li>
      <li><a href="category.html#cat=sports">Sports</a></li>
      <li><a href="category.html#cat=gaming">Gaming</a></li>
    </ul></div>
    <div class="mahi-footer-col"><h4>Support</h4><ul>
      <li><a href="contact.html">Help Center</a></li>
      <li><a href="#" onclick="openTrackModal();return false">Track Order</a></li>
      <li><a href="#" onclick="showToast('7-day hassle-free returns!');return false">Returns</a></li>
      <li><a href="#" onclick="showToast('Free delivery on orders above ৳999!');return false">Shipping Info</a></li>
    </ul></div>
  </div>
  <div class="mahi-footer-bottom">
    <p>© 2025 EliteCart Online. All rights reserved. Made with ❤️ in Bangladesh.</p>
    <div class="mahi-pay-icons">
      <span style="font-size:12px;color:#555;margin-right:4px">We accept:</span>
      <div class="mahi-pay-icon">bKash</div>
      <div class="mahi-pay-icon">Nagad</div>
      <div class="mahi-pay-icon">VISA</div>
      <div class="mahi-pay-icon">MC</div>
      <div class="mahi-pay-icon">COD</div>
    </div>
  </div>
</footer>`;

  // Inject header before first child of body
  document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
  // Inject panels
  document.body.insertAdjacentHTML('beforeend', PANELS_HTML);
  // Inject footer before panels (before last script tags)
  const footerTarget = document.querySelector('[data-footer-here]');
  if (footerTarget) {
    footerTarget.outerHTML = FOOTER_HTML;
  } else {
    // find last main content div and append footer after it
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  }

  // Set active nav link
  setTimeout(() => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#mahi-nav-inner a').forEach(a => {
      const href = a.getAttribute('href') || '';
      const hpath = href.split('#')[0].split('/').pop();
      if (hpath === path) a.classList.add('active');
    });
  }, 0);
})();
