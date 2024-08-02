/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/public/static/images',
                destination: '/public/static/images'
            }
        ];
    }
};

export default nextConfig;