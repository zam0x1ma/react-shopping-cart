import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import ShoppingCartDetails from './ShoppingCartDetails'

const styles = {
  shoppingCart: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  }
}


class ShoppingCart extends Component {
  render() {
    const { shoppingCart, isCartVisible, showCart } = this.props
    const count = shoppingCart.reduce((acc, el) => acc + el.count, 0)

    return (
      <div>
        <span style={styles.bubble}>
          {count !== 0
            ? <BubbleAlert value={count} />
            : null}
        </span>
        <button onClick={showCart} style={styles.shoppingCart}>
          Cart
        </button>
        {isCartVisible ? <ShoppingCartDetails shoppingCart={shoppingCart} /> : null}
      </div>
    )
  }
}

export default ShoppingCart
