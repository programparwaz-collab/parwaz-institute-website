/* Page rendering and interactions. Content comes from data.js. */
(function (P) {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const params = new URLSearchParams(location.search);

  P.renderFooter();

  /* ---------- Static image slots: <div data-img="key" data-ratio=".75"> ---------- */
  $$('[data-img]').forEach(el => {
    el.insertAdjacentHTML('afterbegin', P.img(el.dataset.img, {
      ratio: +el.dataset.ratio || 0.75, sizes: el.dataset.sizes || '100vw',
      eager: 'eager' in el.dataset, alt: el.dataset.alt
    }));
  });
  $$('[data-bird]').forEach(el => { el.innerHTML = P.bird(); });

  /* ---------- Header ---------- */
  const header = $('#site-header'), menuBtn = $('.menu-btn'), nav = $('#main-nav');
  const dropBtn = $('.drop-btn'), drop = $('#course-menu');
  const setDrop = open => { dropBtn.setAttribute('aria-expanded', open); drop.hidden = !open; };
  const setMenu = open => {
    menuBtn.setAttribute('aria-expanded', open);
    $('.menu-label').textContent = open ? 'Close' : 'Menu';
    header.classList.toggle('menu-open', open);
    document.body.classList.toggle('locked', open);
    if (!open) setDrop(false);
  };
  const expanded = b => b.getAttribute('aria-expanded') === 'true';
  menuBtn.addEventListener('click', () => setMenu(!expanded(menuBtn)));
  dropBtn.addEventListener('click', () => setDrop(!expanded(dropBtn)));
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (expanded(dropBtn)) { setDrop(false); dropBtn.focus(); }
    else if (expanded(menuBtn)) { setMenu(false); menuBtn.focus(); }
  });
  document.addEventListener('click', e => {
    if (e.target.closest('#main-nav a')) { setMenu(false); return; }
    if (!e.target.closest('.has-drop') && !e.target.closest('.menu-btn') && !header.classList.contains('menu-open')) setDrop(false);
  });
  /* Close when keyboard focus leaves: the dropdown on desktop, the whole menu on mobile. */
  $('.has-drop').addEventListener('focusout', e => {
    if (e.relatedTarget && !e.relatedTarget.closest('.has-drop') && !header.classList.contains('menu-open')) setDrop(false);
  });
  header.addEventListener('focusout', e => {
    if (e.relatedTarget && !header.contains(e.relatedTarget)) setMenu(false);
  });
  matchMedia('(min-width: 900px)').addEventListener('change', () => setMenu(false));
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Home: learning paths ---------- */
  const paths = $('#paths');
  if (paths) paths.innerHTML = P.paths.map(p => `<article class="path">
      <a class="path-photo" href="courses.html#${p.id}" tabindex="-1" aria-hidden="true">${P.img(p.image, { ratio: 1.3, sizes: '(min-width: 900px) 25vw, (min-width: 600px) 46vw, 92vw', alt: '', max: 1000 })}</a>
      <h3><a href="courses.html#${p.id}">${p.name}</a></h3><p>${p.text}</p>
      <ul>${P.inPath(p.id).map(c => `<li><a href="${P.url(c)}">${P.label(c)}</a></li>`).join('')}</ul></article>`).join('');

  /* ---------- Courses catalogue ---------- */
  const courseItem = c => `<li class="course">
      <a class="course-photo" href="${P.url(c)}" tabindex="-1" aria-hidden="true">${P.img(c.image, { ratio: .68, sizes: '(min-width: 900px) 260px, 92vw', alt: '', max: 1000 })}</a>
      <div><h3><a href="${P.url(c)}">${c.name}</a></h3><p>${c.text}</p>
      <div class="course-links"><a href="${P.url(c)}" aria-label="View details: ${c.name}">View details</a><a href="contact.html?course=${c.slug}" aria-label="Ask us about this course: ${c.name}">Ask us about this course</a></div></div></li>`;
  const catalogue = $('#catalogue');
  if (catalogue) {
    catalogue.innerHTML = P.paths.map(p => `<section class="cat-group" id="${p.id}" aria-labelledby="h-${p.id}">
      <div class="cat-head"><h2 id="h-${p.id}">${p.name}</h2><p>${p.text}</p></div>
      <ul class="course-list">${P.inPath(p.id).map(courseItem).join('')}</ul></section>`).join('');
    $('#jump').innerHTML = P.paths.map(p => `<li><a href="#${p.id}">${p.name}</a></li>`).join('');
  }

  /* ---------- Course detail ---------- */
  const detail = $('#course-detail');
  if (detail) {
    const c = P.course(params.get('c'));
    if (!c) {
      detail.innerHTML = `<div class="wrap page-head"><h1>We could not find that course</h1><p class="lede">The link may be out of date. Browse the full list to find what you need.</p><a class="btn" href="courses.html">View all courses</a></div>`;
    } else {
      document.title = c.name + ' | PARWAZ Institute';
      $('meta[name=description]').content = c.text;
      const path = P.paths.find(p => p.id === c.path);
      const more = P.inPath(c.path).filter(x => x !== c);
      const proj = P.projects.find(p => p.course === c.slug);
      detail.innerHTML = `
      <section class="cd-hero"><div class="wrap cd-hero-grid">
        <div><nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="courses.html">Courses</a></li><li><a href="courses.html#${path.id}">${path.name}</a></li></ol></nav>
          <h1>${c.name}</h1><p class="lede">${c.text}</p><a class="btn btn-navy" href="contact.html?course=${c.slug}">Ask us about this course</a></div>
        <div class="cd-photo">${P.img(c.image, { ratio: .75, sizes: '(min-width: 900px) 46vw, 92vw', eager: true })}</div>
      </div></section>
      <section class="section"><div class="wrap cd-body">
        <div class="cd-main">
          <h2>What you will practise</h2><ul class="ticks">${c.practise.map(x => `<li>${x}</li>`).join('')}</ul>
          <h2>A project you could build</h2><p>${c.project}</p>
          ${proj ? `<a class="text-link" href="portfolio.html#${proj.id}">See a ${proj.label.toLowerCase()}</a>` : ''}
          <h2>Where AI fits</h2><p>${c.ai}</p>
        </div>
        <aside class="cd-side"><h2>Is it for you?</h2><p>${c.forWho}</p><p>Topics show the general direction of the course. Contact us for the current outline, schedule and fees.</p><a class="btn" href="contact.html?course=${c.slug}">Ask us about this course</a></aside>
      </div></section>
      <section class="section tint"><div class="wrap"><h2 class="h2">More in ${path.name.toLowerCase()}</h2><ul class="course-list">${more.map(courseItem).join('')}</ul></div></section>`;
    }
  }

  /* ---------- Portfolio ---------- */
  const grid = $('#projects');
  if (grid) {
    const limit = +grid.dataset.limit || Infinity;
    const filters = $('#filters'), count = $('#project-count');
    const pathOf = p => P.course(p.course).path;
    const card = p => `<li class="project" id="${p.id}"><button type="button" class="project-btn" data-project="${p.id}" aria-haspopup="dialog">
      <span class="project-art ${p.mock}" aria-hidden="true">${P.mocks[p.mock]()}</span>
      <span class="project-text"><span class="tag">${p.label}</span><span class="project-title">${p.title}</span><span class="project-course">${P.label(P.course(p.course))}</span></span></button></li>`;
    const draw = f => {
      const all = P.projects.filter(p => f === 'all' || pathOf(p) === f), list = all.slice(0, limit);
      grid.innerHTML = list.map(card).join('');
      grid.classList.toggle('few', list.length < 4);
      count.textContent = `Showing ${list.length} sample and concept ${list.length === 1 ? 'project' : 'projects'}`;
    };
    filters.innerHTML = [['all', 'All work'], ...P.paths.map(p => [p.id, p.name])].map(([id, n], i) => `<button type="button" data-f="${id}" aria-pressed="${!i}">${n}</button>`).join('');
    filters.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      $$('button', filters).forEach(x => x.setAttribute('aria-pressed', x === b)); draw(b.dataset.f);
    });
    draw('all');

    const dlg = document.createElement('dialog');
    dlg.className = 'proj-dialog'; dlg.setAttribute('aria-labelledby', 'dlg-title');
    document.body.append(dlg);
    const open = id => {
      const p = P.projects.find(x => x.id === id), c = P.course(p.course);
      dlg.innerHTML = `<button class="dlg-close" type="button">Close</button><div class="project-art ${p.mock}" aria-hidden="true">${P.mocks[p.mock]()}</div>
        <div class="dlg-body"><span class="tag">${p.label}</span><h2 id="dlg-title">${p.title}</h2><p>${p.text}</p><h3>How a learner would approach it</h3><ul class="ticks">${p.work.map(w => `<li>${w}</li>`).join('')}</ul>
        <a class="btn" href="${P.url(c)}">View ${P.label(c)}</a></div>`;
      dlg.showModal(); dlg.scrollTop = 0;
      document.body.classList.add('locked');
    };
    dlg.addEventListener('close', () => document.body.classList.remove('locked'));
    dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('.dlg-close')) dlg.close(); });
    grid.addEventListener('click', e => { const b = e.target.closest('[data-project]'); if (b) open(b.dataset.project); });
    const fromHash = location.hash.slice(1);
    if (document.body.dataset.page === 'portfolio' && P.projects.some(p => p.id === fromHash)) open(fromHash);
  }

  /* ---------- AI workflow tabs ---------- */
  const tabs = $('#wf-tabs');
  if (tabs) {
    const panel = $('#wf-panel');
    tabs.innerHTML = P.workflows.map((w, i) => `<button type="button" role="tab" id="wf-${w.id}" aria-controls="wf-panel" aria-selected="${!i}" tabindex="${i ? -1 : 0}">${w.tab}</button>`).join('');
    const all = $$('button', tabs);
    const pick = i => {
      all.forEach((b, j) => { b.setAttribute('aria-selected', i === j); b.tabIndex = i === j ? 0 : -1; });
      panel.setAttribute('aria-labelledby', all[i].id);
      panel.innerHTML = `<ol class="wf">${P.workflows[i].steps.map(([who, t]) => `<li class="${who === 'AI' ? 'ai' : 'you'}"><b>${who === 'AI' ? 'AI assists' : 'You decide'}</b><p>${t}</p></li>`).join('')}</ol>`;
    };
    all.forEach((b, i) => {
      b.addEventListener('click', () => pick(i));
      b.addEventListener('keydown', e => {
        const n = all.length, to = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: n - 1 }[e.key];
        if (to === undefined) return;
        e.preventDefault(); const j = (to + n) % n; pick(j); all[j].focus();
      });
    });
    pick(0);
  }

  /* ---------- FAQ ---------- */
  const faq = $('#faq-list');
  if (faq) faq.innerHTML = P.faqs.map(([q, a]) => `<details name="faq"><summary>${q}</summary><p>${a}</p></details>`).join('');

  /* ---------- Contact details and form ---------- */
  const info = $('#contact-info');
  if (info) info.innerHTML = P.contactItems().map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');

  const mount = $('#contact-form');
  if (mount) {
    mount.innerHTML = `<form novalidate aria-label="Course enquiry">
      <div class="two"><div class="field"><label for="f-name">Name</label><input id="f-name" name="name" autocomplete="name" required></div>
      <div class="field"><label for="f-email">Email</label><input id="f-email" name="email" type="email" autocomplete="email" required></div></div>
      <div class="field"><label for="f-course">Course interest</label><select id="f-course" name="course" required><option value="">Choose a course</option>
        ${P.courses.map(c => `<option value="${c.slug}">${c.name}</option>`).join('')}<option value="unsure">I am not sure yet</option></select></div>
      <div class="field"><label for="f-msg">Message</label><textarea id="f-msg" name="message" rows="4" required></textarea></div>
      <button class="btn" type="submit">Check my enquiry</button>
      <p class="form-note">Preview form: your details stay in this browser and are not sent.</p></form>
      <div class="form-done" role="status" tabindex="-1" hidden></div>`;
    const form = $('form', mount), done = $('.form-done', mount);
    const want = params.get('course');
    if (P.course(want)) form.course.value = want;
    const rules = {
      name: v => v.length < 2 ? 'Enter your name.' : '',
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Enter an email address like name@example.com.',
      course: v => v ? '' : 'Choose a course, or select "I am not sure yet".',
      message: v => v.length < 10 ? 'Tell us a little more, in at least 10 characters.' : ''
    };
    const check = name => {
      const el = form.elements[name], msg = rules[name](el.value.trim()), id = el.id + '-err';
      let out = document.getElementById(id);
      if (!out) { out = document.createElement('p'); out.id = id; out.className = 'err'; el.after(out); }
      out.textContent = msg;
      if (msg) { el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', id); }
      else { el.removeAttribute('aria-invalid'); el.removeAttribute('aria-describedby'); }
      return !msg;
    };
    form.addEventListener('input', e => { if (e.target.getAttribute('aria-invalid')) check(e.target.name); });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const bad = Object.keys(rules).filter(n => !check(n));
      if (bad.length) { form.elements[bad[0]].focus(); return; }
      /* To go live: send new FormData(form) to your backend here, then update the copy below. */
      form.hidden = true; done.hidden = false;
      done.innerHTML = `${P.bird()}<h3></h3><p>Everything is filled in correctly. This preview form is not connected yet, so nothing has been sent.</p><button class="btn btn-line" type="button">Edit my enquiry</button>`;
      $('h3', done).textContent = `Thanks, ${form.elements.name.value.trim()}. Your enquiry looks complete.`;
      $('button', done).onclick = () => { done.hidden = true; form.hidden = false; form.elements.name.focus(); };
      done.focus();
    });
  }

  /* ---------- Credits ---------- */
  const credits = $('#credits');
  if (credits) credits.innerHTML = Object.keys(P.images).map(k => { const i = P.images[k]; return `<li>${P.img(k, { ratio: .68, sizes: '200px', alt: '', max: 400 })}<div><p>${i.alt}</p><p>Photo by <a href="https://unsplash.com/@${i.user}" rel="noopener">${i.by}</a> on <a href="https://unsplash.com" rel="noopener">Unsplash</a></p></div></li>`; }).join('');

  /* Content is rendered by script, so honour #links after it exists. */
  if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) requestAnimationFrame(() => t.scrollIntoView()); }
})(window.PARWAZ);
