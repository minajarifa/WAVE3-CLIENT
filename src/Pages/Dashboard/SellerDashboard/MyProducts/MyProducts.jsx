import axios from "axios";
import { useEffect, useState } from "react"
import useAuth from "../../../../hooks/useAuth";
import ActionCard from "../ActionProduucts/ActionCard";


export default function MyProducts() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  console.log(user)
  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get(`http://localhost:4000/my-products/${user.email}`)
          .then((res) => {
            setProducts(res.data)
          })
      } catch (error) {
        console.log(error.message)
      }
    }
    getData()
  }, [user.email])
  return (
    <div>
      {
        products.length === 0 ? <div className="flex items-center justify-center w-full h-full"><h1 className="text-3xl">No products found</h1></div> : <>
          <div className="grid min-h-screen grid-cols-3 gap-10 ml-10">{
            products.map((product) => (
              <ActionCard key={product._id} product={product} isDetails/>
            ))
          }</div>
        </>
      }

    </div>
  )
}
