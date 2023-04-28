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
};
