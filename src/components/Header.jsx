const Header = ({ totalPrice, remainingPrice }) => {
  return (
    <header>
      <h1>Xmas gift ideas</h1>
      <h2>
        Total budget: {totalPrice} € – Remaining to spend: {remainingPrice} €
      </h2>
    </header>
  )
}

export default Header
