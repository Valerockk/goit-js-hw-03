/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    let id = 1;
    this.transactions.push({ id, amount, type });
    return this.transactions;
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, "deposit");
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Зняття такої суми не можливо, недостатньо коштів.");
    } else {
      this.balance -= amount;
      this.createTransaction(amount, "withdraw");
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (let transact of this.transactions) {
      if ((transact.id = id)) {
        return transact;
      } else {
        return "По такому ID транзакций не найдено";
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalAmount = 0;
    for (let transact of this.transactions) {
      if (transact.type === type) {
        totalAmount += transact.amount;
      }
    }
    return `К-ть коштiв по транзакцii ${type} = ${totalAmount}`;
  },
};

console.log(account.createTransaction(2000, "deposit"));
console.log(account.deposit(2000));
console.log(account.withdraw(1000));
console.log(account.getBalance());
console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionDetails(1));
