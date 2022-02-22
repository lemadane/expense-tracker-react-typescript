import { Transaction } from '../types';
import getAmounts from './getAmounts';

const getTotal = (transactions: Transaction[]) =>  {
   const amounts = getAmounts(transactions)
   const total = amounts.reduce((cum, cur) => (cum += cur), 0)
   return total
}

export default getTotal