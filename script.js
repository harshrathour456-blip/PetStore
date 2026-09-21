(function(){
  // ====== CONFIG — replace with the real business WhatsApp number ======
  const WHATSAPP_NUMBER = "919805088144"; // country code + number, no + or spaces
  const PHONE_DISPLAY = "+91 9805088144";

  const BREEDS = [
    {
      slug:"golden-retriever",
      name:"Golden Retriever", tag:"Family favourite",
      photo:"images/goldenret.jpg",
      blurb:"Gentle, eager to please, and endlessly patient with kids — the classic first family dog.",
      price:"₹35,000", ears:"floppy",
      icon:'<ellipse cx="26" cy="30" rx="8" ry="6.5" fill="#221a12"/><ellipse cx="8" cy="16" rx="7" ry="10" fill="#f3e7cc" transform="rotate(-14 8 16)"/><ellipse cx="44" cy="16" rx="7" ry="10" fill="#f3e7cc" transform="rotate(14 44 16)"/><ellipse cx="26" cy="20" rx="15" ry="13" fill="#f3e7cc"/><circle cx="20" cy="18" r="2.4"/><circle cx="32" cy="18" r="2.4"/><ellipse cx="26" cy="26" rx="3" ry="2.2"/>'
    },
    {
      slug:"labrador-retriever",
      name:"Labrador Retriever", tag:"Loyal & energetic",
      blurb:"Playful and food-motivated, great for active households and easy to train.",
      photo:"images/lab-retri.jpg",
      price:"₹32,000", ears:"floppy",
      icon:'<ellipse cx="26" cy="30" rx="8" ry="6.5" fill="#5c4324"/><ellipse cx="8" cy="16" rx="6.5" ry="10" fill="#e9c98f" transform="rotate(-14 8 16)"/><ellipse cx="44" cy="16" rx="6.5" ry="10" fill="#e9c98f" transform="rotate(14 44 16)"/><ellipse cx="26" cy="20" rx="15" ry="13" fill="#e9c98f"/><circle cx="20" cy="18" r="2.4"/><circle cx="32" cy="18" r="2.4"/><ellipse cx="26" cy="26" rx="3" ry="2.2"/>'
    },
    {
      slug:"german-shepherd",
      name:"German Shepherd", tag:"Loyal guardian",
      photo:"images/german.jpg",
      blurb:"Sharp, protective and highly trainable — a confident companion for experienced owners.",
      price:"₹40,000", ears:"pointed",
      icon:'<ellipse cx="26" cy="30" rx="8" ry="6.5" fill="#1e1712"/><path d="M8 22 L4 4 L18 15 Z" fill="#8a5a2a"/><path d="M44 22 L48 4 L34 15 Z" fill="#8a5a2a"/><ellipse cx="26" cy="20" rx="15" ry="13" fill="#c07a35"/><circle cx="20" cy="18" r="2.4" fill="#1e1712"/><circle cx="32" cy="18" r="2.4" fill="#1e1712"/><ellipse cx="26" cy="26" rx="3" ry="2.2" fill="#1e1712"/>'
    },
    {
      slug:"siberian-husky",
      name:"Siberian Husky", tag:"Striking & spirited",
      photo:"images/husky.jpg",
      blurb:"Striking blue-eyed looks with a stubborn, adventurous streak — built for cold and activity.",
      price:"₹45,000", ears:"pointed",
      icon:'<ellipse cx="26" cy="30" rx="8" ry="6.5" fill="#3a3a3d"/><path d="M8 20 L5 4 L18 14 Z" fill="#4a4a4d"/><path d="M44 20 L47 4 L34 14 Z" fill="#4a4a4d"/><ellipse cx="26" cy="20" rx="15" ry="13" fill="#e9e6df"/><circle cx="20" cy="18" r="2.4" fill="#4a90c9"/><circle cx="32" cy="18" r="2.4" fill="#4a90c9"/><ellipse cx="26" cy="26" rx="3" ry="2.2" fill="#1e1712"/>'
    },
    {
      slug:"beagle",
      name:"Beagle", tag:"Curious & compact",
      photo:"images/beagle.jpg",
      blurb:"Small, sociable and always following a scent — cheerful energy in a compact size.",
      price:"₹22,000", ears:"floppy",
      icon:'<ellipse cx="26" cy="30" rx="8" ry="6.5" fill="#e9c98f"/><ellipse cx="8" cy="18" rx="6" ry="11" fill="#8a5a2a" transform="rotate(-10 8 18)"/><ellipse cx="44" cy="18" rx="6" ry="11" fill="#8a5a2a" transform="rotate(10 44 18)"/><ellipse cx="26" cy="20" rx="15" ry="13" fill="#f3e7cc"/><path d="M14 14 Q26 8 38 14 L34 22 Q26 18 18 22 Z" fill="#8a5a2a"/><circle cx="20" cy="19" r="2.2"/><circle cx="32" cy="19" r="2.2"/><ellipse cx="26" cy="26" rx="3" ry="2.2"/>'
    },
    {
      slug:"pug",
      name:"Pug", tag:"Small & affectionate",
      photo:"images/pug.jpg",
      blurb:"A wrinkly-faced lap dog with a big personality — low exercise needs, high charm.",
      price:"₹28,000", ears:"folded",
      icon:'<ellipse cx="26" cy="30" rx="8.5" ry="6.5" fill="#3a2e22"/><ellipse cx="10" cy="14" rx="5" ry="6" fill="#1e1712"/><ellipse cx="42" cy="14" rx="5" ry="6" fill="#1e1712"/><ellipse cx="26" cy="21" rx="16" ry="14" fill="#d9b87e"/><ellipse cx="26" cy="27" rx="8" ry="6" fill="#1e1712"/><circle cx="19" cy="18" r="2.6" fill="#1e1712"/><circle cx="33" cy="18" r="2.6" fill="#1e1712"/>'
    }
  ];

  function waLink(text){
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  }

  // populate breed grid
  const grid = document.getElementById("breedGrid");
  BREEDS.forEach((b, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-photo" data-breed="${b.slug}">
        <img src="${b.photo}" alt="${b.name} puppy">
      </div>
      <div class="card-top">
        <div class="avatar"><svg viewBox="0 0 52 40">${b.icon}</svg></div>
        <div>
          <h3>${b.name}</h3>
          <span class="tag">${b.tag}</span>
        </div>
      </div>
      <p class="blurb">${b.blurb}</p>
      <div class="card-foot">
        <div class="price">${b.price}<span>per puppy</span></div>
        <button class="btn-sm" data-index="${i}">
          Order this breed
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  // populate breed select
  const select = document.getElementById("breedSelect");
  BREEDS.forEach((b, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${b.name} — ${b.price}`;
    select.appendChild(opt);
  });

  // card buttons -> select breed + scroll to order
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-index]");
    if(!btn) return;
    select.value = btn.dataset.index;
    document.getElementById("order").scrollIntoView({behavior: "smooth"});
    document.getElementById("name")?.focus({preventScroll:true});
  });

  // order form -> build whatsapp message
  document.getElementById("orderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const b = BREEDS[select.value];
    const qty = document.getElementById("qty").value || "1";
    const name = document.getElementById("name").value.trim();
    const city = document.getElementById("city").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const notes = document.getElementById("notes").value.trim();

    let msg = `Hi PetStore! I'd like to order a puppy.\n\n`;
    msg += `Breed: ${b.name} (${b.price} each)\n`;
    msg += `Quantity: ${qty}\n`;
    msg += `Name: ${name}\n`;
    if(city) msg += `City: ${city}\n`;
    if(phone) msg += `Phone: ${phone}\n`;
    if(notes) msg += `Notes: ${notes}\n`;

    window.open(waLink(msg), "_blank", "noopener");
  });

  // generic whatsapp links (nav, footer, floating button)
  const genericMsg = "Hi PetStore! I'd like to know more about your available puppies.";
  ["navWaLink","mobileWaLink","footWaLink","floatWaLink"].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.href = waLink(genericMsg);
  });
  const phoneLink = document.getElementById("footPhoneLink");
  if(phoneLink){
    phoneLink.textContent = PHONE_DISPLAY;
    phoneLink.href = "tel:+" + WHATSAPP_NUMBER;
  }

  // interactive paw background — subtle parallax that follows the cursor
  const bgPaws = document.getElementById("bgPaws");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(bgPaws && !reduceMotion && window.matchMedia("(hover: hover)").matches){
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 26;
      const y = (e.clientY / window.innerHeight - 0.5) * 26;
      bgPaws.style.transform = `translate(${x}px, ${y}px)`;
    }, {passive:true});
  }

  // mobile menu
  const burger = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
})();