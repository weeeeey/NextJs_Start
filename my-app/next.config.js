/** @type {import('next').NextConfig} */

const API_KEY = "60ddc094191d95126e31c189fc6f81a8";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    // 유저가 Url을 입력하면 해당 경로를 변경시켜줌
    async redirects() {
        return [
            {
                source: "/old",
                destination: "https:www.naver.com",
                permanent: false,
            },
            {
                source: "/old/:path*",
                destination: "/new/:path*",
                permanent: false,
            },
        ];
    },

    // 지정한 url에 대해 사용했을때 destination url을 사용하지만 유저의 URL에는 변화는 없음
    // API 키를 감출떄 유용
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
            {
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
        ];
    },
};

module.exports = nextConfig;
