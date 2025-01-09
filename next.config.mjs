/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'back.tradeformix.com',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
