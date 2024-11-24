import { useLoaderData } from "react-router-dom"


export default function DetailsPageSeller() {
    const product = useLoaderData();
    // console.log(product)
    return (
        <div className="flex items-start justify-center">
            {/*  */}
            <div className="shadow-xl card lg:card-side bg-base-100">
                <figure>
                    <img
                        src={product?.photo}
                        alt="Album" />
                </figure>
                <div className="card-body">
                <div className="card-body">
                    <h2 className="text-xl font-bold">{product?.title}</h2>
                    <h2 className="text-lg font-semibold">Brand: {product?.brand}</h2>
                    <h2 className="">Category: {product?.category}</h2>
                    <h2 className="text-sm">Stock{product?.stock}</h2>
                    <h2 className="text-sm ">Price: $<span className="text-red-700">{product?.price}</span></h2>
                    <h2 className="">{product?.sellerEmail}</h2>
                    <p>{product?.description.length > 50 ? `${product?.description.slice(0, 50)}...` : product?.description}</p>

                   
                </div>
                    
                </div>
            </div>
          
        </div>
    )
}
