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
      {
        source: '/projects/Chord-spawner',
        destination: '/projects/Chordprinter',
        permanent: true, // 308 status code
      },
      {
        source: '/projects/Chordspawner',
        destination: '/projects/Chordprinter',
        permanent: true, // 308 status code
      },
    ];
  },
};

module.exports = nextConfig;
