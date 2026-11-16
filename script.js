
/* ==========================================================
   PORTFOLIOAI — INTERACTIONS & CONTENT
========================================================== */

"use strict";

/* ==========================================================
   HELPERS
========================================================== */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* ==========================================================
   PROFILE — PERSONALIZE BEFORE PUBLISHING
========================================================== */

const profile = {
  name: "Votre nom",
  email: "hello@example.com",
  location: "Votre ville, votre pays",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  scholar: "https://scholar.google.com/"
};

/* ==========================================================
   CONTENT
========================================================== */

const expertise = [
  {
    icon: "✳",
    title: "Machine Learning",
    text: "Designing predictive systems that learn from structured data and uncover useful patterns.",
    tags: ["Predictive modeling", "Feature engineering", "Evaluation"]
  },
  {
    icon: "◈",
    title: "Generative AI",
    text: "Exploring language models and generative workflows that make knowledge and creativity more accessible.",
    tags: ["LLMs", "RAG concepts", "Prompt design"]
  },
  {
    icon: "⌘",
    title: "Computer Vision",
    text: "Building visual intelligence concepts for image understanding, detection and scene analysis.",
    tags: ["Image analysis", "Detection", "OpenCV"]
  },
  {
    icon: "◎",
    title: "Data Science",
    text: "Turning raw information into clear insights through exploration, statistics and visualization.",
    tags: ["Python", "Analytics", "Visualization"]
  }
];

const technologyGroups = [
  {
    label: "01 / LANGUAGES",
    title: "Programming",
    items: ["Python", "JavaScript", "SQL", "TypeScript"]
  },
  {
    label: "02 / INTELLIGENCE",
    title: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"]
  },
  {
    label: "03 / DATA",
    title: "Data & Analytics",
    items: ["Pandas", "NumPy", "Jupyter", "Power BI"]
  },
  {
    label: "04 / ENGINEERING",
    title: "Tools & Deployment",
    items: ["Git", "Docker", "FastAPI", "Cloud Platforms"]
  }
];

const skillList = [
  "Model evaluation",
  "API integration",
  "Data preprocessing",
  "Experiment tracking",
  "Responsive interfaces",
  "Version control",
  "Technical documentation",
  "Problem solving"
];

const projects = [
  {
    id: "01",
    category: "ml",
    label: "MACHINE LEARNING",
    title: "Predictive Pulse",
    subtitle: "Demand Forecasting Engine",
    glyph: "∿",
    description: "A concept forecasting platform that studies historical patterns to estimate future demand and support smarter planning.",
    detail: "The demonstration explores a complete machine-learning workflow: data preparation, feature creation, baseline comparison, model evaluation and an interactive results view. It is presented as a portfolio concept rather than a deployed commercial product.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    outcome: "Forecasting workflow concept"
  },
  {
    id: "02",
    category: "vision",
    label: "COMPUTER VISION",
    title: "Vision Sentinel",
    subtitle: "Visual Recognition System",
    glyph: "◎",
    description: "An image-analysis concept that detects and classifies visual elements in a camera or uploaded image.",
    detail: "The concept demonstrates how an image pipeline can combine preprocessing, object detection and confidence-aware result presentation. A production implementation would require a selected dataset, validation and deployment environment.",
    tech: ["Python", "OpenCV", "PyTorch", "YOLO"],
    outcome: "Visual AI prototype concept"
  },
  {
    id: "03",
    category: "genai",
    label: "GENERATIVE AI",
    title: "Knowledge Nexus",
    subtitle: "Retrieval-Augmented Assistant",
    glyph: "✧",
    description: "A conversational knowledge assistant concept that answers questions using a curated document collection.",
    detail: "This concept illustrates document ingestion, chunking, embeddings, retrieval and grounded response generation. It emphasizes source-aware answers and clear boundaries when information is missing.",
    tech: ["Python", "LLMs", "Vector Search", "FastAPI"],
    outcome: "RAG application concept"
  },
  {
    id: "04",
    category: "data",
    label: "DATA SCIENCE",
    title: "Insight Atlas",
    subtitle: "Interactive Analytics Studio",
    glyph: "⌁",
    description: "A visual analytics workspace for exploring datasets, spotting trends and communicating findings.",
    detail: "The project concept covers data cleaning, exploratory analysis, descriptive statistics and interactive charts. The interface is designed to make complex information easier to navigate.",
    tech: ["Python", "Pandas", "NumPy", "Plotly"],
    outcome: "Analytics dashboard concept"
  },
  {
    id: "05",
    category: "ml",
    label: "MACHINE LEARNING",
    title: "Signal Detect",
    subtitle: "Anomaly Detection Lab",
    glyph: "⌇",
    description: "An anomaly-detection concept that identifies unusual behavior in time-series or operational data.",
    detail: "The concept compares rule-based baselines with unsupervised approaches and visualizes flagged observations for human review. It is intended as a learning and demonstration project.",
    tech: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
    outcome: "Anomaly detection concept"
  },
  {
    id: "06",
    category: "genai",
    label: "GENERATIVE AI",
    title: "Creative Copilot",
    subtitle: "AI Workflow Companion",
    glyph: "✳",
    description: "A productivity assistant concept that transforms rough notes into structured plans, summaries and drafts.",
    detail: "The concept focuses on prompt orchestration, structured outputs, user review and a clean interface for editing generated content before use.",
    tech: ["JavaScript", "LLM API", "Node.js", "REST API"],
    outcome: "AI productivity concept"
  }
];

