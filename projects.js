/* ==========================================================================
   HARISH SINGH - CENTRALIZED PORTFOLIO PROJECTS DATA STORE
   Senior UI/UX Designer & Product Designer
   ========================================================================== */

const projectsData = [
  {
    id: "turo",
    slug: "turo-art-gallery",
    number: "01",
    title: "Turo Art Gallery",
    category: "Marketplace · Web · Product Design",
    shortDescription: "A premium digital art marketplace designed around artwork discovery, artist onboarding, purchasing and rewards.",
    longDescription: "Turo Art Gallery is a premium digital art marketplace designed to connect independent artists, art collectors, and gallery curators through a structured discovery, purchasing, and loyalty experience.",
    role: "UI/UX Designer · Product Designer",
    platform: "Responsive Web",
    projectType: "Art Marketplace Platform",
    focusAreas: ["Marketplace UX", "Artist Onboarding", "E-commerce", "Rewards System", "UX Architecture"],
    challenge: "The platform needed to handle multi-sided user journeys for both collectors (discovering, inspecting, and purchasing artwork) and artists (applying, verifying, and publishing artwork collections). The design challenge was to structure complex marketplace workflows while maintaining an editorial, uncluttered aesthetic.",
    goals: [
      "Create a premium artwork discovery experience",
      "Simplify multi-step artist onboarding & verification",
      "Structure transparent checkout and discount redemption",
      "Establish a scalable dark/light component system"
    ],
    users: [
      { title: "Collectors / Buyers", desc: "Art enthusiasts seeking verified artwork, transparent pricing, and exclusive drop access." },
      { title: "Independent Artists", desc: "Creators looking for streamlined collection publishing, royalty management, and sales visibility." },
      { title: "Platform Curators", desc: "Gallery admins managing featured spotlights, promotional campaigns, and dispute resolution." }
    ],
    myContribution: [
      "My contribution focused on designing the end-to-end user journeys for both collectors and artists.",
      "I designed the multi-step artist onboarding workflow, identity verification steps, and royalty preferences.",
      "I structured artwork discovery with high-density filtering, zoomable artwork inspection modals, and transparent certificates of authenticity.",
      "I built the Figma design system with responsive typography tokens, neutral surfaces, and gold accent primitives."
    ],
    process: "Empirical UX discovery → Information Architecture mapping → Low-fidelity wireframes → Interactive prototyping → Figma design system tokenization → High-fidelity responsive UI.",
    uxApproach: "Prioritized artwork-first visual presentation with high whitespace, dark obsidian background contrast, and clear task-focused navigation flows.",
    keyFlows: [
      { step: "01", title: "Discover", desc: "Browse curated artwork grids and featured artist spotlights" },
      { step: "02", title: "Explore", desc: "Filter by medium, style, price range, and verified status" },
      { step: "03", title: "Details", desc: "Inspect artwork details, artist bio, and authenticity credentials" },
      { step: "04", title: "Cart", desc: "Review items, apply promo codes, and verify shipping costs" },
      { step: "05", title: "Checkout", desc: "Frictionless multi-payment processing and order summary" },
      { step: "06", title: "Confirmation", desc: "Earn loyalty points and track dispatch updates" }
    ],
    designDirection: "Artwork-first presentation, spacious layouts, refined typography, dark neutral canvas, subtle metallic accents, and minimal interface noise.",
    designSystem: "Comprehensive Figma UI kit featuring responsive typography scales, dark/light surface tokens, artwork card primitives, and accessible form controls.",
    keyFeatures: [
      "Multi-step artist onboarding & identity verification",
      "High-resolution zoomable artwork inspection",
      "Certificate of authenticity verification badges",
      "Dynamic promo code redemption checkout flow",
      "Tiered loyalty circle rewards program",
      "Escrow refund & damage claim submission workflows"
    ],
    outcome: "Created a structured, highly scalable art marketplace experience that balances luxury visual presentation with practical product functionality across web and mobile viewports.",
    learnings: "Strengthened my approach to designing multi-sided marketplaces where distinct buyer and creator goals must align within one unified design system.",
    externalUrl: "https://dev.indeedtraining.in:8021/",
    image: "assets/images/portfolio_extracted_1.jpg",
    galleryImages: ["assets/images/portfolio_extracted_1.jpg"],
    featured: true,
    tags: ["Marketplace", "Web", "UI/UX"],
    depth: "deep"
  },
  {
    id: "ibc",
    slug: "ibc-media",
    number: "02",
    title: "IBC Media",
    category: "Web3 · Events · Digital Platform",
    shortDescription: "A structured Web3 platform experience covering events, programs, hackathons, sponsorships and ecosystem initiatives.",
    longDescription: "IBC Media is a Web3 and blockchain ecosystem platform connecting global software developers, sponsor protocols, technology leaders, and competitive hackathons across emerging blockchain ecosystems.",
    role: "Lead UI/UX Designer",
    platform: "Responsive Web",
    projectType: "Web3 & Blockchain Platform",
    focusAreas: ["Information Architecture", "Web3 UX", "Event Ecosystems", "Responsive Layouts"],
    challenge: "Web3 platforms often overwhelm users with complex technical terminology, chaotic navigation, and uncoordinated event schedules. The challenge was to organize dense ecosystem content into a clean, approachable, and intuitive digital experience.",
    goals: [
      "Organize complex Web3 initiatives into intuitive hubs",
      "Streamline developer hackathon registration flows",
      "Improve sponsor visibility and grant program exploration",
      "Establish a consistent futuristic dark mode visual language"
    ],
    users: [
      { title: "Web3 Developers", desc: "Engineers registering for hackathons, forming teams, and submitting project bounties." },
      { title: "Sponsor Protocols", desc: "Blockchain platforms showcasing grants, keynote schedules, and developer bounties." },
      { title: "Community Members", desc: "Tech enthusiasts attending regional summits and participating in Web3 workshops." }
    ],
    myContribution: [
      "I was responsible for restructuring the core information architecture and ecosystem navigation.",
      "I designed friction-free hackathon participation flows, team wallet verification modals, and project submission forms.",
      "I created a futuristic dark-mode UI design system featuring glowing cyan/purple accent tokens, responsive data tables, and glass container cards.",
      "I optimized page layouts for mobile and tablet responsiveness."
    ],
    process: "Ecosystem audits → Content grouping → Navigation restructuring → Wireframing → Dark mode UI system → Responsive delivery.",
    uxApproach: "Grouped dense technical content into clear visual blocks with high contrast, scannable data tables, and clear call-to-action paths.",
    keyFlows: [
      { step: "01", title: "Explore", desc: "Browse global hackathon calendar and ecosystem programs" },
      { step: "02", title: "Select Track", desc: "Choose developer bounties and protocol challenges" },
      { step: "03", title: "Verify Wallet", desc: "Connect Web3 wallet with clear feedback tooltips" },
      { step: "04", title: "Submit", desc: "Upload project documentation and codebase repositories" },
      { step: "05", title: "Leaderboard", desc: "Track live event rankings and judging feedback" }
    ],
    designDirection: "Futuristic dark aesthetics, high-contrast cyan/purple indicators, scannable data tables, structured cards, and generous white space.",
    designSystem: "Dark mode UI system with glowing accent states, responsive table primitives, custom Web3 wallet icons, and accessible typography.",
    keyFeatures: [
      "Global Hackathons Calendar & Filter Hub",
      "Developer Team Wallet Verification Flow",
      "Sponsor Bounties & Grant Showcase Portal",
      "Real-Time Hackathon Project Submissions",
      "Live Event Leaderboards & Schedule Timelines"
    ],
    outcome: "Created a structured digital experience that simplified complex Web3 initiatives, making hackathons and ecosystem programs easier to discover and navigate.",
    learnings: "Reinforced the importance of progressive disclosure when organizing high-density technical and decentralized Web3 data.",
    externalUrl: "https://ibc.media/",
    image: "assets/images/ibc_media_banner.png",
    galleryImages: ["assets/images/ibc_media_banner.png"],
    featured: true,
    tags: ["Web3", "Events", "Web"],
    depth: "deep"
  },
  {
    id: "droobna",
    slug: "droobna",
    number: "03",
    title: "Droobna",
    category: "Mobility · Delivery · Mobile Product",
    shortDescription: "A multi-service mobile ecosystem connecting customers, drivers/captains and merchants across mobility and food delivery.",
    longDescription: "Droobna is a comprehensive multi-service mobile platform operating across Saudi Arabia, bringing ride booking, restaurant food ordering, and merchant logistics together into a single mobile ecosystem.",
    role: "Senior UI/UX & Product Designer",
    platform: "Mobile (iOS / Android)",
    projectType: "Mobility & Food Delivery Super-App",
    focusAreas: ["Mobile UX", "Multi-Sided Product", "Order Flows", "Live GPS Tracking", "Design System"],
    challenge: "Different user groups—Customers, Driver/Captains, and Merchant Partners—had distinct operational goals and environments. The design challenge was to build task-focused mobile interfaces tailored to each persona without fragmenting the overarching brand identity.",
    goals: [
      "Design seamless ride booking and food ordering flows",
      "Build a high-efficiency mobile dashboard for drivers",
      "Create live GPS tracking screens with real-time ETA alerts",
      "Develop a unified mobile UI component library"
    ],
    users: [
      { title: "Customers", desc: "Users booking instant rides or ordering food from local restaurants." },
      { title: "Captain Drivers", desc: "Drivers managing trip dispatches, turn-by-turn routes, and daily earnings." },
      { title: "Merchant Partners", desc: "Restaurant managers updating menus, accepting orders, and tracking pickup drivers." }
    ],
    myContribution: [
      "My role covered end-to-end mobile UX design across customer, driver, and merchant interfaces.",
      "I designed the rapid food checkout flow with dish customization options, dietary tag filters, and payment validation.",
      "I crafted the captain driver dashboard featuring a one-tap online toggle, surge heatmap overlays, and earnings summaries.",
      "I developed the mobile Figma component design system with touch-optimized buttons and bottom sheet drawer patterns."
    ],
    process: "Persona mapping → User flow diagrams → Mobile wireframes → Interactive prototyping → Figma mobile UI kit → Usability optimization.",
    uxApproach: "One unified visual language adapted to three distinct user mindsets, prioritizing touch target sizes, quick action buttons, and clear map overlays.",
    keyFlows: [
      { step: "01", title: "Select Service", desc: "Choose between ride booking or food delivery" },
      { step: "02", title: "Configure", desc: "Set destination or customize dish modifier items" },
      { step: "03", title: "Checkout", desc: "Review order summary and select payment method" },
      { step: "04", title: "Dispatch", desc: "Match with nearby driver or restaurant kitchen" },
      { step: "05", title: "Live Track", desc: "Monitor real-time GPS map position and ETA" },
      { step: "06", title: "Complete", desc: "Rate experience and download digital receipt" }
    ],
    designDirection: "Clean, high-visibility mobile UI, tactile rounded containers, vibrant blue primary accents, and distraction-free map controls.",
    designSystem: "Touch-first mobile UI library with bottom sheet modal drawers, map marker primitives, status badges, and accessible typography.",
    keyFeatures: [
      "Unified Ride Booking & Food Delivery Portal",
      "Captain Driver Dashboard with Surge Heatmaps",
      "Real-Time GPS Order Tracking with Live Driver ETA",
      "Multi-Item Food Customization & Promo Checkout",
      "Merchant Order Management & Inventory Portal"
    ],
    outcome: "Successfully designed a connected multi-sided mobile experience with clear, task-focused user journeys for customers, drivers, and merchants.",
    learnings: "Deepened my expertise in designing multi-sided mobile products where map interaction, driver safety, and fast checkout must work in harmony.",
    externalUrl: "https://play.google.com/store/search?q=droobna&c=apps&hl=en_IN",
    image: "assets/images/droobna_app.jpg",
    galleryImages: ["assets/images/droobna_app.jpg"],
    featured: true,
    tags: ["Mobility", "Food Delivery", "Mobile"],
    depth: "deep"
  },
  {
    id: "rankyfy",
    slug: "rankyfy",
    number: "04",
    title: "Rankyfy",
    category: "AI · SaaS · SEO",
    shortDescription: "An AI-powered SEO and agency platform designed around SEO workflows, automation and digital marketing operations.",
    longDescription: "Rankyfy is an all-in-one AI-driven SEO automation and digital agency SaaS platform providing real-time rank tracking, keyword intelligence, AI content generation, and automated client reporting.",
    role: "UI/UX Designer",
    platform: "Web / SaaS Dashboard",
    projectType: "AI SEO & Agency Management SaaS",
    focusAreas: ["SaaS UX", "AI Workflows", "Data Visualization", "Dashboard Architecture"],
    challenge: "SEO analytics platforms often suffer from visual noise and overwhelming data tables. The design challenge was to structure complex SERP metrics, keyword density gauges, and AI writing assistants into a clear, actionable dashboard.",
    goals: [
      "Convert complex SEO analytics into scannable visual charts",
      "Design progressive wizard workflows for AI content generation",
      "Enable multi-tenant agency workspaces and client reporting",
      "Establish scalable SaaS UI component primitives"
    ],
    users: [
      { title: "SEO Specialists", desc: "Marketers tracking SERP rankings, analyzing backlinks, and researching high-intent keywords." },
      { title: "Digital Agencies", desc: "Agencies managing multiple client domain portfolios and generating white-label PDF reports." },
      { title: "Content Creators", desc: "Writers using AI assistance to generate SEO-optimized articles with keyword density feedback." }
    ],
    myContribution: [
      "I designed the dashboard navigation and core product information architecture.",
      "I created progressive wizard interfaces for AI content generation with real-time keyword gauges.",
      "I built multi-tenant agency workspace layouts for managing client projects.",
      "I crafted interactive data tables and rank tracker charts."
    ],
    process: "Data audit → Dashboard wireframing → AI wizard flow design → SaaS design system → High-fidelity UI delivery.",
    uxApproach: "Structured around three core questions: What is the current performance? What needs attention? What action should I take next?",
    keyFlows: [
      { step: "01", title: "Overview", desc: "Check domain rank movement and visibility score" },
      { step: "02", title: "Keywords", desc: "Analyze keyword positions, search volume, and difficulty" },
      { step: "03", title: "AI Writer", desc: "Prompt AI content assistant with target SEO keywords" },
      { step: "04", title: "Audit", desc: "Review site health, broken links, and page speed" },
      { step: "05", title: "Report", desc: "Export automated white-label PDF reports for clients" }
    ],
    designDirection: "Sleek dark glass container cards, vibrant status badges, scannable data visualization, and high-contrast typography.",
    designSystem: "Scalable SaaS UI kit with interactive chart components, data table primitives, status indicators, and modal wizards.",
    keyFeatures: [
      "Real-Time Keyword Rank Tracker & Movement Graphs",
      "AI Content Generation Wizard with Keyword Density Gauges",
      "Multi-Tenant Agency Workspaces & Client Portfolios",
      "One-Click Automated White-Label PDF Report Exporter",
      "Backlink Audit & Competitor Intelligence Dashboards"
    ],
    outcome: "Created a structured SaaS interface that simplified complex SEO data and AI workflows into clear, actionable dashboard views.",
    learnings: "Gained valuable insights into balancing high data density with clear visual hierarchy in complex B2B SaaS applications.",
    externalUrl: "https://rankyfy.com/",
    image: "assets/images/rankyfy_banner.png",
    galleryImages: ["assets/images/rankyfy_banner.png"],
    featured: true,
    tags: ["AI", "SEO", "SaaS"],
    depth: "medium"
  },
  {
    id: "invisalearn",
    slug: "invisalearn",
    number: "05",
    title: "Invisalearn",
    category: "EdTech · Learning · Web + Mobile",
    shortDescription: "A digital learning ecosystem connecting students and educators through courses, tutoring and structured learning experiences.",
    longDescription: "Invisalearn is an EdTech web and mobile platform connecting K-12 and professional students with certified educators through structured video courses, live interactive webinars, and progress analytics.",
    role: "UI/UX Designer",
    platform: "Web + Mobile",
    projectType: "EdTech & Online Learning Platform",
    focusAreas: ["EdTech UX", "Learning Journeys", "Video Player UX", "Content Discovery"],
    challenge: "Educational portals often contain large volumes of course material. The challenge was to organize expansive curriculum content into intuitive skill paths while maintaining student focus during video lessons.",
    goals: [
      "Make educational content simple to discover and filter",
      "Design a distraction-free course video player",
      "Build visual progress dashboards for students",
      "Ensure seamless responsiveness across web and mobile"
    ],
    users: [
      { title: "Students / Learners", desc: "Individuals exploring courses, watching video modules, and completing quizzes." },
      { title: "Educators / Instructors", desc: "Teachers uploading video lessons, building quizzes, and grading assignments." }
    ],
    myContribution: [
      "I designed the student learning dashboard featuring course progress rings and upcoming live session reminders.",
      "I crafted the distraction-free video player interface with chapter bookmarks and inline comprehension quizzes.",
      "I built the educator course creator workflows for uploading curriculum modules.",
      "I established a clean typography hierarchy for enhanced readability across educational content."
    ],
    process: "Learner journey mapping → Navigation hierarchy → Wireframes → Video player UI → Responsive mobile adaptation.",
    uxApproach: "Focus on clear content hierarchy, simple category filters, uncluttered lesson screens, and visual progress feedback.",
    keyFlows: [
      { step: "01", title: "Discover", desc: "Browse course catalog by subject, grade, or skill" },
      { step: "02", title: "Enroll", desc: "Review curriculum syllabus and instructor credentials" },
      { step: "03", title: "Learn", desc: "Watch video modules with interactive chapter bookmarks" },
      { step: "04", title: "Quiz", desc: "Complete inline check-for-understanding assessments" },
      { step: "05", title: "Track", desc: "Monitor earned skill badges and course certificates" }
    ],
    designDirection: "Clean, approachable educational aesthetic, vibrant brand accents, high-contrast typography, and spacious container cards.",
    designSystem: "EdTech design system with course card primitives, video player controls, quiz widget components, and badge icons.",
    keyFeatures: [
      "Personalized Student Learning Progress Dashboard",
      "Distraction-Free Video Lesson Player with Chapter Bookmarks",
      "Inline Check-for-Understanding Quizzes & Assessments",
      "Educator Course Publishing Studio & Curriculum Manager",
      "Achievement Hub Showcase for Earned Course Certificates"
    ],
    outcome: "Created a structured online learning experience that makes educational content easier to explore and digest across web and mobile devices.",
    learnings: "Enhanced my understanding of designing distraction-free interfaces that promote focus and active user engagement.",
    externalUrl: "https://www.invisalearn.com/",
    image: "assets/images/invisalearn_banner.png",
    galleryImages: ["assets/images/invisalearn_banner.png"],
    featured: true,
    tags: ["EdTech", "Learning", "Web"],
    depth: "medium"
  },
  {
    id: "skin-pal",
    slug: "skin-pal",
    number: "06",
    title: "Skin-Pal",
    category: "AI · Skincare · Digital Product",
    shortDescription: "A premium skincare experience focused on AI-powered skin analysis, personalization and skincare discovery.",
    longDescription: "Skin-Pal is an AI-powered mobile skincare application utilizing computer vision face scans to analyze skin health, recommend tailored daily routines, and connect users with curated skincare products.",
    role: "UI/UX Designer",
    platform: "Web / Mobile",
    projectType: "AI Skincare & E-Commerce Platform",
    focusAreas: ["AI UX", "Personalization", "Health Tech", "Product Discovery"],
    challenge: "The product needed to combine advanced AI camera diagnostic technology with a gentle, trustworthy, and premium consumer skincare visual language.",
    goals: [
      "Design an intuitive guided camera scanning UX",
      "Present complex skin health diagnostics clearly",
      "Create personalized morning/evening routine builders",
      "Streamline e-commerce product ordering flows"
    ],
    users: [
      { title: "Skincare Consumers", desc: "Users seeking objective skin diagnostics, routine guidance, and verified product matches." }
    ],
    myContribution: [
      "I designed the guided camera scan overlay with real-time positioning feedback.",
      "I crafted visual skin diagnostic scorecards using accessible radar charts.",
      "I created personalized morning and evening routine recommendation interfaces.",
      "I built a soothing, health-focused visual design system with soft pastel container cards."
    ],
    process: "User goal discovery → Camera scanning UI exploratory → Scorecard visualization → Routine flow design → UI refinement.",
    uxApproach: "Balanced technological precision with a soothing visual aesthetic that builds user trust and encourages daily routine compliance.",
    keyFlows: [
      { step: "01", title: "Scan", desc: "Capture guided facial camera diagnostic scan" },
      { step: "02", title: "Analyze", desc: "View diagnostic scorecards for hydration, texture, and redness" },
      { step: "03", title: "Routine", desc: "Review personalized morning and evening routine steps" },
      { step: "04", title: "Discover", desc: "Explore product matches with transparent ingredient breakdowns" },
      { step: "05", title: "Order", desc: "Purchase recommended products or set up monthly replenishment" }
    ],
    designDirection: "Soft soothing pastel colors, clean typography, tactile rounded containers, clear product presentation, and minimal noise.",
    designSystem: "Health tech UI primitives with diagnostic radar chart components, routine step cards, and e-commerce product containers.",
    keyFeatures: [
      "Guided Camera Scan Overlay with Real-Time Framing Indicators",
      "Skin Health Diagnostic Scorecards & Radar Charts",
      "Personalized Morning & Evening Skincare Routine Builder",
      "Ingredient Transparency & Product Matching Engine",
      "Seamless E-Commerce Cart & Subscription Checkout"
    ],
    outcome: "Created a premium digital skincare experience that connects AI analysis, content, product discovery, and daily routines seamlessly.",
    learnings: "Gained valuable experience in designing camera-based AI interfaces where real-time guidance directly impacts diagnostic accuracy.",
    externalUrl: "https://skin-pal.in/",
    image: "assets/images/skin_pal_banner.png",
    galleryImages: ["assets/images/skin_pal_banner.png"],
    featured: true,
    tags: ["AI", "Healthcare", "Mobile"],
    depth: "medium"
  },
  {
    id: "reign-pilates",
    slug: "reign-pilates",
    number: "07",
    title: "Reign Pilates",
    category: "Wellness · Web Design · Premium Brand",
    shortDescription: "A premium wellness studio website designed around Pilates programs, memberships and studio experiences.",
    longDescription: "Reign Pilates is a luxury wellness studio digital experience designed for high-end fitness enthusiasts seeking online class reservations, trainer scheduling, and membership management.",
    role: "UI/UX & Brand Designer",
    platform: "Responsive Web",
    projectType: "Luxury Wellness Studio Platform",
    focusAreas: ["Brand Experience", "Class Booking", "Membership UX", "Luxury Aesthetics"],
    challenge: "Balance luxury visual storytelling and high-end brand positioning with clear, fast online class reservation workflows.",
    goals: [
      "Establish a premium dark aesthetic for the studio brand",
      "Design a fast, 3-tap class reservation workflow",
      "Create detailed instructor profile & schedule pages",
      "Build an easy-to-understand membership pricing matrix"
    ],
    users: [
      { title: "Studio Members", desc: "Fitness enthusiasts reserving studio reformer slots and managing monthly class packages." }
    ],
    myContribution: [
      "I designed the website structure, responsive layouts, and luxury visual hierarchy.",
      "I crafted the class booking flow with interactive calendar schedules and trainer bio overlays.",
      "I built personalized member portals to track session history and class package balances.",
      "I created the luxury dark design system featuring midnight blue surfaces and gold accents."
    ],
    process: "Brand identity alignment → Class booking workflow design → Luxury UI tokenization → High-fidelity responsive web delivery.",
    uxApproach: "Combined editorial imagery, deep midnight backgrounds, and clear booking action buttons to deliver an elevated brand experience.",
    keyFlows: [
      { step: "01", title: "Browse", desc: "Explore class types, difficulty levels, and studio locations" },
      { step: "02", title: "Schedule", desc: "Select date, time slot, and preferred trainer" },
      { step: "03", title: "Reserve", desc: "Confirm booking using existing class package credit" }
    ],
    designDirection: "Deep midnight blue canvas, champagne gold highlights, elegant serif/sans-serif typography, and spacious card layouts.",
    designSystem: "Luxury wellness UI kit with calendar components, trainer profile cards, membership pricing tables, and booking buttons.",
    keyFeatures: [
      "Interactive Studio Class Schedule & Slot Picker",
      "Trainer Bio Profiles with Specialization Badges",
      "Member Account Dashboard for Package Renewals",
      "Luxury Brand Identity & Custom Editorial Typography",
      "Fast 3-Tap Mobile Class Reservation Flow"
    ],
    outcome: "Created a polished digital identity and a clear booking-oriented web experience that communicates the studio's premium positioning.",
    learnings: "Refined my ability to harmonize high-end editorial aesthetics with fast utility-driven booking workflows.",
    externalUrl: "https://reignpilates.com/",
    image: "assets/images/reign_studio_banner.png",
    galleryImages: ["assets/images/reign_studio_banner.png"],
    featured: false,
    tags: ["Wellness", "Web"],
    depth: "compact"
  },
  {
    id: "lifehub-education",
    slug: "lifehub-education",
    number: "08",
    title: "LifeHub Education",
    category: "EdTech · Learn & Earn · Web Platform",
    shortDescription: "An educational platform combining learning, real-world skills, rewards and family-oriented experiences.",
    longDescription: "LifeHub Education bridges academic learning with real-world financial literacy and practical life skills through gamified learning tracks, XP achievement rewards, and family-oriented activities.",
    role: "Product Designer",
    platform: "Responsive Web",
    projectType: "EdTech & Gamified Learning Platform",
    focusAreas: ["Gamified Learning", "Information Architecture", "Skill Trees", "Rewards UX"],
    challenge: "The platform contains diverse content areas and target audiences (students, parents, educators). The design challenge was to create a clear structure that makes gamified tracks and rewards easy to understand.",
    goals: [
      "Structure multi-audience learning and reward pathways",
      "Design interactive skill tree progression interfaces",
      "Build student achievement hubs with badge unlock feedback",
      "Ensure smooth responsive experience across desktop and tablet"
    ],
    users: [
      { title: "Students", desc: "Learners completing practical skill challenges and earning reward XP." },
      { title: "Parents & Educators", desc: "Guiding student learning paths and monitoring skill progress." }
    ],
    myContribution: [
      "I mapped the information architecture and page hierarchy across all core content hubs.",
      "I designed interactive skill tree visualizers for tracking prerequisite course progression.",
      "I created gamified XP reward widgets, digital badge unlock interfaces, and peer leaderboards.",
      "I established vibrant UI design tokens tailored for engaging young learners."
    ],
    process: "Audience segmentation → Information architecture → Skill tree flow design → Gamified UI tokens → Responsive delivery.",
    uxApproach: "Grouped complex educational pathways into clear visual modules supported by gamified achievement feedback.",
    keyFlows: [
      { step: "01", title: "Select Track", desc: "Choose financial literacy or practical skill tree" },
      { step: "02", title: "Complete", desc: "Finish practical video lessons and interactive exercises" },
      { step: "03", title: "Earn", desc: "Unlock XP points, achievement badges, and real-world rewards" }
    ],
    designDirection: "Vibrant high-energy color palette, dark mode container cards, gamified icon badges, and scannable visual hierarchy.",
    designSystem: "Gamified EdTech UI primitives including skill tree node components, XP progress bars, and achievement badge cards.",
    keyFeatures: [
      "Interactive Skill Tree Module Progression",
      "XP Reward Point Accumulation & Badge Unlock System",
      "Peer Learning Leaderboards & Community Hubs",
      "Educator Lesson Authoring & Submission Management",
      "Family & Student Financial Literacy Resource Portals"
    ],
    outcome: "Created a structured digital experience that clearly communicates the platform's different learning and reward-oriented areas.",
    learnings: "Reinforced how gamification patterns can increase student motivation when paired with intuitive navigation.",
    externalUrl: "https://www.lifehubeducation.com/",
    image: "assets/images/lifehub_banner.png",
    galleryImages: ["assets/images/lifehub_banner.png"],
    featured: false,
    tags: ["EdTech", "Gamified"],
    depth: "compact"
  },
  {
    id: "drivex",
    slug: "drivex",
    number: "09",
    title: "DriveX",
    category: "Mobility · Delivery · Rental · Mobile",
    shortDescription: "A multi-service mobile experience covering ride booking, parcel delivery and vehicle rentals.",
    longDescription: "DriveX is an urban electric vehicle mobility app offering electric bike rentals, monthly vehicle subscriptions, and instant parcel courier delivery services across metropolitan cities.",
    role: "Lead Mobile App UI/UX",
    platform: "Mobile (iOS / Android)",
    projectType: "EV Fleet & Mobility Subscription App",
    focusAreas: ["Mobility UX", "Map Discovery", "Keyless Unlock", "Parcel Logistics"],
    challenge: "Multiple distinct mobility services (rides, bike rentals, courier parcel delivery) needed to remain easily discoverable while keeping operational request flows simple.",
    goals: [
      "Design an interactive map search for finding nearby EV bikes",
      "Build a seamless Bluetooth keyless vehicle unlock flow",
      "Create clear subscription pricing cards comparing hourly vs monthly tiers",
      "Optimize outdoor readability for high-contrast mobile usage"
    ],
    users: [
      { title: "Commuters & Riders", desc: "Urban commuters renting EV bikes or booking daily vehicle subscriptions." }
    ],
    myContribution: [
      "I designed the customer mobile experience for vehicle discovery and rental configuration.",
      "I created the interactive map view displaying real-time battery status and estimated range.",
      "I crafted the on-demand parcel courier dispatch workflow with package size selection.",
      "I built a high-visibility mobile UI system optimized for outdoor sunlight conditions."
    ],
    process: "Service mapping → Mobile screen wireframes → Keyless unlock flow prototype → High-contrast UI system → Field usability checks.",
    uxApproach: "Keep service selection simple at top-level navigation, making each booking flow task-focused and map-centric.",
    keyFlows: [
      { step: "01", title: "Map Discovery", desc: "Locate nearby EV bike or vehicle rental station" },
      { step: "02", title: "Unlock", desc: "One-tap Bluetooth digital key unlock via smartphone" },
      { step: "03", title: "Ride & Track", desc: "Monitor live battery telemetry, speed, and trip duration" }
    ],
    designDirection: "High-contrast dark UI, electric blue accents, tactile map markers, and high-visibility typography for outdoor use.",
    designSystem: "Mobile mobility UI kit with map pin components, battery telemetry gauges, unlock progress modals, and vehicle cards.",
    keyFeatures: [
      "Interactive Map Search displaying Vehicle Battery & Range",
      "Bluetooth Smartphone Keyless Vehicle Unlock",
      "Flexible Hourly, Daily & Monthly Subscription Pricing Cards",
      "On-Demand Parcel Delivery Dispatch Workflow",
      "Real-Time Telemetry Dashboard for Vehicle Diagnostics"
    ],
    outcome: "Created a clear, touch-friendly mobile experience for EV bike rentals, parcel deliveries, and vehicle subscription workflows.",
    learnings: "Gained valuable experience designing for hardware-connected mobile apps where hardware state feedback is critical.",
    externalUrl: "https://drivex.in/",
    image: "assets/images/drivex_banner.png",
    galleryImages: ["assets/images/drivex_banner.png"],
    featured: false,
    tags: ["Mobility", "Mobile"],
    depth: "compact"
  },
  {
    id: "betbricks7",
    slug: "betbricks7",
    number: "10",
    title: "BetBricks7",
    category: "Sports Platform · Web · Real-Time Interface",
    shortDescription: "A high-density sports platform interface focused on live match information, odds and quick interaction.",
    longDescription: "BetBricks7 is a real-time online sports betting and analytics platform providing live match tracking, odds updates, and bet slip processing for international sports leagues.",
    role: "Senior UI/UX Designer",
    platform: "Responsive Web",
    projectType: "Real-Time Sports Data Platform",
    focusAreas: ["Real-Time UI", "High Data Density", "Bet Slip UX", "Match Analytics"],
    challenge: "Real-time sports data interfaces contain extreme information density. The design challenge was to organize data grids so users can scan live odds movements and match events rapidly without visual overload.",
    goals: [
      "Organize high-density sports data grids for fast scanning",
      "Design a persistent side-drawer bet slip for multi-bet building",
      "Build real-time match momentum visualizers",
      "Create high-contrast dark UI optimized for extended viewing"
    ],
    users: [
      { title: "Sports Analysts & Users", desc: "Individuals analyzing live match feeds, tracking odds movements, and building bet slips." }
    ],
    myContribution: [
      "I designed the page structure, information hierarchy, and data grid visual layouts.",
      "I created compact data-dense grid components that display real-time odds fluctuations clearly.",
      "I designed the persistent side-drawer bet slip for single, accumulator, and system bets.",
      "I developed the dark high-contrast UI design system with electric blue and green indicator states."
    ],
    process: "Data density audit → Grid system layout → Persistent drawer prototyping → Dark mode contrast optimization.",
    uxApproach: "Prioritized scanability, clear data grouping, strong visual status indicators, and fast information recognition.",
    keyFlows: [
      { step: "01", title: "Scan", desc: "Review live match feeds and odds fluctuation grids" },
      { step: "02", title: "Build Slip", desc: "Add selections to persistent side-drawer bet slip" },
      { step: "03", title: "Confirm", desc: "Verify odds, set stake amounts, and process instantly" }
    ],
    designDirection: "Ultra-dark canvas background, electric blue and green odds movement indicators, high-density compact tables, and clear visual hierarchy.",
    designSystem: "Real-time sports UI primitives including odds cell components, match scoreboards, bet slip item drawers, and cashout controls.",
    keyFeatures: [
      "Real-Time Odds Matrix with Visual Fluctuation Indicators",
      "Persistent Side-Drawer Bet Slip for Multi-Bet Building",
      "Live Match Momentum Visualizer & Event Timeline",
      "Instant Wallet Deposit & Partial Cashout Controls",
      "High-Contrast Dark Mode Designed for Extended Viewing"
    ],
    outcome: "Created a high-density sports data interface designed around fast scanning, clear information grouping, and responsive interaction.",
    learnings: "Deepened my knowledge of real-time UI design patterns where minimal latency and high data clarity are vital.",
    externalUrl: "https://betbricks7.com/",
    image: "assets/images/betbricks7_banner.png",
    galleryImages: ["assets/images/betbricks7_banner.png"],
    featured: false,
    tags: ["Gaming", "SaaS"],
    depth: "compact"
  },
  {
    id: "bhutan-travel-now",
    slug: "bhutan-travel-now",
    number: "11",
    title: "Bhutan Travel Now",
    category: "Travel · Tourism · Web",
    shortDescription: "A conversion-focused travel experience designed to showcase Bhutan tour packages, destinations and cultural experiences.",
    longDescription: "Bhutan Travel Now is a high-conversion tourism portal showcasing Bhutan's rich cultural heritage tours, Himalayan trekking expeditions, and luxury eco-resorts for international travelers.",
    role: "UI/UX & Web Designer",
    platform: "Responsive Web",
    projectType: "International Tourism Portal",
    focusAreas: ["Travel UX", "Content Hierarchy", "Itinerary Builder", "Conversion Design"],
    challenge: "Travel portals must present extensive destination details and visa requirements while keeping users inspired and moving effortlessly toward inquiry and booking.",
    goals: [
      "Deliver immersive visual storytelling with high-resolution editorial photography",
      "Design an interactive custom tour itinerary builder",
      "Create a step-by-step visa guidance assistant",
      "Optimize package details with day-by-day collapsible accordions"
    ],
    users: [
      { title: "International Travelers", desc: "Tourists researching Himalayan tours, cultural festivals, and luxury resort packages." }
    ],
    myContribution: [
      "I designed the website structure, full-bleed hero sections, and tour package presentation.",
      "I built the interactive tour customization tool for generating custom travel itineraries.",
      "I created the step-by-step visa guidance module detailing entry requirements and daily fees.",
      "I crafted the warm, authentic editorial visual hierarchy."
    ],
    process: "Destination story mapping → Itinerary builder flow design → Editorial UI layout → Responsive mobile optimization.",
    uxApproach: "Combined full-bleed photography, elegant editorial typography, and clear package accordion breakdowns to encourage exploration.",
    keyFlows: [
      { step: "01", title: "Explore", desc: "Discover cultural highlights, festivals, and trekking packages" },
      { step: "02", title: "Customize", desc: "Select tour duration, hotel tier, and activity themes" },
      { step: "03", title: "Enquire", desc: "Submit itinerary request and receive visa assistance" }
    ],
    designDirection: "Warm neutral dark canvas, luxury editorial typography, full-bleed photography, and gold accent CTAs.",
    designSystem: "Travel portal UI components including package cards, day-by-day itinerary accordions, visa checklists, and inquiry modals.",
    keyFeatures: [
      "Interactive Custom Tour & Itinerary Builder Tool",
      "Step-by-Step Bhutan Visa Guidance Assistant",
      "Day-by-Day Tour Package Detail Accordions",
      "Cultural Festival Calendar & Eco-Resort Directory",
      "Conversion-Optimized Direct Booking Inquiry Flow"
    ],
    outcome: "Created a clearer travel discovery experience designed around inspiring exploration and streamlining direct tour inquiries.",
    learnings: "Reinforced the power of editorial visual storytelling when designing for international tourism and high-consideration purchases.",
    externalUrl: "https://bhutantravelnow.com/",
    image: "assets/images/bhutan_banner.png",
    galleryImages: ["assets/images/bhutan_banner.png"],
    featured: false,
    tags: ["Tourism", "Web"],
    depth: "compact"
  },
  {
    id: "per-diem",
    slug: "per-diem",
    number: "12",
    title: "Per Diem",
    category: "Restaurant Technology · SaaS · Web",
    shortDescription: "A restaurant technology platform focused on branded digital ordering, customer engagement and loyalty experiences.",
    longDescription: "Per Diem (tryperdiem.com) is a white-label restaurant technology SaaS platform enabling independent cafes and dining brands to launch branded mobile ordering apps and customer loyalty subscriptions.",
    role: "UI/UX & SaaS Product Designer",
    platform: "Web / SaaS Platform",
    projectType: "Restaurant Technology & Loyalty SaaS",
    focusAreas: ["Restaurant SaaS", "White-Label UX", "Loyalty Engine", "Merchant Portals"],
    challenge: "Explaining a multi-faceted B2B SaaS platform (digital ordering, customer loyalty, kitchen display dispatches) to restaurant owners in a clear, compelling value proposition.",
    goals: [
      "Communicate SaaS value proposition clearly to restaurant merchants",
      "Design merchant menu customization and pricing portals",
      "Build customer mobile ordering and subscription interfaces",
      "Establish modular white-label design primitives for brand customization"
    ],
    users: [
      { title: "Restaurant Merchants", desc: "Cafe owners configuring digital menus, pickup rules, and loyalty subscriptions." },
      { title: "Dining Customers", desc: "Customers placing quick mobile pickup orders and subscribing to coffee plans." }
    ],
    myContribution: [
      "I designed the SaaS marketing portal structure, product positioning, and feature hierarchy.",
      "I crafted the merchant dashboard for menu building, price rules, and order dispatches.",
      "I created white-label mobile ordering screen templates adaptable to custom brand colors.",
      "I designed customer recurring loyalty subscription interfaces."
    ],
    process: "SaaS positioning audit → Merchant workflow design → White-label component architecture → Responsive web delivery.",
    uxApproach: "Structured around clear business goals: Increase direct orders, eliminate third-party commission fees, and build recurring customer loyalty.",
    keyFlows: [
      { step: "01", title: "Discover", desc: "Explore white-label digital ordering and loyalty platform benefits" },
      { step: "02", title: "Setup Menu", desc: "Configure restaurant menu, item modifiers, and pickup rules" },
      { step: "03", title: "Launch App", desc: "Deploy branded mobile app with automated customer loyalty" }
    ],
    designDirection: "Clean modern SaaS layout, crisp typography, modular white-label UI cards, and clear conversion calls to action.",
    designSystem: "White-label restaurant UI primitives including menu item modifier controls, KDS dispatch view cards, and subscription widgets.",
    keyFeatures: [
      "Merchant Cloud Portal for Menu & Modifier Management",
      "White-Label Mobile Ordering UX with Apple Pay Integration",
      "Automated Customer Loyalty & Coffee Subscription Engine",
      "Kitchen Display System (KDS) Order Dispatch Dashboard",
      "POS Integration & Multi-Location Restaurant Analytics"
    ],
    outcome: "Created a structured SaaS experience that clearly communicates white-label digital ordering and customer loyalty capabilities.",
    learnings: "Gained valuable experience building white-label design systems engineered for brand customization.",
    externalUrl: "https://perdiem.ai/",
    image: "assets/images/perdiem_banner.png",
    galleryImages: ["assets/images/perdiem_banner.png"],
    featured: false,
    tags: ["Restaurant", "SaaS"],
    depth: "compact"
  }
];

// Helper functions
function getProjectByIdOrSlug(query) {
  if (!query) return null;
  const q = String(query).toLowerCase().trim().replace(/^\/case-study\//, '').replace(/^#/, '');
  return projectsData.find(p => p.id === q || p.slug === q) || null;
}

function getAdjacentProjects(currentId) {
  const q = String(currentId).toLowerCase().trim().replace(/^\/case-study\//, '').replace(/^#/, '');
  const index = projectsData.findIndex(p => p.id === q || p.slug === q);
  if (index === -1) return { prev: projectsData[projectsData.length - 1], next: projectsData[0] };
  
  const prevIndex = (index - 1 + projectsData.length) % projectsData.length;
  const nextIndex = (index + 1) % projectsData.length;
  
  return {
    prev: projectsData[prevIndex],
    next: projectsData[nextIndex]
  };
}

if (typeof window !== 'undefined') {
  window.projectsData = projectsData;
  window.getProjectByIdOrSlug = getProjectByIdOrSlug;
  window.getAdjacentProjects = getAdjacentProjects;
}
