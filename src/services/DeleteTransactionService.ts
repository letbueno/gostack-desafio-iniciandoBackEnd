import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transactionCheck = await transactionRepository.findOne(id);

    if (!transactionCheck) {
      throw new AppError('This transaction does not exist.');
    }
    await transactionRepository.remove(transactionCheck);
  }
}

export default DeleteTransactionService;
