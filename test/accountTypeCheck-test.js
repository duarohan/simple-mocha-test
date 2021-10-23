var assert = require('assert');
const accountUtil = require('../utils/accountUtil')

describe('account Type Check', function() {
    it('same amount balance each month',() => {
      let sameAccountBalance = [
        {
          "monthNumber": 0,
          "account": {
            "balance": { "amount": 100 }
          }
        },
        {
          "monthNumber": 1,
          "account": {
            "balance": { "amount": 100 }
          }
        },
        {
          "monthNumber": 2, 
          "account": {
            "balance": { "amount": 100 }
          }
        }
      ]
      const response = accountUtil.accountTypeChecker(sameAccountBalance)
      assert.equal(response,'B')
    });
    it('variable amount balance each month',()=>{
      let variableDifference = [
        {
          "monthNumber": 0,
          "account": {
            "balance": { "amount": 0 }
          }
        },
        {
          "monthNumber": 1,
          "account": {
            "balance": { "amount": 100 }
          }
        },
        {
          "monthNumber": 2, 
          "account": {
            "balance": { "amount": 300 }
          }
        }
      ]
      const response = accountUtil.accountTypeChecker(variableDifference)
      assert.equal(response,'A')
    });
    it('fixed difference amount each month',()=>{
      let fixedDifference = [
        {
          "monthNumber": 0,
          "account": {
            "balance": { "amount": 0 }
          }
        },
        {
          "monthNumber": 1,
          "account": {
            "balance": { "amount": 100 }
          }
        },
        {
          "monthNumber": 2, 
          "account": {
            "balance": { "amount": 200 }
          }
        }
      ]      
      const response = accountUtil.accountTypeChecker(fixedDifference)
      assert.equal(response,'B')
    });
    it('single ledger account(1 month entry available)',()=>{
      let singleLedgerEntry = [
        {
          "monthNumber": 0,
          "account": {
            "balance": { "amount": 100 }
          }
        }
      ]
      const response = accountUtil.accountTypeChecker(singleLedgerEntry)
      assert.equal(response,'B')
    })
    it('two ledger account(2 month entry available)',()=>{
      let twoLedgerEntry = [
        {
          "monthNumber": 0,
          "account": {
            "balance": { "amount": 100 }
          }
        },
        {
          "monthNumber": 0,
          "account": {
            "balance": { "amount": 200 }
          }
        }
      ]
      const response = accountUtil.accountTypeChecker(twoLedgerEntry)
      assert.equal(response,'B')
    })
  });