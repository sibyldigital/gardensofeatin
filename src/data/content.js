/* Shared site content — written in the brand voice: warm, editorial,
   grounded. "We" speaks for the company, "you" is the reader. Headlines in
   Title Case, copy names actual plants and outcomes, no exclamation points. */

import { asset } from "../lib/asset.js";

export const PHOTOS = {
  hero: asset("assets/photography/landscape-hero-wide.png"),
  harvest: asset("assets/photography/harvest-basket.png"),
  orchard: asset("assets/photography/apple-tree-orchard.png"),
  coneflowers: asset("assets/photography/coneflowers-butterfly.png"),
  cabbage: asset("assets/photography/cabbage-beds.png"),
  carrots: asset("assets/photography/carrots-kale.png"),
  coleus: asset("assets/photography/coleus-planter.png"),
  aerial: asset("assets/photography/garden-path-aerial.png"),
};

export const SERVICES = [
  {
    name: "Edible Gardens",
    image: PHOTOS.carrots,
    description:
      "Raised beds and kitchen gardens planned around what your household actually eats — carrots, kale, tomatoes, and herbs within reach of the back door.",
  },
  {
    name: "Food Forests",
    image: PHOTOS.orchard,
    description:
      "Multi-layered plantings that combine fruit trees, edible nuts and berries, and perennial ground covers into a system that feeds itself — and you.",
  },
  {
    name: "Native Pollinator Gardens",
    image: PHOTOS.coneflowers,
    description:
      "Coneflower, bee balm, and mountain mint drifts that draw pollinators and beneficial insects into your landscape year-round.",
  },
  {
    name: "Ecological Landscape Design",
    image: PHOTOS.aerial,
    description:
      "Full permaculture master plans that read the water, sun, and soil of your site before a single plant goes in the ground.",
  },
  {
    name: "Hardscapes",
    image: PHOTOS.cabbage,
    description:
      "Stone paths, terraces, and gathering spaces built from local materials, set to serve the garden rather than dominate it.",
  },
  {
    name: "Installation",
    image: PHOTOS.carrots,
    description:
      "Expert build-out of gardens, food forests, hardscapes, and plantings — locally sourced materials, built to thrive long-term.",
    to: "/services/installation",
  },
  {
    name: "Maintenance",
    image: PHOTOS.harvest,
    description:
      "Seasonal pruning, ecological care, and harvest management that keep an edible landscape productive for decades.",
    to: "/services/maintenance",
  },
  {
    name: "Mulching",
    image: PHOTOS.coleus,
    description:
      "Deep, living mulch systems that build soil, hold moisture through summer, and quiet the weeds without chemicals.",
  },
];

/* Ways to work with us — the three entry points surfaced on the Services hub
   "Our Disciplines" section. */
export const WAYS_TO_WORK = [
  {
    name: "Consultation",
    to: "/services/design",
    image: PHOTOS.aerial,
    description:
      "Where every garden begins — an on-site consultation and a permaculture design developed with you, from rough draft to installation-ready plan.",
  },
  {
    name: "Residential",
    to: "/services/residential",
    image: PHOTOS.coleus,
    description:
      "Edible landscapes, food forests, and pollinator gardens designed and installed for homes and estates across Western North Carolina.",
  },
  {
    name: "Commercial",
    to: "/services/commercial",
    image: PHOTOS.cabbage,
    description:
      "Ecological landscapes for venues, breweries, and restaurants — a living backdrop that deepens in beauty every year.",
  },
];

