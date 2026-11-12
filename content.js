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
  nome: "[IL TUO NOME]",                 // compare in alto a sinistra e nel footer
  ruolo: "Graphic designer & content creator",
  titoloPagina: "[IL TUO NOME] — Portfolio", // testo della scheda del browser
  descrizionePagina: "Portfolio di graphic design, contenuti social, video e branding.",


  /* ---------- HOME ---------- */
  home: {
    // Piccola riga sopra il titolo
    etichetta: "Portfolio · Graphic design & contenuti",

    // La frase principale. Le parole tra *asterischi* diventano corsive e colorate.
    frase: "Do forma ai brand con *design* e contenuti social che si fanno *ricordare*.",

    // Due righe di presentazione sotto la frase
    sottotitolo: "Sono una graphic designer: creo identità visive, contenuti per Instagram, Reel e progetti UGC. [MODIFICA O ACCORCIA QUESTA FRASE]",

    // La tua foto o immagine personale (verticale, almeno 1200px di altezza)
    immagine: "img/foto-home.svg",
    testoAlternativo: "Ritratto di [IL TUO NOME]",

    // "affiancata" = foto a destra e testo su sfondo panna (più leggibile)
    // "sfondo"     = foto a tutto schermo dietro al testo (con velatura scura)
    stile: "affiancata",

    bottone: "Guarda i progetti",
    // Testo dell'adesivo rotondo che gira sulla foto (corto!)
    adesivo: "guarda i progetti • scrivimi • ",
  },


  /* ---------- NASTRO DEI SERVIZI (la fascia colorata sotto la home) ---------- */
  servizi: [
    "Contenuti social",
    "Reel e video",
    "UGC",
    "Branding",
    "Graphic design",
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
  ------------------------------------------------------------------- */
  titoloProgetti: "Progetti *selezionati*",
  introProgetti: "Una selezione di lavori tra contenuti social, video e identità visive.",

  progetti: [
    {
      titolo: "[TITOLO PROGETTO 1]",
      tipo: "Contenuti social",                 // etichetta colorata
      cliente: "[NOME CLIENTE]",
      anno: "[ANNO]",
      descrizione: "[Due righe: per chi hai lavorato, cosa hai realizzato e con quale obiettivo.]",
      copertina: "img/progetti/progetto-1.svg",
      link: "",                                  // es. "https://www.instagram.com/p/..." — lascia "" se non c'è
      formato: "largo",
    },
    {
      titolo: "[TITOLO PROGETTO 2]",
      tipo: "Reel e video",
      cliente: "[NOME CLIENTE]",
      anno: "[ANNO]",
      descrizione: "[Due righe: idea del video, formato, dove è stato pubblicato.]",
      copertina: "img/progetti/progetto-2.svg",
      link: "",
      formato: "verticale",
    },
    {
      titolo: "[TITOLO PROGETTO 3]",
      tipo: "UGC",
      cliente: "[NOME CLIENTE]",
      anno: "[ANNO]",
      descrizione: "[Due righe sul contenuto UGC: prodotto, taglio, piattaforma.]",
      copertina: "img/progetti/progetto-3.svg",
      link: "",
      formato: "piccolo",
    },
    {
      titolo: "[TITOLO PROGETTO 4]",
      tipo: "Branding",
      cliente: "[NOME CLIENTE]",
      anno: "[ANNO]",
      descrizione: "[Due righe: logo, palette, applicazioni realizzate.]",
      copertina: "img/progetti/progetto-4.svg",
      link: "",
      formato: "medio",
    },
    {
      titolo: "[TITOLO PROGETTO 5]",
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
    titolo: "Piacere, sono *[IL TUO NOME]*",
    foto: "img/foto-chi-sono.svg",
    testoAlternativo: "Foto di [IL TUO NOME]",
    // Ogni frase tra virgolette è un paragrafo separato
    paragrafi: [
      "Sono una graphic designer e lavoro sui contenuti per i social: dall’identità visiva di un brand fino ai Reel e ai caroselli che la raccontano ogni giorno.",
      "Mi piace partire da cosa vuole dire un brand e a chi, per poi trovare il modo più chiaro e riconoscibile per farlo vedere. [AGGIUNGI UNA FRASE PERSONALE: dove vivi, cosa ti ispira, come lavori.]",
    ],
    // Frase grande in evidenza (puoi lasciarla vuota: "")
    citazione: "Ogni brand ha già una *voce*: io la rendo visibile.",
    // Le tue competenze (chip colorate)
    competenze: [
      "Strategia social",
      "Caroselli e grafiche",
      "Reel e montaggio video",
      "Contenuti UGC",
      "Identità visiva",
      "Fotografia di prodotto",
    ],
  },


  /* ---------- CONTATTI ---------- */
  contatti: {
    titolo: "Lavoriamo *insieme*?",
    testo: "Raccontami il tuo progetto: un lancio, un profilo da rinnovare, una nuova identità. Ti rispondo entro due giorni lavorativi. [MODIFICA SE SERVE]",
    email: "[INSERISCI EMAIL]",              // es. "ciao@tuonome.it"
    instagram: "[INSERISCI USERNAME]",       // solo il nome, senza @ (es. "tuonome.design")
    // Altri link facoltativi: aggiungi o togli righe
    altriLink: [
      // { nome: "Behance", link: "https://www.behance.net/..." },
      // { nome: "LinkedIn", link: "https://www.linkedin.com/in/..." },
    ],
  },

};
