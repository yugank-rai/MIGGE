/* ============================================================
   MAGGE — Campus E-Magazine
   script.js
   ============================================================ */

/* ============================
   DATA
   ============================ */
const ARTICLES = [
  {
    id: 1, cat: 'academic',
    title: 'Workshop on Drone and IOT Technologyies Held at IIIT Bhagalpur',
    excerpt: 'The two-day workshop, attended by 150 students, featured hands-on sessions on drone assembly, IoT sensor integration, and real-world applications in agriculture and disaster management.',
    author: 'Manjeet Kumar', date: 'Apr 3, 2026', read: '7 min',
    image: 'WhatsApp Image 2026-04-12 at 4.23.07 PM.jpeg', bg: '#1a2a3a',
    body: `<p>The workshop was organized by the Department of Mechatronics and Automation Engineering and was attended by students from various disciplines.</p>
<p>"The hands-on experience was invaluable," said one participant. "It really helped solidify the theoretical concepts we've been learning."</p>
<p>"We always knew our students were exceptional, but this surpasses anything we imagined," said Professor Dr Tameshwer Nath Tiwari, Head of the CS Department, who mentored the project.</p>
<p>"The project was supported by a grant from the Department of Science and Technology (DST), Government of India, and was co-funded through the university's research endowment.</p>`

  },
  {
    id: 2, cat: 'sports',
    title: 'Football Team Clinches State Title After 12-Year Wait',
    excerpt: 'A nail-biting 3-2 final against rival IIT Patna saw our team lift the trophy in front of 1,000 roaring fans.',
    author: 'Aditya Dash', date: 'Apr 1, 2026', read: '4 min',
    image: 'WhatsApp Image 2026-04-12 at 4.07.01 PM.jpeg', bg: '#3a1a10',
    body: `<p>After 12 long years, IIIT Bhagalpur Football  team brought the state championship trophy home with a heart-stopping 3-2 victory against IIT Patna in the final.</p>
<p>Captain Yugank Rai was the star of the night, Defending multiple goals and blocking shots and 2 assists in what commentators are calling one of the greatest individual performances in the tournament's history.</p>
<p>"I've worked for this moment my whole life. This one's for the whole Institute," said Yugank, visibly emotional at the post-match press conference.</p>
<p>The team dedicated their win to their retiring head coach Mr.Aditya Dash, who spent 5 seasons with the program. Dash, fighting back tears, called it "the most beautiful send-off a coach could ask for."</p>
<p>The Institute administration announced a special felicitation ceremony will be held next week in the Main Auditorium.</p>`
  },
  {
    id: 3, cat: 'culture',
    title: 'Enyugma 2026 Breaks All Records — 34 Colleges Descend on Campus',
    excerpt: 'The three-day cultural extravaganza drew 12,000 visitors, featured 200+ performances, and raised ₹8L for the campus charity fund.',
    author: 'Anupam', date: 'Mar 28, 2026', read: '5 min',
    image: 'WhatsApp Image 2026-04-12 at 1.40.46 PM.jpeg', bg: '#2a1a35',
    body: `<p>Enyugma 2026 concluded on Sunday night with a spectacular closing ceremony that saw acclaimed indie artist Prateek Kuhad perform to a packed amphitheatre. The three-day cultural festival, themed "Game of Thrones" (Colors and Dimensions), was the largest in the event's 8-year history.</p>
<p>Participation came from 34 colleges across five states, competing in 48 events ranging from classical Bharatanatyam to electronic music production, street photography to robotics showcases.</p>
<p>The festival also raised ₹8,00,000 for the Campus Charity Fund through ticket sales, merchandise, and donations — a record amount that will be channelled toward student scholarships and mental health resources.</p>
<p>The drama club's flash mob, which featured 80 performers moving through the central quad at noon on Day 2, went viral on social media with over 2 million views within 48 hours.</p>
<p>"Enyugma is our institute's heartbeat," said Institute director Dr. Madhusudan Sir. "This year, it truly became something extraordinary."</p>`
  },
  {
    id: 4, cat: 'tech',
    title: 'Innovation Lab Opens Doors — Free for All Students',
    excerpt: 'The ₹2.4-crore lab, funded by alumni, offers 3D printers, laser cutters, VR rigs, and weekly hackathons open to every student.',
    author: 'Dr. K. Iyer', date: 'Mar 25, 2026', read: '6 min',
    image: 'Gemini_Generated_Image_bs0g95bs0g95bs0g.png', bg: '#1a2a1a',
    body: `<p>IIIT Bhagalpur set to build its ₹2.4-crore Innovation Lab within the next six months, opening a state-of-the-art space where any student — regardless of discipline — can build, prototype, and create.</p>
<p>The 4,000 sq ft facility houses six industrial-grade 3D printers, two laser cutters, a suite of VR/AR development rigs, soldering stations, CNC routers, and high-performance computing workstations. The lab also has dedicated zones for electronics, textile prototyping, and a podcast/video studio.</p>
<p>Crucially, all facilities are available to students free of charge, with booking available through the university's app. The lab will run weekly open hackathons on Saturday evenings, with themes announced at the start of each week.</p>
<p>"We want every student — from literature to law to engineering — to have a place where they can make their ideas real," said Director , Mr. Madhusudan Sir.</p>
<p>The lab was funded through a dedicated alumni drive that saw 340 graduates contribute over 18 months. A donor wall at the entrance honours each contributor.</p>`
  },
  {
    id: 5, cat: 'events',
    title: 'TedX IIIT Bhagalpur: "Ideas That Move Us" Wows Audience',
    excerpt: 'The sold-out event featured 12 speakers from diverse fields, including a climate scientist, a tech entrepreneur, and a Paralympic athlete.',
    author: 'Priya Singh', date: 'Apr 4, 2026', read: '3 min',
    image: 'WhatsApp Image 2026-04-12 at 4.21.14 PM.jpeg', bg: '#1a1a2a',
    body: `<p>"Ideas That Move Us" — the theme of this year's TedX IIIT Bhagalpur event — resonated deeply with the sold-out audience of over 1,000 students and faculty.</p>
<p>The event featured a diverse lineup of speakers, each bringing unique perspectives on innovation, social impact, and personal growth.</p>
<p>"The energy in the room was incredible," said one attendee. "It's not often you get to hear from people who are genuinely changing the world."</p>
<p>"TedX has always been the soul of this club," said club president Shraddha sahu. "This year's presentations moved me to tears."</p>
<p>"the Event was organised by adhyaya club of IIIT Bhagalpur"</p>`
  },
  {
    id: 6, cat: 'academic',
    title: 'IIIT Bhagalpur going to host its first Alumni Meet in September 2026',
    excerpt: 'The event will feature panel discussions, networking sessions, and a gala dinner, aiming to reconnect graduates with the campus and foster mentorship opportunities.',
    author: 'Office of Research', date: 'Mar 22, 2026', read: '4 min',
    image: 'Gemini_Generated_Image_ruj5kpruj5kpruj5.png', bg: '#0f1a28',
    body: `<p>"IIIT Bhagalpur is proud to host its first Alumni Meet in September 2026," said Dean of Alumni Relations, Dr. Priya Sharma. "This event will strengthen our alumni network and provide valuable mentorship opportunities."</p>
<p>"It will be a great opportunity for our alumni to reconnect with the campus and share their experiences."</p>
<p>"Great opportunity for Students to ask their doubts about changing careers and market trends."</p>
<p>"The event will be a great platform for networking and building connections."</p>
<p>The Event will be organised by the Alumni Relations Cell of IIIT Bhagalpur.</p>`
  },
];

