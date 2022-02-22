import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import { Transaction } from '../types'
import moneyFormatter from '../utilities/moneyFormatter'


const TransactionItem =  (props: { transaction: Transaction }) => {
   const { deleteTransaction } = useContext(GlobalContext)
   const { id, text, amount } = props.transaction
   //const sign = amount < 0 ? '-' : '+'
   return (
      <li
         className={amount < 0 ? 'minus' : 'plus'}
      >
         {text}
         <span>
            {moneyFormatter(amount)}
         </span>
         <button
            onClick={() => deleteTransaction!(id)}
            className='delete-btn'
         >
            {'x'}
         </button>
      </li>
   )
}

export default TransactionItem