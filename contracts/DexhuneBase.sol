// SPDX-License-Identifier: BSD-3-Clause
/// @title Dexhune Events and Interfaces
/*
*    ........................................................
*    .%%%%%...%%%%%%..%%..%%..%%..%%..%%..%%..%%..%%..%%%%%%.
*    .%%..%%..%%.......%%%%...%%..%%..%%..%%..%%%.%%..%%.....
*    .%%..%%..%%%%......%%....%%%%%%..%%..%%..%%.%%%..%%%%...
*    .%%..%%..%%.......%%%%...%%..%%..%%..%%..%%..%%..%%.....
*    .%%%%%...%%%%%%..%%..%%..%%..%%...%%%%...%%..%%..%%%%%%.
*    ........................................................
*/

pragma solidity >=0.4.22 <0.9.0;

contract DexhuneBase {    
     struct PriceProposal {
        uint256 id;
        string description;
        bool finalized;
        
        
        uint256 votesUp;
        uint256 votesDown;
        string value;
        uint256 deadline;
        
    }
}