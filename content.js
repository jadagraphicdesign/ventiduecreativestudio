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
  nome: "Ventidue Creative Studio",
  nomeBreve: "Ventidue",                 // versione corta, usata in alto sui telefoni                 // compare in alto a sinistra e nel footer
  ruolo: "Graphic designer · Brand identity, packaging e contenuti social",
  titoloPagina: "Ventidue Creative Studio — Graphic design a Modena | Brand identity e packaging", // testo della scheda del browser
  descrizionePagina: "Ventidue Creative Studio, lo studio di graphic design di Giada Al Zeer a Modena: brand identity, packaging, campagne e contenuti social per brand che vogliono farsi ricordare. Guarda i progetti.",


  /* ---------- HOME ---------- */
  home: {
    // Piccola riga sopra il titolo
    etichetta: "Ventidue Creative Studio · Graphic design a Modena",

    // La frase principale. Le parole tra *asterischi* diventano corsive e colorate.
    frase: "Brand identity, packaging e contenuti social che si fanno *ricordare*.",

    // Due righe di presentazione sotto la frase
    sottotitolo: "Sono Giada Al Zeer e con Ventidue Creative Studio costruisco identità visive complete: logo, packaging, campagne e contenuti per Instagram, perché un brand sia riconoscibile ovunque lo si incontri.",

    // La tua foto o immagine personale (verticale, almeno 1200px di altezza)
    immagine: "img/foto-home.jpg",
    testoAlternativo: "Giada Al Zeer, graphic designer e fondatrice di Ventidue Creative Studio",

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
      copertina: "img/progetti/meriggio/apicoltrice.jpg",
      // Oggetto scontornato (PNG o WEBP trasparente) che "esce" dalla copertina
      dettaglio: "img/progetti/meriggio/scontornati/vasetto-biancospino.webp",
      link: "docs/brand-manual-al-meriggio-dor.pdf",
      testoLink: "Sfoglia il brand manual (PDF)",
      formato: "medio",

      // Colori della scheda di questo progetto (facoltativo)
      tema: { "panna": "#F7F1E6", "accento-1": "#2F5654", "accento-3": "#F0CC85" },

      /* SEZIONI della scheda, in ordine. Tipi disponibili:
         "apertura" (foto grande in cima), "testo", "colori",
         "collage" (oggetti scontornati su fondo colorato),
         "coppia" (due immagini sfalsate), "immagine".          */
      sezioni: [
        { tipo: "apertura", immagine: "img/progetti/meriggio/apicoltrice.jpg", didascalia: "Apicoltrice con la tuta Al Meriggio d’Or" },
        {
          tipo: "testo",
          titolo: "C’era una *volta*…",
          testo: "Al Meriggio d’Or è un’azienda di famiglia nata nel 1993 a Sant’Ambrogio di Valpolicella, tra colline, vigneti e fiori selvatici: miele biologico, saponette naturali e candele in cera d’api. Il nome viene dalla canzone dei fiori di “Alice nel Paese delle Meraviglie”, e da lì è nata un’identità morbida e un po’ fiabesca: una piccola ape in volo come marchio, una scritta a mano, texture floreali ad acquerello e un tono gentile, che parla di lentezza e cura.",
        },
        {
          tipo: "colori",
          titolo: "Un miele, un *colore*",
          testo: "Ogni varietà ha il suo colore e il suo fiore. Il sistema si riconosce a colpo d’occhio sullo scaffale e torna identico su etichette, segnalibri e feed Instagram.",
          elementi: [
            { nome: "Rosmarino", nota: "Forza vitale, memoria e rinascita", colore: "#3F6B64", immagine: "img/progetti/meriggio/scontornati/vasetto-rosmarino.webp" },
            { nome: "Rosa canina", nota: "La forza della semplicità", colore: "#C9445A", immagine: "img/progetti/meriggio/scontornati/vasetto-rosa-canina.webp" },
            { nome: "Millefiori", nota: "C’è aria di dolcezza", colore: "#C2848F", immagine: "img/progetti/meriggio/scontornati/vasetto-millefiori.webp" },
            { nome: "Biancospino", nota: "Protezione, serenità e rinascita", colore: "#F0CC85", testo: "#2F5654", immagine: "img/progetti/meriggio/scontornati/vasetto-biancospino.webp" },
          ],
        },
        {
          tipo: "coppia",
          titolo: "Il marchio *fuori* dal vasetto",
          immagini: [
            { immagine: "img/progetti/meriggio/insegna.jpg", didascalia: "Insegna in legno del punto vendita" },
            { immagine: "img/progetti/meriggio/cappellino.jpg", didascalia: "Merchandising: cappellino e felpa" },
          ],
        },
        {
          tipo: "collage",
          colore: "#2F5654",
          titolo: "Dal laboratorio alla *borsa della spesa*",
          testo: "Packaging, shopper e merchandising seguono le stesse regole: fondo panna, texture floreale, marchio scritto a mano.",
          elementi: [
            { immagine: "img/progetti/meriggio/scontornati/shopper-juta.webp", didascalia: "Shopper in juta" },
            { immagine: "img/progetti/meriggio/scontornati/tazze.webp", didascalia: "Tazze “drink me” e “it’s always tea time”" },
            { immagine: "img/progetti/meriggio/scontornati/candela.webp", didascalia: "Candela in cera d’api" },
            { immagine: "img/progetti/meriggio/scontornati/saponetta.webp", didascalia: "Saponetta naturale" },
            { immagine: "img/progetti/meriggio/scontornati/shopper-fiori.webp", didascalia: "Shopper in carta" },
            { immagine: "img/progetti/meriggio/scontornati/scatola.webp", didascalia: "Scatola regalo" },
          ],
        },
        {
          tipo: "coppia",
          titolo: "C’è aria di *dolcezza*",
          testo: "La campagna affissioni porta il vasetto tra cielo e fiori: un messaggio semplice, legato ai profumi della Valpolicella.",
          immagini: [
            { immagine: "img/progetti/meriggio/poster-millefiori.jpg", didascalia: "Affissione — Millefiori" },
            { immagine: "img/progetti/meriggio/poster-biancospino.jpg", didascalia: "Affissione — Biancospino" },
          ],
        },
        { tipo: "immagine", titolo: "Schede *botaniche*", testo: "Segnalibri promozionali: da un lato la texture, dall’altro la storia di ogni pianta.", immagine: "img/progetti/meriggio/segnalibri.jpg", didascalia: "Segnalibri promozionali" },
        { tipo: "immagine", stretta: true, titolo: "Il feed *Instagram*", immagine: "img/progetti/meriggio/social.jpg", didascalia: "Griglia Instagram: prodotto, ambientazione, scheda botanica" },
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
      "Sono Giada Al Zeer, graphic designer a Modena e fondatrice di Ventidue Creative Studio. Mi occupo di brand identity e packaging design, e accompagno i brand anche dopo il logo: campagne, materiali stampati e contenuti per Instagram.",
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
