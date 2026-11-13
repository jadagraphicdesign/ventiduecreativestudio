/* =====================================================================
   CONTENT.JS — TUTTI I CONTENUTI DEL SITO
   ---------------------------------------------------------------------
   Qui cambi testi, immagini, progetti e contatti. Non serve toccare
   altri file.

   REGOLE D'ORO
   1. Ogni testo sta tra virgolette "così". Se nel testo ti serve una
      virgoletta, usa quelle tipografiche “così” oppure l'apostrofo ’.
   2. Dopo ogni voce c'è una virgola. Se il sito diventa bianco,
      di solito manca una virgola o una virgoletta.
   3. Per una parola in corsivo colorato (Playfair) mettila tra
      asterischi: "Creo *contenuti* che restano" → "contenuti" sarà
      in corsivo e colorata.
   4. Le immagini vanno nella cartella img/ (le copertine dei progetti
      in img/progetti/). Poi scrivi qui il percorso, es. "img/progetti/
      brand-caffe.jpg". Attenzione a maiuscole ed estensione (.jpg/.png).
   5. Tutto quello che è tra [PARENTESI QUADRE] è un segnaposto da
      sostituire. Sul sito compare con un bordo tratteggiato, così lo
      ritrovi subito.
   ===================================================================== */

const SITO = {

  /* ---------- DATI GENERALI ---------- */
  nome: "Giada Al Zeer",                 // compare in alto a sinistra e nel footer
  ruolo: "Graphic designer · Brand identity, packaging e contenuti social",
  titoloPagina: "Giada Al Zeer — Graphic designer a Modena | Brand identity e packaging", // testo della scheda del browser
  descrizionePagina: "Giada Al Zeer, graphic designer a Modena: brand identity, packaging, campagne e contenuti social per brand che vogliono farsi ricordare. Guarda i progetti.",


  /* ---------- HOME ---------- */
  home: {
    // Piccola riga sopra il titolo
    etichetta: "Giada Al Zeer · Graphic designer a Modena",

    // La frase principale. Le parole tra *asterischi* diventano corsive e colorate.
    frase: "Brand identity, packaging e contenuti social che si fanno *ricordare*.",

    // Due righe di presentazione sotto la frase
    sottotitolo: "Sono Giada, graphic designer. Costruisco identità visive complete: logo, packaging, campagne e contenuti per Instagram, perché un brand sia riconoscibile ovunque lo si incontri.",

    // La tua foto o immagine personale (verticale, almeno 1200px di altezza)
    immagine: "img/foto-home.jpg",
    testoAlternativo: "Ritratto di Giada Al Zeer",

    // "affiancata" = foto a destra e testo su sfondo panna (più leggibile)
    // "sfondo"     = foto a tutto schermo dietro al testo (con velatura scura)
    stile: "affiancata",

    bottone: "Guarda i progetti",
    // Testo dell'adesivo rotondo che gira sulla foto (corto!)
    adesivo: "guarda i progetti • scrivimi • ",
  },


  /* ---------- NASTRO DEI SERVIZI (la fascia colorata sotto la home) ---------- */
  servizi: [
    "Brand identity",
    "Packaging",
    "Contenuti social",
    "Campagne pubblicitarie",
    "Editoria",
  ],


  /* ---------- PROGETTI ----------
     Ogni progetto è un blocco tra { } seguito da una virgola.
     • Per AGGIUNGERE un progetto: copia un blocco intero e incollalo dove vuoi.
     • Per RIORDINARE: sposta il blocco più in alto o più in basso.
     • Per NASCONDERE senza cancellare: scrivi  nascosto: true,

     formato (facoltativo) decide come appare il progetto:
       "largo"     → immagine a tutta larghezza
       "verticale" → immagine alta, a sinistra
       "piccolo"   → immagine quadrata, piccola, a destra
       "medio"     → immagine orizzontale, spostata a destra
     Se togli la riga "formato", il sito alterna i formati da solo.

     FACOLTATIVI per un progetto più ricco (vedi il progetto Amal):
       galleria: [ ... ]  → elenco di immagini: compare il bottone
                            "Guarda il progetto" che apre la scheda completa.
                            Ogni voce può essere solo il percorso
                            "img/progetti/nome.jpg" oppure
                            { immagine: "img/...", didascalia: "testo" }
       racconto: "..."    → testo più lungo mostrato nella scheda
       testoLink: "..."   → testo del bottone del link (es. "Visita il sito")
       crediti: "..."     → crediti in fondo alla scheda (foto, collaboratori)
  ------------------------------------------------------------------- */
  titoloProgetti: "Progetti *selezionati*",
  introProgetti: "Progetti di brand identity, packaging design e comunicazione: dal logo alla campagna, dal vasetto al feed Instagram.",

  progetti: [
    {
      titolo: "*Amal* — identità visiva e campagna per una mostra",
      tipo: "Brand identity e campagna",
      cliente: "Progetto di tesi in Graphic Design",
      anno: "2025",
      descrizione: "Logo, campagna di manifesti, libro e biglietti per Amal, una mostra fotografica contro l’anestesia visiva contemporanea: un invito a fermarsi e guardare con tempo le immagini che di solito scorriamo.",
      racconto: "Amal nasce come tesi in Graphic Design: un progetto contro l’anestesia visiva contemporanea, cioè l’abitudine a scorrere immagini senza più fermarsi a guardarle. Ho progettato il logo e il pay-off “reclaim your time”, la campagna di manifesti e totem, il libro che accompagna la visita, i biglietti d’ingresso e l’allestimento della mostra fotografica. Il ricavato dei biglietti è pensato per finanziare borse di studio per gli studenti dei territori documentati.",
      copertina: "img/progetti/amal/copertina-manifesti.jpg",
      link: "https://lajeiid.github.io/SITO/",
      testoLink: "Visita il sito di Amal",
      formato: "largo",
      galleria: [
        { immagine: "img/progetti/amal/logo-costruzione.jpg", didascalia: "Logo e costruzione del marchio" },
        { immagine: "img/progetti/amal/totem.jpg", didascalia: "Totem della campagna" },
        { immagine: "img/progetti/amal/biglietti.jpg", didascalia: "Biglietti d’ingresso, fronte e retro" },
        { immagine: "img/progetti/amal/libro.jpg", didascalia: "Il libro della mostra" },
        { immagine: "img/progetti/amal/mostra-sospensione.jpg", didascalia: "Allestimento — “La sospensione della realtà”" },
        { immagine: "img/progetti/amal/mostra-radici.jpg", didascalia: "Allestimento — “Radici nel vuoto”" },
        { immagine: "img/progetti/amal/mostra-luce.jpg", didascalia: "Allestimento — “Luce nel buio”" },
        { immagine: "img/progetti/amal/mostra-rallenta.jpg", didascalia: "Allestimento — “Rallenta, la memoria ha bisogno di tempo”" },
        { immagine: "img/progetti/amal/rallenta-citazione.jpg" },
      ],
      crediti: "Fotografie esposte nella mostra: Hosny Salah.",
    },
    {
      titolo: "*Al Meriggio d’Or* — brand identity e packaging per miele artigianale",
      tipo: "Brand identity e packaging",
      cliente: "Al Meriggio d’Or, Valpolicella",
      anno: "2025",
      descrizione: "Identità visiva completa per un laboratorio di miele, saponi naturali e candele in cera d’api: logo, etichette, packaging, campagna affissioni, contenuti Instagram e brand manual.",
      racconto: "Al Meriggio d’Or è un’azienda familiare di Sant’Ambrogio di Valpolicella che produce miele biologico, saponette naturali e candele in cera d’api. Il nome nasce dalla canzone dei fiori di “Alice nel Paese delle Meraviglie”: per questo ho costruito un’identità morbida e un po’ fiabesca. Il marchio è una piccola ape stilizzata in volo; le texture floreali ad acquerello cambiano colore per ogni varietà di miele (rosmarino, rosa canina, millefiori, biancospino) e tornano su etichette, scatole, segnalibri e feed Instagram. Il progetto comprende il brand manual con regole d’uso del marchio, palette, tipografia, packaging, stationery, campagna affissioni “C’è aria di dolcezza”, social media, merchandising e allestimento del punto vendita.",
      copertina: "img/progetti/meriggio/depliant.jpg",
      link: "docs/brand-manual-al-meriggio-dor.pdf",
      testoLink: "Sfoglia il brand manual (PDF)",
      formato: "medio",
      galleria: [
        { immagine: "img/progetti/meriggio/insegna.jpg", didascalia: "Logo e insegna in legno del punto vendita" },
        { immagine: "img/progetti/meriggio/vasetto-rosmarino.jpg", didascalia: "Packaging miele — Rosmarino" },
        { immagine: "img/progetti/meriggio/vasetto-rosa-canina.jpg", didascalia: "Packaging miele — Rosa canina" },
        { immagine: "img/progetti/meriggio/vasetto-millefiori.jpg", didascalia: "Packaging miele — Millefiori" },
        { immagine: "img/progetti/meriggio/vasetto-biancospino.jpg", didascalia: "Packaging miele — Biancospino" },
        { immagine: "img/progetti/meriggio/segnalibri.jpg", didascalia: "Segnalibri promozionali con le schede botaniche" },
        { immagine: "img/progetti/meriggio/poster-millefiori.jpg", didascalia: "Campagna affissioni “C’è aria di dolcezza”" },
        { immagine: "img/progetti/meriggio/poster-biancospino.jpg", didascalia: "Campagna affissioni “C’è profumo di dolcezza”" },
        { immagine: "img/progetti/meriggio/saponetta-rosa-canina.jpg", didascalia: "Packaging saponetta naturale alla rosa canina" },
        { immagine: "img/progetti/meriggio/candela-rosa-canina.jpg", didascalia: "Candela in cera d’api e scatola con rilievo a secco" },
        { immagine: "img/progetti/meriggio/scatola.jpg", didascalia: "Scatola regalo" },
        { immagine: "img/progetti/meriggio/social.jpg", didascalia: "Feed Instagram" },
      ],
    },
    {
      titolo: "[TITOLO PROGETTO 2]",
      nascosto: true,          // ← togli questa riga quando hai inserito il progetto
      tipo: "Reel e video",
      cliente: "[NOME CLIENTE]",
      anno: "[ANNO]",
      descrizione: "[Due righe: idea del video, formato, dove è stato pubblicato.]",
      copertina: "img/progetti/progetto-2.svg",
      link: "",
      formato: "medio",
    },
    {
      titolo: "[TITOLO PROGETTO 3]",
      nascosto: true,          // ← togli questa riga quando hai inserito il progetto
      tipo: "UGC",
      cliente: "[NOME CLIENTE]",
      anno: "[ANNO]",
      descrizione: "[Due righe sul contenuto UGC: prodotto, taglio, piattaforma.]",
      copertina: "img/progetti/progetto-3.svg",
      link: "",
      formato: "piccolo",
    },
    {
      titolo: "[TITOLO PROGETTO 5]",
      nascosto: true,          // ← togli questa riga quando hai inserito il progetto
      tipo: "Graphic design",
      cliente: "[NOME CLIENTE]",
      anno: "[ANNO]",
      descrizione: "[Due righe sul progetto grafico.]",
      copertina: "img/progetti/progetto-5.svg",
      link: "",
      formato: "largo",
    },
  ],


  /* ---------- CHI SONO ---------- */
  chiSono: {
    titolo: "Piacere, sono *Giada*",
    foto: "img/foto-chi-sono.svg",
    testoAlternativo: "Foto di Giada Al Zeer",
    // Ogni frase tra virgolette è un paragrafo separato
    paragrafi: [
      "Sono Giada Al Zeer, graphic designer a Modena. Mi occupo di brand identity e packaging design, e accompagno i brand anche dopo il logo: campagne, materiali stampati e contenuti per Instagram.",
      "Parto sempre dalla storia di chi ho davanti: cosa vuole dire e a chi. Da lì costruisco un sistema visivo coerente, con colori, tipografia e illustrazioni che si riconoscono su un’etichetta come in un post.",
      "Oggi sto approfondendo social media marketing, videomaking e contenuti UGC, per dare ai brand che seguo un’immagine curata anche sui social.",
    ],
    // Frase grande in evidenza (puoi lasciarla vuota: "")
    citazione: "Ogni brand ha già una *voce*: io la rendo visibile.",
    // Le tue competenze (chip colorate)
    competenze: [
      "Brand identity",
      "Logo design",
      "Packaging design",
      "Brand manual",
      "Campagne e affissioni",
      "Editoria",
      "Contenuti social",
      "Reel e video",
    ],
  },


  /* ---------- CONTATTI ---------- */
  contatti: {
    titolo: "Lavoriamo *insieme*?",
    testo: "Lavoro a Modena. Hai un brand da far nascere, un packaging da progettare o un profilo Instagram da rinnovare? Raccontami il tuo progetto: troviamo insieme l’immagine giusta.",
    email: "[INSERISCI EMAIL]",              // es. "ciao@tuonome.it"
    instagram: "[INSERISCI USERNAME]",       // solo il nome, senza @ (es. "tuonome.design")
    // Altri link facoltativi: aggiungi o togli righe
    altriLink: [
      // { nome: "Behance", link: "https://www.behance.net/..." },
      // { nome: "LinkedIn", link: "https://www.linkedin.com/in/..." },
    ],
  },

};
