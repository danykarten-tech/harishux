/* ==========================================================================
   HARISH SINGH - PORTFOLIO INTERACTIVE ROUTER & CONTROLLER
   Supports Single Page Navigation, Case Studies, Work Archive Filtering & CV Modal
   ========================================================================== */

// Top-level Case Study Data Store with In-Depth Elaborated Design Studies
const caseStudies = {
  'turo': {
    title: "Turo Art Gallery",
    category: "Art Marketplace Platform",
    role: "UI/UX Designer / Product Designer",
    url: "https://dev.indeedtraining.in:8021/",
    image: "assets/images/portfolio_extracted_1.jpg",
    sections: [
      { num: "01", title: "Overview", content: "Turo Art Gallery is a premium digital marketplace platform designed for art collectors, independent artists, and gallery curators. The platform facilitates seamless artwork discovery, verified artist onboarding, promotional campaigns, and integrated rewards." },
      { num: "02", title: "Problem & Goals", content: "Independent digital and physical artists struggled with fragmented onboarding and lack of transparency during purchasing. Collectors needed verified authenticity, clear pricing, and engaging promotional incentives." },
      { num: "03", title: "User Journey", content: "Mapped end-to-end user journeys for both Art Collectors (Search → Artwork Inspection → Promotion Application → Purchase → Loyalty Points Earned) and Artists (Application → Verification → Collection Publishing → Sales Analytics)." },
      { num: "04", title: "Information Architecture", content: "Structured clear content hierarchies across Browse, Artist Spotlights, Live Auctions, Featured Journals, Account Dashboards, and Rewards Hub." },
      { num: "05", title: "Artist Onboarding", content: "Designed a multi-step artist onboarding workflow with identity verification, portfolio submission, tax compliance setup, and royalty preference configuration." },
      { num: "06", title: "Product Discovery", content: "Created high-fidelity exploration views with multi-faceted filtering, high-resolution gallery grid, and quick artwork preview modals." },
      { num: "07", title: "Product Detail", content: "Crafted editorial product pages featuring zoomable artwork inspection, certificate of authenticity verification, artist bio overlay, and direct acquisition CTAs." },
      { num: "08", title: "Promotion / Promo Code", content: "Designed an intuitive checkout discount flow allowing instant promo code verification, partner campaign redemption, and dynamic price breakdown calculations." },
      { num: "09", title: "Loyalty & Rewards", content: "Engineered 'Turo Collector Circle', a tier-based rewards system where collectors earn points on purchases, unlocking exclusive early access to drops and VIP gallery passes." },
      { num: "10", title: "Refund / Supporting Flows", content: "Detailed user-friendly claim submission, artwork damage reporting, dispute resolution tracking, and automated escrow refund flows." },
      { num: "11", title: "UI System", content: "Built a comprehensive Figma design system featuring responsive typography tokens, neutral dark/light color palettes, artwork card primitives, and accessible form controls." },
      { num: "12", title: "Responsive Experience", content: "Optimized mobile web layouts ensuring smooth visual touch gestures, swipeable gallery carousels, and persistent bottom checkout actions." },
      { num: "13", title: "Prototype", content: "Developed clickable micro-interaction prototypes demonstrating page transitions, modal reveals, and smooth checkout animations." },
      { num: "14", title: "Final Screens", content: "Delivered production-ready desktop, tablet, and mobile interface screen designs with dark and light theme variations." },
      { num: "15", title: "Learnings", content: "Key insights included balancing high-density artwork imagery with fast page load performance, and simplifying complex multi-party royalty calculations into transparent UI feedback." }
    ]
  },
  'ibc': {
    title: "IBC Media",
    category: "Web3 & Blockchain Ecosystem Platform",
    role: "Lead UI/UX Designer",
    url: "https://ibc.media/",
    image: "assets/images/portfolio_extracted_2.jpg",
    sections: [
      { num: "01", title: "Overview & Ecosystem Scope", content: "IBC Media is a premier Web3 and blockchain ecosystem platform connecting global developers, sponsors, technology leaders, and competitive hackathon events across emerging blockchain protocols." },
      { num: "02", title: "Challenge & Web3 Complexity", content: "Web3 platforms often overwhelm users with complex jargon, chaotic navigation, and uncoordinated event schedules. The objective was to organize dense technical information into a clean, approachable, and highly structured digital experience." },
      { num: "03", title: "Information Architecture", content: "Organized the ecosystem into distinct clear hubs: Global Hackathons Calendar, Developer Education Portals, Leaderboard Rankings, Sponsor Visibility Grids, and Community Summits." },
      { num: "04", title: "Developer Hackathon User Flow", content: "Designed a friction-free hackathon participation journey: Event Exploration → Track Selection → Team Wallet Verification → Project Submission → Live Judging Leaderboard." },
      { num: "05", title: "Web3 Wallet UX & Decentralized Identity", content: "Simplified Web3 wallet connection flows (Metamask, WalletConnect) with clear fallback tooltips, wallet address masking, and automated verification badges." },
      { num: "06", title: "Sponsor & Global Summit Portal", content: "Designed high-impact sponsor exhibition modules allowing international Web3 protocols to showcase grant programs, developer bounties, and keynote schedules." },
      { num: "07", title: "Figma Design System", content: "Created a futuristic dark-mode UI design system featuring vibrant glowing cyan/purple accent tokens, responsive data tables, dark glassmorphism cards, and scalable iconography." },
      { num: "08", title: "Usability Testing & Impact", content: "Achieved a 45% increase in developer event registrations and streamlined team project submissions during national blockchain summits." }
    ]
  },
  'droobna': {
    title: "Droobna",
    category: "Multi-Service Mobility & Food Delivery Platform",
    role: "Senior UI/UX & Product Designer",
    url: "https://play.google.com/store/search?q=droobna&c=apps&hl=en_IN",
    image: "assets/images/droobna_app.jpg",
    sections: [
      { num: "01", title: "Overview & Platform Architecture", content: "Droobna is a multi-sided mobility and food delivery platform serving three distinct user personas: Customers (ordering rides and food), Captains/Drivers (fulfilling trips & orders), and Merchant Partners (managing menus & dispatches)." },
      { num: "02", title: "Customer App Experience", content: "Crafted intuitive mobile app flows allowing users to toggle seamlessly between ride booking and restaurant food ordering with real-time pickup location mapping." },
      { num: "03", title: "Driver / Captain Mobile Dashboard", content: "Designed a high-efficiency driver mobile dashboard with a one-tap online toggle, live surge heatmap mapping, trip earnings summaries, and turn-by-turn navigation alerts." },
      { num: "04", title: "Real-Time Dispatch & Map Tracking", content: "Created live GPS order tracking screens showing driver ETA, order status progress (Preparing → Picked Up → On the Way), and direct call/chat actions." },
      { num: "05", title: "Order Customization & Checkout", content: "Built a rapid food checkout flow with multi-item dish customization, dietary tag filters, saved payment methods, and instant promo code validation." },
      { num: "06", title: "Merchant Partner Portal", content: "Designed desktop tablet web portals for restaurant merchants to manage live order queues, item inventory toggles, and daily sales analytics." },
      { num: "07", title: "Component Design System", content: "Developed a comprehensive mobile UI design system in Figma with touch-optimized buttons, iOS/Android bottom sheet drawer patterns, and accessible dark/light themes." },
      { num: "08", title: "Key Metrics & Impact", content: "Improved driver order acceptance speed by 30% and reduced customer order checkout time to under 45 seconds." }
    ]
  },
  'rankyfy': {
    title: "Rankyfy",
    category: "AI-Powered SEO Platform",
    role: "UI/UX Designer",
    url: "https://rankyfy.com/",
    image: "assets/images/rankyfy_banner.png",
    sections: [
      { num: "01", title: "SaaS Platform Vision", content: "Rankyfy is an all-in-one AI-assisted SEO automation and digital agency management SaaS platform providing real-time rank tracking, keyword discovery, and AI content generation." },
      { num: "02", title: "High-Density SEO Data Challenge", content: "SEO dashboards frequently suffer from visual clutter and overwhelming data density. The design objective was to convert complex SERP metrics into actionable visual insights." },
      { num: "03", title: "Dashboard UX & Information Architecture", content: "Structured dashboard navigation around clear core tasks: Project Overview, Keyword Intelligence, AI Content Assistant, Backlink Auditor, and White-Label Client Reports." },
      { num: "04", title: "AI Keyword & Content Generator Integration", content: "Designed progressive wizard interfaces for AI content creation, enabling users to generate SEO-optimized articles with real-time keyword density gauges." },
      { num: "05", title: "Agency Workspace & Client Reporting", content: "Built multi-tenant team workspaces allowing digital agencies to manage multiple client domain portfolios and generate custom PDF reports with one click." },
      { num: "06", title: "Automated Rank Tracker", content: "Crafted interactive line chart controls and SERP position movement widgets that highlight keyword gains and drops dynamically." },
      { num: "07", title: "UI Design System", content: "Established a scalable SaaS UI kit featuring dark glass container cards, vibrant status badges, accessible data tables, and dark/light contrast modes." },
      { num: "08", title: "Product Impact", content: "Enhanced agency workflow productivity by 40% and reduced dashboard onboarding drop-off rates significantly." }
    ]
  },
  'invisalearn': {
    title: "Invisalearn",
    category: "EdTech & Online Learning Platform",
    role: "UI/UX Designer",
    url: "https://www.invisalearn.com/",
    image: "assets/images/invisalearn_banner.png",
    sections: [
      { num: "01", title: "EdTech Platform Overview", content: "Invisalearn is an EdTech web and mobile platform connecting students with certified educators through structured video courses, interactive quizzes, live webinars, and certificate tracking." },
      { num: "02", title: "Learner Experience Journey", content: "Designed personalized student dashboards featuring course progress rings, upcoming live session reminders, recently viewed lessons, and recommended skill paths." },
      { num: "03", title: "Interactive Video Player & Quiz Modules", content: "Crafted a distraction-free course player interface with chapter bookmarks, speed controls, downloadable resources, and inline check-for-understanding quizzes." },
      { num: "04", title: "Educator Course Publishing Studio", content: "Designed intuitive course creator workflows for teachers to upload video curriculum, create quiz assessments, and manage student enrollments." },
      { num: "05", title: "Student Progress & Analytics Dashboard", content: "Built visual achievement hubs showcasing earned course certificates, skill badges, assignment grades, and study time analytics." },
      { num: "06", title: "Mobile Learning UX", content: "Optimized mobile learning experience for iOS and Android, enabling offline video downloads and swipeable lesson cards." },
      { num: "07", title: "UI Tokenization", content: "Engineered a clean typography hierarchy and vibrant color system to maintain high contrast and readability across educational content." },
      { num: "08", title: "Usability Outcomes", content: "Achieved an 85% course completion rate among pilot student groups and positive feedback on platform ease of use." }
    ]
  },
  'skin-pal': {
    title: "Skin-Pal",
    category: "AI-Powered Skincare Platform",
    role: "UI/UX Designer",
    url: "https://skin-pal.in/",
    image: "assets/images/skin_pal_banner.png",
    sections: [
      { num: "01", title: "AI Skincare Concept", content: "Skin-Pal (Hug Your Face) is an AI-driven mobile health application that analyzes facial skin conditions using computer vision to recommend personalized skincare routines." },
      { num: "02", title: "Mobile Camera Scan UX", content: "Designed a guided camera scanning overlay with real-time facial framing indicators, lighting detection prompts, and instant diagnostic feedback." },
      { num: "03", title: "Skin Health Diagnostic Metrics", content: "Created visual skin diagnostic scorecards rating hydration, texture, redness, and acne severity through accessible radar charts." },
      { num: "04", title: "Personalized Routine & Product Recommendations", content: "Designed personalized morning/evening skincare routines paired with tailored product recommendations and ingredient transparency breakdowns." },
      { num: "05", title: "Checkout & Subscription Flow", content: "Crafted seamless e-commerce product ordering and recurring monthly replenishment subscription flows." },
      { num: "06", title: "Mobile UI Primitives", content: "Built a soothing, health-focused visual UI design system featuring soft pastel accents, clean typography, and tactile rounded containers." },
      { num: "07", title: "Usability Testing", content: "Tested camera scanning flows across diverse lighting environments and skin types to minimize user scanner errors." },
      { num: "08", title: "Product Impact", content: "Delivered an engaging mobile AI scan experience with high user conversion from scan completion to product purchase." }
    ]
  },
  'reign-pilates': {
    title: "Reign Pilates",
    category: "Wellness & Studio Platform",
    role: "UI/UX & Brand Designer",
    url: "https://reignpilates.com/",
    image: "assets/images/reign_studio_banner.png",
    sections: [
      { num: "01", title: "Brand Identity & Studio Vision", content: "Reign Pilates is a luxury wellness studio digital experience designed for high-end fitness enthusiasts seeking seamless online class reservations and instructor booking." },
      { num: "02", title: "Seamless Class Reservation UX", content: "Crafted an intuitive class booking flow featuring interactive weekly calendar schedules, studio room seat pickers, and real-time class availability badges." },
      { num: "03", title: "Instructor & Schedule Explorer", content: "Designed detailed instructor bio profiles showcasing trainer certifications, workout intensity levels, and direct slot booking." },
      { num: "04", title: "Member Dashboard & Package Renewals", content: "Built personalized member portals to track class package balances, session history, upcoming bookings, and automated membership renewals." },
      { num: "05", title: "Luxury Dark Visual Aesthetics", content: "Designed a sleek, premium visual design system using deep midnight blue canvas backgrounds, champagne gold highlights, and elegant typography." },
      { num: "06", title: "Mobile Web Experience", content: "Optimized mobile web booking workflows allowing members to reserve studio classes in under 3 taps." },
      { num: "07", title: "Component Library", content: "Delivered production-ready Figma design tokens, responsive cards, form primitives, and micro-interaction specs." },
      { num: "08", title: "Business Impact", content: "Increased online class booking conversion by 50% within 60 days of platform launch." }
    ]
  },
  'lifehub-education': {
    title: "LifeHub Education",
    category: "EdTech & Learn & Earn Platform",
    role: "Product Designer",
    url: "https://lifehub.education/",
    image: "assets/images/portfolio_extracted_6.jpg",
    sections: [
      { num: "01", title: "Gamified Learning Philosophy", content: "LifeHub Education bridges academic learning with real-world financial literacy and practical skills through gamified learning tracks and achievement rewards." },
      { num: "02", title: "Student Skill Tree Architecture", content: "Designed interactive visual skill trees where students unlock advanced course modules by completing prerequisite challenges and practical exercises." },
      { num: "03", title: "XP Rewards & Badge Unlock UI", content: "Created gamified reward mechanisms where students earn XP points, unlock digital accomplishment badges, and redeem real-world rewards." },
      { num: "04", title: "Peer Collaboration & Leaderboards", content: "Built interactive student discussion rooms, group project submission hubs, and weekly competitive learning leaderboards." },
      { num: "05", title: "Educator Content Management", content: "Designed streamlined authoring tools for educators to publish interactive lessons, set reward thresholds, and grade student submissions." },
      { num: "06", title: "Responsive Mobile Experience", content: "Optimized learning interfaces for mobile devices with swipeable lesson cards and instant reward notifications." },
      { num: "07", title: "Visual Design Tokens", content: "Established vibrant, high-energy UI color systems with dark mode containers, gamified icons, and micro-animations." },
      { num: "08", title: "Results & Engagement", content: "Boosted daily active learning time by 60% compared to traditional non-gamified learning management systems." }
    ]
  },
  'drivex': {
    title: "DriveX",
    category: "Mobility & Vehicle Rental App",
    role: "Lead Mobile App UI/UX",
    url: "https://drivex.in/",
    image: "assets/images/drivex_banner.png",
    sections: [
      { num: "01", title: "EV Fleet Mobility Concept", content: "DriveX is a modern multi-service mobility platform offering electric bike subscriptions, instant vehicle rentals, and parcel delivery services." },
      { num: "02", title: "Map Discovery & Bluetooth Key Unlock", content: "Designed interactive map search interfaces displaying nearby available EV bikes, battery charge levels, estimated range, and one-tap Bluetooth digital key unlock." },
      { num: "03", title: "Subscription & Rental Pricing UX", content: "Crafted flexible vehicle rental pricing cards comparing hourly, daily, and monthly subscription tiers with automated security deposit calculations." },
      { num: "04", title: "Parcel Delivery Dispatch Flow", content: "Designed fast on-demand parcel pickup workflows allowing users to select package size, input recipient details, and track live courier delivery." },
      { num: "05", title: "Driver Vehicle Diagnostic Dashboard", content: "Built real-time vehicle telemetry screens displaying speed history, battery health metrics, ride trip logs, and nearest EV charging station routes." },
      { num: "06", title: "Mobile UI Design System", content: "Created a high-visibility mobile UI design system engineered for outdoor readability with high-contrast map icons and tactile touch controls." },
      { num: "07", title: "Usability Audit", content: "Tested bike unlock workflows in low-connectivity areas to implement reliable offline state feedback." },
      { num: "08", title: "Outcomes", content: "Successfully launched across major urban hubs, driving rapid adoption of electric bike subscriptions." }
    ]
  },
  'betbricks7': {
    title: "BetBricks7",
    category: "Online Sports Betting Platform",
    role: "Senior UI/UX Designer",
    url: "https://betbricks7.com/",
    image: "assets/images/portfolio_extracted_8.jpg",
    sections: [
      { num: "01", title: "High-Density Sports Dashboard UX", content: "BetBricks7 is a real-time online sports betting platform offering live match tracking, dynamic odds updates, and instant bet slip management for international sports." },
      { num: "02", title: "Live Odds Update & Odds Matrix UI", content: "Engineered compact data-dense grid components that display real-time odds fluctuations with clear visual indicators for market movements." },
      { num: "03", title: "Quick Bet Slip & Multi-Bet Processing", content: "Designed a persistent side-drawer bet slip allowing users to build single, accumulator, and system bets without losing sight of live match feeds." },
      { num: "04", title: "Real-Time Match Analytics & Stats", content: "Created live match visualizers showing ball possession, head-to-head stats, score progression, and key match event timelines." },
      { num: "05", title: "Account Wallet & Instant Cashout", content: "Built secure deposit/withdrawal payment flows with one-tap partial and full bet cashout controls." },
      { num: "06", title: "Dark Mode High-Contrast UI System", content: "Developed an ultra-dark mode interface with electric blue and green odds indicators designed for extended multi-game viewing." },
      { num: "07", title: "Performance & Micro-interactions", content: "Optimized interface rendering speed to process high-frequency live odds data updates without lag." },
      { num: "08", title: "Impact", content: "Streamlined bet execution velocity and reduced bet slip error rate significantly during peak sporting tournaments." }
    ]
  },
  'bhutan-travel-now': {
    title: "Bhutan Travel Now",
    category: "Travel & Tourism Platform",
    role: "UI/UX & Web Designer",
    url: "https://bhutantravelnow.com/",
    image: "assets/images/portfolio_extracted_10.jpg",
    sections: [
      { num: "01", title: "Tourism Portal Strategy", content: "Bhutan Travel Now is a high-conversion tourism portal showcasing Bhutan's cultural heritage tours, Himalayan trekking expeditions, and luxury eco-resorts." },
      { num: "02", title: "Immersive Visual Storytelling", content: "Designed full-bleed hero sections featuring high-resolution photography, cultural highlights, festival calendars, and editorial typography." },
      { num: "03", title: "Custom Itinerary Builder UX", content: "Built an interactive tour customization tool where travelers select duration, interest themes (Cultural, Adventure, Wellness), and hotel tiers to generate custom travel quotes." },
      { num: "04", title: "Bhutan Visa Guidance Assistant", content: "Created a step-by-step visa application assistant providing clear entry requirement guidance, Sustainable Development Fee (SDF) breakdowns, and document upload checklist." },
      { num: "05", title: "Resort & Trekking Package Checkout", content: "Designed comprehensive tour package detail pages with day-by-day itinerary accordions, inclusion breakdowns, traveler reviews, and instant booking inquiries." },
      { num: "06", title: "Editorial Typography & Imagery", content: "Crafted a sophisticated typography scale paired with warm neutral dark background tones to convey authentic Bhutanese hospitality." },
      { num: "07", title: "Responsive Experience", content: "Optimized mobile experience for international travelers browsing itineraries on tablet and mobile devices." },
      { num: "08", title: "Conversion Outcomes", content: "Achieved a 40% increase in direct tour booking inquiries and positive feedback on itinerary clarity." }
    ]
  },
  'per-diem': {
    title: "Per Diem",
    category: "Restaurant Technology Platform",
    role: "UI/UX & SaaS Product Designer",
    url: "https://perdiem.ai/",
    image: "assets/images/perdiem_banner.png",
    sections: [
      { num: "01", title: "Restaurant Ordering Platform Scope", content: "Per Diem (tryperdiem.com) is a white-label restaurant technology SaaS platform enabling cafes and dining brands to launch branded mobile ordering apps and recurring customer loyalty subscriptions." },
      { num: "02", title: "Merchant Menu Customization Dashboard", content: "Designed a powerful cloud portal for restaurant owners to build digital menus, configure modifier options, set pricing rules, and manage order dispatches." },
      { num: "03", title: "White-Label Customer Mobile Ordering UX", content: "Crafted customizable iOS and Android ordering interfaces tailored to each restaurant brand with quick add-to-cart, pickup scheduling, and apple pay integration." },
      { num: "04", title: "Recurring Loyalty & Subscription Engine", content: "Engineered automated customer retention features, including coffee subscriptions, points rewards, and targeted push notification campaigns." },
      { num: "05", title: "Kitchen Order Dispatch & POS Integration", content: "Designed kitchen display system (KDS) interfaces that organize incoming digital orders by prep time and pickup status." },
      { num: "06", title: "UI Design System", content: "Created modular UI design primitives allowing restaurant brands to apply custom brand colors, logos, and typography to their mobile ordering apps." },
      { num: "07", title: "Usability Research", content: "Conducted field observations in busy coffee shops to optimize checkout tap target sizes and speed up mobile pickup orders." },
      { num: "08", title: "Business Metrics", content: "Enabled hundreds of independent restaurant brands to increase repeat customer ordering frequency by 35%." }
    ]
  }
};

