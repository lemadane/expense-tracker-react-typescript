import { Transaction } from '../types';
import getAmounts from './getAmounts';

const getTotalExpense = (transactions: Transaction[]) => {
   const amounts = getAmounts(transactions);
   const expense = amounts.filter(a => a < 0).reduce((cum, cur) => (cum += cur), 0)
   return expense
}

export default getTotalExpense
