const account = {
  _owner: "John",
  _balance: 100,
  address: { city: "London", zip: "EC1A" },

  get owner() { return this._owner; },
  set owner(v) { this._owner = String(v); },

  get balance() { return this._balance; },
  set balance(v) { this._balance = Number(v); },

  deposit(amount) {
    this._balance += Number(amount);
    return this._balance;
  },

  withdraw(amount) {
    const sum = Number(amount);
    if (sum > this._balance) return "Insufficient funds";
    this._balance -= sum;
    return this._balance;
  },

  summary() {
    return `${this._owner} | balance=${this._balance} | ${this.address.city} ${this.address.zip}`;
  }
};

console.log("=== OWNER TESTS ===");
console.log("initial owner:", account.owner);
account.owner = "Eugene";
console.log("after change:", account.owner);

console.log("\n=== BALANCE TESTS ===");
console.log("initial balance:", account.balance);
account.deposit(200);
console.log("after deposit 200:", account.balance);
account.withdraw(50);
console.log("after withdraw 50:", account.balance);
console.log("withdraw 5000:", account.withdraw(5000));

console.log("\n=== ADDRESS TESTS ===");
console.log("city:", account.address.city);
account.address.city = "Berlin";
console.log("new city:", account.address.city);

console.log("\n=== SUMMARY ===");
console.log(account.summary());
