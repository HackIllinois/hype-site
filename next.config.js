/** @type {import('next').NextConfig} */
const nextConfig = {
    // Redirect to normal site
    // async redirects() {
    //     return [
    //         {
    //             source: "/",
    //             destination: "https://hackillinois.org/",
    //             permanent: false
    //         }
    //     ];
    // }
    output: "export"
};

module.exports = nextConfig;
