const db = [
    {
        name: "OFFICIAL LINKS",
        type: "standard",
        items: [
            { id: 'web', title: "Raiku Website", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-solid fa-globe", link: "https://www.raiku.com/", desc: "The official home of Raiku ecosystem." },
            { id: 'org', title: "Raiku Foundation", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-solid fa-building-columns", link: "https://x.com/raikuorg", desc: "Official organization and ecosystem governance." },
            { id: 'assets', title: "Brand Assets", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-solid fa-layer-group", link: "https://www.raiku.com/brand-assets", desc: "Official logos, fonts, and visual identity kits." },
            { id: 'blog', title: "Raiku Blog", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-solid fa-newspaper", link: "https://www.raiku.com/blog", desc: "Latest news, deep dives, and ecosystem updates." },
            { id: 'docs', title: "Documentation", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-solid fa-book", link: "https://docs.raiku.com/", desc: "Comprehensive technical guides and whitepapers." },
            { id: 'careers', title: "Careers", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-solid fa-briefcase", link: "https://jobs.ashbyhq.com/raiku", desc: "Join the mission to build the decentralized future." },
            { id: 'twitter', title: "X Official", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-brands fa-x", link: "https://x.com/raikucom", desc: "Latest updates and announcements stream." },
            { id: 'xcomm', title: "X Community", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-solid fa-users", link: "https://x.com/i/communities/1941529479836467645", desc: "Official Raiku community discussions on X." },
            { id: 'cn', title: "Raiku CN", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-solid fa-earth-asia", link: "https://x.com/RaikuCN", desc: "Official Chinese community updates and discussions." },
            { id: 'linkedin', title: "LinkedIn", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/company/raikucom/", desc: "Professional network and company insights." },
            { id: 'tg', title: "Telegram", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-brands fa-telegram", link: "https://t.me/raikucom", desc: "Encrypted real-time communication channel." },
            { id: 'reddit', title: "Reddit", creator: "Raiku Official", creatorLink: "https://x.com/raikucom", icon: "fa-brands fa-reddit-alien", link: "https://reddit.com/r/Raiku/", desc: "Community discussion threads and theory archives." }
        ]
    },
    {
        name: "COMMUNITY TOOLS",
        type: "standard",
        items: [
            { id: 'handbook', title: "Raiku Handbook", creator: "Shubh", creatorLink: "https://x.com/01Rajpurohit", icon: "fa-solid fa-book-atlas", image: "img/handbook.png", link: "https://www.raikuhandbook.org/", desc: "The simple community guide and ecosystem manual." },
            { id: 'hub', title: "Raiku HUB", creator: "demon666", creatorLink: "https://x.com/0xUnemployment", icon: "fa-solid fa-network-wired", image: "img/raiku-hub.png", link: "https://www.raiku-hub.xyz/", desc: "Raiku hub for top raiku chads" },
            { id: 'yanok', title: "Brand Kit by Yanok", creator: "Yanok", creatorLink: "https://x.com/crypto_yanok", icon: "fa-solid fa-puzzle-piece", image: "img/yanok.jpg", link: "https://raiku-media-kit.notion.site/Raiku-Brand-Kit-by-yanok-2fd87288700980079701eb3ea5e97863", desc: "Alternative design variants for advanced users." },
            { id: 'pfp', title: "PFP Generator", creator: "Raven", creatorLink: "https://x.com/klvndrgn", icon: "fa-solid fa-face-smile-wink", image: "img/pfp.png", link: "https://raiku.pics/", desc: "Customize your PFP." },
            { id: 'gallery', title: "Kersa Artwork", creator: "Kersa", creatorLink: "https://x.com/kersa1n", icon: "fa-solid fa-images", image: "img/gallery.png", link: "https://kersa.raiku.space/", desc: "Digital Art Collection Raiku by Kersa" },
            { id: 'raikurun', title: "Raiku Run", creator: "Kersa", creatorLink: "https://x.com/kersa1n", icon: "fa-solid fa-microchip", image: "img/raikurun.png", link: "https://run.raiku.space/", desc: "Raiku Run and the secret." },
            { id: 'raikuquizshinee', title: "Raiku Quiz by Shine", creator: "Shine", creatorLink: "https://x.com/EnjelSun", icon: "fa-solid fa-images", image: "img/raiku-quiz-shinee.png", link: "https://www.raiku-quiz.xyz/", desc: "Are you really Raiku fam? Find the answer here." },
            { id: 'raikuwrapped25', title: "Raiku Wrapped 2025", creator: "KC🌊", creatorLink: "https://x.com/kongclaves", icon: "fa-solid fa-images", image: "img/raiku-wrapped25.png", link: "https://raiku-wrapped.vercel.app/", desc: "Raiku wrapped your 2025 community journey." },
            { id: 'raikufunblock', title: "Raiku Fun Block", creator: "realsir ./", creatorLink: "https://x.com/realsirandrew", icon: "fa-solid fa-images", image: "img/raikufunblock.png", link: "https://raiku-fun-block.vercel.app/", desc: "Discover a variety of games and contributions from realsir ./." },
            { id: 'raikupakketum', title: "Raiku Engagement Calculator", creator: "sptnode", creatorLink: "https://x.com/sptnode", icon: "fa-solid fa-images", image: "img/raikupakketum.png", link: "https://raiku.pak-ketum.com/", desc: "Community engagement calculator content raiku." },
            { id: 'raikubingo', title: "Raiku Bingo", creator: "Kersa", creatorLink: "https://x.com/kersa1n", icon: "fa-solid fa-images", image: "img/raikubingo.png", link: "https://bingo.raiku.space/", desc: "What your Raiku Bingo? Fill it." },
            { id: 'flappyryku', title: "Flappy Ryku", creator: "Melori", creatorLink: "https://x.com/MeloriKt", icon: "fa-solid fa-images", image: "img/flappyryku.png", link: "https://flappy-melori-projects.vercel.app/", desc: "Just like the name, you tap Ryku through the pipes and try to get the highest score possible." },
            { id: 'raikugameboy', title: "Raiku Gameboy", creator: "Victoren", creatorLink: "https://x.com/0xvictoren/", icon: "fa-solid fa-images", image: "img/raikugameboy.png", link: "https://raiku-gameboy.vercel.app/", desc: "Play Raiku Gameboy now!" },
        ]
    },
    {
        name: "GOOD READ",
        type: "article",
        items: [
            { 
                id: 'art1', 
                title: "The Path of Least Resistance", 
                date: "4 FEB 2026",
                image: "article/art1.jpg", 
                link: "https://x.com/_offmylawn/status/2018738146318442571", 
                desc: "Crypto is a VERY unique industry - it’s the only one in the world where giving away 'free' money is normalized....",
                creator: "offmylawn",
                creatorLink: "https://x.com/_offmylawn/"
            },
            { 
                id: 'art3', 
                title: "Why the Raiku Community Creates High-Quality Content", 
                date: "9 FEB 2026",
                image: "article/art3.webp", 
                link: "https://yanok.medium.com/raiku-an-improvement-or-a-major-update-for-solana-919a8d640729", 
                desc: "Raiku (@raikucom) is a Web3 infrastructure project built on the Solana blockchain that aims to solve one of Solana....",
                creator: "Yanok",
                creatorLink: "https://x.com/crypto_yanok"
            },
            { 
                id: 'art2', 
                title: "Why the Raiku Community Creates High-Quality Content", 
                date: "13 FEB 2026",
                image: "article/art2.jpg", 
                link: "https://x.com/Zimydem/status/2022313890936435062", 
                desc: "The Problem Everyone Sees But No One Fixes....",
                creator: "Zimy",
                creatorLink: "https://x.com/Zimydem/"
            },

        ]
    }
];

let curCat = 0;
let curTool = 0;

const track = document.getElementById('track');
const catNav = document.getElementById('catNav');
const infoPanel = document.getElementById('infoPanel');
const progressHud = document.getElementById('progressHud');
const creatorEl = document.getElementById('creator');

function renderCategories() {
    catNav.innerHTML = '';
    db.forEach((cat, i) => {
        const div = document.createElement('div');
        div.className = `cat-item ${i === curCat ? 'active' : ''}`;
        div.innerText = cat.name;
        div.onclick = () => changeCategory(i);
        catNav.appendChild(div);
    });
}

function renderTools() {
    track.innerHTML = '';
    const currentCategory = db[curCat];
    const tools = currentCategory.items;
    const isArticleMode = currentCategory.type === 'article'; 
    
    tools.forEach((t, i) => {
        const card = document.createElement('div');
        card.className = `card ${i === curTool ? 'active' : ''} ${isArticleMode ? 'article-card' : ''}`;
        
        let content = '';
        if (isArticleMode) {
            content = `
                <div class="art-img-container">
                    <img src="${t.image}" alt="${t.title}" loading="lazy">
                    <div class="art-date">${t.date}</div>
                </div>
                <div class="art-body">
                    <div class="art-content-wrapper">
                        <h3>${t.title}</h3>
                        <p class="art-desc-preview">${t.desc}</p>
                    </div>
                    <div class="art-creator-link" onclick="event.stopPropagation(); window.open('${t.creatorLink}', '_blank')">
                        <i class="fas fa-code"></i> CREATOR: ${t.creator}
                    </div>
                    <div class="read-btn">READ ARTICLE <i class="fas fa-arrow-right"></i></div>
                </div>
            `;
        } else {
            if(t.image) {
                content = `<img src="${t.image}" class="card-img" alt="${t.title}">`;
            } else {
                content = `<i class="${t.icon} card-icon"></i>`;
            }
        }

        card.innerHTML = `
            <div class="live-overlay"></div>
            <div class="scanner-line"></div>
            <div class="card-inner ${isArticleMode ? 'inner-article' : ''}">
                ${content}
            </div>
        `;
        
        card.onclick = () => {
            if(curTool === i) launchTool();
            else changeTool(i);
        };
        track.appendChild(card);
    });

    updateInfo();
    centerTrack();
    renderProgress();
}

function updateInfo() {
    const currentCategory = db[curCat];
    const t = currentCategory.items[curTool];
    
    if (currentCategory.type === 'article') {
        infoPanel.style.display = 'none'; 
        infoPanel.classList.remove('visible');
        return; 
    }

    infoPanel.style.display = 'block';
    infoPanel.classList.remove('visible');
    
    setTimeout(() => {
        document.getElementById('title').innerText = t.title;
        document.getElementById('desc').innerText = t.desc;
        creatorEl.innerHTML = `<i class="fas fa-code"></i> CREATOR: ${t.creator}`;
        infoPanel.classList.add('visible');
    }, 100);
}

function renderProgress() {
    progressHud.innerHTML = '';
    const tools = db[curCat].items;
    tools.forEach((_, i) => {
        const seg = document.createElement('div');
        seg.className = `prog-seg ${i === curTool ? 'active' : ''}`;
        progressHud.appendChild(seg);
    });
    const counter = document.createElement('div');
    counter.className = 'prog-counter';
    counter.innerText = `[0${curTool + 1} / 0${tools.length}]`;
    progressHud.appendChild(counter);
}

function triggerGlitch(cardElement) {
    if(!cardElement) return;
    cardElement.classList.add('glitch-active');
    setTimeout(() => cardElement.classList.remove('glitch-active'), 300);
}

function centerTrack() {
    const isMobile = window.innerWidth <= 768;
    const currentCategory = db[curCat];
    
    let width;
    
    if (currentCategory.type === 'article') {
        width = isMobile ? 300 : 400; 
    } else {
        width = isMobile ? 200 : 260;
    }

    const gap = 50; 
    const centerOffset = - (width / 2);
    const pos = -(curTool * (width + gap)) + centerOffset;
    
    track.style.transform = `translateX(${pos}px)`;
    
    Array.from(track.children).forEach((c, i) => {
        if(i !== curTool) {
            c.style.transform = `scale(0.85) rotateY(10deg)`;
            c.style.opacity = '0.3';
        } else {
            c.style.transform = isMobile ? 'scale(1.05)' : 'scale(1.1)';
            c.style.opacity = '1';
        }
    });
}

function changeCategory(idx) {
    if(idx < 0 || idx >= db.length) return;
    curCat = idx;
    curTool = 0;
    renderCategories();
    renderTools();
}

function changeTool(idx) {
    const len = db[curCat].items.length;
    if(idx < 0 || idx >= len) return;
    curTool = idx;
    
    Array.from(track.children).forEach((c, i) => {
        if(i === idx) {
            c.classList.add('active');
            triggerGlitch(c); 
        } else {
            c.classList.remove('active');
        }
    });
    centerTrack();
    updateInfo();
    renderProgress();
}

function launchTool() {
    const link = db[curCat].items[curTool].link;
    if(link === '#') alert("SYSTEM LOCKED: CONTENT UNAVAILABLE");
    else window.open(link, '_blank');
}

function openCreator() {
    const link = db[curCat].items[curTool].creatorLink;
    if(link) window.open(link, '_blank');
}

const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() { 
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 
    centerTrack();
    initParticles();
}
window.onresize = resize;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5; 
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1; 
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
        ctx.fillStyle = 'rgba(192, 254, 56, 0.5)'; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = window.innerWidth < 768 ? 40 : 80; 
    for(let i=0; i<count; i++) particles.push(new Particle());
}

function animateBg() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
        p.update(); p.draw();
        for(let j = index; j < particles.length; j++) {
            const dx = p.x - particles[j].x;
            const dy = p.y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist < 120) {
                ctx.strokeStyle = `rgba(192, 254, 56, ${0.1 - dist/1200})`;
                ctx.lineWidth = 0.5; 
                ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animateBg);
}

resize();
animateBg();

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp') changeCategory(curCat - 1);
    if(e.key === 'ArrowDown') changeCategory(curCat + 1);
    if(e.key === 'ArrowLeft') changeTool(curTool - 1);
    if(e.key === 'ArrowRight') changeTool(curTool + 1);
    if(e.key === 'Enter') launchTool();
});

let startX = 0;
document.addEventListener('mousedown', e => startX = e.clientX);
document.addEventListener('mouseup', e => {
    if(startX - e.clientX > 50) changeTool(curTool + 1);
    if(e.clientX - startX > 50) changeTool(curTool - 1);
});

document.addEventListener('touchstart', e => startX = e.touches[0].clientX);
document.addEventListener('touchend', e => {
    if(startX - e.changedTouches[0].clientX > 50) changeTool(curTool + 1);
    if(e.changedTouches[0].clientX - startX > 50) changeTool(curTool - 1);
});

const dot = document.querySelector('.cursor-dot');
const circle = document.querySelector('.cursor-circle');
document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
    setTimeout(() => { circle.style.left = e.clientX + 'px'; circle.style.top = e.clientY + 'px'; }, 50);
});

setInterval(() => document.getElementById('clock').innerText = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}), 1000);

renderCategories();
renderTools();