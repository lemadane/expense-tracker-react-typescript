import { Transaction } from '../types';
import getAmounts from './getAmounts';

const getTotalIncome = (transactions: Transaction[]) => {
   const amounts = getAmounts(transactions);
   const income = amounts.filter(a => a > 0).reduce((cum, cur) => (cum += cur), 0)
   return income
}

export default getTotalIncome
