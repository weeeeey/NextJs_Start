/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/old",
                destination: "https:www.naver.com",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
