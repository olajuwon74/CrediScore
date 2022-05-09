// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.10;

contract Collateral{

    struct UserCreditScore{

        address userAddress;
        uint myCreditScore;
        uint numberOfLoansTaken;
    }

    mapping(address => UserCreditScore) public Tracklog;

    //function creditScore assigns a score for each loan of an address.

    function creditScore(address addr, uint amount, uint startDate, uint endDate, uint repaymentDate) private {

        UserCreditScore storage userCredit = Tracklog[msg.sender];
        if(repaymentDate < endDate){
            userCredit.myCreditScore += 2;
        }
        else if(repaymentDate == endDate){
            userCredit.myCreditScore += 1;
        }
        else{
            userCredit.myCreditScore += 0;
        }

        userCredit.userAddress = addr;
        userCredit.numberOfLoansTaken++;
    }

   
    //This contains the logic for the cummulativeCredit function.

    function cummulativeCreditLogic() internal view returns (uint){
        UserCreditScore storage user = Tracklog[msg.sender];
        uint loanTaken = user.numberOfLoansTaken;
        uint cumLoanScore = user.myCreditScore;
        uint loanPercent = ((loanTaken * 200) / cumLoanScore);
        return loanPercent;
    }

    //This calculates the percentage score of a user/address.

    function cummulativeCredit(address addr) private view returns(uint){
        addr = msg.sender;
        UserCreditScore storage user = Tracklog[msg.sender];
        if (user.numberOfLoansTaken < 9){
            return 0;
        }
        else{
            cummulativeCreditLogic();
        }
    }

    function calculateCollateral(address addr) view public returns (uint){

        addr = msg.sender;
        if (cummulativeCredit(addr) >= 80){
            return 1;
        }
        else{
            return 0;
        }
    }

    function loanLogic (uint _amount, address addr) view internal{
        uint amountGiven;
        addr = msg.sender;
        if(calculateCollateral(addr) == 1){
            amountGiven = 1 * _amount;
        }
        else {
            amountGiven = ((80 * _amount) / 100);
        }
    }

}