// Global Top-Level Functions
function navigateTo(viewId, event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  if (typeof viewId === 'string') {
    viewId = viewId.replace(/^#/, '').trim().toLowerCase();
  }
  if (!viewId) viewId = 'home';

  if (viewId.startsWith('cs-')) {
    const projectId = viewId.replace('cs-', '');
    openCaseStudy(projectId);
    return;
  }

  const allViews = document.querySelectorAll('.page-view');
  let matched = false;

  allViews.forEach(view => {
    if (view.id === viewId) {
      view.classList.add('active');
      view.style.setProperty('display', 'block', 'important');
      view.style.setProperty('opacity', '1', 'important');
      view.style.setProperty('visibility', 'visible', 'important');
      matched = true;
    } else {
      view.classList.remove('active');
      view.style.setProperty('display', 'none', 'important');
    }
  });

  if (!matched) {
    const homeView = document.getElementById('home');
    if (homeView) {
      homeView.classList.add('active');
      homeView.style.setProperty('display', 'block', 'important');
      homeView.style.setProperty('opacity', '1', 'important');
      homeView.style.setProperty('visibility', 'visible', 'important');
    }
    viewId = 'home';
  }

  const allNavLinks = document.querySelectorAll('[data-view]');
  allNavLinks.forEach(link => {
    const linkView = link.getAttribute('data-view');
    if (linkView === viewId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) mobileNav.classList.remove('active');

  if (history.pushState) {
    history.pushState(null, null, '#' + viewId);
  }

  window.scrollTo(0, 0);
}

function openModal(modalId) {
  const targetModal = document.getElementById(modalId);
  if (targetModal) {
    targetModal.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

function closeModal() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.classList.remove('modal-open');
}

function openCaseStudy(projectId) {
  let targetSlug = projectId;
  if (window.getProjectByIdOrSlug) {
    const proj = window.getProjectByIdOrSlug(projectId);
    if (proj) targetSlug = proj.slug;
  }
  window.location.href = `case-study.html?project=${encodeURIComponent(targetSlug)}`;
}

function handleRoute() {
  const currentHash = window.location.hash.replace('#', '').trim().toLowerCase();
  const validViews = ['home', 'work', 'about', 'experience', 'skills', 'contact'];
  if (currentHash && validViews.includes(currentHash)) {
    navigateTo(currentHash);
  } else if (currentHash.startsWith('cs-')) {
    openCaseStudy(currentHash.replace('cs-', ''));
  } else {
    navigateTo('home');
  }
}

// Bind to window object
window.navigateTo = navigateTo;
window.openModal = openModal;
window.closeModal = closeModal;
window.openCaseStudy = openCaseStudy;
window.handleRoute = handleRoute;

window.addEventListener('popstate', handleRoute);

document.addEventListener('DOMContentLoaded', () => {
  handleRoute();

  const mobileNav = document.getElementById('mobileNav');
  const menuToggle = document.getElementById('menuToggle');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
    });
  }

  document.querySelectorAll('[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetView = link.getAttribute('data-view');
      if (targetView) {
        navigateTo(targetView, e);
      }
    });
  });

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const cvModalCloseBtn = document.getElementById('cvModalCloseBtn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (cvModalCloseBtn) cvModalCloseBtn.addEventListener('click', closeModal);

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.archive-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      workCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // ULTRA-PREMIUM INTERACTIVE ANIMATIONS & CONTROLLERS
  // ==========================================================================
  
  // 1. Ambient Following Cursor Glow Trailer (Lerp Damping)
  const cursorOrb = document.getElementById('cursorGlowOrb');
  if (cursorOrb) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function renderCursorOrb() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      cursorOrb.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursorOrb);
    }
    renderCursorOrb();
  }

  // 2. 3D Card Parallax Tilt on Hover
  const tiltCards = document.querySelectorAll('.project-card-ref, .archive-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6; // max 6deg
      const rotateY = ((x - centerX) / centerX) * 6; // max 6deg

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });

  // 3. Dynamic Number Count-Up Animation for Stats Bar
  const statCounters = document.querySelectorAll('.stat-counter');
  if (statCounters.length > 0 && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endVal = parseInt(target.getAttribute('data-count'), 10) || 0;
          const suffix = target.getAttribute('data-suffix') || '';
          let startVal = 0;
          const duration = 1600; // ms
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeProgress * endVal);
            target.textContent = `${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              target.textContent = `${endVal}${suffix}`;
            }
          }

          requestAnimationFrame(updateCounter);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.4 });

    statCounters.forEach(sc => countObserver.observe(sc));
  }

  // 4. Header Frosted Glass Transition on Scroll
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('header-scrolled');
      } else {
        siteHeader.classList.remove('header-scrolled');
      }
    });
  }

  // 5. Button Click Ripple Micro-Interaction
  const rippleBtns = document.querySelectorAll('.btn, .filter-btn');
  rippleBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('btn-ripple-effect');

      const existing = this.querySelector('.btn-ripple-effect');
      if (existing) existing.remove();

      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });

  // 6. Intersection Observer for Smooth Scroll Reveal (Below-the-fold content)
  const elementsToReveal = document.querySelectorAll('.project-card-ref, .archive-card, .stat-card-clean, .experience-card-ref, .skill-card-ref, .section-eyebrow, .section-title');
  
  elementsToReveal.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    const delay = (index % 4) * 0.08;
    el.style.transitionDelay = `${delay}s`;
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    });

    elementsToReveal.forEach(el => revealObserver.observe(el));
  } else {
    elementsToReveal.forEach(el => el.classList.add('is-visible'));
  }

  // 7. Magnetic Hover Physics on Primary Action Buttons
  const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
  });
});


