const Nft = artifacts.require("Nft");
const MarketNft = artifacts.require("MarketNft");

contract("MarketNft", (accounts) => {
  const options = {
    from: accounts[0],
    value: web3.utils.toWei("0.5"),
  };
  let nftTokenId;
  const uri = "http://placeholder";

  it(
    "Given a blank environement" +
      "When someone mint a random nft" +
      "Then a nft is minted",
    () =>
      Nft.deployed().then(async (instance) => {
        const transaction = await instance.payToMint(uri, options);
        const { tokenId, to } = transaction.receipt.logs[0].args;
        nftTokenId = tokenId;

        const response = await instance.balanceOf(accounts[0]);
        assert.equal(response.length, 1);
        assert.equal(tokenId, 0);
        assert.equal(to, accounts[0]);
      })
  );

  it(
    "Given a Nft have been mint" +
      "When someone try to list it to sell" +
      "Then a nft should be listed for sell",
    () =>
      Nft.deployed().then(async (instanceNft) => {
        await MarketNft.deployed().then(async (instanceMarketNft) => {
          const transactionApprove = await instanceNft.approve(
            MarketNft.address,
            nftTokenId
          );
          const transactionListItem = await instanceMarketNft.listItem(
            Nft.address,
            nftTokenId,
            10
          );
          const transactionListing = await instanceMarketNft.getListing(
            Nft.address,
            nftTokenId
          );
          assert.equal(transactionListing.price, 10);
          assert.equal(transactionListing.seller, accounts[0]);
        });
      })
  );

  it(
    "Given a Nft is listed for sell" +
      "When we update the price" +
      "Then the price should be updated",
    () =>
      MarketNft.deployed().then(async (instanceMarketNft) => {
        const transactionUpdate = await instanceMarketNft.updateListing(
          Nft.address,
          nftTokenId,
          20
        );
        const transactionListing = await instanceMarketNft.getListing(
          Nft.address,
          nftTokenId
        );
        assert.equal(transactionListing.price, 20);
        assert.equal(transactionListing.seller, accounts[0]);
      })
  );

  it(
    "Given a Nft is listed for sell" +
      "When we update the price" +
      "Then the price should be updated",
    () =>
      MarketNft.deployed().then(async (instanceMarketNft) => {
        const transactionUpdate = await instanceMarketNft.updateListing(
          Nft.address,
          nftTokenId,
          20
        );
        const transactionListing = await instanceMarketNft.getListing(
          Nft.address,
          nftTokenId
        );
        assert.equal(transactionListing.price, 20);
        assert.equal(transactionListing.seller, accounts[0]);
      })
  );

  it(
    "Given a Nft is listed for sell" +
      "When someone buy it" +
      "Then it should not be listed anymore",
    () =>
      MarketNft.deployed().then(async (instanceMarketNft) => {
        const transaction = await instanceMarketNft.buyItem(
          Nft.address,
          nftTokenId,
          { value: 20 }
        );
        const transactionListing = await instanceMarketNft.getListing(
          Nft.address,
          nftTokenId
        );
        console.log(transactionListing);
      })
  );
});