export const PACKAGES = [
  {
    name: "The Kitchen Garden",
    description:
      "A focused starting point for homeowners who want to grow food this season.",
    includes: [
      "On-site consultation and sun/soil assessment",
      "Raised bed layout and planting plan",
      "Seasonal vegetable and herb palette",
      "Installation of beds, soil, and irrigation",
      "First-season planting guide",
    ],
  },
  {
    name: "The Food Forest",
    description:
      "A multi-layered orchard understory for land that should be feeding you.",
    includes: [
      "Full site analysis and water mapping",
      "Fruit and nut tree selection for Western NC",
      "Berry, herb, and ground-cover layers",
      "Earthworks, planting, and deep mulch installation",
      "Two seasons of establishment care",
    ],
  },
  {
    name: "The Estate Plan",
    description:
      "A complete permaculture master plan for estates, venues, and breweries.",
    includes: [
      "Multi-zone master plan for the whole property",
      "Edible gardens, food forest, and pollinator plantings",
      "Hardscapes, paths, and gathering spaces",
      "Phased installation over one to three years",
      "Year-round ecological maintenance and harvest management",
    ],
    // Rendered as a linked bullet beneath the standard includes.
    extraBullets: [
      { text: "Commercial and venue installations available", to: "/services/commercial" },
    ],
  },
];

/* Service disciplines — the four sub-pages surfaced as cards on the Services
   hub and in the nav dropdown. */
export const DISCIPLINES = [
  {
    name: "Design & Consultation",
    to: "/services/design",
    image: PHOTOS.aerial,
    description:
      "Where every garden begins — on-site consultation, full site analysis, and a permaculture design developed with you from rough draft to installation-ready plan.",
  },
  {
    name: "Installation",
    to: "/services/installation",
    image: PHOTOS.carrots,
    description:
      "Our dedicated crew brings the design to life with expert craftsmanship, locally sourced materials, and plantings built to thrive long-term.",
  },
  {
    name: "Maintenance",
    to: "/services/maintenance",
    image: PHOTOS.harvest,
    description:
      "Custom seasonal maintenance plans that keep your landscape in optimal health and keep your investment producing, season after season.",
  },
  {
    name: "Commercial",
    to: "/services/commercial",
    image: PHOTOS.cabbage,
    description:
      "Ecological landscapes for venues, breweries, restaurants, and estates — a backdrop that shows up in every vendor photo and deepens in beauty every year.",
  },
];

/* A la carte and ongoing services — individual offerings available to existing
   clients or clients with a specific need outside a full package. */
export const ALACARTE = [
  "Mulching",
  "Seasonal care",
  "Hardscaping",
  "Gardening services",
  "Ongoing maintenance plans",
];

export const STEPS = [
  {
    number: "01",
    name: "Consultation",
    description:
      "We walk your property with you — noting sun, slope, water, and soil — and listen to how you want to live on the land. The visit ends with clear goals and an honest read of what your site can do.",
  },
  {
    number: "02",
    name: "Design",
    description:
      "We draw a custom permaculture master plan: plant palettes matched to Western North Carolina, material selections for paths and terraces, and a phasing plan that fits your budget.",
  },
  {
    number: "03",
    name: "Installation",
    description:
      "Our crew builds the plan — earthworks and hardscapes first, then soil, irrigation, and planting. You watch the drawing become a landscape over weeks, not years.",
  },
  {
    number: "04",
    name: "Maintenance",
    description:
      "Ecological care keeps the system productive: seasonal pruning, soil building, and a harvest management plan so the abundance actually reaches your kitchen.",
  },
];

