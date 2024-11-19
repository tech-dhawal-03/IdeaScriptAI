/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.example.com',
              port: '',
              pathname: '/account123/**',
            },
            {
              protocol: 'https',
              hostname: 'aceternity.com',
            },
            {
              protocol: 'https',
              hostname: 'cdn-icons-png.flaticon.com',
            },
      
          ],
        },
      }

export default nextConfig;
