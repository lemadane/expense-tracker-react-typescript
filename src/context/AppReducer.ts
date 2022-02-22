import {
   Action,
   AddTransaction,
   DeleteTransaction,
   State,
   Transaction,
} from '../types'

const AppReducer = (state: State, action: Action) => {
   switch (action.type) {
      case AddTransaction:
         return {
            transactions: [
               ...state.transactions,
               action.payload as Transaction,
            ],
         } as State
      case DeleteTransaction:
         return {
            ...state,
            transactions: state.transactions
            .filter(
               (t) => t.id !== (action.payload as number)
            ),
         } as State

      default:
         return state
   }
}

export default AppReducer