export const PROJECTS = [
  {
    slug: "black-mountain-homestead",
    name: "Black Mountain Homestead",
    category: "Residential",
    location: "Black Mountain, NC",
    image: PHOTOS.carrots,
    descriptor: "A quarter-acre kitchen garden and young orchard for a family of five.",
    summary:
      "A quarter-acre of lawn became a working kitchen garden and young orchard — raised beds by the back door, fruit trees on the slope, and a berry hedge closing the property line.",
    bullets: [
      "Twelve raised beds with drip irrigation",
      "Eight fruit trees selected for the elevation",
      "Perennial herb and pollinator borders",
      "First-season planting and harvest plan",
    ],
  },
  {
    slug: "hominy-creek-food-forest",
    name: "Hominy Creek Food Forest",
    category: "Residential",
    location: "Candler, NC",
    image: PHOTOS.orchard,
    descriptor: "Apples, chestnuts, and pawpaws layered over berries on a south-facing slope.",
    summary:
      "A south-facing slope planted as a true food forest: canopy apples and chestnuts over an understory of pawpaw and hazelnut, closed with currants, comfrey, and creeping thyme.",
    bullets: [
      "Earthworks to slow and soak winter rain",
      "Canopy, understory, and ground-cover layers",
      "Native and heirloom variety selection",
      "Two seasons of establishment care",
    ],
  },
  {
    slug: "laurel-ridge-wedding-venue",
    name: "Laurel Ridge Wedding Venue",
    category: "Venue",
    location: "Leicester, NC",
    image: PHOTOS.hero,
    descriptor: "Ceremony lawn framed by pollinator borders that bloom May through October.",
    summary:
      "A ceremony lawn framed by native pollinator borders sequenced to bloom across the entire wedding season, from golden alexanders in April to asters at first frost.",
    bullets: [
      "Season-long bloom sequencing",
      "Photo-forward sight lines from the altar",
      "Low-allergen, foot-traffic-tolerant plantings",
      "Seasonal maintenance for peak-weekend color",
    ],
  },
  {
    slug: "riverbend-brewery-beer-garden",
    name: "Riverbend Brewery Beer Garden",
    category: "Brewery/Commercial",
    location: "Asheville, NC",
    image: PHOTOS.cabbage,
    descriptor: "Hops, herbs, and shade trees turning a gravel lot into a destination.",
    summary:
      "A gravel lot became the busiest patio in town — hops climbing the fence line, culinary herbs at arm's reach of the kitchen, and fast-growing shade for summer crowds.",
    bullets: [
      "Hops and brewing herbs the kitchen can use",
      "Shade trees sited for afternoon sun",
      "Durable paths and gathering spaces",
      "Container plantings for quick impact",
    ],
  },
  {
    slug: "sandy-mush-estate",
    name: "Sandy Mush Estate",
    category: "Residential",
    location: "Sandy Mush, NC",
    image: PHOTOS.aerial,
    descriptor: "A phased permaculture master plan across eleven acres of pasture and woodland.",
    summary:
      "A phased permaculture master plan across eleven acres — kitchen gardens near the house, a food forest on the mid-slope, and pollinator meadows restoring the old pasture.",
    bullets: [
      "Whole-property water and zone mapping",
      "Phased installation over three seasons",
      "Edible, ornamental, and restoration zones",
      "Year-round ecological maintenance",
    ],
  },
  {
    slug: "craggy-view-inn",
    name: "Craggy View Inn",
    category: "Venue",
    location: "Weaverville, NC",
    image: PHOTOS.coleus,
    descriptor: "Entry plantings and container gardens that feed the inn's kitchen.",
    summary:
      "Entry plantings and container gardens that greet guests and feed the inn's kitchen — herbs, edible flowers, and cutting greens within steps of the back door.",
    bullets: [
      "Signature entry and courtyard plantings",
      "Kitchen herb and cutting-green containers",
      "Edible flowers for the plate and the table",
      "Low-maintenance seasonal rotation",
    ],
  },
  {
    slug: "west-asheville-pocket-orchard",
    name: "West Asheville Pocket Orchard",
    category: "Residential",
    location: "Asheville, NC",
    image: PHOTOS.harvest,
    descriptor: "Six fruit trees and a berry hedge on a city lot, pruned for the picking.",
    summary:
      "Six fruit trees and a berry hedge fit onto a city lot — trained and pruned so the whole harvest stays within reach, no ladder required.",
    bullets: [
      "Compact, trained fruit-tree forms",
      "Berry hedge along the property line",
      "Espalier and open-center pruning",
      "Small-space soil and mulch system",
    ],
  },
  {
    slug: "pisgah-taproom-terrace",
    name: "Pisgah Taproom Terrace",
    category: "Brewery/Commercial",
    location: "Brevard, NC",
    image: PHOTOS.coneflowers,
    descriptor: "Native perennial beds that draw butterflies to the afternoon crowd.",
    summary:
      "Native perennial beds wrapping a taproom terrace, alive with butterflies through the afternoon rush — coneflower, bee balm, and mountain mint doing the work.",
    bullets: [
      "Native perennial pollinator beds",
      "Butterfly and bee habitat structure",
      "Durable edging for high foot traffic",
      "Winter-standing stems for next-year habitat",
    ],
  },
];

