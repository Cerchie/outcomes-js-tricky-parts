function createAccount(pin, amount = 0) {
  
    let account = {
        checkBalance : function(enteredPin){
                if(amount && enteredPin === pin){
                    return `$${amount}`;
                }
                if (enteredPin !== pin){
                    return  'Invalid PIN.';
                }
                if (enteredPin === pin){
                    return '$0'
                }
        },
        deposit : function(enteredPin, depositAmount){
            if (enteredPin !== pin){
                return  'Invalid PIN.';
            }
           
            if (enteredPin === pin){
              
                amount += depositAmount;
                return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`
            }
        },
        withdraw : function(enteredPin, withdrawal){
            if (enteredPin !== pin){
                return  'Invalid PIN.';
            }
            if (withdrawal > amount){
                return `Withdrawal amount exceeds account balance. Transaction cancelled.`
            }
            amount = (amount - withdrawal);
            return `Succesfully withdrew $${withdrawal}. Current balance: $${amount}.`
        },
        changePin : function(oldPin, newPin){
            if (oldPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    }
return account;
}

module.exports = { createAccount };
// Write a function called createAccount which creates a bank account 
// given a PIN number and an initial deposit amount. The return value should 
// be an object with four methods on it:

// checkBalance: Given the correct PIN, return the current balance.
//  (If the PIN is invalid, return “Invalid PIN.”)
// deposit: Given the correct PIN and a deposit amount,
//  increment the account balance by the amount. (If the PIN is invalid, 
//     return “Invalid PIN.”)
// withdraw: Given the correct PIN and a withdrawal amount, 
// decrement the account balance by the amount. 
// You also shouldn’t be able to withdraw more than you have.
//  (If the PIN is invalid, return “Invalid PIN.”)
// changePin: Given the old PIN and a new PIN, change
//  the PIN number to the new PIN.
//   (If the old PIN is invalid, return “Invalid PIN.”)
// jest create-account.test.js
