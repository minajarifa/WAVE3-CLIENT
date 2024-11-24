import { useEffect, useState } from "react";
import ActionCard from "./ActionCard";
import axios from "axios";
import useAuth from "../../../../hooks/useAuth";


export default function ActionProducts() {
  const [products, setProducts] = useState([]);
  
  const { user } = useAuth();
  // console.log(user)
  useEffect(() => {
   
    getData()
  }, [user.email])
  const getData = async () => {
    try {
      await axios.get(`https://wave3-server.vercel.app/my-products/${user.email}`)
        .then((res) => {
          setProducts(res.data)
         
        })
    } catch (error) {
      console.log(error.message)
    }
  }
  
  return (
    <div>
      {products.length}
    {
      products.length === 0 ? <div className="flex items-center justify-center w-full h-full"><h1 className="text-3xl">No products found</h1></div> : <>
        <div className="grid min-h-screen grid-cols-3 gap-10 ml-10">{
          products.map((product) => (
            <ActionCard key={product._id} product={product} getData={getData}/>
          ))
        }</div>
      </>
    }

  </div>
  )
}