const EVENTS = [
  { title: 'Tech Horizon 2026', image: 'WhatsApp Image 2026-04-12 at 7.16.54 PM.jpeg', bg: '#0e1a2e', date: 'Mar 15', desc: 'Annual technology summit featuring robotics battles, app showcases, and a keynote by tech founders.', location: 'Convention Hall', attendees: '2,400+' },
  { title: 'Enyugma Cultural Fest', image: 'WhatsApp Image 2026-04-12 at 1.28.10 PM.jpeg', bg: '#1e0e2e', date: 'Mar 22-24', desc: 'Three days of music, dance, theatre, and competitions from 34 colleges across India.', location: 'Main Campus', attendees: '12,000+' },
  { title: 'Udyutva Sports FEST', image: 'WhatsApp Image 2026-04-12 at 3.02.31 PM.jpeg', bg: '#0e1e0e', date: 'Feb 28', desc: 'From track to turf — students competed across 22 disciplines with record participation.', location: 'Sports Complex', attendees: '3,800+' },
  { title: 'TT champion', image: 'WhatsApp Image 2026-04-12 at 7.32.19 PM.jpeg', bg: '#1e1e0e', date: 'Feb 10', desc: 'Annual table tennis championship with participants from across the state.', location: 'Auditorium A', attendees: '1,200+' },
  { title: 'Music Night: Resonance', image: 'WhatsApp Image 2026-04-12 at 1.28.11 PM.jpeg', bg: '#1e0a0a', date: 'Jan 31', desc: 'A night of original compositions, covers, and open-mic performances that lasted till midnight.', location: 'Open Air Theatre', attendees: '5,000+' },
  { title: 'Innovation Lab Launch', image: 'WhatsApp Image 2026-04-12 at 3.16.52 PM.jpeg', bg: '#0a1e1a', date: 'Mar 25', desc: 'Grand inauguration of the new ₹2.4-crore student maker space with live demos and workshops.', location: 'North Campus', attendees: '800+' },
];

