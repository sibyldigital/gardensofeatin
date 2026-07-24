# Gardens of Eatin' — Site Copy Reference

All user-facing copy pulled from the React build (`sibyldigital/gardensofeatin`), organized for reference and editing. Structure below mirrors the site: **site chrome** first, then **each page top to bottom**, then **shared component copy** and the **content data lists** (projects, posts, team, etc.) that several pages pull from.

> Editing note: fields map to the source. Page-level copy lives in `src/pages/*.jsx`; reusable lists (services, packages, projects, posts, reviews, team) live in `src/data/content.js`; component-owned copy (stats, FAQ, testimonials, etc.) lives in `src/components/*.jsx`. The source of each block is noted in parentheses.

---

## Site chrome

### Nav header (`components/NavHeader.jsx`)
- **Wordmark:** Gardens of Eatin'
- **Phone:** (828) 555-0134
- **CTA button:** Get A Quote
- **Primary nav:** Home · About · Process · Services · Packages · Portfolio · Blog · Contact
- **Services dropdown:** Consultation · Permaculture Consultation · Design · Residential · Installation · Maintenance · Commercial

### Footer (`components/Footer.jsx`)
- **Wordmark:** Gardens of Eatin'
- **Tagline:** An Ecological Company — Asheville, NC
- **Column 1:** Homepage · About · Process
- **Column 2:** Portfolio · Services · Packages · Landing Page
- **Column 3:** Blog · Questionnaire · Contact Us
- **Phone:** (828) 555-0134
- **Bottom links:** Developer Reference · © {year} Gardens of Eatin'

---

## Home (`pages/Home.jsx`)

**Hero**
- Eyebrow: Permaculture & Landscape Design in Asheville, NC
- Title: Beauty You Can Eat
- Lede: Gardening and edible landscape design packages for homeowners, estates, and venues across Western North Carolina.
- Buttons: Get A Quote · View Portfolio

