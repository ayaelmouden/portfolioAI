
/* ==========================================================
   PORTFOLIOAI — INTERACTIONS & CONTENT
   All profile content below is illustrative demo content.
   Replace it with verified details before publishing.
========================================================== */
"use strict";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* EDIT THIS OBJECT TO PERSONALIZE THE TEMPLATE */
const profile = {
  name: "Alex Morgan",
  email: "hello@example.com",
  location: "Your City, Country",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  scholar: "https://scholar.google.com/"
};

/* Demonstration content — fictional project concepts, not client claims. */
const expertise = [
  {icon:"✳",title:"Machine Learning",text:"Designing predictive systems that learn from structured data and uncover useful patterns.",tags:["Predictive modeling","Feature engineering","Evaluation"]},
  {icon:"◈",title:"Generative AI",text:"Exploring language models and generative workflows that make knowledge and creativity more accessible.",tags:["LLMs","RAG concepts","Prompt design"]},
  {icon:"⌘",title:"Computer Vision",text:"Building visual intelligence concepts for image understanding, detection and scene analysis.",tags:["Image analysis","Detection","OpenCV"]},
  {icon:"◎",title:"Data Science",text:"Turning raw information into clear insights through exploration, statistics and visualization.",tags:["Python","Analytics","Visualization"]}
];

const technologyGroups = [
  {label:"01 / LANGUAGES",title:"Programming",items:["Python","JavaScript","SQL","TypeScript"]},
  {label:"02 / INTELLIGENCE",title:"AI & Machine Learning",items:["PyTorch","TensorFlow","Scikit-learn","Hugging Face"]},
  {label:"03 / DATA",title:"Data & Analytics",items:["Pandas","NumPy","Jupyter","Power BI"]},
  {label:"04 / ENGINEERING",title:"Tools & Deployment",items:["Git","Docker","FastAPI","Cloud Platforms"]}
];

const skillList = ["Model evaluation","API integration","Data preprocessing","Experiment tracking","Responsive interfaces","Version control","Technical documentation","Problem solving"];

const projects = [
  {id:"01",category:"ml",label:"MACHINE LEARNING",title:"Predictive Pulse",subtitle:"Demand Forecasting Engine",glyph:"∿",description:"A concept forecasting platform that studies historical patterns to estimate future demand and support smarter planning.",detail:"The demonstration explores a complete machine-learning workflow: data preparation, feature creation, baseline comparison, model evaluation and an interactive results view. It is presented as a portfolio concept rather than a deployed commercial product.",tech:["Python","Pandas","Scikit-learn","Streamlit"],outcome:"Forecasting workflow concept"},
  {id:"02",category:"vision",label:"COMPUTER VISION",title:"Vision Sentinel",subtitle:"Visual Recognition System",glyph:"◎",description:"An image-analysis concept that detects and classifies visual elements in a camera or uploaded image.",detail:"The concept demonstrates how an image pipeline can combine preprocessing, object detection and confidence-aware result presentation. A production implementation would require a selected dataset, validation and deployment environment.",tech:["Python","OpenCV","PyTorch","YOLO"],outcome:"Visual AI prototype concept"},
  {id:"03",category:"genai",label:"GENERATIVE AI",title:"Knowledge Nexus",subtitle:"Retrieval-Augmented Assistant",glyph:"✧",description:"A conversational knowledge assistant concept that answers questions using a curated document collection.",detail:"This concept illustrates document ingestion, chunking, embeddings, retrieval and grounded response generation. It emphasizes source-aware answers and clear boundaries when information is missing.",tech:["Python","LLMs","Vector Search","FastAPI"],outcome:"RAG application concept"},
  {id:"04",category:"data",label:"DATA SCIENCE",title:"Insight Atlas",subtitle:"Interactive Analytics Studio",glyph:"⌁",description:"A visual analytics workspace for exploring datasets, spotting trends and communicating findings.",detail:"The project concept covers data cleaning, exploratory analysis, descriptive statistics and interactive charts. The interface is designed to make complex information easier to navigate.",tech:["Python","Pandas","NumPy","Plotly"],outcome:"Analytics dashboard concept"},
  {id:"05",category:"ml",label:"MACHINE LEARNING",title:"Signal Detect",subtitle:"Anomaly Detection Lab",glyph:"⌇",description:"An anomaly-detection concept that identifies unusual behavior in time-series or operational data.",detail:"The concept compares rule-based baselines with unsupervised approaches and visualizes flagged observations for human review. It is intended as a learning and demonstration project.",tech:["Python","Scikit-learn","NumPy","Matplotlib"],outcome:"Anomaly detection concept"},
  {id:"06",category:"genai",label:"GENERATIVE AI",title:"Creative Copilot",subtitle:"AI Workflow Companion",glyph:"✳",description:"A productivity assistant concept that transforms rough notes into structured plans, summaries and drafts.",detail:"The concept focuses on prompt orchestration, structured outputs, user review and a clean interface for editing generated content before use.",tech:["JavaScript","LLM API","Node.js","REST API"],outcome:"AI productivity concept"}
];

