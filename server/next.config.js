/** @type {import('next').NextConfig} */
const nextConfig = {
  // for aws amplify
  // target: 'experimental-serverless-trace',
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  },
};

module.exports = nextConfig;
