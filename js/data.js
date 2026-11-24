/* =========================================================================
   PARWAZ Institute: ALL EDITABLE CONTENT LIVES HERE
   Edit contact details, social links, courses, projects and FAQs in this file.
   ========================================================================= */
window.PARWAZ = {
  /* ---- 1. INSTITUTE DETAILS (PLACEHOLDERS: replace before launch) --------
     Leave a value as '' to show the bracketed placeholder text on the site. */
  contact: {
    email: '',      // e.g. 'hello@yourdomain.com'
    phone: '',      // e.g. '+00 000 0000000'
    whatsapp: '',   // digits only with country code, e.g. '000000000000'
    address: '',    // e.g. 'Street, City, Country'
    hours: ''       // e.g. 'Monday to Friday, 10:00 to 18:00'
  },
  /* Social icons appear in the footer only when real URLs are added:
     { name: 'Instagram', url: 'https://...' } */
  social: [],

  /* ---- 2. IMAGES (Unsplash, hot-linked, credited on credits.html) -------- */
  images: {
    hero:      { id: '1565598621680-94ac0c22b148', by: 'Van Tay Media', user: 'vantaymedia', alt: 'Learners working together around a laptop and notebooks' },
    team:      { id: '1522202176988-66273c2fd55f', by: 'Brooke Cagle', user: 'brookecagle', alt: 'Three people sharing ideas around a table with laptops' },
    pair:      { id: '1543269865-0a740d43b90c', by: 'Brooke Cagle', user: 'brookecagle', alt: 'Two people looking at the same laptop in a bright room' },
    clouds:    { id: '1513002749550-c59d786b8e6c', by: 'Taylor Van Riper', user: 'taylorvanriper925', alt: 'Blue sky seen from above a layer of cloud' },
    marketing: { id: '1542744173-05336fcc7ad4', by: 'Campaign Creators', user: 'campaign_creators', alt: 'A person reviewing a marketing page on a laptop' },
    code:      { id: '1607706189992-eae578626c86', by: 'Mohammad Rahmani', user: 'afgprogrammer', alt: 'Website code on a computer screen' },
    shopify:   { id: '1770013413878-2530e2c3d82b', by: 'Rifki Kurniawan', user: 'kurniawann', alt: 'A shop owner checking an order on a phone beside parcels' },
    woo:       { id: '1648747067192-790595bc6d5e', by: 'M. Cooper', user: 'mcoopercreative', alt: 'A person preparing a cardboard parcel in a bright studio' },
    genai:     { id: '1604933762021-54a5858c9832', by: 'Daniel Thomas', user: 'spintracer', alt: 'A learner working on a laptop at a wooden desk' },
    graphic:   { id: '1572044162444-ad60f128bdea', by: 'Theme Photos', user: 'themephotos', alt: 'A designer using a drawing tablet beside colour swatches' },
    video:     { id: '1574717024653-61fd2cf4d44d', by: 'Peter Stumpf', user: 'peter_s', alt: 'Clips arranged on a video editing timeline' },
    uiux:      { id: '1576595580361-90a855b84b20', by: 'Amélie Mourichon', user: 'amayli', alt: 'Hands sketching app wireframes on paper' },
    seo:       { id: '1603464021578-f327592a89de', by: 'Anton Jansson', user: 'antonjphotos', alt: 'A person writing on a laptop at a table' },
    social:    { id: '1759393852314-59dc00faeed3', by: 'Afffect', user: 'afffect', alt: 'A phone on a tripod recording a social media video' },
    freelance: { id: '1637589308599-3478cc55510d', by: 'Fotos', user: 'fotospk', alt: 'A freelancer on a phone call while working on a laptop' },
    nocode:    { id: '1623303647440-967d26b95b47', by: 'FORTYTWO', user: 'byfortytwo', alt: 'People mapping out a process with notes on a table' },
    data:      { id: '1763038311036-6d18805537e5', by: 'Apex Virtual Education', user: 'apexvirtualeducation', alt: 'A person studying charts on a laptop' },
    vases:     { id: '1703682329904-2218434820c1', by: 'Nigel Hoare', user: 'dementedpixel', alt: 'Small colourful ceramic vases' },
    cups:      { id: '1610701596007-11502861dcfa', by: 'Vladimir Gladkov', user: 'vovkapanda', alt: 'Handmade ceramic cups and bowls' }
  },

  /* ---- 3. LEARNING PATHS ------------------------------------------------- */
  paths: [
    { id: 'grow',  name: 'Market and grow',   image: 'social',  text: 'Help the right people find a brand, trust it and come back.' },
    { id: 'build', name: 'Build and sell',    image: 'shopify', text: 'Make websites and online shops that people can actually use.' },
    { id: 'create', name: 'Design and create', image: 'graphic', text: 'Turn ideas into visuals, videos and interfaces worth looking at.' },
    { id: 'work',  name: 'Work smarter',      image: 'genai',   text: 'Use AI, automation and data well, then offer those skills to clients.' }
  ],

  /* ---- 4. COURSES -------------------------------------------------------- */
  courses: [
    { slug: 'ai-digital-marketing', path: 'grow', image: 'marketing', name: 'AI-Powered Digital Marketing',
      text: 'Plan campaigns, write stronger ads and read the results, using AI to move faster at every step.',
      forWho: 'Business owners, job seekers and anyone who wants to understand how brands win customers online.',
      practise: ['Turning a business goal into a campaign plan', 'Researching an audience and shaping an offer', 'Writing and testing ad and email variations', 'Reading results and deciding what to change'],
      project: 'A complete campaign plan for a small business, from audience research to ad copy and a reporting sheet.',
      ai: 'Use AI to explore angles and draft variations. You choose the strategy, check the claims and decide what runs.' },
    { slug: 'ai-web-development', path: 'build', image: 'code', name: 'AI-Assisted Web Development',
      text: 'Learn how websites work, then use AI coding tools to build, debug and launch your own.',
      forWho: 'Beginners who want to build websites and learners who want to code with AI without losing the fundamentals.',
      practise: ['Structuring pages with HTML, CSS and JavaScript', 'Building layouts that work on every screen', 'Prompting, reviewing and testing AI-written code', 'Finding bugs and publishing a finished site'],
      project: 'A responsive website for a real or imagined business, built, tested and ready to publish.',
      ai: 'Use AI as a coding partner that explains and drafts. You read every line, test it and own the result.' },
    { slug: 'ecommerce-shopify', path: 'build', image: 'shopify', name: 'Ecommerce with Shopify',
      text: 'Set up a store, present products clearly and create a shopping experience customers trust.',
      forWho: 'Future store owners, existing sellers and freelancers who want to build shops for clients.',
      practise: ['Setting up a store and choosing a theme', 'Writing product pages that answer buyer questions', 'Organising collections, shipping and payment settings', 'Reviewing the path from homepage to checkout'],
      project: 'A working demo store with a product range, clear navigation and polished product pages.',
      ai: 'Use AI to draft descriptions and organise product information. You check every detail and keep the brand voice.' },
    { slug: 'ecommerce-woocommerce', path: 'build', image: 'woo', name: 'Ecommerce with WordPress and WooCommerce',
      text: 'Build a flexible online shop you control, from the first page to the order email.',
      forWho: 'Learners who want to own their website and freelancers who work with WordPress clients.',
      practise: ['Setting up WordPress and choosing plugins carefully', 'Building pages and product catalogues', 'Configuring the cart, checkout and emails', 'Keeping a store fast, backed up and maintained'],
      project: 'A WooCommerce demo shop with a custom homepage, catalogue and checkout flow.',
      ai: 'Use AI to troubleshoot settings and draft content. You learn what each change does before you make it.' },
    { slug: 'generative-ai-for-work', path: 'work', image: 'genai', name: 'Generative AI for Work: ChatGPT, Claude and related tools',
      short: 'Generative AI for Work',
      text: 'Write better prompts, check the answers and turn AI tools into dependable daily workflows.',
      forWho: 'Professionals, students and teams who want to use AI tools with confidence and care.',
      practise: ['Giving AI tools clear context and instructions', 'Researching, summarising and drafting documents', 'Checking facts, protecting private data and spotting weak output', 'Saving repeatable workflows for everyday tasks'],
      project: 'A personal AI playbook: tested prompts and workflows for the tasks you do most.',
      ai: 'AI is the subject here. You learn where it helps, where it fails and how to stay responsible for the final work.' },
    { slug: 'ai-graphic-design', path: 'create', image: 'graphic', name: 'AI-Assisted Graphic Design',
      text: 'Learn layout, type and colour, then use AI to explore ideas and finish work sooner.',
      forWho: 'Creative beginners, content creators and business owners who want better visuals.',
      practise: ['Composing with layout, type and colour', 'Developing a consistent visual identity', 'Generating and refining concepts with AI image tools', 'Preparing files for print, web and social media'],
      project: 'A small brand identity with a logo, colour palette, type choices and sample applications.',
      ai: 'Use AI to explore directions quickly. You make the design decisions and refine the final artwork.' },
    { slug: 'video-editing-ai', path: 'create', image: 'video', name: 'Video Editing and AI Video Creation',
      text: 'Shape footage into clear stories, with AI tools for captions, cleanup and new visuals.',
      forWho: 'Creators, marketers and beginners who want to edit videos for themselves or for clients.',
      practise: ['Planning a story and selecting the right shots', 'Editing for pace, sound and clarity', 'Adding captions, graphics and colour', 'Using AI tools for rough cuts, cleanup and generated clips'],
      project: 'A short brand video edited in versions for wide and vertical screens.',
      ai: 'Use AI to speed up repetitive edits. You control the story, the timing and the final cut.' },
    { slug: 'ui-ux-design', path: 'create', image: 'uiux', name: 'UI/UX Design',
      text: 'Understand what people need, then design websites and apps they find easy to use.',
      forWho: 'Beginners interested in product design and designers who want to move into digital products.',
      practise: ['Talking to users and framing the problem', 'Mapping user journeys and sketching wireframes', 'Designing clear interfaces and components', 'Prototyping, testing and presenting a solution'],
      project: 'A tested app prototype and a case study that explains your decisions.',
      ai: 'Use AI to organise research and explore ideas. You still talk to people and test with them.' },
    { slug: 'seo-content-marketing', path: 'grow', image: 'seo', name: 'SEO and Content Marketing',
      text: 'Plan and write useful content that answers real questions and earns attention in search.',
      forWho: 'Writers, marketers and business owners who want to be found online.',
      practise: ['Understanding search intent and finding topics', 'Planning content around a clear goal', 'Writing and structuring helpful pages', 'Reviewing on-page and technical basics'],
      project: 'A content plan and one finished article for a chosen topic or business.',
      ai: 'Use AI for outlines and gap analysis. You bring the experience, accuracy and original point of view.' },
    { slug: 'social-media-marketing', path: 'grow', image: 'social', name: 'Social Media Marketing',
      text: 'Build a content plan, create posts people care about and manage a brand with purpose.',
      forWho: 'Creators, small business owners and people who want to manage social accounts.',
      practise: ['Choosing platforms and defining a brand voice', 'Planning a practical content calendar', 'Creating captions, visuals and short videos', 'Responding to a community and reading insights'],
      project: 'A content calendar with finished sample posts for one brand.',
      ai: 'Use AI to brainstorm and repurpose content. You keep the voice human and the message honest.' },
    { slug: 'freelancing-client-acquisition', path: 'work', image: 'freelance', name: 'Freelancing and Client Acquisition',
      text: 'Package your skills, present your work and start better conversations with potential clients.',
      forWho: 'Learners with a skill to offer, new freelancers and people considering independent work.',
      practise: ['Choosing a service and defining what it includes', 'Writing a profile and presenting a portfolio', 'Researching prospects and writing proposals', 'Scoping, pricing and communicating with clients'],
      project: 'A client-ready service page, portfolio introduction and proposal template.',
      ai: 'Use AI to research prospects and sharpen proposals. You build the relationship and do the thinking.' },
    { slug: 'no-code-automation', path: 'work', image: 'nocode', name: 'No-Code Automation and Productivity',
      text: 'Connect everyday apps, remove repetitive steps and give yourself time for better work.',
      forWho: 'Teams, entrepreneurs and freelancers who spend too long on manual tasks.',
      practise: ['Mapping a process before automating it', 'Connecting forms, sheets, email and other apps', 'Adding AI steps with human checks', 'Testing, documenting and maintaining a workflow'],
      project: 'A documented automation that takes an enquiry from form to organised follow-up.',
      ai: 'Use AI to sort, summarise and draft inside a workflow. You set the rules and approve what matters.' },
    { slug: 'data-analytics', path: 'work', image: 'data', name: 'Data Analytics for Digital Work',
      text: 'Clean data, find the useful pattern and explain it so someone can make a decision.',
      forWho: 'Marketers, store owners, freelancers and beginners who want to work confidently with numbers.',
      practise: ['Asking a question that data can answer', 'Cleaning and organising spreadsheets', 'Choosing clear charts and building dashboards', 'Turning findings into a short recommendation'],
      project: 'A dashboard for a sample online store with a one-page summary of what to do next.',
      ai: 'Use AI to write formulas and explore questions. You verify the numbers and explain what they mean.' }
  ],

  /* ---- 5. SAMPLE PROJECTS (invented; keep the labels until replaced) ----- */
  projects: [
    { id: 'store', label: 'Concept project', title: 'Colourful ceramics shop', course: 'ecommerce-shopify', mock: 'store', text: 'A storefront concept for a small pottery studio, with clear collections and calm product pages.', work: ['Organise a small product range', 'Write descriptions and choose imagery', 'Check the path from homepage to basket'] },
    { id: 'app', label: 'Concept project', title: 'Weekend travel app', course: 'ui-ux-design', mock: 'app', text: 'A mobile prototype that helps people choose a short trip by mood and travel time.', work: ['Frame the user problem', 'Sketch and test the main journey', 'Design a small set of reusable screens'] },
    { id: 'brand', label: 'Concept project', title: 'Tea house identity', course: 'ai-graphic-design', mock: 'brand', text: 'A fresh visual identity for an imagined neighbourhood tea house.', work: ['Explore directions with AI', 'Refine a logo and palette by hand', 'Apply the system to cups, signs and posts'] },
    { id: 'dash', label: 'Sample project', title: 'Online store dashboard', course: 'data-analytics', mock: 'dash', text: 'A dashboard layout using made-up data to show what a store owner needs at a glance.', work: ['Clean a practice dataset', 'Choose the right chart for each question', 'Write a short recommendation'] },
    { id: 'calendar', label: 'Sample project', title: 'A month of social content', course: 'social-media-marketing', mock: 'calendar', text: 'A colour-coded plan that balances teaching, stories and product posts.', work: ['Define the audience and voice', 'Plan a balanced mix of posts', 'Draft captions and simple visuals'] },
    { id: 'flow', label: 'Sample project', title: 'Enquiry follow-up flow', course: 'no-code-automation', mock: 'flow', text: 'A workflow that sorts new enquiries, drafts a reply and waits for a person to approve it.', work: ['Map the manual process', 'Connect a form, sheet and email', 'Add an approval step and test it'] },
    { id: 'film', label: 'Concept project', title: 'Handmade: a product film', course: 'video-editing-ai', mock: 'film', text: 'A short film concept about craft, planned for both wide and vertical formats.', work: ['Write a simple shot list', 'Cut for rhythm and story', 'Add captions and export versions'] },
    { id: 'site', label: 'Concept project', title: 'Community garden website', course: 'ai-web-development', mock: 'site', text: 'A responsive site concept that helps neighbours find plots, events and volunteers.', work: ['Plan the pages and content', 'Build with AI as a coding partner', 'Test on phones and fix accessibility issues'] },
    { id: 'content', label: 'Sample project', title: 'Search content map', course: 'seo-content-marketing', mock: 'content', text: 'A topic map for an imagined cycling shop, from broad guides to specific questions.', work: ['Group questions by intent', 'Choose the most useful pages first', 'Write and improve one complete guide'] }
  ],

  /* ---- 6. AI WORKFLOW EXAMPLES ------------------------------------------- */
  workflows: [
    { id: 'page', tab: 'Write a product page', steps: [
      ['You', 'Study the product and note the questions a buyer would ask.'],
      ['AI', 'ChatGPT or Claude drafts three structures from your notes.'],
      ['You', 'Choose one, correct the facts and rewrite it in the brand voice.'],
      ['AI', 'It plays a sceptical customer and points out what is unclear.'],
      ['You', 'Fix the gaps, test the page on a phone and publish.']] },
    { id: 'site', tab: 'Build a web section', steps: [
      ['You', 'Sketch the layout and decide what it needs to do.'],
      ['AI', 'A coding assistant drafts the HTML and CSS from your brief.'],
      ['You', 'Read the code, test it and note what breaks on mobile.'],
      ['AI', 'It explains the bug and suggests possible fixes.'],
      ['You', 'Pick the right fix, check accessibility and ship it.']] },
    { id: 'campaign', tab: 'Plan a campaign', steps: [
      ['You', 'Set the goal, the audience and the limits.'],
      ['AI', 'It suggests angles and groups them by customer need.'],
      ['You', 'Compare them with real research and pick two to test.'],
      ['AI', 'It drafts variations and a simple tracking sheet.'],
      ['You', 'Check every claim, run the test and learn from the result.']] }
  ],

  /* ---- 7. FAQ ------------------------------------------------------------ */
  faqs: [
    ['Who can join?', 'Our courses are designed for students, job seekers, working professionals, business owners and freelancers. If you are unsure whether a course suits you, tell us about your goal and we will help you choose.'],
    ['Do I need any experience?', 'No. Beginners are welcome, and lessons start from the basics. If you already have some experience, ask us which topic is the best place to continue.'],
    ['How do projects work?', 'You apply each skill to a practical task, such as a shop, campaign, design or workflow. You work in steps, improve it with feedback and keep the finished piece for your portfolio.'],
    ['Will AI do the work for me?', 'No. You learn the underlying skill first, then use AI to research, draft and review. You stay responsible for the decisions and the quality.'],
    ['Which AI tools will I use?', 'You will see tools such as ChatGPT and Claude alongside AI features in design, video, coding and automation tools. Tools change, so we focus on methods you can carry from one to the next.'],
    ['What about fees, schedules and admissions?', 'These details depend on the course. Ask us about the one you are interested in and we will share the current information.'],
    ['How do I contact the institute?', 'Use the enquiry form on the Contact Us page, or the contact details listed beside it.']
  ]
};