const experience = [
  {
    date: "2025 — PRESENT",
    title: "Independent AI Exploration",
    place: "Personal learning & portfolio projects",
    text: "Developing practical demonstrations across machine learning, data analysis and generative AI. Replace this sample with verified professional or project experience."
  },
  {
    date: "2024 — 2025",
    title: "Software & Data Foundations",
    place: "Academic and self-directed practice",
    text: "Building foundations in programming, databases, software design and analytical problem solving. Replace with your real institution or experience."
  }
];

const education = [
  {
    date: "2023 — 2026",
    title: "Computer Science / AI Studies",
    place: "University or Training Institution",
    text: "Add your real qualification, specialization and institution here."
  },
  {
    date: "2022 — 2023",
    title: "Foundational Studies",
    place: "School / Institution",
    text: "Add relevant academic background or prior training."
  }
];

const certifications = [
  {
    title: "Machine Learning Foundations",
    issuer: "Example learning pathway",
    date: "SAMPLE"
  },
  {
    title: "Deep Learning Essentials",
    issuer: "Example learning pathway",
    date: "SAMPLE"
  },
  {
    title: "Cloud & AI Fundamentals",
    issuer: "Example learning pathway",
    date: "SAMPLE"
  }
];

const research = [
  {
    tag: "RESEARCH THEME / 01",
    title: "Explainable AI",
    text: "How can intelligent systems communicate their reasoning in ways people can inspect and trust?"
  },
  {
    tag: "RESEARCH THEME / 02",
    title: "Efficient Model Systems",
    text: "Exploring practical trade-offs between model capability, inference cost, latency and accessibility."
  },
  {
    tag: "RESEARCH THEME / 03",
    title: "Human–AI Collaboration",
    text: "Designing workflows where AI augments human judgment instead of obscuring it."
  }
];

const services = [
  {
    n: "01",
    title: "AI Prototyping",
    text: "Turning an early idea into a testable intelligent product concept."
  },
  {
    n: "02",
    title: "Data Exploration",
    text: "Cleaning, analyzing and visualizing data to uncover meaningful signals."
  },
  {
    n: "03",
    title: "AI Integration",
    text: "Connecting language and machine-learning capabilities to web applications."
  },
  {
    n: "04",
    title: "Technical Consulting",
    text: "Helping teams evaluate approaches, tools and responsible implementation paths."
  }
];

/* ==========================================================
   REVEAL ANIMATIONS
========================================================== */

