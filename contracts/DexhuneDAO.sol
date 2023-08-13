// SPDX-License-Identifier: BSD-3-Clause
/// @title Dexhune DAO Logic
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
import "./DexhuneBase.sol";

contract DexhuneDAO is DexhuneBase {    
    

    uint256 price;
    uint256 proposalCount;
    mapping(uint256 => PriceProposal) public PriceProposals;

    function getPrice() public returns(uint256) {
        return price;
    }

    function proposePrice(string memory _desc, uint256 _price) public {
        PriceProposal memory p = PriceProposals[proposalCount];
        p.id = proposalCount;
        p.description = _desc;
        p.value = _price;
        p.deadline = block.number + PROPOSAL_BLOCKS;
        

        emit proposalCreated(proposalCount, _desc, msg.sender);
        proposalCount++;
    }

    function castPriceVote(uint256 _id, bool _vote) public {
        require(ensureEligible(), "You are not eligible to vote.");

        PriceProposal memory p = PriceProposals[_id];
        require(p.deadline == 0, "The requested proposal does not exist");
        require(
            block.number >= p.deadline,
            "Voting has been deactivated for this proposal"
        );

        if (_vote) {
            p.votesUp++;
        } else {
            p.votesDown++;
        }

        emit voteCasted(msg.sender, _id, _vote);
    }

    function finalizePriceProposal(uint256 _id) public {
        PriceProposal memory p = PriceProposals[_id];
        require(p.deadline == 0, "The requested proposal does not exist");
        require(
            block.number < p.deadline,
            "The requested proposal is still active"
        );

        if (p.finalized) {
            return;
        }

        if (p.votesUp > p.votesDown) {
            uint256 old = price;
            price = p.value;

            emit proposalFinalized(_id, true);
            emit priceUpdated(old, price);
        } else {
            emit proposalFinalized(_id, false);
        }
    }

    function ensureEligible() private returns(bool) {
        return true;
    }



    /// @notice A new proposal was created
    /// @dev Notifies that a new proposal was created
    /// @param id Id of the proposal
    /// @param description Description of the proposal
    /// @param proposer Address of the proposer
    event proposalCreated(uint256 id, string description, address proposer);


    /// @notice A vote has been cast on a proposal
    /// @dev Notifies that a vote has been casted
    /// @param voter Address of the voter
    /// @param proposal Id of the proposal
    /// @param votedFor Indicates whether the voter voted for or against
    event voteCasted(address voter, uint256 proposal, bool votedFor);

    /// @notice Voting result of the Proposal
    /// @dev Notifies that a proposal has been finalized
    /// @param id Id of the proposal
    /// @param passed Result of the voting on proposal, passed defines that the proposal is accepted by the voters
    event proposalFinalized(uint256 id, bool passed);

    /// @notice The price has been updated
    event priceUpdated(uint256 oldPrice, uint256 newPrice);
}

