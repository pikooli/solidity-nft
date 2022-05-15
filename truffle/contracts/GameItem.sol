// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GameItem is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("GameItem", "ITM") {}

    function awardItem(string memory tokenURI)
        public
        payable
        returns (uint256)
    {
        address player = msg.sender;
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function achatNft() public payable {
        require()
    }

    
}

// function mintToken(address to, uint256 tokenId, string uri) public virtual payable {
  
//   require(msg.value >= 10, "Not enough ETH sent; check price!"); 
  
//   mint(to, tokenId);
//   _setTokenURI(tokenId, uri);
// }