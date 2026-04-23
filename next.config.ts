/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true, // ✅ Отключаем оптимизацию для статического экспорта
  },
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['styles'],
  },
};

export default nextConfig;
