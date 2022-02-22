export const DeleteTransaction = Symbol()
export const AddTransaction = Symbol()

export type Transaction = {
   id: number
   text: string
   amount: number
}

export type Action = {
   type: typeof AddTransaction | typeof DeleteTransaction
   payload: Transaction | number
}

export type State = {
   transactions: Transaction[]
   addTransaction?: (t: Transaction) => void
   deleteTransaction?: (i: number) => void
}
