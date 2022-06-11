/** @type {import('next').NextConfig} */
const nextConfig = {
  // for aws amplify
  // target: 'experimental-serverless-trace',
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    CONTRACT_ADDRESS_NFT: process.env.CONTRACT_ADDRESS_NFT,
    CONTRACT_ADDRESS_MARKET: process.env.CONTRACT_ADDRESS_MARKET,
  },
};

module.exports = nextConfig;
