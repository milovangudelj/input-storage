# Come funziona

L'esempio è stato realizzato utilizzando [Vite](https://vite.dev/), ma non è necessario per il funzionamento del codice.
Il codice è stato scritto in JavaScript per semplicità, ma può essere facilmente convertito in TypeScript.

I file importanti sono i seguenti:

- `index.html`: file HTML principale. Le classi sono puramente per stile e non sono necessarie per il funzionamento.
- `src/main.js`: file JavaScript principale.
- `src/utils.js`: file JavaScript con funzioni di utilità. Notare riga 17, dove viene effettuato l'aggiornamento dell'url senza aggiornare la pagina.

## Installazione

```bash
pnpm install
```

## Esecuzione

Server di sviluppo con hot reload:

```bash
pnpm run dev
```

Server di anteprima (solo dopo aver eseguito la build):

```bash
pnpm run preview
```

## Build

```bash
pnpm run build
```

Risultato della build nella cartella `dist`. Il contenuto di questa cartella può essere servito tramite un server web.
