// ══════════════════════════════════════════════════════
//  EliteCart Online — shared.js  (v2 — complete rewrite)
//  All pages import this. Handles: cart, wishlist,
//  auth, toast, track, checkout, search, slider, nav.
// ══════════════════════════════════════════════════════

/* ── PRODUCT CATALOGUE ── */
const MAHI_PRODUCTS = [
  {id:'p1',  badge:'-20%', bc:'',     cat:'electronics', name:'Redmi Turbo 3 — 12GB/256GB Snapdragon 8s Gen 3',  price:42999,  old:53999,  stars:5, rev:382,   img:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop&auto=format&q=80',  e:'📱', bg:'#1a1025', sec:'flash'},
  {id:'p2',  badge:'HOT',  bc:'hot',  cat:'electronics', name:'Samsung Galaxy S25 — 12GB/256GB Galaxy AI',         price:129999, old:149999, stars:5, rev:1200,  img:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&auto=format&q=80',  e:'📱', bg:'#0d1a2a', sec:'flash'},
  {id:'p3',  badge:'NEW',  bc:'new',  cat:'electronics', name:'Apple Watch Series 10 — 46mm GPS + Cellular',       price:68999,  old:79999,  stars:4, rev:867,   img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format&q=80',  e:'⌚', bg:'#1a1a1a', sec:'flash'},
  {id:'p4',  badge:'-15%', bc:'',     cat:'electronics', name:'Sony WH-1000XM5 Noise Cancelling Headphones',       price:28499,  old:33499,  stars:5, rev:2300,  img:'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop&auto=format&q=80',  e:'🎧', bg:'#111',    sec:'flash'},
  {id:'p5',  badge:'NEW',  bc:'new',  cat:'electronics', name:'Apple iPad Pro M4 — 11" 256GB Wi-Fi + Cellular',    price:119999, old:129999, stars:5, rev:654,   img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop&auto=format&q=80',  e:'📱', bg:'#1a1a2a', sec:'flash'},
  {id:'p6',  badge:'-10%', bc:'',     cat:'electronics', name:'Apple MacBook Air M3 — 13" 8GB/256GB Midnight',     price:149999, old:165999, stars:5, rev:932,   img:'https://images.unsplash.com/photo-1611186871525-12d3e3b13b8f?w=600&h=600&fit=crop&auto=format&q=80',  e:'💻', bg:'#111',    sec:'trending'},
  {id:'p7',  badge:'HOT',  bc:'hot',  cat:'gaming',      name:'PS5 DualSense Wireless Controller — White',          price:8499,   old:10999,  stars:5, rev:1400,  img:'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop&auto=format&q=80',  e:'🎮', bg:'#0d0d1a', sec:'trending'},
  {id:'p8',  badge:'NEW',  bc:'new',  cat:'fashion',     name:"Nike Air Max 270 — Men's Running Shoes",             price:12499,  old:15999,  stars:4, rev:3100,  img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&auto=format&q=80',  e:'👟', bg:'#0a0a12', sec:'trending'},
  {id:'p9',  badge:'-25%', bc:'',     cat:'electronics', name:'JBL Flip 6 Portable Waterproof Speaker',             price:9499,   old:12599,  stars:5, rev:4700,  img:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop&auto=format&q=80',  e:'🔊', bg:'#1a0a00', sec:'trending'},
  {id:'p10', badge:'',     bc:'',     cat:'gaming',      name:'Logitech G502 X Plus Wireless Gaming Mouse',         price:11999,  old:14499,  stars:5, rev:2800,  img:'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop&auto=format&q=80',  e:'🖱️', bg:'#0a1200', sec:'trending'},
  {id:'p11', badge:'-30%', bc:'',     cat:'home',        name:'Dyson V15 Detect Absolute Cordless Vacuum',          price:69999,  old:99999,  stars:5, rev:1900,  img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&auto=format&q=80',  e:'🧹', bg:'#1a1000', sec:'home'},
  {id:'p12', badge:'NEW',  bc:'new',  cat:'home',        name:'Philips Essential Air Fryer 4.1L — Digital',         price:8999,   old:11499,  stars:4, rev:3400,  img:'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop&auto=format&q=80',  e:'🍳', bg:'#111',    sec:'home'},
  {id:'p13', badge:'',     bc:'',     cat:'home',        name:'Nespresso Vertuo Next Coffee Machine — Black',        price:18499,  old:22999,  stars:5, rev:2100,  img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop&auto=format&q=80',  e:'☕', bg:'#1a0a00', sec:'home'},
  {id:'p14', badge:'-20%', bc:'',     cat:'electronics', name:'Garmin Fenix 7 Solar — Multisport GPS Watch',        price:74999,  old:89999,  stars:5, rev:876,   img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format&q=80',  e:'⌚', bg:'#1a1a1a', sec:'home'},
  {id:'p15', badge:'SALE', bc:'hot',  cat:'electronics', name:'Kindle Paperwhite 11th Gen — 16GB Waterproof',      price:12999,  old:16499,  stars:5, rev:5200,  img:'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&h=600&fit=crop&auto=format&q=80',  e:'📖', bg:'#111',    sec:'home'},
  {id:'p16', badge:'NEW',  bc:'new',  cat:'fashion',     name:"Levi's 501 Original Fit Jeans — Stonewash Blue",     price:4999,   old:6499,   stars:4, rev:6200,  img:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop&auto=format&q=80',  e:'👖', bg:'#0a0a1a', sec:'fashion'},
  {id:'p17', badge:'-35%', bc:'',     cat:'fashion',     name:'Ray-Ban Aviator Classic — Gold Frame G-15',          price:8999,   old:13999,  stars:5, rev:4800,  img:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&auto=format&q=80',  e:'🕶️', bg:'#1a1000', sec:'fashion'},
  {id:'p18', badge:'',     bc:'',     cat:'fashion',     name:'Premium Leather Messenger Bag — 15" Laptop',         price:5499,   old:7999,   stars:5, rev:1300,  img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&auto=format&q=80',  e:'👜', bg:'#1a0a00', sec:'fashion'},
  {id:'p19', badge:'HOT',  bc:'hot',  cat:'fashion',     name:'Adidas Essentials Fleece Hoodie — Unisex Black',     price:3299,   old:4499,   stars:4, rev:7100,  img:'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&h=600&fit=crop&auto=format&q=80',  e:'👕', bg:'#111',    sec:'fashion'},
  {id:'p20', badge:'-20%', bc:'',     cat:'beauty',      name:'Dior Sauvage Eau de Parfum — 100ml',                 price:14999,  old:18499,  stars:5, rev:9300,  img:'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&h=600&fit=crop&auto=format&q=80',  e:'🧴', bg:'#0d0d1a', sec:'fashion'},
  {id:'p21', badge:'NEW',  bc:'new',  cat:'sports',      name:'Lululemon The Mat 5mm — Non-Slip Yoga Mat',          price:5299,   old:6999,   stars:5, rev:4100,  img:'https://images.unsplash.com/photo-1601925228063-b5d3f8d29e74?w=600&h=600&fit=crop&auto=format&q=80',  e:'🧘', bg:'#0a1a0a', sec:'sports'},
  {id:'p22', badge:'-18%', bc:'',     cat:'sports',      name:'Bowflex Adjustable Dumbbell Set — 5-52.5 lbs',       price:34999,  old:42499,  stars:4, rev:2600,  img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop&auto=format&q=80',  e:'🏋️', bg:'#1a1a1a', sec:'sports'},
  {id:'p23', badge:'HOT',  bc:'hot',  cat:'sports',      name:"Adidas Ultraboost 23 — Women's Running Shoes",       price:16499,  old:19999,  stars:5, rev:5800,  img:'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop&auto=format&q=80',  e:'👟', bg:'#0a0a1a', sec:'sports'},
  {id:'p24', badge:'',     bc:'',     cat:'sports',      name:'Giro Aether MIPS Helmet — Road Cycling',             price:12999,  old:15499,  stars:5, rev:1100,  img:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=600&fit=crop&auto=format&q=80',  e:'🪖', bg:'#111',    sec:'sports'},
  {id:'p25', badge:'-15%', bc:'',     cat:'sports',      name:'Hydro Flask 32oz Wide Mouth Insulated Bottle',       price:3999,   old:4699,   stars:5, rev:8900,  img:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop&auto=format&q=80',  e:'🍶', bg:'#0a1a1a', sec:'sports'},
  {id:'p26', badge:'NEW',  bc:'new',  cat:'gaming',      name:'Mechanical Gaming Keyboard — RGB Backlit TKL',       price:7499,   old:9999,   stars:5, rev:1860,  img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop&auto=format&q=80',  e:'⌨️', bg:'#0a0a1a', sec:'trending'},
  {id:'p27', badge:'HOT',  bc:'hot',  cat:'gaming',      name:'Gaming Monitor 27" 165Hz QHD — IPS Panel',          price:32999,  old:39999,  stars:4, rev:982,   img:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop&auto=format&q=80',  e:'🖥️', bg:'#111',    sec:'trending'},
  {id:'p28', badge:'NEW',  bc:'new',  cat:'beauty',      name:'Korean Skincare Set — 7-Step Glow Routine',         price:5999,   old:8499,   stars:5, rev:3200,  img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop&auto=format&q=80',  e:'✨', bg:'#1a0a1a', sec:'fashion'},
  {id:'p29', badge:'-25%', bc:'',     cat:'beauty',      name:'Professional Hair Dryer — Ionic 2400W',              price:6499,   old:8699,   stars:4, rev:2100,  img:'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop&auto=format&q=80',  e:'💨', bg:'#0d0a1a', sec:'fashion'},
  {id:'p30', badge:'POPULAR',bc:'hot',cat:'books',       name:'Atomic Habits — James Clear (Hardcover)',            price:1299,   old:1799,   stars:5, rev:12400, img:'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=600&fit=crop&auto=format&q=80',  e:'📚', bg:'#0a0a0a', sec:'trending'},
  {id:'p31', badge:'NEW',  bc:'new',  cat:'books',       name:'The Psychology of Money — Morgan Housel',           price:999,    old:1399,   stars:5, rev:8700,  img:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=600&fit=crop&auto=format&q=80',  e:'💰', bg:'#0d0a00', sec:'trending'},
  {id:'p32', badge:'FRESH', bc:'new', cat:'groceries',   name:'Organic Mixed Nuts — 1kg Premium Selection',        price:1899,   old:2499,   stars:4, rev:890,   img:'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&h=600&fit=crop&auto=format&q=80',  e:'🥜', bg:'#1a1000', sec:'trending'},
  {id:'p33', badge:'',     bc:'',     cat:'groceries',   name:'Premium Green Tea — Organic Darjeeling 250g',       price:899,    old:1199,   stars:5, rev:2340,  img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop&auto=format&q=80',  e:'🍵', bg:'#0a1a0a', sec:'trending'},
  {id:'p34', badge:'HOT',  bc:'hot',  cat:'automotive',  name:'Dash Cam 4K — Front & Rear Dual Camera',            price:8999,   old:12999,  stars:4, rev:1450,  img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop&auto=format&q=80',  e:'📷', bg:'#0a0a0a', sec:'trending'},
  {id:'p35', badge:'-22%', bc:'',     cat:'electronics', name:'Xiaomi 14 Ultra — Leica Camera Flagship 512GB',     price:139999, old:179999, stars:5, rev:445,   img:'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&h=600&fit=crop&auto=format&q=80',  e:'📱', bg:'#111',    sec:'flash'},
  {id:'p36', badge:'NEW',  bc:'new',  cat:'home',        name:'Instant Pot Duo 7-in-1 Electric Pressure Cooker',   price:12499,  old:15999,  stars:4, rev:7600,  img:'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&h=600&fit=crop&auto=format&q=80',  e:'🍲', bg:'#1a0a00', sec:'home'},
  {id:'p37', badge:'-40%', bc:'hot',  cat:'fashion',     name:'Uniqlo Ultra-Light Down Jacket — Men & Women',      price:4499,   old:7499,   stars:5, rev:3900,  img:'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=600&fit=crop&auto=format&q=80',  e:'🧥', bg:'#0d0a1a', sec:'fashion'},
  {id:'p38', badge:'NEW',  bc:'new',  cat:'sports',      name:'Garmin Forerunner 965 — Running GPS Smartwatch',    price:58999,  old:69999,  stars:5, rev:612,   img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format&q=80',  e:'⌚', bg:'#0a1a0a', sec:'sports'},
  {id:'p39', badge:'-28%', bc:'',     cat:'gaming',      name:'Nintendo Switch OLED — White / Neon Set',           price:44999,  old:62999,  stars:5, rev:3200,  img:'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&h=600&fit=crop&auto=format&q=80',  e:'🎮', bg:'#0d0d0d', sec:'flash'},
  {id:'p40', badge:'HOT',  bc:'hot',  cat:'beauty',      name:'Olaplex No.3 Hair Perfector — Full Treatment Kit',  price:7999,   old:10499,  stars:5, rev:5400,  img:'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=600&fit=crop&auto=format&q=80',  e:'💆', bg:'#1a0a1a', sec:'fashion'},
];

/* ── UTILS ── */
function mhEsc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function mhSvg(emoji, bg) {
  const e = encodeURIComponent(emoji);
  const b = encodeURIComponent(bg || '#111');
  return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='260'><rect width='300' height='260' fill='${b}'/><text x='150' y='130' font-size='72' text-anchor='middle' dominant-baseline='middle'>${e}</text></svg>`;
}
function mhFmt(n) { return '৳ ' + Number(n).toLocaleString('en-BD'); }

/* ── TOAST ── */
let _toastTimer;
window.showToast = function(msg, type='') {
  let t = document.getElementById('mahi-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'mahi-toast';
    t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1c1c1c;border:1px solid rgba(230,50,50,.4);color:#fff;padding:13px 20px;border-radius:12px;font-size:13px;font-weight:500;z-index:99999;transform:translateY(80px);opacity:0;transition:all .3s ease;display:flex;align-items:center;gap:8px;box-shadow:0 8px 32px rgba(0,0,0,.6);max-width:340px;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.transform = 'translateY(0)';
  t.style.opacity = '1';
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { t.style.transform = 'translateY(80px)'; t.style.opacity = '0'; }, 3400);
};

/* ── CART ── */
function _cartGet() { try { return JSON.parse(localStorage.getItem('mahi_cart') || '[]'); } catch { return []; } }
function _cartSet(c) { localStorage.setItem('mahi_cart', JSON.stringify(c)); _updateBadges(); }

window.addToCart = function(id, name, price, img) {
  const cart = _cartGet();
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ id, name, price, img, qty: 1 });
  _cartSet(cart);
  _renderCart();
  showToast('✅ "' + name.substring(0, 30) + '" added to cart!');
};

window.removeFromCart = function(id) {
  _cartSet(_cartGet().filter(i => i.id !== id));
  _renderCart();
};

window.changeQty = function(id, delta) {
  const cart = _cartGet();
  const it = cart.find(i => i.id === id);
  if (!it) return;
  it.qty = Math.max(0, it.qty + delta);
  if (it.qty === 0) { _cartSet(cart.filter(i => i.id !== id)); }
  else { _cartSet(cart); }
  _renderCart();
};

function _renderCart() {
  const c = document.getElementById('mahi-cart-items');
  const t = document.getElementById('mahi-cart-total');
  if (!c) return;
  const cart = _cartGet();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (t) t.textContent = mhFmt(total);
  if (!cart.length) {
    c.innerHTML = `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:#555;">
      <div style="font-size:52px">🛒</div><p>Your cart is empty</p>
      <button onclick="closeMahiCart()" style="background:#e63232;border:none;color:#fff;padding:10px 22px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;margin-top:8px;">Continue Shopping</button>
    </div>`;
    return;
  }
  c.innerHTML = cart.map(it => `<div style="background:#1c1c1c;border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:12px;display:flex;gap:12px;align-items:center;">
    <div style="width:60px;height:60px;border-radius:8px;overflow:hidden;background:#111;flex-shrink:0;">
      <img src="${mhEsc(it.img)}" alt="" style="width:100%;height:100%;object-fit:contain;" onerror="this.style.opacity=0">
    </div>
    <div style="flex:1;min-width:0;">
      <div style="font-size:12px;font-weight:500;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mhEsc(it.name)}</div>
      <div style="color:#e63232;font-weight:700;font-size:15px;">${mhFmt(it.price * it.qty)}</div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
        <button onclick="changeQty('${it.id}',-1)" style="width:26px;height:26px;background:#111;border:1px solid rgba(255,255,255,.1);color:#fff;border-radius:6px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;">−</button>
        <span style="font-size:14px;font-weight:600;min-width:20px;text-align:center;">${it.qty}</span>
        <button onclick="changeQty('${it.id}',1)" style="width:26px;height:26px;background:#111;border:1px solid rgba(255,255,255,.1);color:#fff;border-radius:6px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;">+</button>
      </div>
    </div>
    <button onclick="removeFromCart('${it.id}')" style="background:none;border:none;color:#555;cursor:pointer;font-size:18px;padding:4px;flex-shrink:0;" title="Remove">🗑️</button>
  </div>`).join('');
}

window.openMahiCart = function() {
  _renderCart();
  const p = document.getElementById('mahi-cart-panel');
  const o = document.getElementById('mahi-overlay');
  if (p) p.classList.add('open');
  if (o) o.classList.add('open');
};
window.closeMahiCart = function() {
  document.getElementById('mahi-cart-panel')?.classList.remove('open');
  document.getElementById('mahi-overlay')?.classList.remove('open');
};

/* ── WISHLIST ── */
function _wlGetIds() { try { return JSON.parse(localStorage.getItem('mahi_wl_ids') || '[]'); } catch { return []; } }
function _wlGetItems() { try { return JSON.parse(localStorage.getItem('mahi_wl_items') || '[]'); } catch { return []; } }

window.isWishlisted = function(id) { return _wlGetIds().includes(id); };

window.toggleWishlist = function(id, name, price, img, btnEl) {
  const ids = _wlGetIds();
  const items = _wlGetItems();
  const idx = ids.indexOf(id);
  if (idx === -1) {
    ids.push(id);
    items.push({ id, name, price, img });
    if (btnEl) btnEl.textContent = '❤️';
    showToast('❤️ Added to wishlist!');
  } else {
    ids.splice(idx, 1);
    const fi = items.findIndex(x => x.id === id);
    if (fi !== -1) items.splice(fi, 1);
    if (btnEl) btnEl.textContent = '🤍';
    showToast('Removed from wishlist');
  }
  localStorage.setItem('mahi_wl_ids', JSON.stringify(ids));
  localStorage.setItem('mahi_wl_items', JSON.stringify(items));
  _updateBadges();
};

window.openMahiWishlist = function() {
  const items = _wlGetItems();
  const c = document.getElementById('mahi-wl-items');
  const p = document.getElementById('mahi-wl-panel');
  const o = document.getElementById('mahi-overlay');
  if (!c) return;
  if (!items.length) {
    c.innerHTML = `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:#555;">
      <div style="font-size:56px">❤️</div><p>Your wishlist is empty</p>
    </div>`;
  } else {
    c.innerHTML = items.map(it => `<div style="display:flex;gap:12px;align-items:center;padding:12px;background:#1c1c1c;border-radius:10px;margin-bottom:10px;border:1px solid rgba(255,255,255,.07);">
      <img src="${mhEsc(it.img)}" alt="" style="width:56px;height:56px;object-fit:contain;background:#111;border-radius:6px;flex-shrink:0;" onerror="this.style.opacity=0">
      <div style="flex:1;min-width:0;">
        <div style="font-size:12px;color:#ddd;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${mhEsc(it.name)}</div>
        <div style="font-size:14px;font-weight:700;color:#e63232;">${mhFmt(it.price)}</div>
      </div>
      <button onclick="addToCart('${it.id}','${mhEsc(it.name)}',${it.price},'${mhEsc(it.img)}');closeMahiWishlist()" style="background:#e63232;border:none;color:#fff;padding:6px 12px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;white-space:nowrap;">+Cart</button>
      <button onclick="_rmWL('${it.id}')" style="background:none;border:none;color:#555;cursor:pointer;font-size:16px;padding:4px;flex-shrink:0;">🗑️</button>
    </div>`).join('');
  }
  if (p) p.classList.add('open');
  if (o) o.classList.add('open');
};
window.closeMahiWishlist = function() {
  document.getElementById('mahi-wl-panel')?.classList.remove('open');
  document.getElementById('mahi-overlay')?.classList.remove('open');
};
window._rmWL = function(id) {
  const ids = _wlGetIds(); const items = _wlGetItems();
  const i = ids.indexOf(id); if (i !== -1) ids.splice(i, 1);
  const fi = items.findIndex(x => x.id === id); if (fi !== -1) items.splice(fi, 1);
  localStorage.setItem('mahi_wl_ids', JSON.stringify(ids));
  localStorage.setItem('mahi_wl_items', JSON.stringify(items));
  _updateBadges(); openMahiWishlist();
};

/* ── BADGES ── */
function _updateBadges() {
  const cn = _cartGet().reduce((s, i) => s + i.qty, 0);
  const wn = _wlGetIds().length;
  document.querySelectorAll('[data-cart-badge]').forEach(b => { b.textContent = cn; b.style.display = cn ? 'flex' : 'none'; });
  document.querySelectorAll('[data-wl-badge]').forEach(b => { b.textContent = wn; b.style.display = wn ? 'flex' : 'none'; });
}

/* ── AUTH ── */
function _getUser() { try { return JSON.parse(localStorage.getItem('mahi_user') || 'null'); } catch { return null; } }

window.handleLoginClick = function() {
  const u = _getUser();
  if (u) {
    if (confirm(`Logout from ${u.name}?`)) {
      localStorage.removeItem('mahi_user');
      document.querySelectorAll('[data-login-label]').forEach(el => el.textContent = 'Login');
      showToast('👋 Logged out!');
    }
    return;
  }
  document.getElementById('mahi-auth-modal')?.classList.add('open');
};
window.closeMahiAuth = function() { document.getElementById('mahi-auth-modal')?.classList.remove('open'); };
window.switchAuthTab = function(tab) {
  document.getElementById('mahi-tab-login')?.classList.toggle('active', tab === 'login');
  document.getElementById('mahi-tab-reg')?.classList.toggle('active', tab === 'register');
  document.getElementById('mahi-form-login').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('mahi-form-reg').style.display = tab === 'register' ? '' : 'none';
};
window.doLogin = function() {
  const e = document.getElementById('mahi-a-email')?.value.trim();
  const p = document.getElementById('mahi-a-pass')?.value;
  if (!e || !p) { showToast('⚠️ Please fill in all fields'); return; }
  if (p.length < 6) { showToast('⚠️ Password must be at least 6 characters'); return; }
  const u = { name: e.includes('@') ? e.split('@')[0] : e, email: e };
  localStorage.setItem('mahi_user', JSON.stringify(u));
  document.querySelectorAll('[data-login-label]').forEach(el => el.textContent = u.name.split(' ')[0]);
  closeMahiAuth();
  showToast(`✅ Welcome back, ${u.name}!`);
};
window.doRegister = function() {
  const fn = document.getElementById('mahi-r-fn')?.value.trim();
  const em = document.getElementById('mahi-r-em')?.value.trim();
  const ph = document.getElementById('mahi-r-ph')?.value.trim();
  const pw = document.getElementById('mahi-r-pw')?.value;
  if (!fn || !em || !ph || !pw) { showToast('⚠️ Please fill in all fields'); return; }
  if (pw.length < 6) { showToast('⚠️ Password must be at least 6 characters'); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { showToast('⚠️ Invalid email address'); return; }
  if (!/^01[3-9]\d{8}$/.test(ph)) { showToast('⚠️ Invalid BD phone number (01XXXXXXXXX)'); return; }
  const u = { name: fn, email: em, phone: ph };
  localStorage.setItem('mahi_user', JSON.stringify(u));
  document.querySelectorAll('[data-login-label]').forEach(el => el.textContent = fn.split(' ')[0]);
  closeMahiAuth();
  showToast(`🎉 Welcome to EliteCart Online, ${fn}!`);
};

/* ── CHECKOUT ── */
window.openCheckout = function() {
  const cart = _cartGet();
  if (!cart.length) { showToast('⚠️ Your cart is empty!'); return; }
  closeMahiCart();
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const del = sub >= 999 ? 0 : 60;
  const tot = sub + del;
  const sum = document.getElementById('mahi-co-summary');
  if (sum) {
    sum.innerHTML = `<h4 style="font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.5px;font-weight:700;margin-bottom:12px;">Order Summary</h4>` +
      cart.map(i => `<div style="display:flex;justify-content:space-between;font-size:13px;color:#ccc;margin-bottom:6px;"><span>${mhEsc(i.name)} ×${i.qty}</span><span>${mhFmt(i.price * i.qty)}</span></div>`).join('') +
      `<div style="display:flex;justify-content:space-between;font-size:13px;color:#ccc;margin-bottom:6px;"><span>Delivery</span><span>${del ? mhFmt(del) : '<span style="color:#4ade80">FREE</span>'}</span></div>
      <div style="display:flex;justify-content:space-between;font-size:17px;font-weight:700;color:#fff;border-top:1px solid #2a2a2a;padding-top:10px;margin-top:8px;"><span>Total</span><span style="color:#e63232">${mhFmt(tot)}</span></div>`;
  }
  const u = _getUser();
  if (u) {
    const parts = u.name.split(' ');
    const fn = document.getElementById('mahi-co-fn'); if (fn) fn.value = parts[0] || '';
    const ln = document.getElementById('mahi-co-ln'); if (ln) ln.value = parts.slice(1).join(' ') || '';
    const ph = document.getElementById('mahi-co-ph'); if (ph && u.phone) ph.value = u.phone;
  }
  document.getElementById('mahi-checkout-modal')?.classList.add('open');
};
window.closeCheckout = function() { document.getElementById('mahi-checkout-modal')?.classList.remove('open'); };
window.selectPayMethod = function(el) {
  document.querySelectorAll('.mahi-pay-method').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');
};
window.placeOrder = function() {
  const fn = document.getElementById('mahi-co-fn')?.value.trim();
  const ph = document.getElementById('mahi-co-ph')?.value.trim();
  const addr = document.getElementById('mahi-co-addr')?.value.trim();
  if (!fn) { showToast('⚠️ Please enter your name'); return; }
  if (!ph) { showToast('⚠️ Please enter your phone number'); return; }
  if (!addr) { showToast('⚠️ Please enter delivery address'); return; }
  const orderNo = 'MHO' + Date.now().toString().slice(-8);
  closeCheckout();
  _cartSet([]);
  _renderCart();
  showToast(`🎉 Order #${orderNo} placed! Delivery in 2-3 days. Thank you ${fn}!`);
};

/* ── ORDER TRACKING ── */
window.openTrackModal = function() { document.getElementById('mahi-track-modal')?.classList.add('open'); };
window.closeTrackModal = function() {
  document.getElementById('mahi-track-modal')?.classList.remove('open');
  const s = document.getElementById('mahi-track-steps'); if (s) s.style.display = 'none';
  const ti = document.getElementById('mahi-track-input'); if (ti) ti.value = '';
};
window.doTrack = function() {
  const id = (document.getElementById('mahi-track-input')?.value || '').trim();
  if (!id) { showToast('⚠️ Enter an Order ID'); return; }
  if (!id.toUpperCase().startsWith('MHO')) { showToast('❌ Invalid Order ID format (e.g. MHO12345678)'); return; }
  const s = document.getElementById('mahi-track-steps');
  if (!s) return;
  s.style.display = 'block';
  s.innerHTML = `
    <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:20px;"><div style="width:32px;height:32px;border-radius:50%;background:#155e27;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">✓</div><div><div style="font-size:14px;font-weight:600;margin-bottom:2px;">Order Confirmed</div><div style="font-size:12px;color:#666;">Received and confirmed</div></div></div>
    <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:20px;"><div style="width:32px;height:32px;border-radius:50%;background:#155e27;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">✓</div><div><div style="font-size:14px;font-weight:600;margin-bottom:2px;">Payment Verified</div><div style="font-size:12px;color:#666;">Successfully processed</div></div></div>
    <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:20px;"><div style="width:32px;height:32px;border-radius:50%;background:#e63232;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;animation:pulse 1.5s infinite;">→</div><div><div style="font-size:14px;font-weight:600;margin-bottom:2px;">Out for Delivery</div><div style="font-size:12px;color:#666;">With our delivery partner</div></div></div>
    <div style="display:flex;gap:14px;align-items:flex-start;"><div style="width:32px;height:32px;border-radius:50%;background:#1a1a1a;border:2px solid #333;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;color:#555;">○</div><div><div style="font-size:14px;font-weight:600;margin-bottom:2px;color:#555;">Delivered</div><div style="font-size:12px;color:#444;">Expected tomorrow 10am–6pm</div></div></div>`;
};

/* ── SEARCH ── */
window.handleSearchKey = function(e) { if (e.key === 'Enter') doSearch(); };
window.doSearch = function() {
  const q = (document.getElementById('mahi-search-input')?.value || '').trim();
  if (q.length >= 2) location.href = 'category.html#search=' + encodeURIComponent(q);
};
window.handleSearchInput = function() {
  const q = (document.getElementById('mahi-search-input')?.value || '').trim().toLowerCase();
  const drop = document.getElementById('mahi-search-drop');
  if (!drop) return;
  if (q.length < 2) { drop.classList.remove('open'); return; }
  const hits = MAHI_PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.includes(q)).slice(0, 7);
  if (!hits.length) { drop.innerHTML = `<div style="padding:20px;text-align:center;color:#555;font-size:14px;">No results for "${mhEsc(q)}"</div>`; drop.classList.add('open'); return; }
  drop.innerHTML = hits.map(p => `<div onclick="location.href='product.html#id=${p.id}'" style="display:flex;gap:12px;align-items:center;padding:11px 14px;cursor:pointer;border-bottom:1px solid #1e1e1e;transition:background .15s;" onmouseover="this.style.background='#222'" onmouseout="this.style.background=''">
    <img src="${mhEsc(p.img)}" alt="" style="width:44px;height:44px;object-fit:contain;background:#111;border-radius:6px;flex-shrink:0;" onerror="this.src='${mhSvg(p.e, p.bg)}'">
    <div><div style="font-size:13px;color:#ddd;margin-bottom:2px;">${mhEsc(p.name)}</div><div style="font-size:12px;color:#e63232;font-weight:700;">${mhFmt(p.price)}</div></div>
  </div>`).join('');
  drop.classList.add('open');
};
document.addEventListener('click', e => {
  if (!e.target.closest('#mahi-search-wrap')) document.getElementById('mahi-search-drop')?.classList.remove('open');
});

/* ── PRODUCT CARD BUILDER ── */
window.buildProductCard = function(p) {
  const stars = '★'.repeat(p.stars) + '☆'.repeat(5 - p.stars);
  const badge = p.badge ? `<div style="position:absolute;top:10px;left:10px;z-index:2;background:${p.bc === 'new' ? '#15803d' : p.bc === 'hot' ? '#ea580c' : '#e63232'};color:#fff;font-size:10px;font-weight:700;padding:2px 9px;border-radius:20px;letter-spacing:.5px;">${mhEsc(p.badge)}</div>` : '';
  const wl = isWishlisted(p.id) ? '❤️' : '🤍';
  const safeName = p.name.replace(/"/g, '&quot;').replace(/'/g, '\\&#39;');
  const d = document.createElement('div');
  d.className = 'mahi-product-card';
  d.innerHTML = `${badge}
    <button class="mahi-wl-btn" data-id="${p.id}" onclick="event.stopPropagation();toggleWishlist('${p.id}','${p.name.replace(/'/g, "&#39;")}',${p.price},'${mhEsc(p.img)}',this)">${wl}</button>
    <div class="mahi-product-img" style="background:${p.bg}">
      <img src="${mhEsc(p.img)}" alt="${mhEsc(p.name)}" loading="lazy" onerror="this.src='${mhSvg(p.e, p.bg)}'">
    </div>
    <div class="mahi-product-info">
      <div class="mahi-product-name">${mhEsc(p.name)}</div>
      <div style="display:flex;align-items:center;gap:4px;margin-bottom:8px;"><span style="color:#fbbf24;font-size:11px;">${stars}</span><span style="font-size:11px;color:#555;">(${p.rev.toLocaleString()})</span></div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span class="mahi-price-now">${mhFmt(p.price)}</span>
        ${p.old ? `<span style="font-size:12px;color:#555;text-decoration:line-through;">${mhFmt(p.old)}</span>` : ''}
      </div>
      <button class="mahi-btn-cart" onclick="event.stopPropagation();addToCart('${p.id}','${p.name.replace(/'/g, "&#39;")}',${p.price},'${mhEsc(p.img)}')">+ Add to Cart</button>
    </div>`;
  d.addEventListener('click', () => location.href = 'product.html#id=' + p.id);
  return d;
};

window.renderProductGrid = function(containerId, products) {
  const g = document.getElementById(containerId);
  if (!g) return;
  g.innerHTML = '';
  if (!products || !products.length) {
    g.innerHTML = '<p style="color:#555;grid-column:1/-1;text-align:center;padding:40px 0;">No products found.</p>';
    return;
  }
  products.forEach(p => g.appendChild(buildProductCard(p)));
};

/* ── MOBILE NAV ── */
window.toggleMobileNav = function() {
  const nav = document.getElementById('mahi-mobile-nav');
  const btn = document.getElementById('mahi-hamburger');
  if (!nav) return;
  const isOpen = nav.classList.toggle('open');
  btn?.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
  document.getElementById('mahi-search-drop')?.classList.remove('open');
};
window.closeMobileNav = function() {
  document.getElementById('mahi-mobile-nav')?.classList.remove('open');
  document.getElementById('mahi-hamburger')?.classList.remove('open');
  document.body.style.overflow = '';
};

/* ── CLOSE ALL PANELS ── */
window.closeAllPanels = function() {
  closeMahiCart();
  closeMahiWishlist();
  document.getElementById('mahi-overlay')?.classList.remove('open');
};

/* ── SCROLL REVEAL ── */
function _initScrollReveal() {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  const u = _getUser();
  if (u) document.querySelectorAll('[data-login-label]').forEach(el => el.textContent = u.name.split(' ')[0]);
  _updateBadges();
  _renderCart();
  _initScrollReveal();
  // header scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('mahi-header')?.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
});
