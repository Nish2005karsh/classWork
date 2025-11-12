import { useState, useEffect } from 'react'
import './Fashion.css'
const Fashion = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching products:', err)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <div className="loading">Loading products...</div>
  }

  return (
    <div className="fashion-container">
      <h1>Fashion Store</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>

          </div>
        ))}
      </div>
    </div>
  )
}
export default Fashion

