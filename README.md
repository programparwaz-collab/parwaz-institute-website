# PARWAZ Institute website

Static site: HTML, CSS and plain JavaScript. No build step. Upload the folder to any web host.

- **Edit content:** `js/data.js` (contact details, social links, courses, projects, workflows, FAQs, images)
- **Edit look:** colour and type tokens at the top of `css/styles.css`
- **Edit page copy:** the `.html` files. Header and footer live in `js/layout.js`
- **Connect the form:** see the "To go live" comment in `js/main.js`, then update the form note and success copy
- **Preview:** `powershell -ExecutionPolicy Bypass -File tools\serve.ps1`, then open http://localhost:5173

Before launch: fill in the `contact` block in `js/data.js`, add or remove the team section in `about.html`, replace sample projects with real work when available, and confirm course topics. Photos are loaded from Unsplash and credited in `credits.html`.
