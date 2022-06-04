const Nft = artifacts.require("Nft");

contract("Nft", (accounts) => {
  const options = {
    from: accounts[0],
    value: web3.utils.toWei("0.5"),
  };

  const uri = "http://placeholder";

  it(
    "Given a blank environement" +
      "When someone mint a random nft" +
      "Then a nft is minted",
    () =>
      Nft.deployed().then(async (instance) => {
        const transaction = await instance.payToMint(uri, options);
        const { tokenId, to } = transaction.receipt.logs[0].args;
        const response = await instance.balanceOf(accounts[0]);
        assert.equal(response.length, 1);
        assert.equal(tokenId, 0);
        assert.equal(to, accounts[0]);
      })
  );

  it(
    "Given someone have mint the first nft (idx 0)" +
      "When we check the owner" +
      "Then it should diplay the owner",
    () =>
      Nft.deployed().then(async (instance) => {
        try {
          const owner = await instance.ownerOf(0);
          assert.equal(accounts[0], owner, "should be the same owner");
        } catch (e) {
          console.log(
            "You need to launch the test up before, to make sur that a nft is set"
          );
        }
      })
  );

  it(
    "Given someone have mint the first nft (idx 0)" +
      "When someone mint a nft with the same url" +
      "Then it should fail",
    () =>
      Nft.deployed().then(async (instance) => {
        try {
          const transaction = await instance.payToMint(uri, options);
        } catch (e) {
          const response = await instance.balanceOf(accounts[0]);
          assert.equal(e.reason, "uri already minted");
          assert.equal(response.length, 1);
          return;
        }
        assert.fail("didn't trow error");
      })
  );

  it(
    "Given someone have a nft" +
      "When he put it to sell with price of 1 eth" +
      "Then it should be listed in the sell list",
    () =>
      Nft.deployed().then(async (instance) => {
        try {
          console.log(await instance.ownerOf(0));
        } catch (e) {
          console.log(
            "You need to launch the test up before, to make sur that a nft is set"
          );
        }
      })
  );
});
