/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Specify the protocol (e.g., https)
          hostname: 'cdn.sanity.io', // Specify the hostname
          port: '', // Leave empty if not needed
          pathname: '/images/**' // Match paths for Sanity images
        },
      ],
    },
  };

export default nextConfig
