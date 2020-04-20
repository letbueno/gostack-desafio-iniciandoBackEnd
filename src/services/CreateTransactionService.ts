import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';
import Category from '../models/Category';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}
class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getRepository(Category);

    const balance = await transactionsRepository.getBalance();

    if (type === 'outcome' && value > balance.total) {
      throw new AppError('You cannot have a negative balance.');
    }
    let checkCategory = await categoryRepository.findOne({
      where: { title: category },
    });

    if (!checkCategory) {
      checkCategory = await categoryRepository.create({
        title: category,
      });
      await categoryRepository.save(checkCategory);
    }
    const transaction = await transactionsRepository.create({
      title,
      value,
      type,
      category: checkCategory,
    });
    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
