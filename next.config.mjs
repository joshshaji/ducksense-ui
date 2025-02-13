/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.ceotodaymagazine.com'], // Add the domain here
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.ceotodaymagazine.com',
            port: '',
            pathname: '/wp-content/**',
          },
        ],
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        })
        return config
    },
};

export default nextConfig;
