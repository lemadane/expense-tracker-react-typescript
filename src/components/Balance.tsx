import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';
import getTotal from '../utilities/getTotal';
import moneyFormatter from '../utilities/moneyFormatter';

const Balance = () => {
   const { transactions } = useContext(GlobalContext);
   const total = getTotal(transactions);
   return (
      <>
         <h4>Your Balance</h4>
         <h1>{moneyFormatter(total)}</h1>
      </>
   )
}

export default Balance