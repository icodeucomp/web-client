/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icodeu-storage.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
