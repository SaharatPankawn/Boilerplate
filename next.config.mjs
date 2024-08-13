/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sinister', 
        permanent: false 
      }
    ];
  }
};

export default nextConfig;
