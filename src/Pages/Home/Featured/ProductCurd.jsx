/* eslint-disable react/prop-types */
import axios from "axios";
import Swal from "sweetalert2";
import useUserData from "../../../hooks/useUserData";





const ProductCurd = ({ product, isInWishList, latestData, setLatestData }) => {
    const userDara = useUserData();
    const userEmail = userDara?.email;
    console.log("userDara", userDara);
    // handleAddWishList button 
    const handleAddWishList = async () => {
        if (userDara?.status === "pending") return Swal.fire("not permited");
        await axios.patch("http://localhost:4000/wishList/add", { userEmail: userEmail, productId: product._id }).then((res) => {
            if (res.data.modifiedCount === 1) {
                console.log(res.data)
                Swal.fire("Product added successfully!");
            }
        })
    }
    // handle remove WishList button 
    const handleRemoveWishList = async () => {
        await axios.delete("http://localhost:4000/wishList/remove", {
            data: { userEmail: userEmail, productId: product._id },
        }).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount === 1) {
                Swal.fire("Product removed successfully!");
                setLatestData((prev) => !prev);
            }
        });

    }
    return (
        <div>
            <div className="shadow-xl border-1 card card-compact bg-base-100 w-96">
                <figure>
                    <img className="object-cover w-full h-72"
                        src={`${product?.photo}`}
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

                    <div className=" card-actions">
                        {
                            isInWishList ? (
                                <button onClick={handleRemoveWishList} className="w-full text-white bg-red-600 btn">Remove from wish list</button>
                            ) : (
                                <>
                                    <button onClick={handleAddWishList} className="w-full btn btn-primary">Add to wish lish</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCurd;
