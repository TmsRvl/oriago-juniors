// export default function customImageLoader({ src }) {
//   if (src.startsWith('http://') || src.startsWith('https://')) {
//     return src;
//   }
  
//   const basePath = '/oriago-juniors';

//   // Evita di duplicare il basePath se per caso è già presente
//   if (src.startsWith(basePath)) {
//     return src;
//   }

//   const cleanSrc = src.startsWith('/') ? src : `/${src}`;
//   return `${basePath}${cleanSrc}`;
// }

export default function customImageLoader({ src }) {
  // Se è un URL assoluto esterno, non toccarlo
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Rimuove l'eventuale vecchio prefisso '/oriago-juniors' se rimasto nei dati o nel codice
  const cleanSrc = src.replace(/^\/oriago-juniors/, '');

  // Restituisce il percorso diretto alla radice del sito (es. /images/logo-oriago.png)
  return cleanSrc.startsWith('/') ? cleanSrc : `/${cleanSrc}`;
}