const STUDENTS = [
  {
    name: 'Kaustubh parashar', role: 'First Year · Computer Science', image: 'WhatsApp Image 2026-04-12 at 10.28.39 PM.jpeg',
    bg: '#f0e8ff', quote: '"I never thought I\'d be leading coding initiatives and chess clubs. IIIT Bhagalpur gave me the space to dream bigger than I ever dared."',
    achievement: 'got first place in Coding Competition and chess club president at IIIT Bhagalpur.',
    bio: `<h4>About Kaustubh</h4>
<p>Kaustubh joined IIIT Bhagalpur with a passion for technology and quickly made his mark. His dedication and talent were recognized when he secured first place in the college's coding competition.</p>
<h4>Journey</h4>
<p>Growing up in Patna, Kaustubh taught himself to code at 11 and continued to hone his skills throughout his academic journey. His first-year project — a sign language recognition app — won the university's innovation prize and set the tone for everything that followed.</p>
<div class="student-achievement">"coding gives me purpose"</div>
<h4>What\'s Next</h4>
<p>Kaustubh has accepted a position at a leading tech company and will be working on cutting-edge AI research.</p>`,
  },
  {
    name: 'Yugank Rai', role: 'First Year · Computer Science', image: 'WhatsApp Image 2026-04-11 at 12.14.06 AM.jpeg',
    bg: '#fff0e0', quote: '"Football player by day,developer by night. I\'ve learned that the discipline from sports translates directly to coding — both require focus, practice, and a love for the game."',
    achievement: 'full stack developer at IIIT Bhagalpur and captain of the college\'s men\'s football team.',
    bio: `<h4>About Yugank</h4>
<p>Yugank joined IIIT Bhagalpur with a passion for both technology and sports. His dedication to coding and football has made him a standout student in both fields.</p>
<h4>Journey</h4>
<p>Yugank came to IIIT Bhagalpur from Varanasi, where he first picked up a Football at age nine. He has played 8 games for the college's team, defending multiple goals.</p>
<div class="student-achievement">"Every point I scored, I scored for the whole team."</div>
<h4>What\'s Next</h4>
<p>Yugank is considering a career in software engineering while continuing to play football at the collegiate level.</p>`,
  },
  {
    name: 'Ayush', role: 'First Year ·Computer Science', image: 'WhatsApp Image 2026-04-12 at 11.24.48 PM.jpeg',
    bg: '#e8f5e0', quote: '"DSA is just a tool. The real skill is learning how to think critically and solve problems — that\'s what IIIT Bhagalpur has taught me."',
    achievement: 'volleyball team captain at IIIT Bhagalpur and highest scorer in the first-year DP competition.',
    bio: `<h4>About Ayush</h4>
<p>Ayush joined IIIT Bhagalpur with a passion for technology and environmental sustainability. His dedication to both fields has made him a standout student.</p>
<h4>Journey</h4>
<p>Raised in Dehradun, Ayush was always interested in both technology and the environment. His school project on renewable energy won a national prize and set him on his path to computer science.</p>
<div class="student-achievement">"Small consistent actions — that's how ecosystems recover."</div>
<h4>What\'s Next</h4>
<p>Ayush is planning to pursue a master's degree in computer science while exploring opportunities in the tech industry.</p>`,
  },
  {
    name: 'Kirti Bhalla', role: 'First Year · Computer Science', image: 'kirti.jpeg',
    bg: '#e0f0ff', quote: '"IIIT Bhagalpur has been a game-changer for me. from leading AI workshops to a leader singer in the college band, I\'ve discovered talents I never knew I had."',
    achievement: 'got first place in building AI models int he first-year AI workshop.',
    bio: `<h4>About Kirti</h4>
<p>Kirti joined IIIT Bhagalpur with a passion for artificial intelligence and quickly made her mark. Her dedication and talent were recognized when she secured first place in the college's AI workshop.</p>
<h4>Journey</h4>
<p>Growing up in kanpur, Kirti was always interested in technology and innovation. Her first-year project — a machine learning model for image recognition — won the university's innovation prize and set the tone for everything that followed.</p>
<div class="student-achievement">"Innovation is not just about creating something new; it's about solving problems in ways that make a real difference."</div>
<h4>What\'s Next</h4>
<p>Kirti is considering a career in AI research while continuing to explore her musical talents.</p>`,
  },
  {
    name: 'Anushka Srivastava', role: 'First Year · Computer Science', image: 'WhatsApp Image 2026-04-13 at 2.23.49 PM.jpeg',
    bg: '#fff0f5', quote: '"Joining IIIT Bhagalpur was the best decision I\'ve made. The opportunities to grow, both academically and personally, have been incredible. I\'m excited to see where this journey takes me."',
    achievement: 'got first place in the first year for best project in Web Development and also gained 1200+ followers on LinkedIn for his insightful posts on tech and Public Speaking.',
    bio: `<h4>About Anushka</h4>
<p>Anushka joined IIIT Bhagalpur with a passion for web development and quickly made her mark.her public speaking skills have also been recognized through various competitions.</p>
<h4>Journey</h4>
<p>Growing up in Lucknow, Anushka was always interested in technology and innovation. Her first-year project — a responsive website for a local business — won the Institute's design prize and set the tone for everything that followed.</p>
<div class="student-achievement">"Building things that matter is what drives me."</div>
<h4>What\'s Next</h4>
<p>Anushka is considering a career as a web developer while also pursuing her passion for public speaking.</p>`,
  },
];

