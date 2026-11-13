/* =====================================================================
   SCRIPT.JS — prende i contenuti da content.js e li mette nella pagina.
   Di solito NON serve modificare questo file.
   ===================================================================== */

(function () {
  if (typeof SITO === "undefined") {
    document.body.innerHTML =
      '<p style="padding:2rem;font-family:sans-serif">⚠️ Non riesco a leggere <b>content.js</b>. ' +
      "Controlla di non aver cancellato una virgola o una virgoletta nell'ultima modifica.</p>";
    return;
  }

  const S = SITO;
  const $ = (sel) => document.querySelector(sel);

  /* ---------- utilità ---------- */

  // Evita che caratteri speciali rompano la pagina
  const sicuro = (t) =>
    String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  // È un segnaposto? (testo tra parentesi quadre)
  const segnaposto = (t) => /\[[^\]]+\]/.test(String(t ?? ""));

  // *parola* → corsivo colorato; [SEGNAPOSTO] → evidenziato
  const formatta = (t) =>
    sicuro(t)
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]/g, '<span class="segnaposto">[$1]</span>');

  // Immagine con riquadro di riserva se il file non si trova
  const immagine = (src, alt, classe = "") =>
    `<img class="${classe}" src="${sicuro(src)}" alt="${sicuro(alt)}" loading="lazy"
       onerror="this.outerHTML='<div class=&quot;img-mancante ${classe}&quot;><span>[AGGIUNGI IMMAGINE]<br><small>${sicuro(src)}</small></span></div>'">`;

  // Link sicuro: se è ancora un segnaposto porta ai contatti invece di rompersi
  const link = (url, testo, extra = "") => {
    const fuori = /^https?:/.test(url);
    if (!url || segnaposto(url)) return `<a href="#contatti" class="segnaposto-link" ${extra}>${testo}</a>`;
    return `<a href="${sicuro(url)}" ${fuori ? 'target="_blank" rel="noopener"' : ""} ${extra}>${testo}</a>`;
  };

  const coloriEtichette = ["c1", "c2", "c3", "c4"];

  /* ---------- dati generali ---------- */
  document.title = S.titoloPagina || S.nome;
  document.querySelector('meta[name="description"]').setAttribute("content", S.descrizionePagina || "");
  document.querySelectorAll('[data-campo]').forEach((el) => {
    el.innerHTML = formatta(S[el.dataset.campo]);
  });

  /* ---------- HOME ---------- */
  const H = S.home;
  const home = $("#home");
  home.classList.add(H.stile === "sfondo" ? "home--sfondo" : "home--affiancata");
  const giri = (H.adesivo || "").repeat(2);
  home.innerHTML = `
    <div class="home__testo">
      <p class="occhiello">${formatta(H.etichetta)}</p>
      <h1 class="home__frase">${formatta(H.frase)}</h1>
      <p class="home__sotto">${formatta(H.sottotitolo)}</p>
      <a href="#progetti" class="bottone">${sicuro(H.bottone)} <span aria-hidden="true">↓</span></a>
    </div>
    <figure class="home__foto">
      ${immagine(H.immagine, H.testoAlternativo, "home__img")}
      ${H.adesivo ? `
      <a href="#progetti" class="adesivo" aria-label="${sicuro(H.bottone)}">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <defs><path id="cerchio" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs>
          <text><textPath href="#cerchio">${sicuro(giri)}</textPath></text>
        </svg>
        <span class="adesivo__freccia">↓</span>
      </a>` : ""}
    </figure>`;

  /* ---------- NASTRO ---------- */
  $(".nastro").innerHTML = `<div class="nastro__riga">${(S.servizi || [])
    .map((s, i) => `<span class="${i % 2 ? "corsivo" : ""}">${sicuro(s)}</span><span class="stella" aria-hidden="true">✺</span>`)
    .join("")}</div>`;

  /* ---------- PROGETTI ---------- */
  const schema = ["largo", "verticale", "piccolo", "medio"]; // usato se manca "formato"
  const visibili = (S.progetti || []).filter((p) => !p.nascosto);
  $(".progetti__griglia").innerHTML = visibili
    .map((p, i) => {
      const formato = p.formato || schema[i % schema.length];
      const num = String(i + 1).padStart(2, "0");
      const colore = coloriEtichette[i % coloriEtichette.length];
      const meta = [p.cliente, p.anno].filter(Boolean).map(formatta).join(" · ");
      const apribile = (p.galleria || []).length > 0;
      return `
      <article class="progetto progetto--${formato} rivela">
        <div class="progetto__copertina">
          ${immagine(p.copertina, (p.titolo + " — " + p.tipo).replace(/\*/g, ""), "progetto__img")}
          <span class="etichetta etichetta--${colore}">${sicuro(p.tipo)}</span>
          ${apribile ? `<button class="progetto__apri" data-apri="${i}" aria-label="Apri il progetto ${sicuro(p.titolo.replace(/\*/g, ""))}"><span>Guarda il progetto +</span></button>` : ""}
        </div>
        <div class="progetto__testo">
          <span class="progetto__num">${num}</span>
          <div>
            <h3 class="progetto__titolo">${formatta(p.titolo)}</h3>
            ${meta ? `<p class="progetto__meta">${meta}</p>` : ""}
            <p class="progetto__desc">${formatta(p.descrizione)}</p>
            <div class="progetto__azioni">
              ${apribile ? `<button class="progetto__link" data-apri="${i}">Guarda il progetto <span aria-hidden="true">+</span></button>` : ""}
              ${p.link ? link(p.link, sicuro(p.testoLink || "Visita il sito") + ' <span aria-hidden="true">↗</span>', 'class="progetto__link"') : ""}
            </div>
          </div>
        </div>
      </article>`;
    })
    .join("");

  /* ---------- CHI SONO ---------- */
  const C = S.chiSono;
  $("#chi-sono").innerHTML = `
    <div class="sezione__testa">
      <p class="sezione__numero">02 — Chi sono</p>
    </div>
    <div class="chi-sono__griglia">
      <figure class="chi-sono__foto rivela">
        ${immagine(C.foto, C.testoAlternativo, "chi-sono__img")}
      </figure>
      <div class="chi-sono__testo rivela">
        <h2 class="sezione__titolo">${formatta(C.titolo)}</h2>
        ${(C.paragrafi || []).map((t) => `<p>${formatta(t)}</p>`).join("")}
        <ul class="competenze">
          ${(C.competenze || []).map((c, i) => `<li class="chip chip--${coloriEtichette[i % 4]}">${sicuro(c)}</li>`).join("")}
        </ul>
      </div>
    </div>
    ${C.citazione ? `<blockquote class="citazione rivela">${formatta(C.citazione)}</blockquote>` : ""}`;

  /* ---------- CONTATTI ---------- */
  const K = S.contatti;
  const emailOk = K.email && !segnaposto(K.email);
  const igOk = K.instagram && !segnaposto(K.instagram);
  const ig = String(K.instagram || "").replace(/^@/, "");
  const altri = (K.altriLink || []).map((l) => link(l.link, sicuro(l.nome) + ' <span aria-hidden="true">↗</span>')).join("");

  $("#contatti").innerHTML = `
    <p class="sezione__numero">03 — Contatti</p>
    <h2 class="contatti__titolo">${formatta(K.titolo)}</h2>
    <p class="contatti__testo">${formatta(K.testo)}</p>
    <div class="contatti__link">
      <div class="contatto">
        <span class="contatto__tipo">Email</span>
        ${emailOk
          ? `<a class="contatto__valore" href="mailto:${sicuro(K.email)}">${sicuro(K.email)}</a>`
          : `<span class="contatto__valore">${formatta(K.email)}</span>`}
      </div>
      <div class="contatto">
        <span class="contatto__tipo">Instagram</span>
        ${igOk
          ? `<a class="contatto__valore" href="https://www.instagram.com/${encodeURIComponent(ig)}/" target="_blank" rel="noopener">@${sicuro(ig)}</a>`
          : `<span class="contatto__valore">${formatta(K.instagram)}</span>`}
      </div>
    </div>
    ${altri ? `<div class="contatti__altri">${altri}</div>` : ""}
    ${emailOk ? `<a class="bottone bottone--chiaro" href="mailto:${sicuro(K.email)}">Scrivimi una email <span aria-hidden="true">→</span></a>` : ""}`;

  /* ---------- FOOTER ---------- */
  $(".piede").innerHTML = `
    <span>© ${new Date().getFullYear()} ${formatta(S.nome)}</span>
    <span>${sicuro(S.ruolo)}</span>
    <a href="#home">Torna su ↑</a>`;

  /* ---------- SCHEDA PROGETTO (si apre se il progetto ha una "galleria") ---------- */
  const scheda = document.createElement("dialog");
  scheda.className = "scheda";
  document.body.appendChild(scheda);

  const apriScheda = (i) => {
    const p = visibili[i];
    const meta = [p.cliente, p.anno].filter(Boolean).map(formatta).join(" · ");
    scheda.innerHTML = `
      <button class="scheda__chiudi" aria-label="Chiudi">✕</button>
      <header class="scheda__testa">
        <span class="etichetta etichetta--${coloriEtichette[i % 4]}">${sicuro(p.tipo)}</span>
        <h2 class="scheda__titolo">${formatta(p.titolo)}</h2>
        ${meta ? `<p class="progetto__meta">${meta}</p>` : ""}
        <p class="scheda__desc">${formatta(p.racconto || p.descrizione)}</p>
        ${p.link ? link(p.link, sicuro(p.testoLink || "Visita il sito") + ' <span aria-hidden="true">↗</span>', 'class="bottone"') : ""}
      </header>
      <div class="scheda__galleria">
        ${p.galleria.map((g) => {
          const src = typeof g === "string" ? g : g.immagine;
          const did = typeof g === "string" ? "" : g.didascalia || "";
          return `<figure class="scheda__foto">${immagine(src, did || p.titolo, "")}${did ? `<figcaption>${formatta(did)}</figcaption>` : ""}</figure>`;
        }).join("")}
      </div>
      ${p.crediti ? `<p class="scheda__crediti">${formatta(p.crediti)}</p>` : ""}`;
    // foto orizzontali larghe, verticali affiancate
    scheda.querySelectorAll(".scheda__foto img").forEach((img) => {
      const segna = () => img.parentElement.classList.add(img.naturalWidth >= img.naturalHeight ? "larga" : "alta");
      img.complete ? segna() : img.addEventListener("load", segna);
    });
    scheda.showModal();
    scheda.scrollTop = 0;
    document.body.style.overflow = "hidden";
  };
  scheda.addEventListener("close", () => (document.body.style.overflow = ""));
  scheda.addEventListener("click", (e) => {
    if (e.target === scheda || e.target.closest(".scheda__chiudi")) scheda.close();
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-apri]");
    if (b) apriScheda(+b.dataset.apri);
  });

  /* ---------- MICROINTERAZIONE: comparsa morbida allo scroll ---------- */
  const elementi = document.querySelectorAll(".rivela");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const osserva = new IntersectionObserver(
      (voci) => voci.forEach((v) => {
        if (v.isIntersecting) { v.target.classList.add("visibile"); osserva.unobserve(v.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elementi.forEach((el) => osserva.observe(el));
  } else {
    elementi.forEach((el) => el.classList.add("visibile"));
  }

  /* ---------- testata con ombra quando si scorre ---------- */
  const testata = $(".testata");
  addEventListener("scroll", () => testata.classList.toggle("scorrendo", scrollY > 20), { passive: true });
})();
