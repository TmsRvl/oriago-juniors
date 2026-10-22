export default function customImageLoader({ src }) {
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  const basePath = '';

  // Evita di duplicare il basePath se per caso è già presente
  if (src.startsWith(basePath)) {
    return src;
  }

  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
}