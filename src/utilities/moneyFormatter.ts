const moneyFormatter = (money: number) => {
   const left = 0
   const right = 1
   const empty = ''
   const decimals = money.toFixed(2).split('.')
   return '$'
      + decimals[left]
         .split(empty)
         .reverse()
         .reduce(
            (cum, cur, i) =>
               cur
               + (cur !== '-' && i && !(i % 3) ? ',' : empty)
               + cum,
            empty
         )
      + '.'
      + decimals[right]
}

export default moneyFormatter