const experience = [
  {date:"2025 — PRESENT",title:"Independent AI Exploration",place:"Personal learning & portfolio projects",text:"Developing practical demonstrations across machine learning, data analysis and generative AI. Replace this sample with verified professional or project experience."},
  {date:"2024 — 2025",title:"Software & Data Foundations",place:"Academic and self-directed practice",text:"Building foundations in programming, databases, software design and analytical problem solving. Replace with your real institution or experience."}
];

const education = [
  {date:"2023 — 2026",title:"Computer Science / AI Studies",place:"University or Training Institution",text:"Add your real qualification, specialization and institution here."},
  {date:"2022 — 2023",title:"Foundational Studies",place:"School / Institution",text:"Add relevant academic background or prior training."}
];

const certifications = [
  {title:"Machine Learning Foundations",issuer:"Example learning pathway",date:"SAMPLE"},
  {title:"Deep Learning Essentials",issuer:"Example learning pathway",date:"SAMPLE"},
  {title:"Cloud & AI Fundamentals",issuer:"Example learning pathway",date:"SAMPLE"}
];

const research = [
  {tag:"RESEARCH THEME / 01",title:"Explainable AI",text:"How can intelligent systems communicate their reasoning in ways people can inspect and trust?"},
  {tag:"RESEARCH THEME / 02",title:"Efficient Model Systems",text:"Exploring practical trade-offs between model capability, inference cost, latency and accessibility."},
  {tag:"RESEARCH THEME / 03",title:"Human–AI Collaboration",text:"Designing workflows where AI augments human judgment instead of obscuring it."}
];

const services = [
  {n:"01",title:"AI Prototyping",text:"Turning an early idea into a testable intelligent product concept."},
  {n:"02",title:"Data Exploration",text:"Cleaning, analyzing and visualizing data to uncover meaningful signals."},
  {n:"03",title:"AI Integration",text:"Connecting language and machine-learning capabilities to web applications."},
  {n:"04",title:"Technical Consulting",text:"Helping teams evaluate approaches, tools and responsible implementation paths."}
];

/* Reveal animation */
let observer = null;

function setupReveal(){
  if(!("IntersectionObserver" in window)){
    $$(".reveal").forEach(el=>el.classList.add("is-visible"));
    return;
  }

  observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});

  $$(".reveal").forEach(el=>observer.observe(el));
}

