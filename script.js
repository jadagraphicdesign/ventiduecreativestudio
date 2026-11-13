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

  if (S.logo) {
    $(".testata__nome").innerHTML = `<img class="testata__logo" src="${sicuro(S.logo)}" alt="${sicuro(S.nome)}">`;
  } else if (S.nomeBreve) {
    $(".testata__nome").innerHTML = `<span class="nome-lungo">${sicuro(S.nome)}</span><span class="nome-breve">${sicuro(S.nomeBreve)}</span>`;
  }

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
      const apribile = (p.galleria || []).length > 0 || (p.sezioni || []).length > 0;
      return `
      <article class="progetto progetto--${formato} rivela${p.dettaglio ? " progetto--con-dettaglio" : ""}">
        ${p.dettaglio ? `<img class="progetto__dettaglio" src="${sicuro(p.dettaglio)}" alt="" aria-hidden="true" loading="lazy">` : ""}
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

  /* Sezioni "art direction" per i progetti che le hanno (vedi Al Meriggio d'Or in content.js) */
  const sezione = (z) => {
    const titolo = z.titolo ? `<h3 class="sz__titolo">${formatta(z.titolo)}</h3>` : "";
    const testo = z.testo ? `<p class="sz__testo">${formatta(z.testo)}</p>` : "";
    const img = (src, alt, cl = "") => `<img class="${cl}" src="${sicuro(src)}" alt="${sicuro(String(alt || "").replace(/\*/g, ""))}" loading="lazy">`;
    switch (z.tipo) {
      case "soglia":
        return `<section class="sz sz--soglia">
          <p class="soglia__marchio">${sicuro(z.marchio)}</p>
          ${z.payoff ? `<p class="soglia__payoff">${sicuro(z.payoff)}</p>` : ""}
          ${z.nota ? `<p class="soglia__nota">${formatta(z.nota)}</p>` : ""}
          <span class="soglia__giu" aria-hidden="true">↓</span>
        </section>`;
      case "manifesto":
        return `<section class="sz sz--manifesto"><blockquote>${formatta(z.testo)}</blockquote>${z.firma ? `<p class="manifesto__firma">${formatta(z.firma)}</p>` : ""}</section>`;
      case "contrasto":
        return `<section class="sz sz--contrasto">${titolo}${testo}
          <div class="contrasto">
            <div class="contrasto__feed" aria-hidden="true"><div class="feed__nastro">${Array.from({ length: 14 }, (_, k) => `<span class="feed__post feed__post--${k % 4}"></span>`).join("")}${Array.from({ length: 14 }, (_, k) => `<span class="feed__post feed__post--${k % 4}"></span>`).join("")}</div></div>
            <div class="contrasto__vuoto"><figure>${img(z.immagine, z.didascalia)}${z.didascalia ? `<figcaption>${formatta(z.didascalia)}</figcaption>` : ""}</figure></div>
            <p class="contrasto__etichetta">${formatta(z.sinistra)}</p>
            <p class="contrasto__etichetta">${formatta(z.destra)}</p>
          </div></section>`;
      case "principi":
        return `<section class="sz sz--principi">${titolo}${testo}<ol class="principi">${z.elementi.map((e) => `
            <li><h4>${formatta(e.titolo)}</h4><p>${formatta(e.testo)}</p></li>`).join("")}</ol></section>`;
      case "sosta":
        return `<section class="sz sz--sosta" style="--durata:${Number(z.secondi) || 5}s" data-secondi="${Number(z.secondi) || 5}">
          <p class="sosta__parola">${formatta(z.testo)}</p>
          <figure class="sosta__foto">${img(z.immagine, "Ritratto")}</figure>
          <div class="sosta__linea" aria-hidden="true"><span></span></div>
          <p class="sosta__dopo">${formatta(z.dopo)}</p>
        </section>`;
      case "palette":
        return `<section class="sz sz--palette">${titolo}${testo}<ul class="palette">${z.colori.map((c) => `
            <li style="--c:${sicuro(c.codice)}"><span class="palette__campione"></span><strong>${sicuro(c.nome)}</strong><code>${sicuro(c.codice)}</code><span class="palette__ruolo">${formatta(c.ruolo)}</span></li>`).join("")}</ul></section>`;
      case "sala":
        return `<section class="sz sz--sala">${titolo}${testo}${z.opere.map((o) => `
            <figure class="opera">${img(o.immagine, o.didascalia)}<figcaption>${formatta(o.didascalia)}</figcaption></figure>`).join("")}
            ${z.nota ? `<p class="sala__nota">${formatta(z.nota)}</p>` : ""}</section>`;
      case "specifiche":
        return `<section class="sz sz--specifiche"><figure>${img(z.immagine, String(z.titolo || "").replace(/\*/g, ""))}</figure>
          <div>${titolo}${testo}${z.voci ? `<dl>${z.voci.map(([k, v]) => `<dt>${sicuro(k)}</dt><dd>${formatta(v)}</dd>`).join("")}</dl>` : ""}</div></section>`;
      case "fine":
        return `<section class="sz sz--fine"><p class="fine__testo">${formatta(z.testo)}</p>${z.nota ? `<p class="fine__nota">${formatta(z.nota)}</p>` : ""}
          <button class="bottone fine__torna">Torna ai progetti</button></section>`;
      case "apertura":
        return `<section class="sz sz--apertura">${img(z.immagine, z.didascalia)}</section>`;
      case "testo":
        return `<section class="sz sz--testo">${titolo}${testo}</section>`;
      case "colori":
        return `<section class="sz sz--colori">${titolo}${testo}
          <div class="colori">${z.elementi.map((e) => `
            <figure class="colore" style="--c:${sicuro(e.colore)};--t:${sicuro(e.testo || "#fff")}">
              ${img(e.immagine, "Packaging " + e.nome, "colore__oggetto")}
              <figcaption><span class="colore__nome">${formatta(e.nome)}</span>${e.nota ? `<span class="colore__nota">${formatta(e.nota)}</span>` : ""}</figcaption>
            </figure>`).join("")}</div></section>`;
      case "collage":
        return `<section class="sz sz--collage" style="--c:${sicuro(z.colore || "var(--inchiostro)")}">
          <svg class="volo" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 320 C 180 120, 320 380, 480 200 S 760 40, 1020 140"/></svg>
          <div class="collage__testa">${titolo}${testo}</div>
          <div class="collage">${z.elementi.map((e, k) => `
            <figure class="pezzo pezzo--${k + 1}${e.sfuma ? " pezzo--sfumato" : ""}">${img(e.immagine, e.didascalia)}${e.didascalia ? `<figcaption>${formatta(e.didascalia)}</figcaption>` : ""}</figure>`).join("")}</div></section>`;
      case "coppia":
        return `<section class="sz sz--coppia">${titolo}${testo}<div class="coppia">${z.immagini.map((g) => `
            <figure>${img(g.immagine, g.didascalia)}${g.didascalia ? `<figcaption>${formatta(g.didascalia)}</figcaption>` : ""}</figure>`).join("")}</div></section>`;
      default: // "immagine"
        return `<section class="sz sz--immagine${z.stretta ? " sz--stretta" : ""}">${titolo}${testo}<figure>${img(z.immagine, z.didascalia)}${z.didascalia ? `<figcaption>${formatta(z.didascalia)}</figcaption>` : ""}</figure></section>`;
    }
  };

  const apriScheda = (i) => {
    const p = visibili[i];
    scheda.removeAttribute("style");
    if (p.tema) Object.entries(p.tema).forEach(([k, v]) => scheda.style.setProperty("--" + k, v));
    const meta = [p.cliente, p.anno].filter(Boolean).map(formatta).join(" · ");
    scheda.innerHTML = `
      <button class="scheda__chiudi" aria-label="Chiudi">✕</button>
      ${(p.sezioni || []).filter((z) => ["apertura", "soglia"].includes(z.tipo)).map(sezione).join("")}
      <header class="scheda__testa">
        <span class="etichetta etichetta--${coloriEtichette[i % 4]}">${sicuro(p.tipo)}</span>
        <h2 class="scheda__titolo">${formatta(p.titolo)}</h2>
        ${meta ? `<p class="progetto__meta">${meta}</p>` : ""}
        <p class="scheda__desc">${formatta(p.racconto || p.descrizione)}</p>
        ${p.link ? link(p.link, sicuro(p.testoLink || "Visita il sito") + ' <span aria-hidden="true">↗</span>', 'class="bottone"') : ""}
      </header>
      ${(p.sezioni || []).filter((z) => !["apertura", "soglia", "fine"].includes(z.tipo)).map(sezione).join("")}
      <div class="scheda__galleria">
        ${(p.galleria || []).map((g) => {
          const src = typeof g === "string" ? g : g.immagine;
          const did = typeof g === "string" ? "" : g.didascalia || "";
          return `<figure class="scheda__foto">${immagine(src, did || p.titolo, "")}${did ? `<figcaption>${formatta(did)}</figcaption>` : ""}</figure>`;
        }).join("")}
      </div>
      ${p.crediti ? `<p class="scheda__crediti">${formatta(p.crediti)}</p>` : ""}
      ${(p.sezioni || []).filter((z) => z.tipo === "fine").map(sezione).join("")}`;
    scheda.classList.toggle("scheda--con-soglia", (p.sezioni || []).some((z) => z.tipo === "soglia"));

    // La "sosta": parte quando la sezione è ben visibile e dura i secondi indicati
    scheda.querySelectorAll(".sz--sosta").forEach((el) => {
      const via = () => { el.classList.add("in-corso"); setTimeout(() => el.classList.add("fatta"), (+el.dataset.secondi || 5) * 1000); };
      if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) { el.classList.add("in-corso", "fatta"); return; }
      const oss = new IntersectionObserver((v) => { if (v[0].isIntersecting) { via(); oss.disconnect(); } }, { root: scheda, threshold: 0.55 });
      oss.observe(el);
    });
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
    if (e.target === scheda || e.target.closest(".scheda__chiudi") || e.target.closest(".fine__torna")) scheda.close();
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