const NEWS = [
  {
    featured: true,
    tag: 'Breaking', tagColor: '#c0392b', tagBg: '#fce8e7',
    title: 'Student council Elections See Record Voter Turnout',
    excerpt: ' Over 85% of the student body cast their votes in the most competitive election season in recent memory, with 5 parties and 20 candidates vying for positions.',
    image: 'climate-school.jpg', emoji: '🌍', bg: 'linear-gradient(135deg,#0e2818,#1a4030)',
    author: 'Office of the VC', date: '2 hours ago'
  },
  {
    tag: 'Academic', tagColor: '#0f6e56', tagBg: '#d0ede8',
    title: 'IIIT Bhagalpur Rises in National Rankings',
    excerpt: 'A 38% rise in peer-reviewed publications and record grant funding drives the university five places up the rankings.',
    image: 'research-index.jpg', emoji: '📊', bg: 'linear-gradient(135deg,#0a1020,#1a2840)',
    author: 'Research Office', date: '1 day ago'
  },
  {
    tag: 'Campus Life', tagColor: '#7a4f10', tagBg: '#f5e8d0',
    title: 'New 24-Hour Library Wing Opens This Semester',
    excerpt: 'Students now have round-the-clock access to reading rooms, group study zones, and silent areas — a direct response to student body demands.',
    image: 'library-wing.jpg', emoji: '📚', bg: 'linear-gradient(135deg,#1a1005,#2a2010)',
    author: 'Admin Desk', date: '3 days ago'
  },
  
];

/* ============================
   CUSTOM CURSOR
   ============================ */
function initCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.append(cursor, ring);

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  document.querySelectorAll('a,button,.article-card,.spotlight-card,.event-slide,.news-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px';
      ring.style.width = '54px'; ring.style.height = '54px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px';
      ring.style.width = '38px'; ring.style.height = '38px';
    });
  });
}

