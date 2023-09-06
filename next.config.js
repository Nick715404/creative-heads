/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Добавляем правило для обработки SVG файлов
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icons: true } }],
    });

    return config;
  },
};

module.exports = nextConfig;