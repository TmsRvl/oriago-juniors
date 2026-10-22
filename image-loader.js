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
  // Se è già un URL assoluto, non modificarlo
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Elimina qualsiasi occorrenza di /oriago-juniors rimasta nella stringa
  let cleanSrc = src.replace(/^\/?oriago-juniors\/?/, '');

  // Rimuove lo slash iniziale per gestire la concatenazione corretta
  if (cleanSrc.startsWith('/')) {
    cleanSrc = cleanSrc.slice(1);
  }

  // Restituisce l'URL pulito: https://oriagojuniors.it/images/maglie3.jpg
  return `https://oriagojuniors.it/${cleanSrc}`;
}