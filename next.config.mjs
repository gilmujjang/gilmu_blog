import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

const widthMDX = createMDX({});

export default widthMDX(nextConfig);
