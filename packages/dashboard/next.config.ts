import type { NextConfig } from "next";

const {MENU_URL, LISTS_URL, STATS_URL } = process.env;

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: `/:path*`,
            },

            {
                source: "/menu",
                destination: `${MENU_URL}/menu`,
            },
            {
                source: "/menu/:path+",
                destination: `${MENU_URL}/menu/:path+`,
            },
            {
                source: "/menu-static/_next/:path+",
                destination: `${MENU_URL}/menu-static/_next/:path+`,
            },

            {
                source: "/lists",
                destination: `${LISTS_URL}/lists`,
            },
            {
                source: "/lists/:path+",
                destination: `${LISTS_URL}/lists/:path+`,
            },
            {
                source: "/lists-static/_next/:path+",
                destination: `${LISTS_URL}/lists-static/_next/:path+`,
            },

            {
                source: "/stats",
                destination: `${STATS_URL}/stats`,
            },
            {
                source: "/stats/:path+",
                destination: `${STATS_URL}/stats/:path+`,
            },
            {
                source: "/stats-static/_next/:path+",
                destination: `${STATS_URL}/stats-static/_next/:path+`,
            },
        ];
    },
};

export default nextConfig;
