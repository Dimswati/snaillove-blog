/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['mksdmcdn-9b59.kxcdn.com'],
        remotePatterns: [
            {
                protocol: 'https',
                port: '',
                pathname: '/gridlove/**',
                hostname: 'mksdmcdn-9b59.kxcdn.com'
            }
        ]
    }
}

module.exports = nextConfig
