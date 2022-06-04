// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract Nft is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    mapping(string => uint8) existingURIs;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Nft", "Nft") {}

    // function _baseURI() internal pure override returns (string memory) {
    //     return "ipfs://";
    // }

    // ============= Function ===================
    //
    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    //
    function payToMint(string memory metadataUri)
        public
        payable
        returns (uint256)
    {
        require(msg.value >= 0.05 ether, "you need to pay to mint");
        require(existingURIs[metadataUri] != 1, "uri already minted");
        address sender = msg.sender;
        uint256 tokenId = _tokenIdCounter.current();
        existingURIs[metadataUri] = 1;
        _tokenIdCounter.increment();
        _safeMint(sender, tokenId);
        _setTokenURI(tokenId, metadataUri);
        return tokenId;
    }

    // The following functions are overrides required by Solidity.
    //
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    //
    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    //
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
