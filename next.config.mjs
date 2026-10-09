// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           { key: 'X-Content-Type-Options', value: 'nosniff' },
//           { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
//           { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
//           { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
//         ],
//       },
//     ]
//   },
// }

// export default nextConfig


/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'NOME-DELLA-TUA-REPO'; // Sostituisci con il nome esatto del tuo repository GitHub

const nextConfig = {
  output: 'export',
  // basePath e assetPrefix servono solo se l'URL sarà <username>.github.io/<repoName>
  // Se usi un dominio custom (es. www.miosito.it), puoi rimuovere basePath e assetPrefix
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // Necessario per Next/Image su hosting statici senza Node server
  },
};

module.exports = nextConfig; // o `export default nextConfig;` se usi file .mjs / .ts