let observer = null;

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal").forEach(el => {
      el.classList.add("is-visible");
    });
    return;
  }

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  $$(".reveal").forEach(el => observer.observe(el));
}

function observeReveal(root = document) {
  const elements = $$(".reveal", root);

  if (!("IntersectionObserver" in window) || !observer) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================
   RENDER CONTENT
========================================================== */

function renderContent() {
  const expertiseRoot = $("#expertise-grid");

  if (expertiseRoot) {
    expertiseRoot.innerHTML = expertise.map((item, i) => `
      <article class="expertise-card reveal">
        <div class="card-top">
          <span class="card-number">0${i + 1} / DOMAIN</span>
          <span class="card-symbol">${item.icon}</span>
        </div>

        <h3>${item.title}</h3>
        <p>${item.text}</p>

        <div class="card-tags">
          ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      </article>
    `).join("");
  }

  const techRoot = $("#technology-groups");

  if (techRoot) {
    techRoot.innerHTML = technologyGroups.map(group => `
      <article class="technology-card">
        <span class="mono">${group.label}</span>
        <h4>${group.title}</h4>

        <div class="technology-items">
          ${group.items.map(item => `<span>${item}</span>`).join("")}
        </div>
      </article>
    `).join("");
  }

  const skillRoot = $("#skill-strip");

  if (skillRoot) {
    skillRoot.innerHTML = skillList
      .map(item => `<span>${item}</span>`)
      .join("");
  }

  renderProjects("all");

  renderTimeline("#experience-list", experience);
  renderTimeline("#education-list", education);

  const certRoot = $("#certification-list");

  if (certRoot) {
    certRoot.innerHTML = certifications.map(item => `
      <article class="certification-item">
        <span>${item.date}</span>
        <h4>${item.title}</h4>
        <p>${item.issuer}</p>
      </article>
    `).join("");
  }

  const researchRoot = $("#research-grid");

  if (researchRoot) {
    researchRoot.innerHTML = research.map(item => `
      <article class="research-card">
        <span>${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  const serviceRoot = $("#services-grid");

  if (serviceRoot) {
    serviceRoot.innerHTML = services.map(item => `
      <article class="service-card">
        <span>${item.n} / CAPABILITY</span>
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  observeReveal();
}

/* ==========================================================
   TIMELINE
========================================================== */

function renderTimeline(selector, items) {
  const root = $(selector);
  if (!root) return;

  root.innerHTML = items.map(item => `
    <article class="timeline-item">
      <span class="timeline-date">${item.date}</span>
      <h4>${item.title}</h4>
      <span class="timeline-place">${item.place}</span>
      <p>${item.text}</p>
    </article>
  `).join("");
}

/* ==========================================================
   PROJECTS
========================================================== */

function renderProjects(filter = "all") {
  const root = $("#projects-grid");
  if (!root) return;

  const list = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  root.innerHTML = list.map(project => `
    <article class="project-card reveal">

      <div class="project-visual">
        <span class="project-id">${project.id} / 06</span>
        <span class="project-glyph">${project.glyph}</span>
        <span class="project-type">${project.label}</span>
      </div>

      <div class="project-body">

        <span class="project-category">${project.label}</span>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="project-tech">
          ${project.tech.map(tech => `<span>${tech}</span>`).join("")}
        </div>

        <button
          class="project-open"
          type="button"
          data-project="${project.id}"
        >
          EXPLORE PROJECT <span>↗</span>
        </button>

      </div>

    </article>
  `).join("");

  const count = $("#project-count");

  if (count) {
    count.textContent =
      `${String(list.length).padStart(2, "0")} PROJECTS`;
  }

  observeReveal(root);
}

/* ==========================================================
   PROJECT MODAL
========================================================== */

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;

  const content = $("#modal-content");
  const modal = $("#project-modal");

  if (!content || !modal) return;

  content.innerHTML = `
    <p class="section-index">
      ${project.id} / ${project.label}
    </p>

    <h2 id="modal-title">${project.title}</h2>

    <p><strong>${project.subtitle}</strong></p>

    <p>${project.description}</p>

    <p>${project.detail}</p>

    <p>
      <strong>Demonstration focus:</strong>
      ${project.outcome}
    </p>

    <div class="modal-tech">
      ${project.tech.map(tech => `<span>${tech}</span>`).join("")}
    </div>
  `;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  $("#modal-close")?.focus();
}

function closeProject() {
  const modal = $("#project-modal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

/* ==========================================================
   THEME TOGGLE
========================================================== */

function setupTheme() {
  const button = $("#theme-toggle");
  let saved = null;

  try {
    saved = localStorage.getItem("portfolioai-theme");
  } catch (error) {
    console.warn("Theme storage unavailable:", error);
  }

  if (saved === "light") {
    document.body.classList.add("light-theme");
  }

  updateThemeButton();

  button?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";

    try {
      localStorage.setItem("portfolioai-theme", theme);
    } catch (error) {
      console.warn("Could not save theme:", error);
    }

    updateThemeButton();
  });
}

function updateThemeButton() {
  const button = $("#theme-toggle");
  if (!button) return;

  const light = document.body.classList.contains("light-theme");

  button.textContent = light ? "☾" : "☼";

  button.setAttribute(
    "aria-label",
    light ? "Switch to dark theme" : "Switch to light theme"
  );

  $('meta[name="theme-color"]')?.setAttribute(
    "content",
    light ? "#f4f6fc" : "#070711"
  );
}

/* ==========================================================
   INTRODUCTION — FIXED TRANSITION TO HOME
========================================================== */

function startIntro() {
  const intro = $("#intro");
  const mainSite = $("#main-site");
  const bar = $("#intro-progress-bar");
  const percent = $("#intro-percent");
  const status = $("#intro-progress-text");
  const skip = $("#skip-intro");

  if (!intro) {
    mainSite?.classList.add("is-ready");
    document.body.classList.remove("intro-active");
    return;
  }

  let finished = false;
  let raf = 0;
  let start = 0;
  let failsafe = 0;

  const duration = prefersReducedMotion ? 300 : 1800;

  const finish = () => {
    if (finished) return;

    finished = true;

    cancelAnimationFrame(raf);
    clearTimeout(failsafe);

    /* Make the main website visible */
    if (mainSite) {
      mainSite.classList.add("is-ready");
    }

    /* Hide intro */
    intro.classList.add("hidden");

    /* Activate the main website background */
    document.body.classList.remove("intro-active");

    /* Always return to the top */
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });

    /* Remove intro after its fade-out */
    window.setTimeout(() => {
      intro.remove();
    }, 750);
  };

  skip?.addEventListener("click", finish);

  const messages = [
    "INITIALIZING NEURAL NETWORK",
    "LOADING INTELLIGENCE MODULES",
    "SYNCHRONIZING DATA STREAMS",
    "SYSTEM READY"
  ];

  const tick = now => {
    if (finished) return;

    if (!start) start = now;

    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(eased * 100);

    if (bar) {
      bar.style.width = `${value}%`;
    }

    if (percent) {
      percent.textContent = `${String(value).padStart(2, "0")}%`;
    }

    if (status) {
      status.textContent =
        messages[Math.min(3, Math.floor(progress * 4))];
    }

    if (progress >= 1) {
      finish();
      return;
    }

    raf = requestAnimationFrame(tick);
  };

  failsafe = window.setTimeout(finish, duration + 2500);

  try {
    startIntroCanvas();
  } catch (error) {
    console.warn("Intro canvas fallback:", error);
  }

  raf = requestAnimationFrame(tick);
}

