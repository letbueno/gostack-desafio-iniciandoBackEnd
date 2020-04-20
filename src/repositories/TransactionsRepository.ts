import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const getIncome = await this.find({
      where: {
        type: 'income',
      },
    });
    const income = getIncome.reduce((total, transaction) => {
      return total + transaction.value;
    }, 0);

    const getOutcome = await this.find({
      where: {
        type: 'outcome',
      },
    });

    const outcome = getOutcome.reduce((total, transaction) => {
      return total + transaction.value;
    }, 0);

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }
}

export default TransactionsRepository;
