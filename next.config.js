/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/chordprinter',
        destination: '/projects/Chordprinter',
        permanent: true, // 308 status code
      },
    ];
  },
};

module.exports = nextConfig;