export const PROJECT_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));

export const PROJECT_CATEGORIES = ["All", "Residential", "Venue", "Brewery/Commercial"];

export const TEAM = [
  {
    name: "Anna Timmerman",
    title: "Founder & Lead Designer",
    image: PHOTOS.coleus,
    bio: "Anna founded Gardens of Eatin' to prove that a landscape can be beautiful and feed the people who live in it. She has designed edible landscapes across Western North Carolina for more than a decade.",
  },
  {
    name: "Marcus Lee",
    title: "Installation Lead",
    image: PHOTOS.orchard,
    bio: "Marcus turns master plans into living systems — from earthworks and stone to the last layer of mulch. He has planted over two thousand fruit and nut trees in the region.",
  },
  {
    name: "Sofia Ramirez",
    title: "Ecological Horticulturist",
    image: PHOTOS.coneflowers,
    bio: "Sofia leads maintenance and harvest management. Her seasonal care plans keep client gardens productive without synthetic inputs of any kind.",
  },
];

export const VALUES = [
  {
    name: "Beauty You Can Eat",
    description:
      "Every design must earn its place twice — once in the eye, once at the table.",
  },
  {
    name: "Read The Land First",
    description:
      "Water, sun, slope, and soil decide the plan. We design with the site, never against it.",
  },
  {
    name: "Plant For Decades",
    description:
      "Fruit and nut trees outlive trends. We build landscapes your grandchildren will harvest.",
  },
  {
    name: "No Shortcuts, No Chemicals",
    description:
      "Living soil and layered plantings do the work that sprays pretend to do.",
  },
];

export const REVIEWS = [
  {
    quote:
      "Anna's team turned our back field into a food forest that feeds us from May to November. Two years in, it looks better than the drawing.",
    author: "Rachel & Tom D.",
    context: "Fairview, NC — Google Review",
  },
  {
    quote:
      "Our couples book the venue because of the gardens. The pollinator borders are in bloom for every wedding on the calendar.",
    author: "Laurel Ridge Events",
    context: "Leicester, NC — Google Review",
  },
  {
    quote:
      "The beer garden went from gravel lot to the busiest patio in town. They even planted the hops we brew with each fall.",
    author: "Riverbend Brewing Co.",
    context: "Asheville, NC — Google Review",
  },
];

