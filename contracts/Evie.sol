//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Evie is ERC20 {
    uint constant _initial_supply = 1000000 * (10**18);
    constructor() ERC20("Evie", "EVE") {
        _mint(msg.sender, _initial_supply);
    }
}