function renderContent(){
  const expertiseRoot=$("#expertise-grid");
  if(expertiseRoot) expertiseRoot.innerHTML=expertise.map((item,i)=>`
    <article class="expertise-card reveal">
      <div class="card-top"><span class="card-number">0${i+1} / DOMAIN</span><span class="card-symbol">${item.icon}</span></div>
      <h3>${item.title}</h3><p>${item.text}</p>
      <div class="card-tags">${item.tags.map(tag=>`<span>${tag}</span>`).join("")}</div>
    </article>`).join("");

  const techRoot=$("#technology-groups");
  if(techRoot) techRoot.innerHTML=technologyGroups.map(group=>`
    <article class="technology-card"><span class="mono">${group.label}</span><h4>${group.title}</h4>
    <div class="technology-items">${group.items.map(item=>`<span>${item}</span>`).join("")}</div></article>`).join("");

  const skillRoot=$("#skill-strip");
  if(skillRoot) skillRoot.innerHTML=skillList.map(item=>`<span>${item}</span>`).join("");

  renderProjects("all");
  renderTimeline("#experience-list",experience);
  renderTimeline("#education-list",education);

  const certRoot=$("#certification-list");
  if(certRoot) certRoot.innerHTML=certifications.map(item=>`<article class="certification-item"><span>${item.date}</span><h4>${item.title}</h4><p>${item.issuer}</p></article>`).join("");

  const researchRoot=$("#research-grid");
  if(researchRoot) researchRoot.innerHTML=research.map(item=>`<article class="research-card"><span>${item.tag}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");

  const serviceRoot=$("#services-grid");
  if(serviceRoot) serviceRoot.innerHTML=services.map(item=>`<article class="service-card"><span>${item.n} / CAPABILITY</span><h4>${item.title}</h4><p>${item.text}</p></article>`).join("");

  $$(".reveal").forEach(el=>observer?.observe(el));
}

function renderTimeline(selector,items){
  const root=$(selector);
  if(!root)return;

  root.innerHTML=items.map(item=>`
    <article class="timeline-item">
      <span class="timeline-date">${item.date}</span>
      <h4>${item.title}</h4>
      <span class="timeline-place">${item.place}</span>
      <p>${item.text}</p>
    </article>`).join("");
}

function renderProjects(filter="all"){
  const root=$("#projects-grid");
  if(!root)return;

  const list=projects.filter(p=>filter==="all"||p.category===filter);

  root.innerHTML=list.map(p=>`
    <article class="project-card reveal">
      <div class="project-visual">
        <span class="project-id">${p.id} / 06</span>
        <span class="project-glyph">${p.glyph}</span>
        <span class="project-type">${p.label}</span>
      </div>
      <div class="project-body">
        <span class="project-category">${p.label}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tech">${p.tech.map(t=>`<span>${t}</span>`).join("")}</div>
        <button class="project-open" type="button" data-project="${p.id}">EXPLORE PROJECT <span>↗</span></button>
      </div>
    </article>`).join("");

  const count=$("#project-count");
  if(count) count.textContent=`${String(list.length).padStart(2,"0")} PROJECTS`;

  $$(".reveal",root).forEach(el=>observer?.observe(el));
}

function openProject(id){
  const project=projects.find(p=>p.id===id);
  if(!project)return;

  const content=$("#modal-content");
  const modal=$("#project-modal");
  if(!content||!modal)return;

  content.innerHTML=`
    <p class="section-index">${project.id} / ${project.label}</p>
    <h2 id="modal-title">${project.title}</h2>
    <p><strong>${project.subtitle}</strong></p>
    <p>${project.description}</p>
    <p>${project.detail}</p>
    <p><strong>Demonstration focus:</strong> ${project.outcome}</p>
    <div class="modal-tech">${project.tech.map(t=>`<span>${t}</span>`).join("")}</div>`;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("no-scroll");
}

function closeProject(){
  const modal=$("#project-modal");
  if(!modal)return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("no-scroll");
}

/* Theme toggle with persistence and graceful storage fallback */
function setupTheme(){
  const button=$("#theme-toggle");
  let saved=null;

  try{
    saved=localStorage.getItem("portfolioai-theme");
  }catch(e){}

  if(saved==="light")document.body.classList.add("light-theme");

  updateThemeButton();

  button?.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme");

    const theme=document.body.classList.contains("light-theme")?"light":"dark";

    try{
      localStorage.setItem("portfolioai-theme",theme);
    }catch(e){}

    updateThemeButton();
  });
}

function updateThemeButton(){
  const button=$("#theme-toggle");
  if(!button)return;

  const light=document.body.classList.contains("light-theme");

  button.textContent=light?"☾":"☼";
  button.setAttribute("aria-label",light?"Switch to dark theme":"Switch to light theme");

  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute("content",light?"#f4f6fc":"#070711");
}

/* Intro is started first and has a hard fallback */
function startIntro(){
  const intro=$("#intro");
  const bar=$("#intro-progress-bar");
  const percent=$("#intro-percent");
  const status=$("#intro-progress-text");
  const skip=$("#skip-intro");

  if(!intro)return;

  let finished=false,raf=0,start=0;

  const finish=()=>{
    if(finished)return;

    finished=true;
    cancelAnimationFrame(raf);

    intro.classList.add("hidden");
    document.body.classList.remove("intro-active");

    setTimeout(()=>intro.remove(),1100);
  };

  skip?.addEventListener("click",finish);

  const duration=prefersReducedMotion?500:800;

  const messages=[
    "INITIALIZING NEURAL NETWORK",
    "LOADING INTELLIGENCE MODULES",
    "SYNCHRONIZING DATA STREAMS",
    "SYSTEM READY"
  ];

  const tick=(now)=>{
    if(finished)return;
    if(!start)start=now;

    const progress=Math.min((now-start)/duration,1);
    const eased=1-Math.pow(1-progress,3);
    const value=Math.round(eased*100);

    if(bar)bar.style.width=`${value}%`;
    if(percent)percent.textContent=`${String(value).padStart(2,"0")}%`;

    if(status){
      status.textContent=messages[Math.min(3,Math.floor(progress*4))];
    }

    if(progress>=1){
      finish();
      return;
    }

    raf=requestAnimationFrame(tick);
  };

  const failsafe=window.setTimeout(finish,duration+1800);

  try{
    startIntroCanvas();
  }catch(error){
    console.warn("Intro canvas fallback:",error);
  }

  requestAnimationFrame(tick);

  skip?.addEventListener("click",()=>clearTimeout(failsafe),{once:true});
}

function startIntroCanvas(){
  const canvas=$("#intro-canvas");
  if(!canvas)return;

  const ctx=canvas.getContext("2d");
  if(!ctx)return;

  let w=0,h=0,particles=[];

  const resize=()=>{
    const dpr=Math.min(devicePixelRatio||1,2);

    w=innerWidth;
    h=innerHeight;

    canvas.width=w*dpr;
    canvas.height=h*dpr;

    ctx.setTransform(dpr,0,0,dpr,0,0);

    particles=Array.from(
      {length:Math.min(95,Math.floor(w/12))},
      ()=>({
        x:Math.random()*w,
        y:Math.random()*h,
        vx:(Math.random()-.5)*.28,
        vy:(Math.random()-.5)*.28,
        r:Math.random()*1.6+.4
      })
    );
  };

  resize();
  window.addEventListener("resize",resize);

  const draw=()=>{
    if(!canvas.isConnected)return;

    ctx.clearRect(0,0,w,h);

    const cx=w/2,cy=h/2;

    particles.forEach((p,i)=>{
      p.x+=p.vx;
      p.y+=p.vy;

      if(p.x<0||p.x>w)p.vx*=-1;
      if(p.y<0||p.y>h)p.vy*=-1;

      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle="rgba(90,220,245,.7)";
      ctx.fill();

      for(let j=i+1;j<particles.length;j++){
        const q=particles[j];
        const d=Math.hypot(p.x-q.x,p.y-q.y);

        if(d<105){
          ctx.beginPath();
          ctx.moveTo(p.x,p.y);
          ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=`rgba(75,190,230,${.13*(1-d/105)})`;
          ctx.stroke();
        }
      }
    });

    const radius=Math.min(w,h)*.19;

    ctx.beginPath();
    ctx.arc(cx,cy,radius,0,Math.PI*2);
    ctx.strokeStyle="rgba(80,220,245,.15)";
    ctx.lineWidth=1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx,cy,radius*.75,0,Math.PI*2);
    ctx.strokeStyle="rgba(170,120,255,.16)";
    ctx.stroke();

    requestAnimationFrame(draw);
  };

  requestAnimationFrame(draw);
}



/* ==========================================================
   PORTFOLIOAI — INTERACTIVE NEURAL BACKGROUND
   Animated particles + mouse interaction
========================================================== */

function startUniverse() {
  const canvas = $("#universe-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Keep the canvas behind the website content
  canvas.style.pointerEvents = "none";

  let w = 0;
  let h = 0;
  let points = [];
  let animationId = null;

  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false
  };

  const settings = {
    count: Math.min(100, Math.floor(window.innerWidth / 14)),
    connectionDistance: 125,
    mouseRadius: 190,
    mouseConnection: 180,
    speed: 0.32
  };

  /* Resize canvas */
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    w = window.innerWidth;
    h = Math.max(
      document.documentElement.scrollHeight,
      window.innerHeight
    );

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    settings.count = Math.min(100, Math.floor(w / 14));

    points = Array.from({ length: settings.count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * settings.speed,
      vy: (Math.random() - 0.5) * settings.speed,
      radius: Math.random() * 1.3 + 0.7,
      phase: Math.random() * Math.PI * 2
    }));
  }

  /* Track mouse movement */
  window.addEventListener("pointermove", (event) => {
    mouse.targetX = event.clientX;
    mouse.targetY = event.clientY + window.scrollY;
    mouse.active = true;
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    mouse.active = false;
  });

  window.addEventListener("blur", () => {
    mouse.active = false;
  });

  window.addEventListener("scroll", () => {
    if (mouse.active) {
      mouse.targetY = mouse.targetY;
    }
  }, { passive: true });

  window.addEventListener("resize", resize);

  resize();

  /* Draw the neural network */
  function draw() {
    if (!canvas.isConnected) {
      cancelAnimationFrame(animationId);
      return;
    }

    ctx.clearRect(0, 0, w, h);

    // Smooth mouse movement
    mouse.x += (mouse.targetX - mouse.x) * 0.12;
    mouse.y += (mouse.targetY - mouse.y) * 0.12;

    points.forEach((p, i) => {

      // Natural particle movement
      p.phase += 0.012;

      p.vx += Math.sin(p.phase) * 0.002;
      p.vy += Math.cos(p.phase) * 0.002;

      // Mouse interaction
      if (mouse.active) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.hypot(dx, dy);

        if (distance < settings.mouseRadius && distance > 1) {
          const force = (1 - distance / settings.mouseRadius) * 0.025;

          // Gentle attraction towards the cursor
          p.vx += (dx / distance) * force;
          p.vy += (dy / distance) * force;
        }
      }

      // Smooth velocity
      p.vx *= 0.995;
      p.vy *= 0.995;

      // Keep particles moving
      const maxSpeed = 0.8;

      p.vx = Math.max(-maxSpeed, Math.min(maxSpeed, p.vx));
      p.vy = Math.max(-maxSpeed, Math.min(maxSpeed, p.vy));

      p.x += p.vx;
      p.y += p.vy;

      // Wrap around screen edges
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(95, 210, 235, 0.65)";
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < points.length; j++) {
        const q = points[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const distance = Math.hypot(dx, dy);

        if (distance < settings.connectionDistance) {
          const opacity = (1 - distance / settings.connectionDistance) * 0.16;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(85, 190, 230, ${opacity})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Connect particles to the mouse
      if (mouse.active) {
        const distance = Math.hypot(
          mouse.x - p.x,
          mouse.y - p.y
        );

        if (distance < settings.mouseConnection) {
          const opacity =
            (1 - distance / settings.mouseConnection) * 0.38;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);

          ctx.strokeStyle = `rgba(90, 220, 245, ${opacity})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    });

    // Soft light around the cursor
    if (mouse.active) {
      const glow = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 125
      );

      glow.addColorStop(0, "rgba(70, 205, 245, 0.07)");
      glow.addColorStop(1, "rgba(70, 205, 245, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 125, 0, Math.PI * 2);
      ctx.fill();
    }

    animationId = requestAnimationFrame(draw);
  }

  if (!prefersReducedMotion) {
    animationId = requestAnimationFrame(draw);
  }
}


