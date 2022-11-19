// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ZadToken is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("ZadToken", "ZAD") {}

    uint256 tokenId;

    function safeMint(address to, string memory uri) internal {
        
        tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

    }

    function mintToken(address to, string memory uri, uint baggageValue) public virtual payable returns(uint256) {

        require(msg.value >= baggageValue , "Not enough ETH sent; check price!"); 
    
        safeMint(to, uri);

        return tokenId;

    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenID)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenID);
    }

    function _burn(uint256 tokenID) 
        internal 
        override(ERC721, ERC721URIStorage)    
     {
        super._burn(tokenID);
    }

    function burn(address payable to,uint256 val,uint256 tokenID) public onlyOwner{
        to.transfer(val);
        _burn(tokenID);
    }

    function tokenURI(uint256 tokenID)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenID);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
