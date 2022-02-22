import { createContext, ReactNode, useReducer } from 'react'
import { AddTransaction, DeleteTransaction, State, Transaction } from '../types'
import AppReducer from './AppReducer'

const initialState = {
   transactions: [] as Transaction[],
} as State

export const GlobalContext = createContext(initialState)

export type GlobalProviderProps = {
   children: ReactNode
}

const GlobalProvider = (props: GlobalProviderProps) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   const addTransaction = (t: Transaction) => {
      dispatch({
         type: AddTransaction,
         payload: t,
      })
   }

   const deleteTransaction = (id: number) => {
      dispatch({
         type: DeleteTransaction,
         payload: id,
      })
   }

   return (
      <GlobalContext.Provider
         value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction,
         }}
      >
         {props.children}
      </GlobalContext.Provider>
   )

}

export default GlobalProvider