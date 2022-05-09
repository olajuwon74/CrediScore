
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.10;


contract CreditTracker{

    // address payable Owner;

    struct UserInfo{
        address addr;
        uint amount;
        uint loanDate;
        uint repaymentDate;
        bool repaid;
    }

    // modifier onlyOwner(){
    //     require(msg.sender == Owner);
    //     _;
    // }

    mapping(uint => UserInfo) public Tracker;
    mapping(address => mapping(uint => UserInfo)) public LoanTracker;
    
    

}