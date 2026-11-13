# Mini guida: come aggiornare il portfolio

Per vedere il sito fai doppio clic su `index.html`. Non serve installare niente.
Per modificarlo apri `content.js` con un editor di testo (consigliato: **Visual Studio Code**, gratuito), salva e ricarica la pagina nel browser.

## Cosa contiene la cartella

```
portfolio/
├── index.html      ← lo scheletro della pagina (non serve toccarlo)
├── content.js      ← TESTI, IMMAGINI, PROGETTI, CONTATTI  ← lavori qui
├── style.css       ← in cima trovi COLORI e FONT
├── script.js       ← fa funzionare il sito (non serve toccarlo)
└── img/
    ├── foto-home.svg       ← la tua foto in home
    ├── foto-chi-sono.svg   ← la tua foto in "Chi sono"
    └── progetti/           ← qui vanno tutte le copertine
```

## Dove mettere le nuove immagini

1. Salva la foto in `img/` e le copertine in `img/progetti/`.
2. Usa nomi semplici, minuscoli e senza spazi: `brand-caffe.jpg`, non `Copertina Finale (2).JPG`.
3. In `content.js` scrivi il percorso: `copertina: "img/progetti/brand-caffe.jpg",`
4. Se il percorso è sbagliato, al posto dell'immagine compare un riquadro a righe con scritto `[AGGIUNGI IMMAGINE]` e il percorso che il sito sta cercando.

**Misure consigliate.** Il sito ritaglia le immagini da solo, ma tieni il soggetto al centro:
- foto home: verticale 4:5, almeno 1200 px di altezza
- copertina **largo**: orizzontale 2:1, almeno 2000 px di larghezza
- copertina **verticale**: 4:5 · **piccolo**: quadrata 1:1 · **medio**: 3:2
- Esporta in JPG con una qualità intorno all'80% e tieni ogni file sotto i 500 KB, così il sito resta veloce.

## Aggiungere un progetto: esempio da copiare

In `content.js` trova `progetti: [` e incolla questo blocco nel punto in cui vuoi far comparire il progetto, con la virgola finale:

```js
    {
      titolo: "Lancio estivo per *Nome Brand*",
      tipo: "Reel e video",
      cliente: "Nome Brand",
      anno: "2026",
      descrizione: "Serie di 6 Reel per il lancio della linea estiva: concept, riprese e montaggio.",
      copertina: "img/progetti/nome-brand-reel.jpg",
      link: "https://www.instagram.com/p/XXXX/",
      formato: "verticale",
    },
```

- **Riordinare:** sposta l'intero blocco `{ ... },` più in alto o più in basso. I numeri 01, 02… si aggiornano da soli.
- **Nascondere** un progetto senza cancellarlo: aggiungi `nascosto: true,` nel blocco.
- **formato:** può essere `"largo"`, `"verticale"`, `"piccolo"` o `"medio"`. Se togli la riga, il sito alterna i formati da solo. Per un ritmo da rivista funziona bene mettere `verticale` + `piccolo` uno dopo l'altro, perché finiscono affiancati.

## Altre modifiche veloci

| Cosa | Dove |
|---|---|
| Frase della home | `content.js` → `home` → `frase` |
| Parola in corsivo colorato | mettila tra asterischi: `*parola*` |
| Foto a tutto schermo in home | `content.js` → `home` → `stile: "sfondo"` |
| Email e Instagram | `content.js` → `contatti` |
| Colori | inizio di `style.css` → le righe `--accento-1`, `--accento-2`… |
| Font | inizio di `style.css` → `--font-testo`, `--font-corsivo` |

## Se qualcosa si rompe

- **Pagina bianca o messaggio di errore:** quasi sempre manca una virgola o una virgoletta nell'ultima modifica a `content.js`. Annulla con Ctrl/Cmd+Z e riprova.
- **Immagine che non compare:** controlla maiuscole ed estensione, perché `.JPG` e `.jpg` per il sito sono file diversi.
- **I font non si vedono:** i font arrivano da Google Fonts, quindi serve la connessione a internet.

## Progetti con scheda e galleria

Se a un progetto aggiungi `galleria: [ ... ]` (guarda l'esempio di Amal in `content.js`), sul sito compare il bottone **Guarda il progetto +**. Cliccandolo si apre una scheda a tutto schermo con il testo lungo (`racconto`) e tutte le immagini. Le foto orizzontali occupano tutta la larghezza, quelle verticali si affiancano a due a due.
Metti le immagini di un progetto in una cartella dedicata, per esempio `img/progetti/amal/`.

## Schede "art direction" (come Al Meriggio d'Or)

Al posto di `galleria` puoi usare `sezioni`: un elenco di blocchi che si impaginano da soli. I tipi disponibili sono:
- `apertura`: una foto grande in cima alla scheda
- `testo`: un titolo e un paragrafo
- `colori`: oggetti scontornati che escono da archi colorati, utile per varianti di prodotto
- `collage`: oggetti scontornati su un fondo colorato, con la linea tratteggiata di volo
- `coppia`: due immagini sfalsate
- `immagine`: una sola immagine (aggiungi `stretta: true` per rimpicciolirla)

Altri due campi facoltativi:
- `dettaglio`: un'immagine scontornata, in PNG o WEBP con lo sfondo trasparente, che "esce" dalla copertina in home.
- `tema`: cambia i colori della scheda, per esempio `{ "accento-1": "#2F5654" }`.

Per scontornare un'immagine puoi usare "Rimuovi sfondo" di Canva o di Photoshop: esportala in PNG trasparente e mettila in `img/progetti/nome-progetto/scontornati/`.
