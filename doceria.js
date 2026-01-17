/***********************
 * DADOS DOS PRODUTOS
 * Use `imgs` (array) para múltiplas fotos
 ***********************/
const products = [
  {
    id: 1,
    title: "Caixa de Docinhos",
    price: "60,00",
    cat: "Doces",
    imgs: [
      "imagens/doces.jpg"
    ],
    desc: "50 unidades de docinhos por apenas R$60,00, Opções: Beijinho, brigadeiro e Ninho.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Opa! Tenho interesse na caixa de docinhos, pode me passar mais detalhes?"
  },
  {
    id: 2,
    title: "Palha Italiana",
    price: "5,00",
    cat: "Doces",
    imgs: [
      "imagens/palha.png",
    ],
    desc: "Palha Italiana de Ninho, Oreo ou Tradicional.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Gostaria de pedir uma palha italiana."
  },
  {
    id: 3,
    title: "Cocada Gourmet",
    price: "5,50",
    cat: "Doces",
    imgs: [
      "imagens/cocada.jpg",
    ],
    desc: "Cocada gourmet com sabor intenso de coco fresco, com textura macia. .\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Tenho interesse na cocada. Ele ainda está disponível?"
  },
  {
    id: 4,
    title: "Cajuzinho",
    price: "4,00",
    cat: "Doces",
    imgs: [
      "imagens/cajuzinho.jpg",
    ],
    desc: "Cajuzinho artesanal de amendoim com cacau — macio e cremoso.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Gostaria de pedir um cajuzinho por favor."
  },
  {
    id: 5,
    title: "Bolo de pote",
    price: "12,00",
    cat: "Doces",
    imgs: [
      "imagens/bolodepote.jpg"
    ],
    desc: "Bolo em pote com camadas de bolo fofo e recheio cremoso — pronto para levar e degustar.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Tenho interesse no bolo de pote. Ele ainda está disponível?"
  },
  {
    id: 6,
    title: "Torta - Fatia",
    price: "15,00",
    cat: "Doces",
    imgs: [
      "imagens/tortachocolate.jfif",
      "imagens/tortamorango.jfif"
    ],
    desc: "Fatias de torta (morango ou chocolate) — massa leve e recheio cremoso: morango com frutas frescas ou chocolate com ganache.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Tenho interesse na fatia de torta. Ele ainda está disponível?"
  },
  {
    id: 7,
    title: "Rocambole - Fatia",
    price: "10,00",
    cat: "Doces",
    imgs: [
      "imagens/rocambole1.jpg",
      "imagens/rocambole2.jfif"
    ],
    desc: "Fatias de rocambole (chocolate ou doce de leite) — massa leve e recheio cremoso.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Tenho interesse na fatia de rocambole. Ele ainda está disponível?"
  },
  {
    id: 8,
    title: "Bolo Pequeno",
    price: "75,00",
    cat: "Bolos",
    imgs: [
      "imagens/bolopequeno.jpeg"
    ],
    desc: "Bolo pequeno — massa fofinha e recheio cremoso; ideal para 6 porções.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Tenho interesse no bolo pequeno. Ele ainda está disponível?"
  },
  {
    id: 9,
    title: "Bolo Grande",
    price: "110,00",
    cat: "Bolos",
    imgs: [
      "imagens/bologrande.jpg"
    ],
    desc: "Bolo grande — massa fofinha e recheio generoso; ideal para festas, serve 10–12 p essoas.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Tenho interesse no bolo grande. Ele ainda está disponível?"
  },
   {
    id: 10,
    title: "Mini Salgadinho 5un",
    price: "5,00",
    cat: "Salgados",
    imgs: [
      "imagens/minisalgadinho.jpg"
    ],
    desc: "Mini salgadinho 5 un — mini salgadinhos crocantes e saborosas, ideal para festas e lanches.\n\nContato: (21) 96724-1542.",
    whatsappMsg: "Olá! Tenho interesse em mini salgadinhos. Eles ainda estão disponíveis?"
  }
];

/***********************
 * CONFIGURAÇÕES RÁPIDAS
 ***********************/
const whatsappPhone = "5521967241542"; // número em formato internacional sem sinais
const brandName = "Delícia de Doces"; // nome da loja/marca

/***********************
 * ELEMENTOS
 ***********************/
const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const searchInput = document.getElementById('searchInput');
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const qrcodeEl = document.getElementById('qrcode');
const catalogLink = document.getElementById('catalogLink');
const qrClose = document.getElementById('qrClose');
const copyBtn = document.getElementById('copyBtn');

const detailsModal = document.getElementById('detailsModal');
const carouselImg = document.getElementById('carouselImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbsContainer = document.getElementById('thumbsContainer');
const detailTitle = document.getElementById('detailTitle');
const detailDesc = document.getElementById('detailDesc');
const detailPrice = document.getElementById('detailPrice');
const detailCat = document.getElementById('detailCat');
const detailWhats = document.getElementById('detailWhats');
const detailClose = document.getElementById('detailClose');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');

/***********************
 * Monta lista de categorias
 ***********************/
const categories = ["Todos", ...Array.from(new Set(products.map(p => p.cat)))];
let activeCat = "Todos";
categories.forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn ' + (cat === "Todos" ? "active" : "");
  btn.innerText = cat;
  btn.onclick = () => { document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); activeCat = cat; render(); }
  filtersEl.appendChild(btn);
});

