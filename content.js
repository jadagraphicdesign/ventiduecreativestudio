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
  nomeBreve: "Ventidue",                 // versione corta, usata in alto sui telefoni (se non c'è il logo)
  logo: "img/logo-ventidue.png",         // logo in alto a sinistra (lascia "" per mostrare il nome scritto)
  logoCompleto: "img/logo-completo.png", // logo con faccina, in fondo alla pagina
  faccina: "img/faccina.png",            // la tua faccina: al centro dell'adesivo che gira e nei Contatti                 // compare in alto a sinistra e nel footer
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
    adesivo: "guarda i progetti • scrivimi",
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
      cliente: "Tesi di Diploma Accademico in Graphic Design",
      anno: "2026",
      descrizione: "Logo, campagna di manifesti, catalogo, biglietti e sito per Amal, un museo della memoria contro l’anestesia visiva contemporanea: un invito a fermarsi e guardare con tempo le immagini che di solito scorriamo.",
      copertina: "img/progetti/amal/copertina-manifesti.jpg",
      link: "https://lajeiid.github.io/SITO/",
      testoLink: "Visita il sito di Amal",
      formato: "largo",

      // Colori e caratteri della scheda: quelli di Amal (Blue Fusion, Cloud Dancer, Hematite, Garamond)
      tema: {
        "panna": "#EEEDE9", "panna-scuro": "#E2E1DC", "inchiostro": "#3B4042", "grigio": "#6E7476",
        "accento-1": "#42586A", "accento-2": "#42586A", "accento-3": "#DBD2DB", "accento-4": "#CAD3C1",
        "font-corsivo": "'EB Garamond', Georgia, serif",
      },

      sezioni: [
        { tipo: "soglia", marchio: "amal", payoff: "reclaim your time", logo: "img/progetti/amal/logo-amal.png", nota: "أمل — in arabo significa *speranza*" },

        { tipo: "manifesto", testo: "Guardiamo tutto, ma non vediamo più *nulla*.", firma: "Dalla tesi “L’immagine tra viralità e memoria. Strategie di Graphic Design contro l’anestesia visiva contemporanea”" },

        {
          tipo: "testo",
          titolo: "Il *problema*",
          testo: "Ogni giorno scorriamo migliaia di immagini. Una fotografia di guerra compare tra un video divertente e una pubblicità, alla stessa velocità. La viralità la fa circolare in fretta e la consuma ancora più in fretta: il dolore degli altri diventa un contenuto da scorrere e perde il suo valore di testimonianza. È quella che nella tesi chiamo anestesia visiva.",
        },

        {
          tipo: "contrasto",
          titolo: "Dal flusso alla *sosta*",
          feed: "img/progetti/amal/feed-instagram.jpg",   // schermata di Instagram sfocata
          sinistra: "Il feed: tutto alla stessa velocità, niente resta.",
          destra: "Amal: un’immagine, uno spazio, un tempo.",
          immagine: "img/progetti/amal/ritratto-sorriso.jpg",
          didascalia: "Luce nel buio — Rafah, maggio 2025. Foto di Hosny Salah",
        },

        {
          tipo: "testo",
          titolo: "La *domanda*",
          testo: "Come può il graphic design restituire profondità allo sguardo? La mia risposta è Amal: un museo fisico, editoriale e digitale dedicato alla memoria della Palestina. Non un archivio di sofferenza, ma uno spazio per il *Sumud*, la resistenza tenace della vita quotidiana: crescere, studiare, abitare. È un progetto che sento anche come figlia: il legame con la storia palestinese mi è arrivato da mio padre.",
        },

        {
          tipo: "principi",
          titolo: "Il metodo: *sottrazione protettiva*",
          testo: "Dove il feed accumula, Amal toglie. Eliminare il rumore visivo lascia la mente libera di confrontarsi con ciò che conta davvero: l’immagine.",
          elementi: [
            { titolo: "Vuoto protettivo", testo: "Lo spazio intorno all’immagine non è un margine: è una soglia che la separa dal rumore e impone una distanza di rispetto." },
            { titolo: "Isolamento iconico", testo: "Una sola immagine alla volta. Nessun testo sopra le fotografie: le parole arrivano dopo, nello spazio accanto." },
            { titolo: "Rallentamento tipografico", testo: "Un carattere geometrico per i titoli e un Garamond per i testi: le grazie della tradizione editoriale distendono il ritmo della lettura." },
            { titolo: "Una fine", testo: "Il feed non finisce mai, e per questo non si ricorda. Ogni percorso di Amal ha un inizio e una conclusione." },
          ],
        },

        {
          tipo: "sosta",
          immagine: "img/progetti/amal/ritratto-lentiggini.jpg",
          testo: "*Fermati.*",
          dopo: "Cinque secondi: il tempo minimo perché un’immagine smetta di essere un contenuto e diventi memoria. Sul sito di Amal il comando per andare avanti compare solo dopo questa pausa.",
          secondi: 5,
        },

        {
          tipo: "palette",
          titolo: "Colori che *calmano*",
          testo: "Nessun colore saturo che richiami i social: una palette atmosferica che abbassa il carico visivo e prepara l’occhio alla sosta.",
          colori: [
            { nome: "Blue Fusion", codice: "#42586A", ruolo: "Sfondo primario e titoli: la profondità della storia" },
            { nome: "Cloud Dancer", codice: "#EEEDE9", ruolo: "Il vuoto protettivo" },
            { nome: "Hematite", codice: "#3B4042", ruolo: "Testo: meno duro del nero, per una lettura lenta" },
            { nome: "Orchid Tint", codice: "#DBD2DB", ruolo: "Accento: fragilità e umanità" },
            { nome: "Almost Aqua", codice: "#CAD3C1", ruolo: "Elementi grafici: trasparenza e chiarezza" },
          ],
        },
        { tipo: "immagine", immagine: "img/progetti/amal/logo-costruzione.jpg", didascalia: "Logotipo in All Round Gothic: forme circolari, nessuna decorazione. Il payoff ha un tracking ampio che rallenta la lettura." },

        {
          tipo: "sala",
          titolo: "Il *museo*",
          testo: "Ho scelto la parola museo perché Amal non è una mostra temporanea ma un luogo di conservazione, dove si deposita ciò che non si vuole dimenticare. Un’opera per parete, un percorso a senso unico scandito da archi, nessun suono se non quello dei passi.",
          opere: [
            { immagine: "img/progetti/amal/mostra-sospensione.jpg", didascalia: "La sospensione della *realtà* — Gaza, ottobre 2025" },
            { immagine: "img/progetti/amal/mostra-radici.jpg", didascalia: "Radici nel *vuoto* — Gaza, ottobre 2025" },
            { immagine: "img/progetti/amal/mostra-luce.jpg", didascalia: "*Luce* nel buio — Rafah, maggio 2025" },
            { immagine: "img/progetti/amal/mostra-rallenta.jpg", didascalia: "*Rallenta*, la memoria ha bisogno di tempo" },
          ],
          nota: "Le ambientazioni sono una rappresentazione concettuale del progetto.",
        },

        {
          tipo: "coppia",
          titolo: "Una campagna che *interrompe*",
          testo: "Un trittico di affissioni: “Benvenuti nell’era dell’anestesia visiva” denuncia lo scroll che consuma le immagini; “Sostieni. Custodisci. Ricorda.” dà al visitatore tre compiti; “Fermati.” è una parola sola, che interrompe la corsa di chi passa.",
          immagini: [
            { immagine: "img/progetti/amal/copertina-manifesti.jpg", didascalia: "Il trittico di manifesti" },
            { immagine: "img/progetti/amal/totem.jpg", didascalia: "Totem nel percorso del museo" },
          ],
        },

        {
          tipo: "specifiche",
          titolo: "Il *catalogo*",
          testo: "Fuori dal museo, la memoria continua sulla carta: un libro che si regge con due mani e non si sfoglia di fretta.",
          immagine: "img/progetti/amal/libro.jpg",
          voci: [
            ["Formato", "240 × 240 mm"],
            ["Carta", "Uncoated 160 g, colore Cloud Dancer"],
            ["Rilegatura", "Filo refe a dorso scoperto, apertura a 180°"],
            ["Copertina", "Cartone telato Blue Fusion"],
          ],
        },

        {
          tipo: "specifiche",
          titolo: "Il *biglietto*",
          testo: "Il valore dell’ingresso non è il prezzo di un servizio ma un gesto di sostegno: nel progetto, l’intero ricavato finanzia borse di studio per gli studenti dei territori documentati.",
          immagine: "img/progetti/amal/biglietti.jpg",
        },

        {
          tipo: "principi",
          titolo: "Il *sito*: un web che non trattiene",
          testo: "Amal non rifiuta il digitale, ne cambia le regole. Ho progettato e programmato il sito in HTML, CSS e JavaScript per trasformare la sosta da idea grafica a regola dell’interfaccia.",
          elementi: [
            { titolo: "Niente scroll infinito", testo: "Le immagini avanzano a scatti, separate da intervalli di silenzio visivo." },
            { titolo: "Cinque secondi", badge: "5''", testo: "I comandi per avanzare compaiono solo dopo l’osservazione; una linea sottile segna il tempo." },
            { titolo: "Un percorso chiuso", testo: "Al massimo quindici immagini, poi si torna alla home. La fine dà valore all’esperienza." },
            { titolo: "Anche su telefono", testo: "Proprio dove lo scroll è più compulsivo, il sito impone la stessa grammatica di vuoto e attesa." },
          ],
        },

        { tipo: "fine", testo: "Il percorso finisce *qui*.", nota: "Amal, la speranza: restituire allo sguardo il tempo necessario per riconoscere l’altro." },
      ],
      crediti: "Fotografie esposte nel progetto: Hosny Salah, reportage da Gaza (2024–2025).",
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
            { immagine: "img/progetti/meriggio/scontornati/saponetta-rosmarino.webp", didascalia: "Sapone miele e rosmarino" },
            { immagine: "img/progetti/meriggio/scontornati/shopper-fiori.webp", didascalia: "Shopper in carta" },
            { immagine: "img/progetti/meriggio/scontornati/scatola.webp", didascalia: "Scatola regalo" },
            { immagine: "img/progetti/meriggio/scontornati/polo.webp", didascalia: "Polo per lo staff del punto vendita", sfuma: true },
          ],
          // Ultima tessera del collage: rimanda al brand manual
          altro: { testo: "e molto *altro*", link: "docs/brand-manual-al-meriggio-dor.pdf" },
        },
        {
          tipo: "elenco",
          titolo: "E non finisce *qui*",
          testo: "Il brand manual di 68 pagine raccoglie tutto il sistema, con le regole per usarlo. Qui sotto trovi solo una parte.",
          voci: ["Pittogramma e logotipo", "Area di rispetto e versioni", "Texture floreali", "Icone", "Linea miele", "Linea saponette", "Linea candele", "Biglietto da visita", "Carta intestata", "Busta", "Depliant", "Poster e affissioni", "Social media", "Segnalibri", "Scatola regalo", "Sacchetti di carta", "Tuta da apicoltore", "Tazze e cappellino", "Insegna in legno", "Supporti espositivi"],
          link: "docs/brand-manual-al-meriggio-dor.pdf",
          testoLink: "Sfoglia tutto il brand manual",
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


  /* ---------- SOCIAL ----------
     Ogni blocco in "progetti" è un lavoro social (un cliente o una rubrica).
     • video: i Reel (file .mp4 in video/social/ + copertina .jpg in img/social/)
       Il primo, il secondo e il terzo video vengono mostrati in tre telefoni:
       quello centrale è più grande.
     • caroselli: facoltativi. Ogni carosello è un elenco di immagini (le slide),
       in formato 4:5 o quadrato, da mettere in img/social/.
     • strategia: i punti numerati che spiegano il ragionamento.
  ------------------------------------------------------------------- */
  social: {
    titolo: "Contenuti *social*",
    intro: "Reel, caroselli e rubriche pensati come un sistema: un formato riconoscibile, un messaggio chiaro nei primi secondi e una grafica che rende il profilo coerente a colpo d’occhio.",

    progetti: [
      {
        titolo: "*Sottovoce*",
        tipo: "Contenuti social",
        cliente: "Palestra di Modena",
        rubrica: "Rubrica «Chiedilo alla Ludmi»",
        descrizione: "Piano di contenuti per i social di una palestra di Modena: una rubrica video, caroselli educativi e caroselli motivazionali.",
        racconto: "Per Sottovoce ho ideato tre tipi di contenuto, ognuno con un compito preciso. La rubrica video «Chiedilo alla Ludmi», in cui la trainer risponde a domande, dubbi e curiosità sull’allenamento. I caroselli educativi, che spiegano come eseguire bene un esercizio. I caroselli motivazionali, che parlano alla testa oltre che al corpo.",
        video: [
          { file: "video/social/allenamento-dopo-gravidanza.mp4", copertina: "img/social/allenamento-dopo-gravidanza.jpg", titolo: "Riprendere l’allenamento dopo la gravidanza" },
          { file: "video/social/chiedilo-alla-ludmi.mp4", copertina: "img/social/chiedilo-alla-ludmi.jpg", titolo: "Chiedilo alla Ludmi — apertura della rubrica" },
          { file: "video/social/la-scheda-e-solo-inizio.mp4", copertina: "img/social/la-scheda-e-solo-inizio.jpg", titolo: "La scheda è solo l’inizio" },
        ],
        strategia: [
          { titolo: "Una rubrica, non un video", testo: "Un nome fisso e una copertina sempre riconoscibile trasformano i singoli Reel in un appuntamento: chi segue sa cosa aspettarsi e torna." },
          { titolo: "Il gancio nei primi secondi", testo: "Il tema è scritto subito sul video, in etichette grandi e leggibili anche senza audio: chi scorre capisce in un attimo di cosa si parla." },
          { titolo: "Competenza prima della vendita", testo: "Format parlato, in palestra, su dubbi reali delle clienti: contenuti educativi che costruiscono fiducia e mostrano chi c’è dietro il servizio." },
          { titolo: "Un sistema grafico coerente", testo: "Etichette rosa e blu, stesso carattere, stessi segni grafici: il feed resta ordinato e ogni contenuto si riconosce come parte della rubrica." },
        ],
        caroselli: [
          // { titolo: "Titolo del carosello", slide: ["img/social/carosello-1-1.jpg", "img/social/carosello-1-2.jpg"] },
        ],
      },
    ],
  },


  /* ---------- CHI SONO ---------- */
  chiSono: {
    titolo: "Piacere, sono *Giada*",
    foto: "img/foto-chi-sono.jpg",
    // Seconda foto più personale, mostrata come una polaroid inclinata (lascia "" per toglierla)
    polaroid: "img/foto-polaroid.jpg",
    didascaliaPolaroid: "fuori orario ☀️",
    testoAlternativo: "Foto di Giada Al Zeer",
    // Ogni frase tra virgolette è un paragrafo separato
    paragrafi: [
      "Sono Giada Al Zeer, graphic designer a Modena e fondatrice di Ventidue Creative Studio. Mi sono laureata in Graphic Design a Roma nel 2026 con *Amal*, una tesi su come il design può restituire tempo e attenzione alle immagini. Mi occupo di brand identity e packaging design, e accompagno i brand anche dopo il logo: campagne, materiali stampati e contenuti per Instagram.",
      "Parto sempre dalla storia di chi ho davanti: cosa vuole dire e a chi. Da lì costruisco un sistema visivo coerente, con colori, tipografia e illustrazioni che si riconoscono su un’etichetta come in un post.",
      "Oggi sto approfondendo social media marketing, videomaking e contenuti UGC, per dare ai brand che seguo un’immagine curata anche sui social.",
    ],
    // Tappe del percorso (facoltative): anno, testo e una foto
    tappe: [
      { anno: "2026", testo: "Laurea in *Graphic Design* a Roma, con la tesi «Amal — L’immagine tra viralità e memoria»", foto: "img/foto-laurea-scontornata.webp", scontornata: true },
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
