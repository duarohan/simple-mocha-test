
function _checkFixedAccountType(balanceAmounts) {
    const differentialAmounts = new Set()
    //only two entries won't be sufficient to determine,hence by default nature of that account would be fixed
    if(balanceAmounts.length === (1||2)){
        return true
    }
    for (i = 0; i < (balanceAmounts.length - 1); i++) {
        differentialAmounts.add(Math.abs(balanceAmounts[i] - balanceAmounts[i + 1]))
    }
    return (differentialAmounts.size === 1) ? true : false
}

exports.accountTypeChecker = function accountTypeChecker(accountBalanceHistory) {
    balanceAmounts = accountBalanceHistory.map(month => month.account.balance.amount)
    return _checkFixedAccountType(balanceAmounts) ? "B" : "A";
};

