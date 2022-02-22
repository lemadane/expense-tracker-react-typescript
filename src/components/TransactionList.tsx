import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
   const { transactions } = useContext(GlobalContext);
   return (
      <>
         <h3>History</h3>
         <ul className="list">
            {
               transactions
                  .map(
                     t => <TransactionItem key={t.id} transaction={t} />
                  )
            }
         </ul>
      </>
   )
}

export default TransactionList