/* Ambient neural particle field 
function startUniverse(){
  const canvas=$("#universe-canvas");
  if(!canvas)return;

  const ctx=canvas.getContext("2d");
  if(!ctx)return;

  let w=0,h=0,points=[];

  const resize=()=>{
    const dpr=Math.min(devicePixelRatio||1,2);

    w=innerWidth;
    h=innerHeight;

    canvas.width=w*dpr;
    canvas.height=h*dpr;

    ctx.setTransform(dpr,0,0,dpr,0,0);

    points=Array.from(
      {length:Math.min(75,Math.floor(w/18))},
      ()=>({
        x:Math.random()*w,
        y:Math.random()*h,
        vx:(Math.random()-.5)*.18,
        vy:(Math.random()-.5)*.18
      })
    );
  };

  resize();
  window.addEventListener("resize",resize);

  const draw=()=>{
    if(!canvas.isConnected)return;

    ctx.clearRect(0,0,w,h);

    points.forEach((p,i)=>{
      p.x+=p.vx;
      p.y+=p.vy;

      if(p.x<0||p.x>w)p.vx*=-1;
      if(p.y<0||p.y>h)p.vy*=-1;

      ctx.beginPath();
      ctx.arc(p.x,p.y,1.1,0,Math.PI*2);
      ctx.fillStyle="rgba(95,190,220,.45)";
      ctx.fill();

      for(let j=i+1;j<points.length;j++){
        const q=points[j];
        const d=Math.hypot(p.x-q.x,p.y-q.y);

        if(d<115){
          ctx.beginPath();
          ctx.moveTo(p.x,p.y);
          ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=`rgba(105,160,220,${.07*(1-d/115)})`;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(draw);
  };

  if(!prefersReducedMotion)requestAnimationFrame(draw);
}

/* Navigation and controls */
function setupNavigation(){
  const menu=$("#mobile-menu");
  const open=$("#menu-toggle");
  const close=$("#close-menu");

  const closeMenu=()=>{
    menu?.classList.remove("active");
    open?.setAttribute("aria-expanded","false");
    document.body.classList.remove("no-scroll");
  };

  open?.addEventListener("click",()=>{
    menu?.classList.add("active");
    open.setAttribute("aria-expanded","true");
    document.body.classList.add("no-scroll");
  });

  close?.addEventListener("click",closeMenu);

  $$("#mobile-menu a").forEach(a=>a.addEventListener("click",closeMenu));

  document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){
      closeMenu();
      closeProject();
    }
  });

  $$(".nav-links a").forEach(a=>{
    a.addEventListener("click",()=>{
      $$(".nav-links a").forEach(x=>x.classList.remove("active"));
      a.classList.add("active");
    });
  });

  const back=$("#back-to-top");

  window.addEventListener("scroll",()=>{
    back?.classList.toggle("visible",window.scrollY>550);
  },{passive:true});

  back?.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  });
}

