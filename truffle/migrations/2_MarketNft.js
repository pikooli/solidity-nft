const MarketNft = artifacts.require("MarketNft");

module.exports = function (deployer) {
  deployer.deploy(MarketNft);
};