/* ============================
   PRELOADER
   ============================ */
function initPreloader() {
  const canvas = document.getElementById('preloader-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 400; canvas.height = 400;

  const particles = Array.from({length: 60}, () => ({
    x: 200, y: 200,
    vx: (Math.random()-0.5)*3,
    vy: (Math.random()-0.5)*3,
    r: Math.random()*2+1,
    a: Math.random()
  }));

  let raf;
  function drawPre() {
    ctx.clearRect(0,0,400,400);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>400) p.vx*=-1;
      if(p.y<0||p.y>400) p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(200,135,42,${p.a})`;
      ctx.fill();
    });
    raf = requestAnimationFrame(drawPre);
  }
  drawPre();

  // Progress bar
  const fill = document.getElementById('preloader-fill');
  let pct = 0;
  const iv = setInterval(() => {
    pct += Math.random()*18 + 10;
    if(pct >= 100) { pct = 100; clearInterval(iv); }
    fill.style.width = pct + '%';
    if(pct >= 100) {
      setTimeout(() => {
        cancelAnimationFrame(raf);
        const preloader = document.getElementById('preloader');
        const finish = () => {
          preloader.style.display = 'none';
          if(typeof gsap !== 'undefined') {
            initHeroAnimations();
          } else {
            document.querySelectorAll('.hero-eyebrow, .hero-title-line, .hero-sub, .hero-cta-row, .hero-stats, .hero-cover-badge').forEach(el => {
              el.style.opacity = '1';
              el.style.transform = 'none';
            });
          }
          initScrollReveal();
          initCursor();
        };

        if(typeof gsap !== 'undefined') {
          gsap.to('#preloader', {
            opacity: 0, duration: 0.4, ease: 'power2.inOut',
            onComplete: finish
          });
        } else {
          preloader.style.transition = 'opacity 0.35s ease';
          preloader.style.opacity = '0';
          setTimeout(finish, 350);
        }
      }, 100);
    }
  }, 70);
}

/* ============================
   HERO CANVAS (particles + flowing lines)
   ============================ */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, nodes, animId;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); buildNodes(); });

  function buildNodes() {
    nodes = Array.from({length: 80}, () => ({
      x: Math.random()*W,
      y: Math.random()*H,
      vx: (Math.random()-0.5)*0.5,
      vy: (Math.random()-0.5)*0.5,
      r:  Math.random()*1.8+0.5,
    }));
  }
  buildNodes();

  let mouse = {x: W/2, y: H/2};
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function draw() {
    ctx.clearRect(0,0,W,H);
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if(n.x<0||n.x>W) n.vx*=-1;
      if(n.y<0||n.y>H) n.vy*=-1;
    });
    // Draw connections
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const dx=nodes[i].x-nodes[j].x, dy=nodes[i].y-nodes[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<130){
          ctx.beginPath();
          ctx.moveTo(nodes[i].x,nodes[i].y);
          ctx.lineTo(nodes[j].x,nodes[j].y);
          ctx.strokeStyle=`rgba(200,135,42,${0.13*(1-d/130)})`;
          ctx.lineWidth=0.7;
          ctx.stroke();
        }
      }
      // Mouse connection
      const mdx=nodes[i].x-mouse.x, mdy=nodes[i].y-mouse.y;
      const md=Math.sqrt(mdx*mdx+mdy*mdy);
      if(md<180){
        ctx.beginPath();
        ctx.moveTo(nodes[i].x,nodes[i].y);
        ctx.lineTo(mouse.x,mouse.y);
        ctx.strokeStyle=`rgba(200,135,42,${0.22*(1-md/180)})`;
        ctx.lineWidth=0.9;
        ctx.stroke();
      }
      // Node dot
      ctx.beginPath();
      ctx.arc(nodes[i].x,nodes[i].y,nodes[i].r,0,Math.PI*2);
      ctx.fillStyle='rgba(200,135,42,0.55)';
      ctx.fill();
    }
    animId = requestAnimationFrame(draw);
  }
  draw();
}

/* ============================
   HERO GSAP ANIMATIONS
   ============================ */
function initHeroAnimations() {
  initHeroCanvas();
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.to('.hero-eyebrow', { opacity:1, y:0, duration:0.8, delay:0.2, ease:'power3.out' });
  gsap.to('.hero-title-line', {
    opacity:1, y:0, stagger:0.15, duration:1,
    delay:0.5, ease:'power4.out'
  });
  gsap.to('.hero-sub',       { opacity:1, y:0, duration:0.8, delay:1.1, ease:'power3.out' });
  gsap.to('.hero-cta-row',   { opacity:1, y:0, duration:0.8, delay:1.3, ease:'power3.out' });
  gsap.to('.hero-stats',     { opacity:1, y:0, duration:0.8, delay:1.5, ease:'power3.out' });
  gsap.to('.hero-cover-badge',{ opacity:1, duration:1, delay:1.8 });

  // Parallax on scroll
  gsap.to('#hero-canvas', {
    scrollTrigger:{ trigger:'#hero', start:'top top', end:'bottom top', scrub:1 },
    y: 120
  });
  gsap.to('.hero-content', {
    scrollTrigger:{ trigger:'#hero', start:'top top', end:'bottom top', scrub:1 },
    y: 80, opacity: 0
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        gsap.to(window, { duration:1.1, scrollTo:{y:target,offsetY:60}, ease:'power3.inOut' });
        if(mobileMenu.classList.contains('open')) toggleMobile();
      }
    });
  });
}

/* ============================
   SCROLL REVEAL
   ============================ */
function initScrollReveal() {
  if(!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================
   NAVBAR
   ============================ */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
function toggleMobile() {
  mobileMenu.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMobile);

/* ============================
   RENDER ARTICLES
   ============================ */
function renderArticles(list) {
  const grid = document.getElementById('articles-grid');
  if(!list.length) {
    grid.innerHTML = '<div class="article-no-results">No articles found. Try a different search.</div>';
    return;
  }
  grid.innerHTML = list.map(a => `
    <div class="article-card reveal" data-id="${a.id}">
      <div class="article-thumb" style="background:${a.bg};">
        ${a.image ? `<img src="${a.image}" alt="${a.title}" onerror="this.style.display='none'" />` : `<span style="font-size:64px;position:relative;z-index:1;">${a.emoji || ''}</span>`}
        <div class="article-thumb-label" style="background:rgba(255,255,255,0.15);color:#fff;">${a.cat}</div>
      </div>
      <div class="article-info">
        <div class="article-cat-tag">${a.cat}</div>
        <div class="article-title">${a.title}</div>
        <div class="article-excerpt">${a.excerpt}</div>
        <div class="article-meta">
          <span>${a.author}</span>
          <span>${a.read} read</span>
        </div>
      </div>
    </div>
  `).join('');

  // Bind clicks
  grid.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => openArticleModal(+card.dataset.id));
  });

  // Re-observe new elements
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
    }, {threshold:0.12}).observe(el);
  });
}

/* ============================
   SEARCH & FILTER
   ============================ */
let currentCat = 'all';
let searchQuery = '';

function filterArticles() {
  let list = ARTICLES;
  if(currentCat !== 'all') list = list.filter(a => a.cat === currentCat);
  if(searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.author.toLowerCase().includes(q)
    );
  }
  renderArticles(list);
}

function initArticleControls() {
  document.getElementById('search-input').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    filterArticles();
  });
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCat = pill.dataset.cat;
      filterArticles();
    });
  });
}

/* ============================
   ARTICLE MODAL
   ============================ */
function openArticleModal(id) {
  const a = ARTICLES.find(x => x.id === id);
  if(!a) return;
  document.getElementById('modal-img-wrap').style.background = a.bg;
  document.getElementById('modal-img-wrap').innerHTML = a.image ? `<img src="${a.image}" alt="${a.title}" onerror="this.src='https://via.placeholder.com/640x220?text=Article+Photo'" />` : `<span style="font-size:80px;">${a.emoji || ''}</span>`;
  document.getElementById('modal-cat').textContent  = a.cat.toUpperCase();
  document.getElementById('modal-title').textContent = a.title;
  document.getElementById('modal-meta').innerHTML   = `By <strong>${a.author}</strong> · ${a.date} · ${a.read} read`;
  document.getElementById('modal-body').innerHTML   = a.body;
  openModal('article-modal');
}

/* ============================
   EVENTS CAROUSEL
   ============================ */
let evIdx = 0;
let evVisible = 3;

function getEvVisible() {
  if(window.innerWidth <= 600) return 1;
  if(window.innerWidth <= 900) return 2;
  return 3;
}

function renderEvents() {
  const track = document.getElementById('events-track');
  track.innerHTML = EVENTS.map(ev => `
    <div class="event-slide reveal">
      <div class="event-photo" style="background:${ev.bg};">
        ${ev.image ? `<img src="${ev.image}" alt="${ev.title}" onerror="this.style.display='none'" />` : `<span style="position:relative;z-index:1;font-size:72px;">${ev.emoji || ''}</span>`}
        <div class="event-photo-overlay"></div>
        <div class="event-date-badge">${ev.date}</div>
      </div>
      <div class="event-info">
        <div class="event-title">${ev.title}</div>
        <div class="event-desc">${ev.desc}</div>
        <div class="event-foot">
          <span>📍 ${ev.location}</span>
          <span>👥 ${ev.attendees}</span>
        </div>
      </div>
    </div>
  `).join('');
  buildDots();
  updateCarousel();
}

function buildDots() {
  evVisible = getEvVisible();
  const dots = document.getElementById('events-dots');
  const count = Math.ceil(EVENTS.length / evVisible);
  dots.innerHTML = Array.from({length:count}, (_,i) =>
    `<div class="ev-dot ${i===0?'active':''}" data-i="${i}"></div>`
  ).join('');
  dots.querySelectorAll('.ev-dot').forEach(d => {
    d.addEventListener('click', () => { evIdx = +d.dataset.i * evVisible; updateCarousel(); });
  });
}

function updateCarousel() {
  evVisible = getEvVisible();
  const slides = document.querySelectorAll('.event-slide');
  if(!slides.length) return;
  const slideW = slides[0].offsetWidth + 20;
  evIdx = Math.max(0, Math.min(evIdx, EVENTS.length - evVisible));
  document.getElementById('events-track').style.transform = `translateX(-${evIdx * slideW}px)`;
  // Update dots
  const dotI = Math.floor(evIdx / evVisible);
  document.querySelectorAll('.ev-dot').forEach((d,i) => d.classList.toggle('active', i===dotI));
}

document.getElementById('ev-prev').addEventListener('click', () => {
  evVisible = getEvVisible();
  evIdx = Math.max(0, evIdx - evVisible);
  updateCarousel();
});
document.getElementById('ev-next').addEventListener('click', () => {
  evVisible = getEvVisible();
  evIdx = Math.min(EVENTS.length - evVisible, evIdx + evVisible);
  updateCarousel();
});
window.addEventListener('resize', () => { buildDots(); updateCarousel(); });

// Touch swipe for carousel
let touchStartX = 0;
document.getElementById('events-track').addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.getElementById('events-track').addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  evVisible = getEvVisible();
  if(diff > 50)  { evIdx = Math.min(EVENTS.length - evVisible, evIdx + 1); updateCarousel(); }
  if(diff < -50) { evIdx = Math.max(0, evIdx - 1); updateCarousel(); }
});

/* ============================
   SPOTLIGHTS
   ============================ */
function renderSpotlights() {
  const grid = document.getElementById('spotlights-grid');
  grid.innerHTML = STUDENTS.map((s,i) => `
    <div class="spotlight-card" data-i="${i}">
      <div class="student-avatar">
        <img src="${s.image || 'https://via.placeholder.com/100?text=Photo'}" alt="Photo of ${s.name}" onerror="this.src='https://via.placeholder.com/100?text=Photo'" />
      </div>
      <div class="student-name">${s.name}</div>
      <div class="student-role">${s.role}</div>
      <div class="student-quote">${s.quote}</div>
      <div class="spotlight-tap">View Profile ↗</div>
    </div>
  `).join('');
  grid.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('click', () => openStudentModal(+card.dataset.i));
  });
}

/* ============================
   STUDENT MODAL
   ============================ */
function openStudentModal(i) {
  const s = STUDENTS[i];
  document.getElementById('student-modal-top').innerHTML = `
    <div class="student-modal-avatar">
      <img src="${s.image || 'https://via.placeholder.com/90?text=Photo'}" alt="Photo of ${s.name}" onerror="this.src='https://via.placeholder.com/90?text=Photo'" />
    </div>
    <div class="student-modal-name">${s.name}</div>
    <div class="student-modal-role">${s.role}</div>
    <div style="margin-top:12px;font-style:italic;font-family:'Cormorant Garamond',serif;font-size:16px;color:rgba(14,13,11,0.6);padding:0 12px;">${s.quote}</div>
    <div style="margin-top:12px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#7a4f10;background:#f5e8d0;padding:6px 14px;border-radius:20px;display:inline-block;">${s.achievement}</div>
  `;
  document.getElementById('student-modal-body').innerHTML = s.bio;
  openModal('student-modal');
}

/* ============================
   NEWS
   ============================ */
function renderNews() {
  const layout = document.getElementById('news-layout');
  layout.innerHTML = NEWS.map((n,i) => `
    <div class="news-card ${n.featured?'featured':''} reveal reveal-delay-${i%3}">
      <div class="news-card-img" style="background:${n.bg};">
        ${n.image ? `<img src="${n.image}" alt="${n.title}" onerror="this.style.display='none'" />` : `<span style="font-size:${n.featured?'80':'56'}px;position:relative;z-index:1;">${n.emoji}</span>`}
      </div>
      <div class="news-card-body">
        <div class="news-tag" style="color:${n.tagColor};background:${n.tagBg || 'rgba(255,255,255,0.08)'};">${n.tag}</div>
        <div class="news-title">${n.title}</div>
        <div class="news-excerpt">${n.excerpt}</div>
        <div class="news-meta">${n.author} · ${n.date}</div>
      </div>
    </div>
  `).join('');
  layout.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

/* ============================
   MODAL HELPERS
   ============================ */
function openModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('article-modal-close').addEventListener('click', () => closeModal('article-modal'));
document.getElementById('student-modal-close').addEventListener('click', () => closeModal('student-modal'));
document.getElementById('article-modal').addEventListener('click', e => {
  if(e.target === e.currentTarget) closeModal('article-modal');
});
document.getElementById('student-modal').addEventListener('click', e => {
  if(e.target === e.currentTarget) closeModal('student-modal');
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') {
    closeModal('article-modal');
    closeModal('student-modal');
  }
});

/* ============================
   GSAP SCROLL ANIMATIONS
   ============================ */
function initGsapScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Section headers
  gsap.utils.toArray('.section-header').forEach(el => {
    gsap.from(el, {
      opacity:0, y:40,
      scrollTrigger:{ trigger:el, start:'top 85%', once:true },
      duration:0.9, ease:'power3.out'
    });
  });

  // Stagger article cards on first load
  ScrollTrigger.create({
    trigger:'#articles',
    start:'top 80%',
    once:true,
    onEnter:() => {
      gsap.to('.article-card', {
        opacity:1, y:0, stagger:0.07, duration:0.7, ease:'power3.out'
      });
    }
  });

  // Spotlight cards
  ScrollTrigger.create({
    trigger:'#spotlights',
    start:'top 80%',
    once:true,
    onEnter:() => {
      gsap.from('.spotlight-card', {
        opacity:0, y:50, scale:0.94, stagger:0.1, duration:0.7, ease:'back.out(1.5)'
      });
    }
  });

  // News cards
  ScrollTrigger.create({
    trigger:'#news',
    start:'top 80%',
    once:true,
    onEnter:() => {
      gsap.from('.news-card', {
        opacity:0, y:40, stagger:0.12, duration:0.8, ease:'power3.out'
      });
    }
  });

  // Footer logo
  gsap.from('.footer-logo', {
    scrollTrigger:{ trigger:'#footer', start:'top 90%', once:true },
    opacity:0, y:30, duration:0.9, ease:'power3.out'
  });
}

/* ============================
   INIT ALL
   ============================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderArticles(ARTICLES);
  renderEvents();
  renderSpotlights();
  renderNews();
  initArticleControls();
  initPreloader();

  // GSAP scroll init (runs after preloader hides)
  // Small guard to ensure GSAP is loaded
  if(typeof gsap !== 'undefined') {
    setTimeout(initGsapScroll, 600);
  }
});
