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

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/oriago-juniors' : '',
  assetPrefix: isProd ? '/oriago-juniors/' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

export default nextConfig;