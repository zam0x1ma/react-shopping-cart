import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '/products/tomato.jpg' },
      { name: 'Peas', price: 2500, img: '/products/peas.jpg' },
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg' },
    ],
    shoppingCart: [],
    isCartVisible: false,
  }

  addToCart = (product) => {
    const { shoppingCart } = this.state
    if (shoppingCart.find(x => x.name === product.name)) {
      const newShoppingCart = shoppingCart.map(x => x.name === product.name
        ? ({
          ...x,
          count: x.count + 1
        })
        : x)
      return this.setState({ shoppingCart: newShoppingCart })
    }

    return this.setState({
      shoppingCart: this.state.shoppingCart.concat({
        ...product,
        count: 1,
      })
    })
  }

  showCart = () => {
    if (!this.state.shoppingCart.length) {
      return
    }
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state

    return (
      <div>
        <Navbar
          shoppingCart={this.state.shoppingCart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
