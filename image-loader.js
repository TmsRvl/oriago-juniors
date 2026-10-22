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

  // Restituisce il percorso diretto alla radice del sito (es. /images/logo-oriago.png)
  return src;
}