/* ==========================================================
   INTRO CANVAS
========================================================== */

function startIntroCanvas() {
  const canvas = $("#intro-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let particles = [];
  let animationId = 0;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    particles = Array.from(
      { length: Math.min(95, Math.floor(w / 12)) },
      () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.4
      })
    );
  };

  resize();

  window.addEventListener("resize", resize);

  const draw = () => {
    if (!canvas.isConnected) {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      return;
    }

    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;

    particles.forEach((particle, i) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > w) particle.vx *= -1;
      if (particle.y < 0 || particle.y > h) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(90,220,245,.7)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j];

        const distance = Math.hypot(
          particle.x - other.x,
          particle.y - other.y
        );

        if (distance < 105) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);

          ctx.strokeStyle =
            `rgba(75,190,230,${0.13 * (1 - distance / 105)})`;

          ctx.stroke();
        }
      }
    });

    const radius = Math.min(w, h) * 0.19;

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(80,220,245,.15)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.75, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(170,120,255,.16)";
    ctx.stroke();

    animationId = requestAnimationFrame(draw);
  };

  if (!prefersReducedMotion) {
    animationId = requestAnimationFrame(draw);
  }
}

/* ==========================================================
   INTERACTIVE NEURAL BACKGROUND
========================================================== */

function startUniverse() {
  const canvas = $("#universe-canvas");

  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let animationId = 0;

  const mouse = {
    x: -1000,
    y: -1000,
    active: false
  };

  const settings = {
    particleCount: 0,
    connectionDistance: 145,
    mouseRadius: 190,
    mouseConnection: 210,
    speed: 0.38
  };

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    settings.particleCount = Math.min(
      95,
      Math.max(35, Math.floor(width / 14))
    );

    particles = Array.from(
      { length: settings.particleCount },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * settings.speed,
        vy: (Math.random() - 0.5) * settings.speed,
        radius: Math.random() * 1.5 + 0.7,
        phase: Math.random() * Math.PI * 2
      })
    );
  }

  function handlePointerMove(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.active = true;
  }

  function handlePointerLeave() {
    mouse.active = false;
    mouse.x = -1000;
    mouse.y = -1000;
  }

  window.addEventListener("pointermove", handlePointerMove, {
    passive: true
  });

  document.addEventListener("pointerleave", handlePointerLeave);
  window.addEventListener("blur", handlePointerLeave);
  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();

  function animate() {
    if (!canvas.isConnected) {
      cancelAnimationFrame(animationId);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    const isLight = document.body.classList.contains("light-theme");

    const particleColor = isLight
      ? "rgba(55, 130, 180, 0.65)"
      : "rgba(95, 220, 245, 0.75)";

    const lineColor = isLight
      ? "75, 125, 185"
      : "73, 205, 245";

    const mouseColor = isLight
      ? "125, 90, 210"
      : "167, 123, 255";

    particles.forEach((particle, index) => {
      particle.phase += 0.012;

      particle.vx += Math.sin(particle.phase) * 0.002;
      particle.vy += Math.cos(particle.phase) * 0.002;

      if (mouse.active) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.hypot(dx, dy);

        if (distance < settings.mouseRadius && distance > 1) {
          const force =
            (1 - distance / settings.mouseRadius) * 0.035;

          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }
      }

      particle.vx *= 0.995;
      particle.vy *= 0.995;

      const maxSpeed = 1.05;
      const speed = Math.hypot(particle.vx, particle.vy);

      if (speed > maxSpeed) {
        particle.vx = (particle.vx / speed) * maxSpeed;
        particle.vy = (particle.vy / speed) * maxSpeed;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;

      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = particleColor;
      ctx.fill();

      for (let j = index + 1; j < particles.length; j++) {
        const other = particles[j];

        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);

        if (distance < settings.connectionDistance) {
          const opacity =
            (1 - distance / settings.connectionDistance) * 0.22;

          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);

          ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      if (mouse.active) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.hypot(dx, dy);

        if (distance < settings.mouseConnection) {
          const opacity =
            (1 - distance / settings.mouseConnection) * 0.7;

          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);

          ctx.strokeStyle = `rgba(${mouseColor}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    if (mouse.active) {
      const glow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        130
      );

      glow.addColorStop(
        0,
        isLight
          ? "rgba(100, 130, 230, 0.10)"
          : "rgba(73, 205, 245, 0.12)"
      );

      glow.addColorStop(1, "rgba(73, 205, 245, 0)");

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 130, 0, Math.PI * 2);

      ctx.fillStyle = glow;
      ctx.fill();
    }

    animationId = requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(animationId);

    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("pointermove", handlePointerMove);

    document.removeEventListener("pointerleave", handlePointerLeave);
    window.removeEventListener("blur", handlePointerLeave);
  }, { once: true });
}

/* ==========================================================
   NAVIGATION AND CONTROLS
========================================================== */

function setupNavigation() {
  const menu = $("#mobile-menu");
  const open = $("#menu-toggle");
  const close = $("#close-menu");

  const closeMenu = () => {
    menu?.classList.remove("active");
    open?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  open?.addEventListener("click", () => {
    menu?.classList.add("active");
    open.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  });

  close?.addEventListener("click", closeMenu);

  $$("#mobile-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
      closeProject();
    }
  });

  $$(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      $$(".nav-links a").forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  const back = $("#back-to-top");

  window.addEventListener("scroll", () => {
    back?.classList.toggle("visible", window.scrollY > 550);
  }, {
    passive: true
  });

  back?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  });
}

/* ==========================================================
   PROJECT FILTERS AND MODAL EVENTS
========================================================== */

function setupProjects() {
  $("#project-filters")?.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    $$(".filter-btn").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    renderProjects(button.dataset.filter);
  });

  $("#projects-grid")?.addEventListener("click", event => {
    const button = event.target.closest("[data-project]");
    if (!button) return;

    openProject(button.dataset.project);
  });

  $("#modal-close")?.addEventListener("click", closeProject);

  $$(".modal-backdrop, [data-close-modal]").forEach(element => {
    element.addEventListener("click", closeProject);
  });
}

/* ==========================================================
   CONTACT FORM
========================================================== */

function setupContact() {
  $("#contact-form")?.addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const mailSubject = encodeURIComponent(subject);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    const note = $("#form-note");

    if (note) {
      note.textContent = "Opening your email application…";
    }

    window.location.href =
      `mailto:${profile.email}?subject=${mailSubject}&body=${body}`;
  });
}

/* ==========================================================
   APPLY PROFILE
========================================================== */

function applyProfile() {
  const heroName = $("#hero-name");

  if (heroName) {
    heroName.textContent = profile.name;
  }

  const contactEmail = $("#contact-email");

  if (contactEmail) {
    contactEmail.textContent = profile.email;
    contactEmail.href = `mailto:${profile.email}`;
  }

  const contactLocation = $("#contact-location");

  if (contactLocation) {
    contactLocation.textContent = profile.location;
  }

  const linkedin = $("#linkedin-link");

  if (linkedin) {
    linkedin.href = profile.linkedin;
  }

  const github = $("#github-link");

  if (github) {
    github.href = profile.github;
  }

  const scholar = $("#scholar-link");

  if (scholar) {
    scholar.href = profile.scholar;
  }

  const year = $("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const author = $('meta[name="author"]');

  if (author) {
    author.content = profile.name;
  }

  document.title = `${profile.name} — PortfolioAI`;
}

/* ==========================================================
   SAFE INITIALIZATION
========================================================== */

function safeRun(label, callback) {
  try {
    callback();
  } catch (error) {
    console.error(`[PortfolioAI] ${label} failed:`, error);
  }
}

function init() {
  safeRun("intro", startIntro);

  safeRun("profile", applyProfile);
  safeRun("theme", setupTheme);

  safeRun("reveal", setupReveal);

  safeRun("content", renderContent);
  safeRun("navigation", setupNavigation);
  safeRun("projects", setupProjects);
  safeRun("contact", setupContact);
  safeRun("neural background", startUniverse);
}

/* ==========================================================
   START APPLICATION
========================================================== */

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, {
    once: true
  });
} else {
  init();
}
