import { Transaction } from '../types';

const getAmounts = (transactions: Transaction[]) =>  transactions.map(t => t.amount)

export default getAmounts