/* Filter + project detail modal */
function setupProjects(){
  $("#project-filters")?.addEventListener("click",e=>{
    const button=e.target.closest("[data-filter]");
    if(!button)return;

    $$(".filter-btn").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");

    renderProjects(button.dataset.filter);
  });

  $("#projects-grid")?.addEventListener("click",e=>{
    const button=e.target.closest("[data-project]");
    if(button)openProject(button.dataset.project);
  });

  $("#modal-close")?.addEventListener("click",closeProject);

  $$(".modal-backdrop,[data-close-modal]").forEach(el=>{
    el.addEventListener("click",closeProject);
  });
}

/* Contact form uses mailto: no backend is claimed */
function setupContact(){
  $("#contact-form")?.addEventListener("submit",e=>{
    e.preventDefault();

    const data=new FormData(e.currentTarget);

    const subject=encodeURIComponent(data.get("subject"));
    const body=encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );

    const note=$("#form-note");
    if(note)note.textContent="Opening your email application…";

    window.location.href=`mailto:${profile.email}?subject=${subject}&body=${body}`;
  });
}

function applyProfile(){
  const heroName=$("#hero-name");
  if(heroName)heroName.textContent=profile.name;

  const contactEmail=$("#contact-email");
  if(contactEmail){
    contactEmail.textContent=profile.email;
    contactEmail.href=`mailto:${profile.email}`;
  }

  const contactLocation=$("#contact-location");
  if(contactLocation)contactLocation.textContent=profile.location;

  const linkedin=$("#linkedin-link");
  if(linkedin)linkedin.href=profile.linkedin;

  const github=$("#github-link");
  if(github)github.href=profile.github;

  const scholar=$("#scholar-link");
  if(scholar)scholar.href=profile.scholar;

  const year=$("#year");
  if(year)year.textContent=new Date().getFullYear();

  const author=$('meta[name="author"]');
  if(author)author.content=profile.name;

  document.title=`${profile.name} — PortfolioAI`;
}

/* Safe startup */
function safeRun(label,fn){
  try{
    fn();
  }catch(error){
    console.error(`[PortfolioAI] ${label} failed:`,error);
  }
}

function init(){
  startIntro();

  safeRun("profile",applyProfile);
  safeRun("theme",setupTheme);

  // Create the observer before rendering dynamic sections.
  safeRun("reveal",setupReveal);

  safeRun("content",renderContent);
  safeRun("navigation",setupNavigation);
  safeRun("projects",setupProjects);
  safeRun("contact",setupContact);
  safeRun("neural background",startUniverse);
}

if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",init,{once:true});
}else{
  init();
}
