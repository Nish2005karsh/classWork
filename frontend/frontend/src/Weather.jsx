// import { useState, useEffect } from 'react'
// import './Weather.css'
// const Weather = () => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   useEffect(() => {
//     fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data)
//         setLoading(false)
//       })
//       .catch(err => {
//         console.error('Error fetching products:', err)
//         setLoading(false)
//       })
//   }, [])
//   if (loading) {
//     return <div className="loading">Loading products...</div>
//   }

//   return (
//     <div className="fashion-container">
//       <h1>Weather</h1>
//       <div className="products-grid">
//         {products.hourly.time.map(product => (
//           <div key={product.id} className="product-card">
//             <h3>{product.time}</h3>
//             <p className="temperature">{product.temperature}°C</p>
//             <p className="humidity">{product.relative_humidity}%</p>
//             <p className="wind_speed">{product.wind_speed} km/h</p>
//           </div>
//         ))}
//       </div>  
//     </div>
//   )
// }
// export default Weather
