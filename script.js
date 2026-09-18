/* ==========================================================================
   HARISH SINGH - PORTFOLIO INTERACTIVE ROUTER & CONTROLLER
   Supports Single Page Navigation, Case Studies, Work Archive Filtering & CV Modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // Single Page View Router
  const views = document.querySelectorAll('.page-view');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNav = document.getElementById('mobileNav');
  const menuToggle = document.getElementById('menuToggle');

  // Mobile Menu Toggle
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

  // Navigate Function
  window.navigateTo = function(viewId, event) {
    if (event) event.preventDefault();

    // Handle case study routes
    if (viewId.startsWith('cs-')) {
      const projectId = viewId.replace('cs-', '');
      openCaseStudy(projectId);
      return;
    }

    // Hide all views, show targeted view
    views.forEach(view => {
      view.classList.remove('active');
      if (view.id === viewId) {
        view.classList.add('active');
      }
    });

    // Update nav link active status
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-view') === viewId) {
        link.classList.add('active');
      }
    });

    // Close mobile nav if open
    if (mobileNav) mobileNav.classList.remove('active');

    // Scroll to top of window smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Nav link click events
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetView = link.getAttribute('data-view');
      if (targetView) {
        navigateTo(targetView, e);
      }
    });
  });

  // Modal Controllers
  window.openModal = function(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.add('active');
      document.body.classList.add('modal-open');
    }
  };

  window.closeModal = function() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.classList.remove('modal-open');
  };

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

  // Work Archive Category Filter Logic
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

  // Case Study Content Store
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
        { num: "01", title: "Overview", content: "IBC Media is a flagship Web3 & Blockchain ecosystem platform uniting developers, sponsors, global summits, and competitive hackathons across emerging technology ecosystems." },
        { num: "02", title: "Challenge", content: "Web3 platforms often overwhelm users with complex jargon, chaotic navigation, and uncoordinated event schedules. The challenge was organizing dense technical information into a sleek, approachable user experience." },
        { num: "03", title: "Information Architecture", content: "Organized platform sections into global events calendar, hackathon leaderboards, ecosystem partner spotlight, sponsor grid, and developer education portals." },
        { num: "04", title: "User Journey", content: "Designed tailored flows for Hackathon Participants, Sponsors, and Attendees." },
        { num: "05", title: "Web3 UX", content: "Simplified wallet connections, decentralized identity badges, and team wallet submissions through clean progressive disclosure UI pattern." }
      ]
    },
    'droobna': {
      title: "Droobna",
      category: "Multi-Service Mobility & Food Delivery Platform",
      role: "Senior UI/UX & Product Designer",
      url: "https://play.google.com/store/search?q=droobna&c=apps&hl=en_IN",
      image: "assets/images/droobna_app.jpg",
      sections: [
        { num: "01", title: "Overview", content: "Droobna is a multi-sided mobility and food delivery ecosystem catering to Customers, Captains (Drivers), and Merchant Partners." },
        { num: "02", title: "Customer App Experience", content: "Designed intuitive ride booking with real-time pickup mapping, car selection, and food delivery browsing with category filters." },
        { num: "03", title: "Driver / Captain App", content: "Crafted high-efficiency captain dashboard with one-tap online toggle, surge mapping, earnings overview, and navigation alerts." }
      ]
    },
    'rankyfy': {
      title: "Rankyfy",
      category: "AI-Powered SEO Platform",
      role: "UI/UX Designer",
      url: "https://rankyfy.com/",
      image: "assets/images/rankyfy_dashboard.png",
      sections: [
        { num: "01", title: "Overview", content: "Rankyfy is an all-in-one AI-assisted SEO automation and agency management SaaS platform." },
        { num: "02", title: "Product UX & AI Integration", content: "Transformed complex SEO data into intuitive dashboards. Integrated AI content generators, keyword recommendations, and automated rank tracking." }
      ]
    },
    'invisalearn': {
      title: "Invisalearn",
      category: "EdTech & Online Learning Platform",
      role: "UI/UX Designer",
      url: "https://www.invisalearn.com/",
      image: "assets/images/portfolio_extracted_3.jpg",
      sections: [
        { num: "01", title: "Overview", content: "Invisalearn is a web and mobile EdTech platform connecting students with expert educators through interactive courses, live sessions, and progress tracking." },
        { num: "02", title: "Learner Experience", content: "Designed personalized learning dashboards, video course players, interactive quiz modules, and certificate generation features." }
      ]
    },
    'skin-pal': {
      title: "Skin-Pal",
      category: "AI-Powered Skincare Platform",
      role: "UI/UX Designer",
      url: "https://skin-pal.in/",
      image: "assets/images/portfolio_extracted_4.jpg",
      sections: [
        { num: "01", title: "Overview", content: "Personalized skincare analysis app using AI computer vision to analyze skin conditions and recommend tailored skincare routines." },
        { num: "02", title: "AI Scan UX", content: "Guided camera scan interface with real-time positioning feedback, immediate skin health metrics, and customized product pairing recommendations." }
      ]
    },
    'reign-pilates': {
      title: "Reign Pilates",
      category: "Wellness & Studio Platform",
      role: "UI/UX & Brand Designer",
      url: "https://reignpilates.com/",
      image: "assets/images/portfolio_extracted_5.jpg",
      sections: [
        { num: "01", title: "Overview", content: "Reign Pilates is a luxury wellness studio digital experience featuring online class bookings, trainer schedules, and membership portal." },
        { num: "02", title: "Booking UX", content: "Seamless class reservation flow with interactive calendar, instructor preference selection, and instant confirmation notifications." }
      ]
    },
    'lifehub-education': {
      title: "LifeHub Education",
      category: "EdTech & Learn & Earn Platform",
      role: "Product Designer",
      url: "https://lifehub.education/",
      image: "assets/images/portfolio_extracted_6.jpg",
      sections: [
        { num: "01", title: "Overview", content: "LifeHub Education combines real-world skill learning with gamified achievement rewards for modern students." },
        { num: "02", title: "Gamified Learning UI", content: "Interactive skill trees, badge unlocks, and peer collaboration leaderboards designed to maximize course completion rates." }
      ]
    },
    'drivex': {
      title: "DriveX",
      category: "Mobility & Vehicle Rental App",
      role: "Lead Mobile App UI/UX",
      url: "https://drivex.in/",
      image: "assets/images/portfolio_extracted_7.jpg",
      sections: [
        { num: "01", title: "Overview", content: "DriveX is a multi-service mobility platform offering vehicle subscriptions, electric bike rentals, and instant parcel delivery." },
        { num: "02", title: "Fleet Management UI", content: "Real-time vehicle map tracking, digital key unlock via Bluetooth, and dynamic trip pricing calculations." }
      ]
    },
    'betbricks7': {
      title: "BetBricks7",
      category: "Online Sports Betting Platform",
      role: "Senior UI/UX Designer",
      url: "https://betbricks7.com/",
      image: "assets/images/portfolio_extracted_8.jpg",
      sections: [
        { num: "01", title: "Overview", content: "High-density online sports betting platform providing live match statistics, real-time odds updates, and fast bet slip processing." },
        { num: "02", title: "Data Density UX", content: "Crafted compact, high-performance dashboards allowing bettors to monitor multiple live sports events simultaneously." }
      ]
    },
    'bhutan-travel-now': {
      title: "Bhutan Travel Now",
      category: "Travel & Tourism Platform",
      role: "UI/UX & Web Designer",
      url: "https://bhutantravelnow.com/",
      image: "assets/images/portfolio_extracted_10.jpg",
      sections: [
        { num: "01", title: "Overview", content: "Conversion-focused tourism portal showcasing Bhutan's cultural tours, trekking itineraries, and luxury resort bookings." },
        { num: "02", title: "Editorial Travel UX", content: "Immersive full-screen imagery, custom itinerary builder, visa guidance assistant, and instant tour inquiry workflows." }
      ]
    },
    'per-diem': {
      title: "Per Diem",
      category: "Restaurant Technology Platform",
      role: "UI/UX & SaaS Product Designer",
      url: "https://perdiem.ai/",
      image: "assets/images/portfolio_extracted_11.jpg",
      sections: [
        { num: "01", title: "Overview", content: "White-label restaurant digital ordering platform and recurring loyalty subscription management system." },
        { num: "02", title: "Merchant Dashboard", content: "Order dispatch management, automated customer retention campaigns, and menu customization dashboard for restaurant owners." }
      ]
    }
  };

  window.openCaseStudy = function(projectId) {
    const data = caseStudies[projectId] || {
      title: projectId.replace(/-/g, ' ').toUpperCase(),
      category: "Digital Product UX",
      role: "Senior UI/UX Designer",
      sections: [{ num: "01", title: "Overview", content: "Detailed case study showcase for " + projectId }]
    };

    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalBody = document.getElementById('modalBody');

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = `${data.category} · ${data.role}`;

    if (modalBody) {
      let html = `
        <div style="margin-bottom: 28px; padding: 20px 24px; background: #0F172A; border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
          <div>
            <h4 style="font-size: 1.25rem; font-weight: 800; color: #FFFFFF;">${data.title} Case Study</h4>
            <p style="font-size: 0.875rem; color: var(--text-muted);">Role: <strong>${data.role}</strong> | Category: <strong>${data.category}</strong></p>
          </div>
          ${data.url ? `<a href="${data.url}" target="_blank" rel="noopener" class="btn btn-accent" style="padding: 8px 18px; font-size: 0.8125rem;">Visit Live Project ↗</a>` : ''}
        </div>
      `;

      if (data.image) {
        html += `
          <div style="margin-bottom: 32px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">
            <img src="${data.image}" alt="${data.title} Cover" style="width: 100%; display: block;" />
          </div>
        `;
      }

      data.sections.forEach(sec => {
        html += `
          <div class="cs-section" style="margin-bottom: 24px; padding: 24px; background: #0F172A; border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.08);">
            <div class="cs-num" style="font-size: 0.75rem; font-weight: 800; color: #60A5FA; margin-bottom: 4px;">SECTION ${sec.num}</div>
            <h4 class="cs-title" style="font-size: 1.125rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">${sec.title}</h4>
            <p class="cs-text" style="font-size: 0.90625rem; color: #94A3B8; line-height: 1.6;">${sec.content}</p>
          </div>
        `;
      });

      modalBody.innerHTML = html;
    }

    openModal('caseStudyModal');
  };
});