**Stats band** — see [Stats bar](#stats-bar-componentsstatsbarjsx).

**"Get started with us" — three cards**
- Section eyebrow: An Ecological Company
- Section title: Beauty You Can Eat
- Section lede: Get started with us.

| Card | Eyebrow | Title | Description |
|---|---|---|---|
| → /design-packages | What You Buy | Packages | Tiered offerings for every scale of land — from a first kitchen garden to a full estate or commercial build. |
| → /ecological-landscaping-services | What We Do | Services | The disciplines we practice and the systems we build — design, installation, maintenance, and commercial work. |
| → /process | How It Works | Process | How every engagement unfolds, from the first walk on your land to the first harvest. |

**"Permaculture Packages" — three alternating pillars**
- Section eyebrow: What We Offer
- Section title: Permaculture Packages
- Section lede: From a first kitchen garden to a full estate master plan, each package is built on the same pillars.

1. **Enjoy The Harvest — A Garden That Feeds You**
   With consultation, we can help you create a productive kitchen garden that combines herbs and vegetables to add color to your plate— beauty in every season, and a basket to carry in from it.
   *Button:* See Kitchen Gardens → /design-packages#kitchen-garden
2. **Build Resilience In Western NC — Plant For The Decades**
   We can create a food forest on your landscape, planting fruit trees along with edible nuts and berries on your land — an orchard that outlives trends and keeps producing for your grandchildren.
   *Button:* See Food Forests → /design-packages#food-forest
3. **Rooted In Beauty, Built For Business — Grounds That Work As Hard As They Look Good**
   We design full permaculture properties for estates, wedding venues, and breweries — landscapes that photograph beautifully and earn their keep.
   *Button:* See Estate Planning → /design-packages#estate-plan

**Timeline** (eyebrow "The Journey", title "Four Steps, Start To Harvest") — the four process steps; replaces the former information strip in this slot.
**Testimonials** — see [Testimonials (Home & Packages)](#testimonials-home--packages-componentstestimonialsectionjsx).
**Journal preview** — see [Journal preview](#journal-preview-componentsjournalsectionjsx).

**Closing CTA:** photo banner, single button — Get A Quote.

---

## About (`pages/About.jsx`)

**Hero**
- Eyebrow: About Gardens of Eatin'
- Title: Grounded In The Land We Plant
- Lede: An ecological landscaping company from Asheville, North Carolina — founded on the idea that beauty and harvest belong in the same garden.

**Philosophy (two-column)**
- Eyebrow: Our Philosophy
- Title: Simple, Clean Design That *Feeds People*
- Para 1: Founded by Anna Timmerman, Gardens of Eatin' designs and installs edible landscapes, food forests, and full permaculture property designs for residential and commercial clients across Western North Carolina.
- Para 2: We work at the intersection of luxury lifestyle and values-led living. Our clients want an outdoor space that photographs beautifully — and we believe that same space should carry fruit trees, edible nuts and berries, and a kitchen garden that earns its ground. We read the water, sun, and soil first, and we plant for decades, not seasons.

**Stats band** — see [Stats bar](#stats-bar-componentsstatsbarjsx).

**Team** (full-bleed pillars, alternating dark / light — one member per row, Anna first)
- Eyebrow: The People
- Title: A Small Crew With Deep Roots
- Members — see [Team — About page](#team--about-page-datacontentjs--team).

**Values**
- Eyebrow: How We Work
- Title: What We Hold To
- Items — see [Values](#values-datacontentjs--values).

**Closing CTA** (solid deep-forest background)
- Eyebrow: Ready When You Are
- Title: Let's Grow Something That Lasts
- Button: Get Started → /contact-us

---

## Process (`pages/Process.jsx`)

**Hero**
- Eyebrow: Our Process
- Title: From First Walk To First Harvest
- Lede: Four steps carry every project — a consultation on your land, a custom design, a careful installation, and the ecological care that keeps it producing.

**Timeline**
- Eyebrow: The Journey
- Title: Four Steps, Start To Harvest
- Steps (number, name, short) — see [Process steps](#process-steps-datacontentjs--steps).

**Four anchored step sections** — backgrounds alternate **dark / light / dark / light** (deep-forest → cream). Each uses `Step {number}`, the step name as heading, and the step's long `description` ([Process steps](#process-steps-datacontentjs--steps)). Step 01 adds the link:
> Fill out our design questionnaire before your consultation ›

**Information strip** — see [Information facts](#information-facts-componentsinformationsectionjsx).
**Testimonials** — see [Testimonials (Home & Packages)](#testimonials-home--packages-componentstestimonialsectionjsx).
**Service radius** — see [Service radius](#service-radius-componentsserviceradiusjsx).

**Closing CTA**
- Eyebrow: Ready When You Are
- Title: Let's Begin With A Walk On Your Land
- Body: Every project starts on site — listening to your goals and reading the water, sun, and soil. Tell us about your land and we'll take the first step together.
- Button: Start Your Design Consultation

---

## Services hub (`pages/Services.jsx`) — `/ecological-landscaping-services`

**Hero**
- Eyebrow: Our Services
- Title: Everything A Landscape Can Give
- Lede: Beauty you can eat — seven ways we design, build, and care for landscapes that feed the people who live in them.

**Philosophy**
- Eyebrow: What We Practice
- Title: Ecological Landscaping
- Para 1: Ecological landscaping means working with the land, not against it. We read the water, sun, and soil of a site first, then design with native plants, edible systems, and regenerative soil practices that let the whole landscape carry itself over time.
- Para 2: The result is a landscape that feeds the family and the ecosystem at the same time — beautiful in every season, alive with pollinators, and productive for decades. Below are the four disciplines we practice, the systems we build, and the ongoing services available whenever your land needs them.

**Disciplines cards**
- Eyebrow: Our Disciplines
- Title: Three Ways To Work With Us
- Cards (card eyebrow "Discipline") — see [Ways to work](#ways-to-work-datacontentjs--ways_to_work).

**Mid-page packages callout**
- Eyebrow: Ready To Start?
- Title: See Our Packages
- Button: View Packages

**Capability grid ("what we build")**
- Eyebrow: What We Build
- Title: From First Bed To Full Forest
- Cards (card eyebrow "System") — see [Systems / what we build](#systems--what-we-build-datacontentjs--services).

**A la carte**
- Eyebrow: A La Carte & Ongoing
- Title: Individual Services
- Lede: Individual offerings available to existing clients, or to anyone with a specific need outside of a full package.
- Items — see [A la carte](#a-la-carte-datacontentjs--alacarte).

---

## Service sub-pages (shared `components/ServiceSubLayout.jsx`)

Every discipline page shares one layout: **hero** (eyebrow "Service", title, subhead) → **stats band** → **intro** (subhead/head + body) → optional page-specific block → **What's Included** list (rendered on a **dark deep-forest background**, all pages) → **highlights** ("the approach") → **text-content section** → **related portfolio** → optional questionnaire CTA → **bottom CTA** (eyebrow "Ready To Start?", title "Find The Right Package", button "View Packages").

### Consultation (`pages/ServiceConsultation.jsx`) — `/services/consultation`
- Hero title: Consultation · Subhead: Where every garden begins.
- Intro header: **The Consultation** → **Start With A Walk On The Land**
- Intro: We walk your property with you — noting sun, slope, water, and soil — and listen to how you want to live on the land. The visit ends with clear goals and an honest read of what your site can do.
- Stats: On-Site / Consultations · 4 / Site Factors Read · 1:1 / Collaborative · WNC / Service Area
- What's Included: On-site property consultation · Site analysis: soil, water, sun, microclimate · Collaborative design questionnaire · Goal-setting and priorities session · An honest read of what your site can do
- Highlights (The Details / Choices & Options):
  - Come Prepared — Fill out the design questionnaire first — the more you share, the more we can accomplish together on site.
  - Goals First — We start with how you want to live on the land, not a template — the plan follows your priorities.
  - An Honest Read — You leave with a clear, honest picture of what your site can do before any design work begins.
- Text section: **Why It Matters** → **The Site Tells Us What To Plant** — Most design mistakes are really listening mistakes — a plan drawn before anyone read the water, the wind, or the way the afternoon sun bakes one corner. The consultation is where we slow down and let the property speak first: where it drains, where it holds frost, what already grows well and what struggles. Everything we recommend afterward is built on what we learned standing on your ground, not on a template.
- Related portfolio: Residential Work · Questionnaire callout: on

### Permaculture Consultation (`pages/ServicePermaculture.jsx`) — `/permaculture-consultation`
- Hero title: Permaculture Consultation · Subhead: Design that works with your land, not against it.
- Intro header: **The Consultation** → **Reading The Whole System**
- Intro (2 paragraphs):
  1. Permaculture reads your property as a whole living system — the way water moves across it, where the sun falls, how the soil holds together, and what already wants to grow. Before we draw a single bed, we spend a session mapping those patterns so every later decision works with them.
  2. The consultation ends with a phased, whole-system direction: what to establish first, how to harvest and slow your water, and how a food forest or perennial planting can carry more of the load each season with fewer outside inputs.
- Stats: Whole-Site / Assessment · Zones / 0–5 Mapped · Multi-Year / Phased Plan · WNC / Service Area
- What's Included: Whole-site permaculture assessment · Water: catchment, swales, and runoff mapping · Sun, wind, and microclimate zoning · Soil health and regeneration strategy · Food forest and perennial system planning · A phased plan you can build over several seasons
- Highlights (The Approach / How We Work):
  - Water First — We map how rain moves across your site and plan to slow, spread, and sink it — swales and catchment before planting.
  - Layered Systems — Canopy, understory, and ground layers planned together so the planting feeds itself and closes its own loops.
  - Built In Phases — You leave with a sequence, not a single install — what to establish first and what can follow over coming seasons.
- Text section: **The Long View** → **Design That Compounds** — A permaculture plan is judged less by how it looks on install day than by how it behaves in year five. We design so the system gets easier and more abundant over time — the soil deepening under mulch, the canopy closing to shade out weeds, the water sinking where the swales put it. What starts as a set of young plantings becomes a largely self-feeding landscape that asks for less each season while it gives back more.
- Related portfolio: Permaculture Work (Residential, Venue) · Questionnaire callout: on

### Design (`pages/ServiceDesign.jsx`) — `/services/design`
- Hero title: Design · Subhead: A custom plan, drawn to build.
- Intro header: **The Plan** → **From Consultation To Installable Drawing**
- Intro: From that first consultation, your designer develops a custom permaculture plan through a series of drafts — orienting the big elements first, then layering in pathways, water, and plantings — until you have an installation-ready design matched to Western North Carolina.
- Stats: 4 / Design Phases · 1:1 / Collaborative Process · Custom / Plant Palette · WNC / Site-Matched Design
- What's Included: Rough draft block design · Refined design with pathways, hardscaping, and water retention · Final planting plan with full plant palette · Earthmoving plans if applicable · Installation-ready documentation
- Highlights (The Details / Choices & Options):
  - Full-Service Or DIY — Take the finished plan to our install crew, or use it to build the gardens yourself — the design works either way.
  - Site-Led Palette — Every plant is chosen for your soil, slope, sun, and microclimate — never a generic list dropped onto the page.
  - Phased To Your Budget — Designs are drawn to install all at once or in seasonal phases, so the plan fits the pace you want to move at.
- Text section: **Yours To Keep** → **A Plan You Own** — The design is a document, and it belongs to you. You can hand it to our install crew, build it yourself over a few weekends, or phase it across seasons as budget allows — the drawings hold up either way. Every plant, path, and grade decision is recorded, so nothing lives only in one person's head and the vision stays intact no matter who does the digging.
- Related portfolio: Residential Design Work
- **Page-specific block — "The Design Process" / "From Rough Draft To Vision Realized" (4 stages, rendered as full-bleed pillars alternating dark / light):**
  - Stage 01 — Rough Draft: Block designing to orient elements to the landscape. Macro level design to have a base to move forward on.
  - Stage 02 — Design 2: This second design manages organic elements like pathways, hardscaping, water retention and canopy trees.
  - Stage 03 — Final Draft: This final draft will position perennials and a planting plan for all the elements as well as earthmoving plans if necessary. A full plant palette and design will be complete and ready to help make your dreams a reality.
  - Stage 04 — Vision Realized: At this stage, your finalized plans are organized and prepared for contractors or installation teams, ensuring clarity, efficiency, and alignment as the project moves from design into construction.

### Residential (`pages/ServiceResidential.jsx`) — `/services/residential`
- Hero title: Residential · Subhead: Edible landscapes for the way you live.
- Intro header: **For Your Home** → **Landscapes That Feed The House**
- Intro (2 paragraphs):
  1. For homeowners and estates across Western North Carolina, we design and install landscapes that are as beautiful as they are productive — edible gardens by the back door, food forests on the slope, and native pollinator borders that bloom from spring to frost.
  2. Every residential project starts by reading your land and listening to how you want to live on it, then layering in the plants, paths, and systems that let the whole property feed your family and the ecosystem at once.
- Stats: 50+ / Homes & Estates · 6+ / Years In Business · 100% / Ecological · WNC / Service Area
- What's Included: On-site consultation and full site analysis · Custom edible and ornamental garden design · Raised beds and kitchen gardens · Food forests and fruit tree plantings · Native pollinator and habitat gardens · Hardscapes: paths, patios, and gathering spaces · Installation by our dedicated crew · Seasonal maintenance plans
- Highlights (The Details / Choices & Options):
  - Edible Or Ornamental — Dial the balance between kitchen-garden productivity and pure ornamental beauty — most homes land somewhere in between.
  - Whole-Yard Or Corner — Start with a single bed by the back door or master-plan the entire property; the system scales to your appetite.
  - Low-Maintenance By Design — Layered plantings and deep mulch mean your landscape asks for less water and weeding than a conventional lawn.
- Text section: **How We Think** → **Beauty And Harvest, Together** — We don't treat 'productive' and 'beautiful' as a trade-off. A well-designed edible landscape reads, from the patio, as a garden — structured, layered, and in bloom — while quietly doing the work of an orchard, a berry patch, and a pollinator sanctuary. The goal is a yard you're proud to host in that also sends people home with something to eat.
- Related portfolio: Residential Work

### Installation (`pages/ServiceInstallation.jsx`) — `/services/installation`
- Hero title: Installation · Subhead: Bringing the design to life.
- Intro header: **The Build** → **Craftsmanship In The Ground**
- Intro (2 paragraphs):
  1. Our dedicated installation team brings permaculture designs to life with expert craftsmanship, locally sourced materials, and careful attention to detail. Every installation is built to thrive long-term.
  2. Our crew members are not just laborers. They are passionate about growth, beauty, and sustainability, and they bring that love to your projects, a difference you can taste.
- Stats: 2,000+ / Trees Planted · 1–3 wk / Typical Install · 100% / Local Materials · WNC / Crews On The Ground
- What's Included: Food forest design and installation · Edible garden installation · Native pollinator garden installation · Fruit tree and orchard planting · Vegetable and raised bed installation · Planting and tree installation · Hardscapes: pathways, retaining walls, patios, gathering spaces · Ecological landscape installation
- Highlights (The Details / Choices & Options):
  - Locally Sourced — Stone, soil, mulch, and plants sourced from within Western North Carolina wherever possible.
  - Earthworks First — We shape water and grade before planting, so the landscape holds moisture and drains where it should from day one.
  - Built To Last — Hardscapes and plantings are installed to mature and thrive for decades, not just to look good on install day.
- Text section: **Our Crew** → **People Who Grow What They Build** — An install is only as good as the hands that do it. Our crew members aren't day labor moving material from a truck — they're gardeners who understand why the swale sits where it does and why that tree wants that much room. That understanding shows up in the small decisions no plan can fully specify: how a bed is shaped, how a root ball is set, how the mulch is finished. It's the difference you taste a season later.
- Related portfolio: Installation Work (Residential, Venue)

### Maintenance (`pages/ServiceMaintenance.jsx`) — `/services/maintenance`
- Hero title: Maintenance · Subhead: Tending what you've grown.
- Intro header: **The Care** → **Skilled Hands Through Every Season**
- Intro: Our landscapes are designed for maximum self-sufficiency over time, but every garden benefits from skilled seasonal care. Our custom maintenance plans keep your landscape in optimal health through every season, reducing the learning curve and ensuring your investment keeps producing.
- Stats: 4 / Seasons Covered · 100% / No Synthetic Inputs · Custom / Care Cadence · Priority / Scheduling
- What's Included: Custom seasonal maintenance plans · Mulching: soil health, moisture retention, weed suppression · Gardening services: plant care, cultivation, seasonal planting · Seasonal cleanup and preparation · Fertilization and remineralization · Pruning, deadheading, and division · Harvest support and garden walk-throughs
- Highlights (The Details / Choices & Options):
  - Custom Cadence — Monthly, seasonal, or on-call — we build the visit schedule around how hands-on you want to be.
  - No Synthetic Inputs — Soil is fed with compost, mulch, and remineralization; pests are managed ecologically, never with synthetic sprays.
  - Learn As We Go — Every visit can double as a garden walk-through, so you learn to steward and harvest the landscape yourself.
- Text section: **The Payoff** → **An Investment That Keeps Producing** — A garden is a living asset, and like any asset it rewards attention. A few skilled visits a year keep the soil fed, the plantings shaped, and small problems small — protecting the money and effort already in the ground. Left alone, even a well-designed landscape drifts; tended well, it deepens in beauty and yield every season and repays the care many times over.
- Related portfolio: Maintained Properties (Residential, Venue)

### Commercial (`pages/ServiceCommercial.jsx`) — `/services/commercial`
- Hero title: Commercial Installations · Subhead: A backdrop that never stops growing.
- Intro header: **For Your Business** → **Grounds That Earn Their Keep**
- Intro: Gardens of Eatin' designs and installs ecological landscapes for venues, breweries, restaurants, and commercial properties across Western North Carolina. A professionally designed edible or native garden is not just landscaping. It is a backdrop, a story, and a feature that shows up in every vendor photo, every guest experience, and every season. Rooted in beauty. Built for business.
- Stats: WNC / Venues & Breweries · Every Season / Photo-Ready · Multi-Zone / Master Plans · Ongoing / Partnership
- What's Included: Commercial site assessment and property analysis · Custom design for outdoor spaces, beer gardens, ceremony grounds, and event backdrops · Native pollinator plantings, edible installations, and food forest edge plantings · Hardscapes, paths, and gathering spaces integrated with existing architecture · Photography-ready seasonal design that deepens in beauty every year · Ongoing maintenance partnership · Portfolio feature and co-marketing opportunities for showcase installations
- Highlights (The Details / Choices & Options):
  - Photography-Ready — Designed so every ceremony, every pour, and every vendor photo has a living backdrop that deepens each year.
  - Brand-Aligned Planting — Hop yards, edible herbs, and native pollinator beds that reinforce the local, handcrafted identity your guests expect.
  - Co-Marketing — Showcase installations can be featured in our portfolio and cross-promoted — your grounds working as marketing.
- Text section: **The Return** → **A Backdrop That Markets Itself** — For a venue or a taproom, the grounds are marketing that works while you sleep. Every ceremony photo, every social post, every guest who lingers a little longer in a beautiful outdoor space is quiet advertising you didn't have to buy — and unlike a printed campaign, a living landscape only gets better-looking with age. We design with that return in mind, so the investment shows up in bookings and dwell time, not just curb appeal.
- Related portfolio: Commercial & Venue Work (Venue, Brewery/Commercial)
- **Page-specific block — "Who We Build For" / "Grounds That Work As Hard As Your Business" (3 pillars):**
  - For Venues & Event Spaces — Your gardens are part of your brand. A GOE installation matures and deepens in beauty every year. Every wedding photo becomes a portfolio piece for your venue.
  - For Breweries & Taprooms — Lush outdoor spaces drive customer photos and social sharing. Native pollinator gardens, hop yards, and edible herb installations are consistent with the local handcrafted identity Asheville's brewery scene is known for.
  - For Estates & Properties — A complete permaculture master plan for large acreage. Multi-zone design, phased installation, and year-round ecological maintenance.

---

## Packages (`pages/ServicePackages.jsx`) — `/design-packages`

**Hero**
- Eyebrow: Service Packages
- Title: Three Ways To Begin
- Lede: Tiered offerings for every scale of land and appetite — each one built on the same consultation, design, installation, and care.

**Package columns**
- Eyebrow: Packages
- Title: Pick The Scale, We Bring The System
- Tiers (labelled Package 01/02/03) — see [Packages](#packages-datacontentjs--packages).

**Timeline** — Eyebrow: Process · Title: How We Grow With You · steps from [Process steps](#process-steps-datacontentjs--steps) · action button: Learn More About Our Process.

**"A Closer Look" — per-package pillars** (eyebrow "In Depth", title "A Closer Look At Each Package"). Three full-bleed pillars alternating dark/light, each with an anchor id (the deep-link targets from the Home pillar buttons) and a button to its representative project:
- `#kitchen-garden` — **Package 01 · The Kitchen Garden** — The fastest way to eat from your own yard. We set raised beds a few steps from the back door, match the planting to what your household actually cooks, and hand you a first-season plan — so the harvest starts the same year the beds go in. · Button: *See Black Mountain Homestead ›* → /portfolio/black-mountain-homestead
- `#food-forest` — **Package 02 · The Food Forest** — An orchard with its wild logic restored. Fruit and nut trees over berries, herbs, and ground covers, sited only after we read the water and shape the land — a layered system that carries more of its own weight every season. · Button: *See Hominy Creek Food Forest ›* → /portfolio/hominy-creek-food-forest
- `#estate-plan` — **Package 03 · The Estate Plan** — The whole property, master-planned. Multi-zone design across acreage — kitchen gardens by the house, a food forest on the slope, pollinator meadows on the old pasture — installed in phases and tended year-round. · Button: *See Sandy Mush Estate ›* → /portfolio/sandy-mush-estate

**FAQ** — see [FAQ](#faq-componentsfaqsectionjsx).
**Testimonials** — see [Testimonials (Home & Packages)](#testimonials-home--packages-componentstestimonialsectionjsx). *(Renders after the FAQ.)*

**Closing CTA**
- Title: Every Property Deserves Its Own Plan
- Lede: The packages are starting points. Tell us about your land and we will shape a custom quote around it.
- Button: Get A Quote

---

## Portfolio (`pages/Portfolio.jsx`) — `/portfolio`

**Hero**
- Eyebrow: Portfolio
- Title: The Work, Growing
- Lede: A body of edible landscapes across Western North Carolina — homes, venues, and breweries whose grounds now earn their keep.

**Gallery**
- Eyebrow: Selected Projects
- Title: Browse By Setting
- Filter tabs: All · Residential · Venue · Brewery/Commercial
- Cards — see [Projects](#projects-datacontentjs--projects).

**Stats band** — see [Stats bar](#stats-bar-componentsstatsbarjsx).
**Before/After** — see [Before / After](#before--after-componentsbeforeaftersectionjsx).

**Closing CTA** (solid deep-forest background)
- Eyebrow: Ready When You Are
- Title: Tell Us About Your Land
- Button: Get Started → /questionnaire

---

## Case study / project detail (`pages/CaseStudy.jsx`) — `/portfolio/{slug}`

Template chrome (per-project content pulled from [Projects](#projects-datacontentjs--projects)):
- **Hero:** eyebrow `{Category} — {Location}`, project name, project summary.
- **At-a-glance strip:** Timeline · Budget · Location
- **Inside The Project** (eyebrow "What We Did") — project summary + bullets.
- **Standout Features** (eyebrow "The Details") — three head/body cards.
- **Design Drawings** (eyebrow "The Plan") — two drawings.
- **From The Ground** (eyebrow "Project Gallery") — picture grid.
- **Before / After** — see [Before / After](#before--after-componentsbeforeaftersectionjsx).
- **Notes** (eyebrow "Field Notes").
- Back link: ‹ Back To Portfolio
- **Closing CTA:** Eyebrow "Ready When You Are" · Title "Let's Design Your Land's Next Chapter" · Button "Get A Quote"
- **404 state:** Project Not Found · button "Back To Portfolio"

---

## Blog index (`pages/Blog.jsx`) — `/blog`

**Hero**
- Eyebrow: The Journal
- Title: Notes From The Field
- Lede: Planting calendars, soil lessons, and what we are learning across the gardens of Western North Carolina.

**Controls:** Search The Journal (placeholder "Search posts…") · Category filter (All + post categories)
**Empty state:** No posts match that search — try another word or category.
**Cards** — see [Blog posts](#blog-posts-datacontentjs--posts).

---

## Blog post (`pages/BlogPost.jsx`) — `/blog/{slug}`

Template chrome (article content from [Blog posts](#blog-posts-datacontentjs--posts)):
- Top return link: ‹ Back To The Journal
- Meta line: `{Category} — {Date}` · Title · `By {Author}`
- Body paragraphs split by a single mid-article Callout (label: **In The Field**) holding the post's callout line.
- Bottom return link: ‹ Back To The Journal
- **Closing CTA (solid):** Eyebrow "Ready When You Are" · Title "Ready To Start Your Own?" · Body "Every garden in this journal began with a walk on the land. Yours can too." · Button "Get A Quote"
- **404 state:** Post Not Found · button "Back To The Journal"

---

## Contact (`pages/Contact.jsx`) — `/contact-us`

**Hero**
- Eyebrow: Contact
- Title: Start A Conversation
- Lede: Tell us about your land, and we will walk it with you.

**Form**
- Eyebrow: Get A Quote
- Title: Tell Us About Your Project
- Fields: Full Name (Jane Smith) · Email (jane@example.com) · Phone ((828) 555-0000) · Project Type (Choose a project type) · Property Address (Asheville, NC) · Desired Timeline (This fall) · Budget Range (Optional) · Message (Tell us about your property…)
- Project type options: Edible Garden · Food Forest · Native Pollinator Garden · Ecological Landscape Design · Hardscapes · Maintenance · Other
- Submit button: Submit Request
- Success message: Thank you — we will be in touch within two business days.

**Contact details (sidebar)**
- Phone: (828) 555-0134
- Email: hello@gardensofeatin.com
- Studio: 12 Riverside Drive, Asheville, NC 28801
- Note: We serve homes, estates, wedding venues, and breweries within about an hour of Asheville — from Hendersonville north to Burnsville, and Black Mountain west to Waynesville.

**Service area map**
- Eyebrow: Service Area
- Title: Western North Carolina
- Map labels — see [Service area map](#service-area-map-componentsserviceareamapjsx).

---

## Questionnaire (`pages/Questionnaire.jsx`) — `/questionnaire`

**Hero**
- Eyebrow: Design Questionnaire
- Title: Tell Us About Your Land
- Lede: The more you share, the more we can create together.

**Framework**
- Eyebrow: Our Process
- Title: From First Note To Harvest
- Phases:
  - Communicate — Fill this out before your consultation. It helps us pull topography maps and property lines in advance and means we can hit the ground running together on site.
  - Observe — We walk your property together, discussing potentials and possibilities, identifying zones and priorities.
  - Imagine — Your designer develops a set of objectives, an estimate, and a timeline for the first design draft.
  - Prepare — We gather site information, maps, and any existing plans to inform the design process.
  - Gather — A detailed, itemized estimate covering up to a year of seasonally appropriate projects.
  - Create — Installation by our dedicated team of specialists who bring passion and expertise to every project.
  - Harvest — Your gardens grow. We help you learn to maintain, harvest, and steward your land for generations.

**Form — Basic Information:** Name(s) and ages · Pets and livestock · Property address · Lot size · Phone number · Email

**Questions**
1. What is your ultimate vision or dream for your property? What do you want to see here in 5–10 years? How would your ideal gardens make you feel?
2. What particular goals do you have for this land? *(checkbox grid + "What else?")*
   - Options: Raised Veggie Beds · Culinary and Medicinal Herbs · Floral Cutting Gardens · Pollinator Paradise · Ponds and Water Features · Agro-Forestry Food and Forage · Happy Healthy Chickens · Mushroom Logs · Home Orchard · Evergreen Privacy Screen · Magical Fairy Nook · Children's Playspace · Micro-Farm · Moss Patch · Native Plant Guilds · No-Mow and Edible Lawn
3. What are some of the barriers or challenges you are experiencing in attaining your vision? Which is the biggest challenge?
4. What objects or elements do you want on your property? Any elements you definitely do not want? *(Desired / Not Desired)*
5. Are there any noise, smell, or view sectors on neighboring properties you would like to block or mitigate?
6. What things about your property do you already like?
7. How would you like to work with Gardens of Eatin? *(radio group)*
   - I would like Gardens of Eatin to install my gardens
   - I would like to install my own gardens based on the plan
   - I would like Gardens of Eatin to consult on particular projects
   - I would like to establish regular maintenance schedules
   - I would like a combination of services as needed
8. What is your financial budget and over what time period?
9. What is the overall timing and phasing you are hoping for?
10. What are some of your favorite plants, flowers, and foods?
11. Is there anything else you would like us to know about yourself or your property?

- Submit button: Send My Questionnaire
- Success: **Thank you.** — We will be in touch before your consultation to confirm details and next steps.
- Submissions email to: gardensofeatin@gmail.com (subject "Design Questionnaire Submission")

---

## Landing (sales) (`pages/Landing.jsx`) — `/landing`

**Hero**
- Eyebrow: Edible Landscaping in Western NC
- Title: Beauty You Can Eat, Built To Order
- Lede: Design, installation, and ecological care for homes and businesses across Western North Carolina. Tell us about your land and we'll turn it into something that feeds you.
- Buttons: Get A Quote · View Portfolio

**Picture grid** — Eyebrow: The Work · Title: Landscapes That Earn Their Keep

**Choose your path**
- Eyebrow: Choose Your Path
- Title: Where Should We Start?
- Cards:
  - Residential — For Your Home — Edible gardens, food forests, and native pollinator borders designed and installed for the way you live.
  - Commercial — For Your Business — Venues, breweries, and restaurants — a living backdrop that shows up in every vendor photo and deepens each year.

**Closing CTA**
- Eyebrow: Ready When You Are
- Title: Start Your Landscape Transformation
- Body: One conversation is all it takes to begin. We'll walk your land, listen to your goals, and map what it can become.
- Button: Get A Quote

---

## Portfolio Landing (`pages/PortfolioLanding.jsx`) — `/portfolio-landing`

**Hero**
- Eyebrow: Gardens of Eatin' — Asheville, NC
- Title: Landscapes That Earn Their Keep
- Lede: Edible gardens, food forests, and full permaculture properties across Western North Carolina.

**Philosophy (two-column)**
- Eyebrow: Our Philosophy
- Title: Beauty You Can *Eat*
- Body: We believe a landscape should photograph beautifully and carry a harvest. Every project here began with a walk on the land — reading its water, sun, and soil — and ended with fruit trees, berries, and native blooms doing the work that ornament alone used to do.

**Featured work by scale**
- Eyebrow: Featured Work
- Title: Projects By Scale
- Groups: City Lots & Homesteads (Residential) · Venues & Inns (Venue) · Breweries & Commercial (Brewery/Commercial)

**Reviews**
- Eyebrow: Social Proof
- Title: What Clients Say
- Quotes — see [Reviews — Portfolio Landing](#reviews--portfolio-landing-datacontentjs--reviews).

**Stats band** — see [Stats bar](#stats-bar-componentsstatsbarjsx).
**Team** — Eyebrow "The Team" · Title "Who Does The Work" — see [Team — component](#team--component-componentsteamsectionjsx).
**Instagram** — see [Instagram](#instagram-componentsinstagramsectionjsx).
**Closing:** single button — Start A Conversation.

---

# Shared component copy

### Stats bar (`components/StatsBar.jsx`)
Company credibility band used on Home, About, Portfolio, Portfolio Landing:
- 6+ / Years In Business
- 50+ / Installations Completed
- 100% / Licensed & Insured
- WNC / Western North Carolina Wide

### Information facts (`components/InformationSection.jsx`)
- Eyebrow: Why It Works · Title: Grounded In Ecology, Designed For Living
- Why Permaculture — A layered food forest needs less water, less fertilizer, and less of your weekend than a lawn — and it feeds you back.
- Native First — Every design starts with native pollinator species suited to Western NC's soil and slope, not a generic plant list.
- Built To Last — Perennial plantings mature over 3–7 years into a self-sustaining system — we design for the tenth year, not the first.

### Testimonials (Home & Packages) (`components/TestimonialSection.jsx`)
- Eyebrow: What Clients Say · Title: Trusted Across Western NC
- ★★★★★ — "Anna's team turned a half-acre of lawn into something we walk every single morning. It's the best investment we've made in the house." — Caroline H., Homeowner, Biltmore Forest
- ★★★★★ — "They designed our venue's back garden to bloom on a wedding-season calendar. Couples ask about the flowers as much as the view." — The Orchard House, Wedding Venue, Fairview
- ★★★★★ — "Professional, on schedule, and the food forest they installed two years ago is already producing more than we can eat." — Tom R., Estate Property, Weaverville

### FAQ (`components/FAQSection.jsx`)
- Eyebrow: Questions · Title: Frequently Asked
- **Do you work with properties outside Asheville?** — Yes — we serve estates, homes, and venues across Western North Carolina, with a wider radius for design-only consultations.
- **How long does a full installation take?** — Most residential installs run 1–3 weeks depending on scope; larger estate or commercial projects are scheduled in phases over a season.
- **Do I need to maintain the garden myself afterward?** — No — we offer seasonal maintenance packages, but the systems we design are built to need less upkeep than a traditional lawn from year one.
- **Can you work with an existing landscape rather than starting over?** — Almost always. Most of our projects layer edible and native plantings into an existing landscape rather than replacing it entirely.

### Journal preview (`components/JournalSection.jsx`)
- Eyebrow: From The Journal · Title: Notes From The Field · Link: View All Posts (pulls the three most recent posts)

### Before / After (`components/BeforeAfterSection.jsx`)
- Eyebrow: The Transformation · Title: See The Land Before You Plant On It · Pane labels: Before / After

### Service radius (`components/ServiceRadius.jsx`)
- Eyebrow: Where We Work · Title: Rooted In Asheville, Reaching Across WNC
- 45+ mi — Estate & farm consults · 25 mi — Full install service · 10 mi — Asheville core · Center: Asheville, NC

### Service area map (`components/ServiceAreaMap.jsx`)
- Town labels: Asheville (home base) · Weaverville · Marshall · Burnsville · Black Mountain · Waynesville · Hendersonville
- Center caption: Home base

### Instagram (`components/InstagramSection.jsx`)
- Eyebrow: Follow Along · Title: @gardensofeatin · Button: Follow

### Team — component (`components/TeamSection.jsx`)
Used on Portfolio Landing (default eyebrow "Who We Are" / title "The People Behind The Land"; Portfolio Landing overrides to "The Team" / "Who Does The Work"):
- AT — Anna Timmerman — Founder & Lead Designer
- MR — Miles Reeder — Permaculture Design Lead
- JC — Jo Castellano — Head of Installation
- SP — Sam Pruitt — Client & Project Manager

---

# Content data lists (`data/content.js`)

### Systems / what we build (`SERVICES`)
| System | Description |
|---|---|
| Edible Gardens | Raised beds and kitchen gardens planned around what your household actually eats — carrots, kale, tomatoes, and herbs within reach of the back door. |
| Food Forests | Multi-layered plantings that combine fruit trees, edible nuts and berries, and perennial ground covers into a system that feeds itself — and you. |
| Native Pollinator Gardens | Coneflower, bee balm, and mountain mint drifts that draw pollinators and beneficial insects into your landscape year-round. |
| Ecological Landscape Design | Full permaculture master plans that read the water, sun, and soil of your site before a single plant goes in the ground. |
| Hardscapes | Stone paths, terraces, and gathering spaces built from local materials, set to serve the garden rather than dominate it. |
| Installation *(→ /services/installation)* | Expert build-out of gardens, food forests, hardscapes, and plantings — locally sourced materials, built to thrive long-term. |
| Maintenance *(→ /services/maintenance)* | Seasonal pruning, ecological care, and harvest management that keep an edible landscape productive for decades. |
| Mulching | Deep, living mulch systems that build soil, hold moisture through summer, and quiet the weeds without chemicals. |

### Ways to work (`WAYS_TO_WORK`)
| Name | Description |
|---|---|
| Consultation *(→ /services/consultation)* | Where every garden begins — an on-site consultation, full site analysis, and clear goals before any design work starts. |
| Residential *(→ /services/residential)* | Edible landscapes, food forests, and pollinator gardens designed and installed for homes and estates across Western North Carolina. |
| Commercial *(→ /services/commercial)* | Ecological landscapes for venues, breweries, and restaurants — a living backdrop that deepens in beauty every year. |

### Disciplines (`DISCIPLINES`)
*(Data list retained in source; the Services hub currently renders `WAYS_TO_WORK`. Kept for reference.)*
| Name | Description |
|---|---|
| Design & Consultation *(→ /services/design)* | Where every garden begins — on-site consultation, full site analysis, and a permaculture design developed with you from rough draft to installation-ready plan. |
| Installation *(→ /services/installation)* | Our dedicated crew brings the design to life with expert craftsmanship, locally sourced materials, and plantings built to thrive long-term. |
| Maintenance *(→ /services/maintenance)* | Custom seasonal maintenance plans that keep your landscape in optimal health and keep your investment producing, season after season. |
| Commercial *(→ /services/commercial)* | Ecological landscapes for venues, breweries, restaurants, and estates — a backdrop that shows up in every vendor photo and deepens in beauty every year. |

### Packages (`PACKAGES`)
**The Kitchen Garden** — A focused starting point for homeowners who want to grow food this season.
- On-site consultation and sun/soil assessment · Raised bed layout and planting plan · Seasonal vegetable and herb palette · Installation of beds, soil, and irrigation · First-season planting guide

**The Food Forest** — A multi-layered orchard understory for land that should be feeding you.
- Full site analysis and water mapping · Fruit and nut tree selection for Western NC · Berry, herb, and ground-cover layers · Earthworks, planting, and deep mulch installation · Two seasons of establishment care

**The Estate Plan** — A complete permaculture master plan for estates, venues, and breweries.
- Multi-zone master plan for the whole property · Edible gardens, food forest, and pollinator plantings · Hardscapes, paths, and gathering spaces · Phased installation over one to three years · Year-round ecological maintenance and harvest management
- Button: Commercial Installations *(→ /services/commercial)*

### A la carte (`ALACARTE`)
Mulching · Seasonal care · Hardscaping · Gardening services · Ongoing maintenance plans

### Process steps (`STEPS`)
| # | Name | Short | Long |
|---|---|---|---|
| 01 | Consultation | We walk the property and talk through how you use it, season to season. | We walk your property with you — noting sun, slope, water, and soil — and listen to how you want to live on the land. The visit ends with clear goals and an honest read of what your site can do. |
| 02 | Design | A full planting and hardscape plan, layered for bloom and harvest year-round. | We draw a custom permaculture master plan: plant palettes matched to Western North Carolina, material selections for paths and terraces, and a phasing plan that fits your budget. |
| 03 | Installation | Our crew builds beds, plants, and irrigates — typically over 1–3 weeks. | Our crew builds the plan — earthworks and hardscapes first, then soil, irrigation, and planting. You watch the drawing become a landscape over weeks, not years. |
| 04 | Maintenance | Seasonal visits keep the system thriving as it matures over years. | Ecological care keeps the system productive: seasonal pruning, soil building, and a harvest management plan so the abundance actually reaches your kitchen. |

### Values (`VALUES`)
- **Beauty You Can Eat** — Every design must earn its place twice — once in the eye, once at the table.
- **Read The Land First** — Water, sun, slope, and soil decide the plan. We design with the site, never against it.
- **Plant For Decades** — Fruit and nut trees outlive trends. We build landscapes your grandchildren will harvest.
- **No Shortcuts, No Chemicals** — Living soil and layered plantings do the work that sprays pretend to do.

### Team — About page (`TEAM`)
- **Anna Timmerman** — Owner / Chief Shoveler
  - A certified permaculture designer, ecological landscaper, and former organic farm manager, Anna has always been rooted in working with the earth — blending regeneration and beauty as one.
  - Passionate about local food and resilient communities, she saw a divide between sustainability and ornamental landscaping and made it her mission to bridge that gap through permaculture principles and ecological design. Through Gardens of Eatin', she uses nature as a canvas to create spaces that inspire awe while remaining practical and regenerative — proud to serve her hometown of Asheville, NC.
- **Nick Jennison** — Permaculture Designer
  - Nick is an Asheville-based permaculture designer, consultant, and educator with over a decade of experience. Certified by Geoff Lawton in 2017 through Discover Permaculture, he advanced from student to Director of Education, and now manages Geoff's online courses and supports thousands of students worldwide.
  - He founded Tierra Permaculture in 2019 after working rainforest land in Puerto Rico and managing ecological systems on a 21-acre organic farm near Seattle. Since moving to Asheville in 2023, he has partnered with Gardens of Eatin' on holistic designs for properties from quarter-acre homesteads to 50+ acre sites. Above all, Nick is a husband and father who values balancing meaningful work with family life.
- **Eric Hall-Floden** — Project Manager
  - Eric is a professional installer and project manager specializing in permaculture-based landscapes. With horticultural degrees in Fruit and Vegetable Production and Landscape Design, he discovered his passion for edible and ecological design early on.
  - His experience spans greenhouses, native plant nurseries, organic farms, and large-scale landscaping firms — including project management for one of British Columbia's largest companies. For the past three years he has been a key part of Gardens of Eatin', bringing comprehensive permaculture designs to life and making sustainable landscaping practical, accessible, and rooted in strong ecological principles.

### Reviews — Portfolio Landing (`REVIEWS`)
- "Anna's team turned our back field into a food forest that feeds us from May to November. Two years in, it looks better than the drawing." — Rachel & Tom D., Fairview, NC — Google Review
- "Our couples book the venue because of the gardens. The pollinator borders are in bloom for every wedding on the calendar." — Laurel Ridge Events, Leicester, NC — Google Review
- "The beer garden went from gravel lot to the busiest patio in town. They even planted the hops we brew with each fall." — Riverbend Brewing Co., Asheville, NC — Google Review

---

## Projects (`data/content.js` → `PROJECTS`)

Eight case studies. Each has: category, location, one-line descriptor (portfolio card), summary (hero + intro), "What We Did" bullets, timeline, budget, field notes, and three Standout Features (head + body). *(Images are swap-friendly placeholders.)*

### Black Mountain Homestead — `black-mountain-homestead`
- Category: Residential · Location: Black Mountain, NC · Timeline: One season (spring install) · Budget: $18k–$28k
- Descriptor: A quarter-acre kitchen garden and young orchard for a family of five.
- Summary: A quarter-acre of lawn became a working kitchen garden and young orchard — raised beds by the back door, fruit trees on the slope, and a berry hedge closing the property line.
- What We Did: Twelve raised beds with drip irrigation · Eight fruit trees selected for the elevation · Perennial herb and pollinator borders · First-season planting and harvest plan
- Notes: The steep back slope had to be terraced before any beds could go in, so we phased the young orchard for the following fall.
- Standout Features: **Terraced Kitchen Garden** — Twelve raised beds stepped into the slope, each within a hose-length of the back door. · **Young Orchard** — Eight fruit trees chosen for the elevation, underplanted with a pollinator strip. · **Berry Hedge** — A mixed currant and gooseberry hedge closing the property line and feeding the birds.

### Hominy Creek Food Forest — `hominy-creek-food-forest`
- Category: Residential · Location: Candler, NC · Timeline: Two seasons · Budget: $30k–$45k
- Descriptor: Apples, chestnuts, and pawpaws layered over berries on a south-facing slope.
- Summary: A south-facing slope planted as a true food forest: canopy apples and chestnuts over an understory of pawpaw and hazelnut, closed with currants, comfrey, and creeping thyme.
- What We Did: Earthworks to slow and soak winter rain · Canopy, understory, and ground-cover layers · Native and heirloom variety selection · Two seasons of establishment care
- Notes: Earthworks came first to slow the winter runoff; the canopy trees went in bare-root the following winter.
- Standout Features: **Layered Canopy** — Apples and chestnuts over pawpaw and hazelnut, closed with currants and comfrey. · **Water Harvesting** — Swales cut on contour soak rain into the slope instead of letting it run off. · **Self-Feeding System** — Nitrogen-fixers and deep mulch keep the forest fed with almost no outside inputs.

### Laurel Ridge Wedding Venue — `laurel-ridge-wedding-venue`
- Category: Venue · Location: Leicester, NC · Timeline: One season, ahead of wedding season · Budget: $40k–$60k
- Descriptor: Ceremony lawn framed by pollinator borders that bloom May through October.
- Summary: A ceremony lawn framed by native pollinator borders sequenced to bloom across the entire wedding season, from golden alexanders in April to asters at first frost.
- What We Did: Season-long bloom sequencing · Photo-forward sight lines from the altar · Low-allergen, foot-traffic-tolerant plantings · Seasonal maintenance for peak-weekend color
- Notes: Installed and established over winter so the borders would be in full bloom for the first spring weddings.
- Standout Features: **Season-Long Bloom** — Natives sequenced so something is always flowering from April through October. · **Photo Sight Lines** — Borders framed to the altar so every ceremony photo has a living backdrop. · **Low-Allergen Palette** — Foot-traffic-tolerant, low-allergen plantings chosen for guest comfort.

### Riverbend Brewery Beer Garden — `riverbend-brewery-beer-garden`
- Category: Brewery/Commercial · Location: Asheville, NC · Timeline: Six weeks · Budget: $35k–$50k
- Descriptor: Hops, herbs, and shade trees turning a gravel lot into a destination.
- Summary: A gravel lot became the busiest patio in town — hops climbing the fence line, culinary herbs at arm's reach of the kitchen, and fast-growing shade for summer crowds.
- What We Did: Hops and brewing herbs the kitchen can use · Shade trees sited for afternoon sun · Durable paths and gathering spaces · Container plantings for quick impact
- Notes: Built around an operating taproom; the work was staged to keep the patio open every weekend.
- Standout Features: **Brewer's Herbs** — Hops on the fence line and culinary herbs at arm's reach of the kitchen. · **Fast Shade** — Quick-growing shade trees sited for the afternoon crowd. · **Durable Hardscape** — Gathering spaces and paths built for high foot traffic and spilled pints.

### Sandy Mush Estate — `sandy-mush-estate`
- Category: Residential · Location: Sandy Mush, NC · Timeline: Three seasons (phased) · Budget: $90k+
- Descriptor: A phased permaculture master plan across eleven acres of pasture and woodland.
- Summary: A phased permaculture master plan across eleven acres — kitchen gardens near the house, a food forest on the mid-slope, and pollinator meadows restoring the old pasture.
- What We Did: Whole-property water and zone mapping · Phased installation over three seasons · Edible, ornamental, and restoration zones · Year-round ecological maintenance
- Notes: Eleven acres were master-planned up front, then installed in three phases as budget allowed.
- Standout Features: **Whole-Property Plan** — Water and zone mapping across eleven acres before a single bed went in. · **Three Zones** — Kitchen gardens by the house, food forest mid-slope, pollinator meadow on the old pasture. · **Phased Build** — Installed over three seasons so the plan could flex with the budget.

### Craggy View Inn — `craggy-view-inn`
- Category: Venue · Location: Weaverville, NC · Timeline: One season · Budget: $22k–$34k
- Descriptor: Entry plantings and container gardens that feed the inn's kitchen.
- Summary: Entry plantings and container gardens that greet guests and feed the inn's kitchen — herbs, edible flowers, and cutting greens within steps of the back door.
- What We Did: Signature entry and courtyard plantings · Kitchen herb and cutting-green containers · Edible flowers for the plate and the table · Low-maintenance seasonal rotation
- Notes: A container-forward design so plantings could be refreshed seasonally without disrupting guests.
- Standout Features: **Signature Entry** — Courtyard and entry plantings that set the tone the moment guests arrive. · **Kitchen Containers** — Herbs and cutting greens within steps of the inn's back door. · **Edible Flowers** — Blooms for the plate and the table, rotated through the season.

### West Asheville Pocket Orchard — `west-asheville-pocket-orchard`
- Category: Residential · Location: Asheville, NC · Timeline: One season · Budget: $12k–$18k
- Descriptor: Six fruit trees and a berry hedge on a city lot, pruned for the picking.
- Summary: Six fruit trees and a berry hedge fit onto a city lot — trained and pruned so the whole harvest stays within reach, no ladder required.
- What We Did: Compact, trained fruit-tree forms · Berry hedge along the property line · Espalier and open-center pruning · Small-space soil and mulch system
- Notes: A tight city lot — every tree was trained to a compact form so the whole harvest stays within reach.
- Standout Features: **Trained Fruit Trees** — Six trees in espalier and open-center forms sized for a small yard. · **Berry Hedge** — A productive hedge along the property line that doubles as a privacy screen. · **Small-Space Soil** — A deep-mulch, living-soil system that punches well above the lot's size.

### Pisgah Taproom Terrace — `pisgah-taproom-terrace`
- Category: Brewery/Commercial · Location: Brevard, NC · Timeline: Five weeks · Budget: $28k–$42k
- Descriptor: Native perennial beds that draw butterflies to the afternoon crowd.
- Summary: Native perennial beds wrapping a taproom terrace, alive with butterflies through the afternoon rush — coneflower, bee balm, and mountain mint doing the work.
- What We Did: Native perennial pollinator beds · Butterfly and bee habitat structure · Durable edging for high foot traffic · Winter-standing stems for next-year habitat
- Notes: A pollinator-first design that keeps the terrace full of butterflies through the afternoon rush.
- Standout Features: **Pollinator Beds** — Coneflower, bee balm, and mountain mint wrapping the terrace. · **Habitat Structure** — Winter-standing stems left for next year's bees and butterflies. · **Traffic-Ready Edging** — Durable edging that holds up to a full patio crowd.

---

## Blog posts (`data/content.js` → `POSTS`)

### Planning A Food Forest In Western North Carolina — `planning-a-food-forest-in-western-nc`
- Date: June 12, 2026 · Category: Food Forests · Author: Anna Timmerman
- Excerpt: A food forest is an orchard with its wild logic restored — canopy, understory, and ground cover working together. Here is how we plan one for a mountain site.
- Body:
  1. A food forest is an orchard with its wild logic restored. Instead of fruit trees standing alone in turf, a food forest layers canopy, understory, shrubs, herbs, and ground covers into a system that feeds itself — less input, more harvest.
  2. In Western North Carolina we start with the canopy: apples and chestnuts on the upper slopes, persimmons and pawpaws where cold air settles. Under them go serviceberry and hazelnut, then currants and gooseberries, then comfrey, mountain mint, and creeping thyme to close the ground.
  3. The order of operations matters more than the plant list. Earthworks come first, so winter rain soaks in instead of running off. Soil comes second — a deep sheet mulch that lets the fungal networks establish. The trees go in last, into ground that is already alive.
  4. By the third season the system starts to carry itself. The mulch quiets the weeds, the understory feeds the pollinators, and the pruning calendar replaces the spray calendar. From there, your main job is the harvest.
- Callout: A well-designed food forest layers canopy, understory, and ground cover so the whole system feeds itself — less input, more harvest.

### Native Pollinator Gardens That Work All Season — `native-pollinator-gardens-that-work`
- Date: May 3, 2026 · Category: Pollinators · Author: Sofia Ramirez
- Excerpt: A pollinator garden succeeds when something is always in bloom. We sequence natives so the table is never bare between April and frost.
- Body:
  1. A pollinator garden succeeds on one measure: is something always in bloom? A bed that flowers gloriously for three weeks in June and sleeps the rest of the year feeds no one.
  2. We sequence Western North Carolina natives so the table is never bare. Golden alexanders and wild geranium open the season in April. Coneflower, bee balm, and mountain mint carry the summer. Asters and goldenrod close it out, blooming until frost.
  3. Structure matters as much as sequence. Drifts of seven or more plants let bees work efficiently; single specimens scattered through a bed are ornament, not habitat. We leave the stems standing through winter — that is where next year's pollinators are sleeping.
  4. The reward arrives faster than most clients expect. Plant in fall, and by the following July the bed hums audibly. Butterflies find coneflowers within days of the first bloom opening.
- Callout: Drifts of seven or more plants let bees work efficiently. Single specimens are ornament, not habitat.

### What To Plant In A Mountain Kitchen Garden — `what-to-plant-in-a-mountain-kitchen-garden`
- Date: April 8, 2026 · Category: Edible Gardens · Author: Anna Timmerman
- Excerpt: Our valley frosts run late and our summers run cool on the ridges. Here is the planting calendar we hand to every new kitchen-garden client.
- Body:
  1. Mountain gardening runs on a different calendar. Valley frosts linger into May, ridge summers stay cool, and the season can swing three weeks between neighbors on opposite slopes.
  2. We start every kitchen garden with the reliable core: carrots, kale, chard, and snap peas in April; tomatoes, peppers, and basil only after the soil warms in late May; garlic and overwintering spinach tucked in as the beds empty in October.
  3. The mountain advantage is the shoulder seasons. Cool nights keep spring greens sweet into June, and fall brassicas — cabbage, broccoli, brussels sprouts — are better here than anywhere in the state.
  4. Build the beds once, properly: sixteen inches of living soil over cardboard, drip irrigation under the mulch, and a simple hoop system for frost cloth. That setup turns a six-month season into ten.
- Callout: Cool mountain nights keep spring greens sweet into June — the shoulder seasons are your advantage.

### Why We Mulch Deep, And What It Replaces — `why-we-mulch-deep`
- Date: March 14, 2026 · Category: Soil & Care · Author: Marcus Lee
- Excerpt: Eight inches of wood-chip mulch looks extravagant on installation day. By the second summer it has replaced the irrigation schedule and the weeding list.
- Body:
  1. Eight inches of wood-chip mulch looks extravagant on installation day. Clients ask if we have over-ordered. By the second summer, the question changes: why doesn't anyone else do this?
  2. Deep mulch replaces three line items. It holds spring moisture through August droughts, so irrigation becomes a backup instead of a lifeline. It starves weed seeds of light, so weeding shrinks to minutes a month. And as it breaks down, it feeds the fungal soil life that fruit trees depend on.
  3. The material matters less than the depth. Arborist chips — leaves, bark, and wood together — are what a forest floor is made of, and they are often free for the asking in Asheville.
  4. We refresh the layer every second spring. The soil underneath, by then, is dark, damp, and full of earthworms — the cheapest soil amendment program we know of.
- Callout: Arborist chips are what a forest floor is made of — and they are often free for the asking.
