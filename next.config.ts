import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd && isGitHubPages ? '/Resume-PDF' : '',
  assetPrefix: isProd && isGitHubPages ? '/Resume-PDF/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,

};

export default nextConfig;
