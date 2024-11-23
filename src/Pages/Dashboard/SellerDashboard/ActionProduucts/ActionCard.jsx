/* eslint-disable react/prop-types */

import axios from "axios"

import { Link } from "react-router-dom"



export default function ActionCard({ product, isDetails ,getData}) {
    

    const handleDeleteSellerProduct =async(_id)=>{
        console.log('delete')
        try{
          const {data}= await axios.delete(`http://localhost:4000/delete/${_id}`);
          console.log(data)
          getData()
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <div className="shadow-xl card bg-base-100 w-96">
                <figure>
                    <img
                        src={product?.photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                <h2 className="text-xl font-bold">{product?.title}</h2>
                    <h2 className="text-lg font-semibold">Brand: {product?.brand}</h2>
                    <h2 className="">Category: {product?.category}</h2>
                    <h2 className="text-sm">Stock{product?.stock}</h2>
                    <h2 className="text-sm ">Price: $<span className="text-red-700">{product?.price}</span></h2>
                    <h2 className="">{product?.sellerEmail}</h2>
                    <p>{product?.description.length > 50 ? `${product?.description.slice(0, 50)}...` : product?.description}</p>

                    <div className="justify-end card-actions">
                        {
                            isDetails ? <> <Link to={`/dashboard/DetailsPageSeller/${product._id}`}  className="w-full btn btn-primary">Details Product</Link></> : <>
                                <Link to={`/dashboard/UpdatedPage/${product._id}`} className="btn btn-primary">Update Product</Link>
                                <button onClick={()=>handleDeleteSellerProduct(product._id)} className="btn btn-primary">Delete Product</button>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
