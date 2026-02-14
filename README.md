# 📖 Il Mio Angolo di Lettura — Blog Recensioni Libri

Un blog statico per GitHub Pages dedicato alle recensioni dei libri che leggo.

## 📁 Struttura del Progetto

```
Blog/
├── index.html              ← Pagina principale
├── css/style.css           ← Stili del sito
├── js/main.js              ← Ricerca, filtri, animazioni
├── img/covers/             ← Copertine dei libri
├── recensioni/
│   ├── template.html       ← FAC-SIMILE — copia questo per ogni nuovo libro!
│   └── *.html              ← Le tue recensioni
└── README.md               ← Queste istruzioni
```

## 🆕 Come Aggiungere un Nuovo Libro

### Passo 1 — Crea la Recensione
1. Copia `recensioni/template.html`
2. Rinomina il file (es: `il-grande-gatsby.html`)
3. Apri il file e modifica tutti i campi `[DA MODIFICARE]`

### Passo 2 — Aggiungi la Copertina
1. Aggiungi l'immagine della copertina in `img/covers/`
2. Aggiorna il percorso `<img src=...>` nel file della recensione

### Passo 3 — Aggiungi la Card nella Home
Apri `index.html` e copia un blocco `<a class="book-card">...</a>` nella griglia, poi aggiorna:
- `data-title` → titolo del libro
- `data-author` → nome dell'autore
- `data-genre` → genere (in minuscolo, es: `narrativa`, `fantasy`, `thriller`)
- `href` → percorso della recensione (es: `recensioni/il-grande-gatsby.html`)
- Immagine, titolo, autore, genere badge, stelle

### Passo 4 — Aggiorna le Statistiche
Nella sezione Hero di `index.html`, aggiorna i numeri nelle `<span class="stat-number">`.

## ⭐ Valutazione in Stelle

```html
<!-- 5/5 stelle -->
<span class="star filled">★</span>
<span class="star filled">★</span>
<span class="star filled">★</span>
<span class="star filled">★</span>
<span class="star filled">★</span>

<!-- 3/5 stelle -->
<span class="star filled">★</span>
<span class="star filled">★</span>
<span class="star filled">★</span>
<span class="star">★</span>
<span class="star">★</span>
```

## 🏷️ Generi Disponibili (classi CSS)

| Genere | Classe CSS per Card | Classe CSS per Recensione |
|--------|--------------------|----|
| Narrativa | `genre-narrativa` | `genre-narrativa` |
| Fantasy | `genre-fantasy` | `genre-fantasy` |
| Thriller | `genre-thriller` | `genre-thriller` |
| Saggistica | `genre-saggistica` | `genre-saggistica` |
| Sci-Fi | `genre-sci-fi` | `genre-sci-fi` |
| Romanzo | `genre-romanzo` | `genre-romanzo` |
| Horror | `genre-horror` | `genre-horror` |
| Storico | `genre-storico` | `genre-storico` |

## 🚀 Deploy su GitHub Pages

1. Crea un repository su GitHub
2. Push di questa cartella
3. Vai su Settings → Pages → Deploy from branch → `main` → `/ (root)`
4. Il sito sarà disponibile su `https://tuousername.github.io/Blog/`
