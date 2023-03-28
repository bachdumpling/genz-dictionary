/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // exportPathMap: async function (defaultPathMap) {
  //   return {
  //     '/app/index.html': { page: '/' },
  //   };
  // },
  experimental: {
    appDir: true,
  },
  env: {
    OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
};
