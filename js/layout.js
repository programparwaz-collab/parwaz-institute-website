/* Shared helpers, header and footer. Loaded synchronously so the page never jumps. */
(function (P) {
  P.course = slug => P.courses.find(c => c.slug === slug);
  P.inPath = id => P.courses.filter(c => c.path === id);
  P.label = c => c.short || c.name;
  P.url = c => 'course.html?c=' + c.slug;
  P.src = (key, w, h) => `https://images.unsplash.com/photo-${P.images[key].id}?auto=format&fit=crop&q=75&w=${w}&h=${h}`;

  /* Responsive <img>: ratio is height / width. */
  P.img = (key, { ratio = 0.75, sizes = '100vw', eager = false, alt, max = 1600 } = {}) => {
    const widths = [400, 700, 1000, 1600].filter(w => w <= max);
    const h = w => Math.round(w * ratio);
    return `<img src="${P.src(key, 700, h(700))}" srcset="${widths.map(w => `${P.src(key, w, h(w))} ${w}w`).join(', ')}"
      sizes="${sizes}" width="700" height="${h(700)}" alt="${alt === undefined ? P.images[key].alt : alt}"
      ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" onerror="this.style.visibility='hidden'">`;
  };

  /* Folded-paper bird: the brand mark. */
  P.bird = (cls = '') => `<svg class="bird ${cls}" viewBox="0 0 120 92" aria-hidden="true" focusable="false">
    <path class="b1" d="M72 50 38 4l9 50z"/><path class="b2" d="M76 52 8 22l42 38z"/><path class="b3" d="m76 52-26 8L4 84l52-8z"/>
    <path class="b4" d="M76 52 56 76l44-30-6-9z"/><path class="b5" d="m94 37 25-1-20 11z"/></svg>`;

  P.placeholder = text => `<span class="placeholder">[${text}]</span>`;
  P.contactItems = () => {
    const c = P.contact;
    const items = [
      ['Email', c.email ? `<a href="mailto:${c.email}">${c.email}</a>` : P.placeholder('Add email address')],
      ['Phone', c.phone ? `<a href="tel:${c.phone.replace(/[^+\d]/g, '')}">${c.phone}</a>` : P.placeholder('Add phone number')],
      ['Address', c.address || P.placeholder('Add institute address')],
      ['Opening hours', c.hours || P.placeholder('Add opening hours')]
    ];
    if (c.whatsapp) items.splice(2, 0, ['WhatsApp', `<a href="https://wa.me/${c.whatsapp}">Message us</a>`]);
    return items;
  };

  const page = document.body.dataset.page;
  const cur = name => page === name ? ' aria-current="page"' : '';
  const logo = `<a class="logo" href="index.html" aria-label="PARWAZ Institute, home">${P.bird()}<span><b>PARWAZ</b> Institute</span></a>`;
  const caret = '<svg class="caret" viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1.5 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  P.renderHeader = () => {
    document.getElementById('site-header').innerHTML = `
    <div class="wrap bar">
      ${logo}
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="main-nav"><span class="menu-label">Menu</span><span class="burger" aria-hidden="true"></span></button>
      <nav id="main-nav" aria-label="Main">
        <ul class="nav-list">
          <li><a href="index.html"${cur('home')}>Home</a></li>
          <li class="has-drop">
            <button class="drop-btn${page === 'courses' ? ' is-current' : ''}" type="button" aria-expanded="false" aria-controls="course-menu">Courses ${caret}</button>
            <div class="drop" id="course-menu" hidden>
              <div class="drop-grid">
                ${P.paths.map(p => `<div><p class="drop-title" id="m-${p.id}">${p.name}</p><ul aria-labelledby="m-${p.id}">
                  ${P.inPath(p.id).map(c => `<li><a href="${P.url(c)}">${P.label(c)}</a></li>`).join('')}</ul></div>`).join('')}
              </div>
              <a class="drop-all" href="courses.html">View all courses</a>
            </div>
          </li>
          <li><a href="portfolio.html"${cur('portfolio')}>Portfolio</a></li>
          <li><a href="about.html"${cur('about')}>About</a></li>
          <li><a class="nav-cta" href="contact.html"${cur('contact')}>Contact Us</a></li>
        </ul>
      </nav>
    </div>`;
  };

  P.renderFooter = () => {
    document.getElementById('site-footer').innerHTML = `
    <div class="wrap">
      <div class="foot-top">
        <div class="foot-brand">${logo}<p>Practical digital skills and AI-powered learning for careers, businesses and freelance work.</p>
          ${P.social.length ? `<ul class="foot-social">${P.social.map(s => `<li><a href="${s.url}" rel="noopener">${s.name}</a></li>`).join('')}</ul>` : ''}</div>
        <nav aria-label="Footer"><h2>Explore</h2><ul>
          <li><a href="index.html">Home</a></li><li><a href="courses.html">All courses</a></li><li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="about.html">About</a></li><li><a href="index.html#faq">FAQ</a></li><li><a href="contact.html">Contact Us</a></li></ul></nav>
        <nav class="foot-courses" aria-label="Footer courses"><h2>Courses</h2><ul>${P.courses.map(c => `<li><a href="${P.url(c)}">${P.label(c)}</a></li>`).join('')}</ul></nav>
        <div><h2>Contact</h2><ul>${P.contactItems().map(([k, v]) => `<li><span class="sr-only">${k}: </span>${v}</li>`).join('')}</ul></div>
      </div>
      <div class="foot-end"><p>© ${new Date().getFullYear()} PARWAZ Institute</p><a href="credits.html">Photo credits</a></div>
    </div>`;
  };
  P.renderHeader();
})(window.PARWAZ);
