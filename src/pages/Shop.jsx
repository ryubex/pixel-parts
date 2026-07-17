import { Link } from "react-router";
import ProductCard from "../components/ProductCard"
import '../styles/Shop.css'

import { useEffect, useState } from "react";

const Shop = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products")
        }

        return res.json()
      })
      
      .then((data) => {
        setProducts(data)
      })

      .catch((err) => {
        setError(err.message)
      })

      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <div className="shop-container">
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </>
  )
}

export default Shop