export const POSTS = [
  {
    slug: "planning-a-food-forest-in-western-nc",
    title: "Planning A Food Forest In Western North Carolina",
    date: "June 12, 2026",
    category: "Food Forests",
    author: "Anna Timmerman",
    image: PHOTOS.orchard,
    excerpt:
      "A food forest is an orchard with its wild logic restored — canopy, understory, and ground cover working together. Here is how we plan one for a mountain site.",
    body: [
      "A food forest is an orchard with its wild logic restored. Instead of fruit trees standing alone in turf, a food forest layers canopy, understory, shrubs, herbs, and ground covers into a system that feeds itself — less input, more harvest.",
      "In Western North Carolina we start with the canopy: apples and chestnuts on the upper slopes, persimmons and pawpaws where cold air settles. Under them go serviceberry and hazelnut, then currants and gooseberries, then comfrey, mountain mint, and creeping thyme to close the ground.",
      "The order of operations matters more than the plant list. Earthworks come first, so winter rain soaks in instead of running off. Soil comes second — a deep sheet mulch that lets the fungal networks establish. The trees go in last, into ground that is already alive.",
      "By the third season the system starts to carry itself. The mulch quiets the weeds, the understory feeds the pollinators, and the pruning calendar replaces the spray calendar. From there, your main job is the harvest.",
    ],
    callout:
      "A well-designed food forest layers canopy, understory, and ground cover so the whole system feeds itself — less input, more harvest.",
  },
  {
    slug: "native-pollinator-gardens-that-work",
    title: "Native Pollinator Gardens That Work All Season",
    date: "May 3, 2026",
    category: "Pollinators",
    author: "Sofia Ramirez",
    image: PHOTOS.coneflowers,
    excerpt:
      "A pollinator garden succeeds when something is always in bloom. We sequence natives so the table is never bare between April and frost.",
    body: [
      "A pollinator garden succeeds on one measure: is something always in bloom? A bed that flowers gloriously for three weeks in June and sleeps the rest of the year feeds no one.",
      "We sequence Western North Carolina natives so the table is never bare. Golden alexanders and wild geranium open the season in April. Coneflower, bee balm, and mountain mint carry the summer. Asters and goldenrod close it out, blooming until frost.",
      "Structure matters as much as sequence. Drifts of seven or more plants let bees work efficiently; single specimens scattered through a bed are ornament, not habitat. We leave the stems standing through winter — that is where next year's pollinators are sleeping.",
      "The reward arrives faster than most clients expect. Plant in fall, and by the following July the bed hums audibly. Butterflies find coneflowers within days of the first bloom opening.",
    ],
    callout:
      "Drifts of seven or more plants let bees work efficiently. Single specimens are ornament, not habitat.",
  },
  {
    slug: "what-to-plant-in-a-mountain-kitchen-garden",
    title: "What To Plant In A Mountain Kitchen Garden",
    date: "April 8, 2026",
    category: "Edible Gardens",
    author: "Anna Timmerman",
    image: PHOTOS.carrots,
    excerpt:
      "Our valley frosts run late and our summers run cool on the ridges. Here is the planting calendar we hand to every new kitchen-garden client.",
    body: [
      "Mountain gardening runs on a different calendar. Valley frosts linger into May, ridge summers stay cool, and the season can swing three weeks between neighbors on opposite slopes.",
      "We start every kitchen garden with the reliable core: carrots, kale, chard, and snap peas in April; tomatoes, peppers, and basil only after the soil warms in late May; garlic and overwintering spinach tucked in as the beds empty in October.",
      "The mountain advantage is the shoulder seasons. Cool nights keep spring greens sweet into June, and fall brassicas — cabbage, broccoli, brussels sprouts — are better here than anywhere in the state.",
      "Build the beds once, properly: sixteen inches of living soil over cardboard, drip irrigation under the mulch, and a simple hoop system for frost cloth. That setup turns a six-month season into ten.",
    ],
    callout:
      "Cool mountain nights keep spring greens sweet into June — the shoulder seasons are your advantage.",
  },
  {
    slug: "why-we-mulch-deep",
    title: "Why We Mulch Deep, And What It Replaces",
    date: "March 14, 2026",
    category: "Soil & Care",
    author: "Marcus Lee",
    image: PHOTOS.cabbage,
    excerpt:
      "Eight inches of wood-chip mulch looks extravagant on installation day. By the second summer it has replaced the irrigation schedule and the weeding list.",
    body: [
      "Eight inches of wood-chip mulch looks extravagant on installation day. Clients ask if we have over-ordered. By the second summer, the question changes: why doesn't anyone else do this?",
      "Deep mulch replaces three line items. It holds spring moisture through August droughts, so irrigation becomes a backup instead of a lifeline. It starves weed seeds of light, so weeding shrinks to minutes a month. And as it breaks down, it feeds the fungal soil life that fruit trees depend on.",
      "The material matters less than the depth. Arborist chips — leaves, bark, and wood together — are what a forest floor is made of, and they are often free for the asking in Asheville.",
      "We refresh the layer every second spring. The soil underneath, by then, is dark, damp, and full of earthworms — the cheapest soil amendment program we know of.",
    ],
    callout:
      "Arborist chips are what a forest floor is made of — and they are often free for the asking.",
  },
];
