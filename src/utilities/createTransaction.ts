const createTransaction = (text: string, amount: number) => {
   return {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount,
   }
}

export default createTransaction
