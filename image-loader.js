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
  // Se l'immagine ha già un link web completo (http o https), non toccarla
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Dominio ufficiale della squadra
  const domain = 'https://www.oriagojuniors.it';

  // Rimuove il vecchio prefisso '/oriago-juniors' se fosse ancora memorizzato da qualche parte
  let cleanSrc = src.replace(/^\/oriago-juniors/, '');

  // Rimuove l'eventuale slash iniziale per evitare doppi slash (es. evita .it//image)
  cleanSrc = cleanSrc.startsWith('/') ? cleanSrc.slice(1) : cleanSrc;

  // Restituisce l'URL completo: https://www.oriagojuniors.it/image/maglia3.png
  return `${domain}/${cleanSrc}`;
}