import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    domains: ['velog.velcdn.com'],
  },
};

const widthMDX = createMDX({});

export default widthMDX(nextConfig);
