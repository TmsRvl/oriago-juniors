export default function customImageLoader({ src }) {
  // Se è già un URL assoluto esterno (http/https), non toccarlo
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  const basePath = process.env.NODE_ENV === 'production' ? '/oriago-juniors' : '';
  
  // Rimuove eventuali slash duplicati e attacca il basePath
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}