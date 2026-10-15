/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.BUILD_DIR || '.next',
  reactStrictMode: true,
  transpilePackages: ['gsap'],
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: '/generative-ai-development',
        destination: '/services/generative-ai-development',
        permanent: true,
      },
      {
        source: '/ai-agent-development',
        destination: '/services/ai-agent-development',
        permanent: true,
      },
      {
        source: '/ai-chatbot-development',
        destination: '/services/ai-chatbot-development',
        permanent: true,
      },
      {
        source: '/ai-automation-solutions',
        destination: '/services/ai-automation-solutions',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
