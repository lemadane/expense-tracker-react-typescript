import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import getTotalExpense from '../utilities/getTotalExpense'
import getTotalIncome from '../utilities/getTotalIncome'
import moneyFormatter from '../utilities/moneyFormatter'

const IncomeExpense = () => {
   const { transactions } = useContext(GlobalContext)
   const income = getTotalIncome(transactions)
   const expense = getTotalExpense(transactions)
   return (
      <div className="inc-exp-container">
         <div>
            <h4>Income</h4>
            <p className="money plus">{moneyFormatter(income)}</p>
         </div>
         <div>
            <h4>Expense</h4>
            <p className="money minus">{moneyFormatter(expense)}</p>
         </div>
      </div>
   )
}

export default IncomeExpense