function createAccount(pin, amount=0) {
    const invalid = "Invalid PIN."

    return {
        checkBalance(inputPin) {
            if (inputPin !== pin) return invalid;
            return `$${amount}`;
        },
        deposit(inputPin, newAmount) {
            if(inputPin !== pin) return invalid;
            amount += newAmount;
            return `Successfully deposited $${newAmount}. Current balance: $${amount}.`;
        },
        withdraw(inputPin, withdrawalAmount) {
            if (inputPin !== pin) return invalid;
            if (withdrawalAmount > amount) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            };
            amount -= withdrawalAmount;
            return `Successfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pin) return invalid;
            pin = newPin;
            return "PIN successfully changed!";
        }
    };
};

module.exports = { createAccount };