/***********************
 * Renderiza produtos (cards)
 ***********************/
function render(){
  const q = (searchInput.value || "").toLowerCase().trim();
  grid.innerHTML = "";
  const filtered = products.filter(p => {
    const inCat = activeCat === "Todos" ? true : p.cat === activeCat;
    const matches = [p.title, p.desc, p.price, p.cat].join(" ").toLowerCase().includes(q);
    return inCat && matches;
  });
  if(filtered.length === 0){
    grid.innerHTML = `<div style="grid-column:1/-1;padding:22px;border-radius:10px;background:#fff;text-align:center;color:${getComputedStyle(document.documentElement).getPropertyValue('--muted')};">Nenhum produto encontrado.</div>`;
    return;
  }
  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    const thumbSrc = (p.imgs && p.imgs.length) ? p.imgs[0] : '';
    card.innerHTML = `
      <img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}"onclick="showDetails(${p.id})" style="cursor:pointer;" />
      <div class="meta">
        <div>
          <div class="title">${escapeHtml(p.title)}</div>
          <div class="desc">${escapeHtml(p.desc)}</div>
        </div>
        <div style="text-align:right">
          <div class="price"><span class="currency">R$</span> ${escapeHtml(p.price)}</div>
          <div style="font-size:12px;color:var(--muted);margin-top:6px">${escapeHtml(p.cat)}</div>
        </div>
      </div>
      <div class="actions">
<button class="btn whatsapp-btn" onclick='openWhatsApp(${p.id})'>
  <img src="imagens/whatsapp.png" alt="WhatsApp">
  <span>WhatsApp</span>
</button>
        <button class="btn details" onclick='showDetails(${p.id})'>🔍 Detalhes</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function escapeHtml(str){ return (str||"").replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

/***********************
 * WhatsApp -> abre com mensagem predefinida
 ***********************/
function openWhatsApp(productId){
  const p = products.find(x=>x.id===productId);
  const msg = encodeURIComponent(`${p.whatsappMsg} (${brandName} / catálogo)`);
  const link = `https://wa.me/${whatsappPhone}?text=${msg}`;
  window.open(link, '_blank');
}

/***********************
 * Modal de detalhes + Carrossel
 ***********************/
let currentImages = [];
let currentIndex = 0;
let currentProductId = null;

function showDetails(productId){
  const p = products.find(x => x.id === productId);
  currentImages = (p.imgs && p.imgs.length) ? p.imgs.slice() : [''];
  currentIndex = 0;
  currentProductId = productId;

  carouselImg.src = currentImages[currentIndex] || '';
  detailTitle.innerText = p.title;
  detailDesc.innerText = p.desc;
  detailPrice.innerHTML = `<span class="currency">R$</span> ${escapeHtml(p.price)}`;
  detailCat.innerText = p.cat;

  // montar thumbs
  thumbsContainer.innerHTML = '';
  currentImages.forEach((src, idx) => {
    const t = document.createElement('img');
    t.src = src;
    t.alt = p.title + ' - ' + (idx+1);
    t.className = idx === 0 ? 'active' : '';
    t.onclick = () => { currentIndex = idx; updateCarousel(); }
    thumbsContainer.appendChild(t);
  });

  detailsModal.style.display = "flex";

  detailWhats.onclick = () => openWhatsApp(productId);
  detailClose.onclick = closeDetails;
  closeDetailsBtn.onclick = closeDetails;
}

function closeDetails(){
  detailsModal.style.display = "none";
}

function updateCarousel(){
  carouselImg.src = currentImages[currentIndex] || '';
  // atualizar classe nas thumbs
  Array.from(thumbsContainer.children).forEach((el, idx) => {
    if(idx === currentIndex) el.classList.add('active'); else el.classList.remove('active');
  });
}

function nextImg(){
  if(!currentImages.length) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateCarousel();
}

function prevImg(){
  if(!currentImages.length) return;
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateCarousel();
}

prevBtn.addEventListener('click', prevImg);
nextBtn.addEventListener('click', nextImg);

// fechar modal clicando fora do conteúdo
detailsModal.addEventListener('click', (e) => {
  if(e.target === detailsModal) closeDetails();
});

/***********************
 * Busca em tempo real
 ***********************/
searchInput.addEventListener('input', ()=>render());

/***********************
 * QR Code do catálogo
 ***********************/
qrBtn.addEventListener('click', ()=> {
  const url = location.href; // link atual (cada cliente terá seu link único)
  catalogLink.value = url;
  qrcodeEl.innerHTML = "";
  new QRCode(qrcodeEl, { text: url, width: 180, height: 180 });
  qrModal.style.display = 'flex';
});
qrClose.addEventListener('click', ()=>qrModal.style.display='none');
copyBtn.addEventListener('click', ()=> {
  catalogLink.select(); catalogLink.setSelectionRange(0,99999);
  document.execCommand('copy');
  copyBtn.innerText = "Copiado ✓";
  setTimeout(()=> copyBtn.innerText = "Copiar link", 1500);
});
// fechar QR clicando fora
qrModal.addEventListener('click', (e) => { if(e.target === qrModal) qrModal.style.display = 'none'; });

/***********************
 * Inicializa
 ***********************/

render();





