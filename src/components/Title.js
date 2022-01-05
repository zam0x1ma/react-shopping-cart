import { Component } from 'react'

const styles = {
  title: {
    marginBottom: '30px',
  }
}

class Title extends Component {
  render() {
    return (
      <h1 styles={styles.title}>Store</h1>
    )
  }
}

export default Title
